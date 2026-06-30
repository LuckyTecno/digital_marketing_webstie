'use client';
import PageBanner from '../../components/PageBanner/PageBanner';
import '../privacy-policy/PrivacyPolicy.css';

export default function Terms() {
  return (
    <>
      <PageBanner title="Terms & Conditions" subtitle="Last updated: January 1, 2025" breadcrumbs={[{ label: 'Terms & Conditions' }]} />
      <section className="section legal-page">
        <div className="container legal-content">
          <div className="legal-toc">
            <h3>Table of Contents</h3>
            <ol>
              <li><a href="#acceptance">Acceptance of Terms</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#payment">Payment Terms</a></li>
              <li><a href="#ip">Intellectual Property</a></li>
              <li><a href="#liability">Limitation of Liability</a></li>
              <li><a href="#termination">Termination</a></li>
              <li><a href="#governing">Governing Law</a></li>
            </ol>
          </div>
          <div className="legal-body">
            <section id="acceptance">
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing and using the NexaDigital website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
            </section>
            <section id="services">
              <h2>2. Services</h2>
              <p>NexaDigital provides digital marketing services including SEO, paid advertising, social media marketing, content marketing, and related services. The specific services provided will be outlined in a separate Service Agreement between NexaDigital and the client.</p>
              <ul>
                <li>Services are provided on a month-to-month or project basis as agreed</li>
                <li>NexaDigital reserves the right to modify or discontinue services with notice</li>
                <li>Client is responsible for providing accurate information and access required for service delivery</li>
              </ul>
            </section>
            <section id="payment">
              <h2>3. Payment Terms</h2>
              <p>Payment terms are outlined in the individual Service Agreement. Generally:</p>
              <ul>
                <li>Monthly retainer fees are due on the 1st of each month</li>
                <li>Project fees follow the payment schedule outlined in the project proposal</li>
                <li>Late payments may incur a 1.5% monthly late fee</li>
                <li>All fees are non-refundable unless otherwise specified in writing</li>
              </ul>
            </section>
            <section id="ip">
              <h2>4. Intellectual Property</h2>
              <p>Upon full payment, clients receive ownership of custom content and creative assets created specifically for them. NexaDigital retains ownership of proprietary tools, methodologies, and frameworks used to deliver services.</p>
            </section>
            <section id="liability">
              <h2>5. Limitation of Liability</h2>
              <p>NexaDigital shall not be liable for any indirect, incidental, special, or consequential damages. Our total liability is limited to the fees paid in the three months preceding the claim. We do not guarantee specific results as digital marketing outcomes depend on many factors beyond our control.</p>
            </section>
            <section id="termination">
              <h2>6. Termination</h2>
              <p>Either party may terminate services with 30 days written notice. NexaDigital reserves the right to terminate immediately for non-payment or breach of terms. Upon termination, client will receive all deliverables completed to that point.</p>
            </section>
            <section id="governing">
              <h2>7. Governing Law</h2>
              <p>These Terms are governed by the laws of the State of New York. Any disputes shall be resolved through binding arbitration in New York, NY, except for matters where injunctive relief is sought.</p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
