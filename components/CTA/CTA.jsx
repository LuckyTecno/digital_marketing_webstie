'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-bg-shapes">
        <div className="cta-shape cta-shape-1" />
        <div className="cta-shape cta-shape-2" />
      </div>
      <div className="container cta-inner">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="cta-badge">Limited Time Offer</span>
          <h2>Ready to <span>10X</span> Your Business Growth?</h2>
          <p>Join 480+ companies that trust NexaDigital to deliver measurable digital marketing results. Get your free strategy session and custom growth plan today.</p>
          <div className="cta-actions">
            <Link href="/contact" className="cta-btn-primary">
              Get Free Strategy Call <FiArrowRight />
            </Link>
            <a href="tel:+15551234567" className="cta-btn-secondary">
              <FiPhone /> Call Now
            </a>
          </div>
          <div className="cta-trust">
            <span>✓ No commitment required</span>
            <span>✓ Free 30-min consultation</span>
            <span>✓ Custom growth plan included</span>
          </div>
        </motion.div>
        <motion.div
          className="cta-visual"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="cta-card">
            <div className="cta-card-icon">🚀</div>
            <h3>Free Website Audit</h3>
            <p>Get a comprehensive analysis of your website's SEO, performance, and growth opportunities.</p>
            <div className="cta-card-stats">
              <div className="cta-stat"><strong>30</strong><span>Min Session</span></div>
              <div className="cta-stat"><strong>100%</strong><span>Free</span></div>
              <div className="cta-stat"><strong>Expert</strong><span>Advice</span></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
