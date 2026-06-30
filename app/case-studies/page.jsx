'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import PageBanner from '../../components/PageBanner/PageBanner';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CTA from '../../components/CTA/CTA';
import { caseStudies } from '../../lib/data';
import './CaseStudies.css';

export default function CaseStudies() {
  return (
    <>
      <PageBanner
        title="Case Studies"
        subtitle="Deep dives into real campaigns that delivered transformational results for our clients."
        breadcrumbs={[{ label: 'Case Studies' }]}
      />

      <section className="section cs-page">
        <div className="container">
          <SectionTitle
            badge="Proven Results"
            title="Success Stories That"
            highlight="Speak for Themselves"
            description="These are not just campaigns — they are business transformations backed by data."
          />
          <div className="cs-list">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.id}
                className="cs-item"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="cs-image">
                  <img src={cs.image} alt={cs.title} loading="lazy" />
                  <div className="cs-image-overlay">
                    {cs.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
                <div className="cs-content">
                  <div className="cs-meta">
                    <span className="cs-client">{cs.client}</span>
                    <span className="cs-industry">{cs.industry}</span>
                    <span className="cs-duration">⏱ {cs.duration}</span>
                  </div>
                  <h2>{cs.title}</h2>
                  <div className="cs-sections">
                    <div className="cs-section">
                      <h4>🎯 The Challenge</h4>
                      <p>{cs.challenge}</p>
                    </div>
                    <div className="cs-section">
                      <h4>💡 Our Solution</h4>
                      <p>{cs.solution}</p>
                    </div>
                  </div>
                  <div className="cs-results">
                    {cs.results.map((r, j) => (
                      <div key={j} className="cs-result-item">
                        <div className="csr-values">
                          <span className="csr-before">{r.before}</span>
                          <span className="csr-arrow">→</span>
                          <strong className="csr-after">{r.after}</strong>
                        </div>
                        <div className="csr-change">{r.change}</div>
                        <div className="csr-metric">{r.metric}</div>
                      </div>
                    ))}
                  </div>
                  <div className="cs-testimonial">
                    <blockquote>"{cs.testimonial.text}"</blockquote>
                    <cite>— {cs.testimonial.author}</cite>
                  </div>
                  <Link href="/contact" className="cs-cta-btn">
                    Get Similar Results <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
