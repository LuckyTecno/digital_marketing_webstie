'use client';
import PageBanner from '../../components/PageBanner/PageBanner';
import FAQAccordion from '../../components/FAQ/FAQAccordion';
import CTA from '../../components/CTA/CTA';
import './FAQPage.css';

export default function FAQPage() {
  return (
    <>
      <PageBanner
        title="Frequently Asked Questions"
        subtitle="Find answers to the most common questions about our services, pricing, and how we work."
        breadcrumbs={[{ label: 'FAQ' }]}
      />
      <FAQAccordion />
      <CTA />
    </>
  );
}
