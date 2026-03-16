<?php
header('Content-Type: application/json');
header('Cache-Control: no-store');

function respond($status, $payload) {
    http_response_code($status);
    echo json_encode($payload);
    exit;
}

function escape_html($value) {
    return htmlspecialchars($value ?? '', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function is_valid_email($value) {
    return filter_var($value, FILTER_VALIDATE_EMAIL) !== false;
}

function is_valid_phone($value) {
    $digits = preg_replace('/\D+/', '', $value ?? '');
    return strlen($digits) >= 10;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, [
        'success' => false,
        'message' => 'Method not allowed.'
    ]);
}

$website = trim($_POST['website'] ?? '');
if ($website !== '') {
    respond(400, [
        'success' => false,
        'message' => 'The submission could not be processed. Please refresh the page and try again.'
    ]);
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$zip = trim($_POST['zip'] ?? '');
$service = trim($_POST['service'] ?? '');
$details = trim($_POST['details'] ?? '');

if ($name === '' || $email === '' || $phone === '' || $zip === '' || $service === '' || $details === '') {
    respond(400, [
        'success' => false,
        'message' => 'Please complete every required field before submitting.'
    ]);
}

if (!is_valid_email($email)) {
    respond(400, [
        'success' => false,
        'message' => 'Please enter a valid email address.'
    ]);
}

if (!is_valid_phone($phone)) {
    respond(400, [
        'success' => false,
        'message' => 'Please enter a valid phone number.'
    ]);
}

/*
|--------------------------------------------------------------------------
| CONFIGURE THESE 3 VALUES
|--------------------------------------------------------------------------
|
| Replace these with your real values before uploading.
|
*/
$resendApiKey = 're_2q7im6LA_JF4Yk3iM7TbRkdUYxzo957ho';
$resendFromEmail = 'Parrish Tree Removal <estimates@mail.parrishtreeremoval.com>';
$estimateToEmail = 'parrishtreeremoval@gmail.com';

if ($resendApiKey === 'REPLACE_WITH_YOUR_RESEND_API_KEY') {
    respond(500, [
        'success' => false,
        'message' => 'The form is not configured yet. Add your Resend API key to estimate.php.'
    ]);
}

$payload = [
    'from' => $resendFromEmail,
    'to' => [$estimateToEmail],
    'reply_to' => $email,
    'subject' => 'New tree service estimate request: ' . $service,
    'html' =>
        '<h1>New Estimate Request</h1>' .
        '<p><strong>Name:</strong> ' . escape_html($name) . '</p>' .
        '<p><strong>Email:</strong> ' . escape_html($email) . '</p>' .
        '<p><strong>Phone:</strong> ' . escape_html($phone) . '</p>' .
        '<p><strong>ZIP Code:</strong> ' . escape_html($zip) . '</p>' .
        '<p><strong>Service:</strong> ' . escape_html($service) . '</p>' .
        '<p><strong>Details:</strong></p>' .
        '<p>' . nl2br(escape_html($details)) . '</p>'
];

$ch = curl_init('https://api.resend.com/emails');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $resendApiKey,
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));

$responseBody = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);

curl_close($ch);

if ($responseBody === false || $curlError) {
    respond(500, [
        'success' => false,
        'message' => 'Something went wrong while sending your request. Please try again.'
    ]);
}

$decoded = json_decode($responseBody, true);

if ($httpCode < 200 || $httpCode >= 300) {
    respond(502, [
        'success' => false,
        'message' => $decoded['message'] ?? 'There was a problem sending your request. Please try again.'
    ]);
}

if (empty($decoded['id'])) {
    respond(502, [
        'success' => false,
        'message' => 'The email service did not confirm delivery. Please try again.'
    ]);
}

respond(200, [
    'success' => true,
    'message' => 'Thanks. Your estimate request was submitted successfully.'
]);