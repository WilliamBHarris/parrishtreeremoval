interface FaqItem {
  question: string;
  answer: string;
}

export function createFaqSchema(items: FaqItem[]) {
  const entities = items
    .filter((item) => item.question.trim().length > 0 && item.answer.trim().length > 0)
    .map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    }));

  if (entities.length === 0) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entities,
  };
}
