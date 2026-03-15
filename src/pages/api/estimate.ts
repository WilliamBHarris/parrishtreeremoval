import type { APIRoute } from 'astro';

type ResendSuccess = {
  id?: string;
};

type ResendError = {
  message?: string;
  name?: string;
  statusCode?: number;
};

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const json = (status: number, payload: Record<string, string | boolean>) =>
  new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store'
    }
  });

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const isValidPhone = (value: string) => value.replace(/\D/g, '').length >= 10;

export const POST: APIRoute = async ({ request }) => {
  const resendApiKey = import.meta.env.RESEND_API_KEY;
  const resendFromEmail = import.meta.env.RESEND_FROM_EMAIL;
  const resolvedRecipient = import.meta.env.ESTIMATE_TO_EMAIL || 'parrishtreeremoval@gmail.com';
  const path = new URL(request.url).pathname;

  if (import.meta.env.DEV) {
    console.info('Estimate submission received', {
      path,
      resolvedRecipient,
      sender: resendFromEmail || null,
      hasResendApiKey: Boolean(resendApiKey),
      hasEstimateToEmail: Boolean(import.meta.env.ESTIMATE_TO_EMAIL)
    });
  }

  try {
    const formData = await request.formData();

    const website = String(formData.get('website') ?? '').trim();
    if (website) {
      if (import.meta.env.DEV) {
        console.error('Estimate submission rejected by honeypot field', {
          path,
          resolvedRecipient,
          sender: resendFromEmail || null
        });
      }

      return json(400, {
        success: false,
        message: 'The submission could not be processed. Please refresh the page and try again.'
      });
    }

    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();
    const zip = String(formData.get('zip') ?? '').trim();
    const service = String(formData.get('service') ?? '').trim();
    const details = String(formData.get('details') ?? '').trim();

    if (!name || !email || !phone || !zip || !service || !details) {
      if (import.meta.env.DEV) {
        console.error('Estimate submission failed validation', {
          path,
          reason: 'missing_required_fields'
        });
      }

      return json(400, {
        success: false,
        message: 'Please complete every required field before submitting.'
      });
    }

    if (!isValidEmail(email)) {
      if (import.meta.env.DEV) {
        console.error('Estimate submission failed validation', {
          path,
          reason: 'invalid_email',
          email
        });
      }

      return json(400, {
        success: false,
        message: 'Please enter a valid email address.'
      });
    }

    if (!isValidPhone(phone)) {
      if (import.meta.env.DEV) {
        console.error('Estimate submission failed validation', {
          path,
          reason: 'invalid_phone',
          phone
        });
      }

      return json(400, {
        success: false,
        message: 'Please enter a valid phone number.'
      });
    }

    if (import.meta.env.DEV) {
      console.info('Estimate submission validation passed', {
        path,
        resolvedRecipient,
        sender: resendFromEmail || null,
        service
      });
    }

    if (!resendApiKey) {
      if (import.meta.env.DEV) {
        console.error('Estimate submission missing RESEND_API_KEY', { path });
      }

      return json(500, {
        success: false,
        message: 'RESEND_API_KEY is missing. Add it to your server environment before using the form.'
      });
    }

    if (!resendFromEmail) {
      if (import.meta.env.DEV) {
        console.error('Estimate submission missing RESEND_FROM_EMAIL', { path });
      }

      return json(500, {
        success: false,
        message: 'RESEND_FROM_EMAIL is missing. Add it to your server environment before using the form.'
      });
    }

    const payload = {
      from: resendFromEmail,
      to: [resolvedRecipient],
      reply_to: email,
      subject: `New tree service estimate request: ${service}`,
      html: `
        <h1>New Estimate Request</h1>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>ZIP Code:</strong> ${escapeHtml(zip)}</p>
        <p><strong>Service:</strong> ${escapeHtml(service)}</p>
        <p><strong>Details:</strong></p>
        <p>${escapeHtml(details).replaceAll('\n', '<br />')}</p>
      `
    };

    if (import.meta.env.DEV) {
      console.info('About to call Resend', {
        path,
        resolvedRecipient,
        sender: resendFromEmail,
        service
      });
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const rawResponseText = await resendResponse.text();
    let resendBody: ResendSuccess & ResendError = {};

    try {
      resendBody = rawResponseText ? JSON.parse(rawResponseText) : {};
    } catch {
      resendBody = {};
    }

    if (import.meta.env.DEV) {
      console.info('Resend response received', {
        path,
        resolvedRecipient,
        sender: resendFromEmail,
        status: resendResponse.status,
        ok: resendResponse.ok,
        body: resendBody,
        raw: rawResponseText
      });
    }

    if (!resendResponse.ok) {
      if (import.meta.env.DEV) {
        console.error('Resend returned an error', {
          path,
          resolvedRecipient,
          sender: resendFromEmail,
          status: resendResponse.status,
          body: resendBody,
          raw: rawResponseText
        });
      }

      return json(502, {
        success: false,
        message: resendBody.message || 'There was a problem sending your request. Please try again.'
      });
    }

    if (!resendBody.id) {
      if (import.meta.env.DEV) {
        console.error('Resend returned success without a message id', {
          path,
          resolvedRecipient,
          sender: resendFromEmail,
          body: resendBody,
          raw: rawResponseText
        });
      }

      return json(502, {
        success: false,
        message: 'The email service did not confirm delivery. Please try again.'
      });
    }

    if (import.meta.env.DEV) {
      console.info('Returning success response', {
        path,
        resolvedRecipient,
        sender: resendFromEmail,
        resendId: resendBody.id
      });
    }

    return json(200, {
      success: true,
      message: 'Thanks. Your estimate request was submitted successfully.'
    });
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('Estimate submission failed unexpectedly', {
        path,
        resolvedRecipient,
        sender: resendFromEmail || null,
        error
      });
    }

    return json(500, {
      success: false,
      message: 'Something went wrong while submitting your request. Please try again.'
    });
  }
};
