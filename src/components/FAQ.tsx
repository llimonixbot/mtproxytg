'use client';

import { useState } from 'react';
import { FAQItem } from '@/lib/types';
import { IconChevron } from './Icons';

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQ schema for Google rich snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="faq-list">
        {items.map((item, i) => (
          <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
            <div
              className="faq-q"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              role="button"
              tabIndex={0}
              aria-expanded={openIndex === i}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setOpenIndex(openIndex === i ? null : i);
                }
              }}
            >
              <span>{item.q}</span>
              <IconChevron />
            </div>
            <div className="faq-a" role="region" aria-hidden={openIndex !== i}>
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
