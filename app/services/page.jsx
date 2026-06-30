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

      <CTA />
    </>
  );
}
