'use client';
import { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import PageBanner from '../../../components/PageBanner/PageBanner';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CTA from '../../../components/CTA/CTA';
import FAQAccordion from '../../../components/FAQ/FAQAccordion';
import { services, testimonials } from '../../../lib/data';
import TestimonialCard from '../../../components/TestimonialCard/TestimonialCard';
import './ServiceDetails.css';

const serviceProcess = [
  { step: '01', title: 'Initial Consultation', desc: 'We start with a deep dive into your business, goals, and current marketing efforts.' },
  { step: '02', title: 'Strategy Development', desc: 'Our team develops a custom strategy tailored to your specific objectives and budget.' },
  { step: '03', title: 'Campaign Launch', desc: 'We execute the strategy with precision, creativity, and attention to every detail.' },
  { step: '04', title: 'Optimize & Report', desc: 'Continuous optimization and transparent reporting to maximize your ROI.' },
];

export default function ServiceDetails({ params }) {
  const { id } = use(params);
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service not found</h2>
        <Link href="/services">Back to Services</Link>
      </div>
    );
  }

  const relatedServices = services.filter(s => s.category === service.category && s.id !== service.id).slice(0, 3);

  return (
    <>
      <PageBanner
        title={service.title}
        subtitle={service.description}
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: service.title },
        ]}
      />

      <section className="section sd-overview">
        <div className="container sd-overview-inner">
          <div className="sd-content">
            <SectionTitle
              badge={`${service.category} Service`}
              title={`Expert ${service.title}`}
              highlight="Solutions"
              align="left"
              description={`Our ${service.title} service is designed to deliver measurable results for your business. We combine industry-leading tools, proven methodologies, and deep expertise to drive real growth.`}
            />
            <div className="sd-features">
              {service.features.map((f, i) => (
                <motion.div
                  key={i}
                  className="sd-feature"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="sdf-check" style={{ background: `${service.color}15`, color: service.color }}>
                    <FiCheck />
                  </div>
                  <span>{f}</span>
                </motion.div>
              ))}
            </div>
            <div className="sd-price-box">
              <span>Starting at</span>
              <strong>{service.price}</strong>
              <Link href="/contact" className="sd-cta-btn">Get Started <FiArrowRight /></Link>
            </div>
          </div>
          <div className="sd-visual">
            <div className="sd-results-card">
              <h3>What to Expect</h3>
              <div className="sd-metrics">
                {[
                  { label: 'Average Traffic Increase', value: '247%', icon: '📈' },
                  { label: 'Average Lead Growth', value: '189%', icon: '🎯' },
                  { label: 'Average ROI', value: '4.8x', icon: '💰' },
                  { label: 'Client Satisfaction', value: '98%', icon: '⭐' },
                ].map((m, i) => (
                  <div key={i} className="sd-metric">
                    <span className="metric-icon">{m.icon}</span>
                    <strong className="metric-value">{m.value}</strong>
                    <span className="metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="sd-trust">
              <div className="sd-trust-item">✓ No long-term contracts required</div>
              <div className="sd-trust-item">✓ 30-day performance guarantee</div>
              <div className="sd-trust-item">✓ Dedicated account manager</div>
              <div className="sd-trust-item">✓ Weekly progress reports</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sd-process bg-light">
        <div className="container">
          <SectionTitle badge="Our Approach" title="How We Deliver" highlight="Results" description="Our proven methodology ensures every campaign is built for success from day one." />
          <div className="sd-process-grid">
            {serviceProcess.map((s, i) => (
              <motion.div
                key={i}
                className="sd-process-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="sdpc-step">{s.step}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sd-testimonials">
        <div className="container">
          <SectionTitle badge="Success Stories" title="Real Results from" highlight="Real Clients" />
          <div className="sd-testimonials-grid">
            {testimonials.slice(0, 3).map(t => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="section sd-related bg-light">
          <div className="container">
            <SectionTitle badge="Related Services" title="You Might Also" highlight="Need" />
            <div className="sd-related-grid">
              {relatedServices.map((s, i) => (
                <motion.div key={s.id} className="sd-related-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <h3>{s.title}</h3>
                  <p>{s.description.substring(0, 100)}...</p>
                  <Link href={`/services/${s.id}`} className="sd-related-link">Explore <FiArrowRight /></Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQAccordion limit={5} />
      <CTA />
    </>
  );
}
