'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import PageBanner from '../../components/PageBanner/PageBanner';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CTA from '../../components/CTA/CTA';
import { services } from '../../lib/data';
import './Services.css';

const processSteps = [
  { step: '01', icon: '🔍', title: 'Discovery & Audit', desc: 'We dive deep into your business, competitors, and market to uncover growth opportunities and identify gaps.' },
  { step: '02', icon: '📋', title: 'Strategy Development', desc: 'We build a custom data-driven strategy tailored to your specific goals, audience, and budget.' },
  { step: '03', icon: '🚀', title: 'Execution & Launch', desc: 'Our team executes campaigns with precision, creativity, and relentless attention to detail.' },
  { step: '04', icon: '📈', title: 'Optimize & Scale', desc: 'We continuously analyze, test, and optimize to maximize ROI and scale what works best.' },
];

const categories = [
  { id: 'all', label: 'All Services' },
  { id: 'organic', label: 'Organic Growth' },
  { id: 'paid', label: 'Paid Advertising' },
  { id: 'social', label: 'Social Media' },
  { id: 'content', label: 'Content' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'development', label: 'Development' },
];

const iconMap = {
  FaSearch: '🔍', FaMapMarkerAlt: '📍', FaCode: '⚙️', FaPen: '✍️', FaEnvelope: '📧',
  FaShareAlt: '📱', FaFacebook: '📘', FaInstagram: '📸', FaLinkedin: '💼',
  FaGoogle: '🎯', FaYoutube: '▶️', FaStar: '⭐', FaBullseye: '🎯', FaChartLine: '📈',
  FaFunnelDollar: '💰', FaUserPlus: '👤', FaLaptopCode: '💻', FaFileCode: '📄',
  FaRobot: '🤖', FaChartBar: '📊',
};

export default function Services() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? services : services.filter(s => s.category === filter);

  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="20 comprehensive digital marketing services designed to grow your business, increase visibility, and drive measurable ROI."
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section className="section services-page">
        <div className="container">
          <SectionTitle
            badge="What We Offer"
            title="Comprehensive Digital"
            highlight="Marketing Solutions"
            description="From search engine optimization to social media management, we offer end-to-end digital marketing services."
          />

          <div className="services-filter">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`srv-filter-btn ${filter === cat.id ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="services-page-grid">
            {filtered.map((service, i) => (
              <motion.div
                key={service.id}
                className="service-page-card"
                style={{ '--svc-color': service.color }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                layout
              >
                <div className="spc-icon" style={{ background: `${service.color}15`, color: service.color }}>
                  {iconMap[service.icon] || '⚡'}
                </div>
                <div className="spc-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="spc-features">
                    {service.features.map((f, j) => (
                      <li key={j}><FiCheck /> {f}</li>
                    ))}
                  </ul>
                </div>
                <div className="spc-footer">
                  <span className="spc-price">{service.price}</span>
                  <Link href={`/services/${service.id}`} className="spc-link">
                    Learn More <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-process bg-light">
        <div className="container">
          <SectionTitle
            badge="How We Work"
            title="Our Proven"
            highlight="4-Step Process"
            description="We follow a systematic process that delivers consistent, measurable results for every client we work with."
          />
          <div className="process-grid">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                className="process-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="process-number">{step.step}</div>
                <div className="process-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {i < processSteps.length - 1 && <div className="process-arrow" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
