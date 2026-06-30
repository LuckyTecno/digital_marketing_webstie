'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiArrowRight, FiExternalLink } from 'react-icons/fi';
import PageBanner from '../../components/PageBanner/PageBanner';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CTA from '../../components/CTA/CTA';
import { portfolio } from '../../lib/data';
import './Portfolio.css';

const categories = ['All', 'SEO', 'PPC', 'Social Media', 'E-Commerce', 'Branding', 'Content', 'Automation', 'LinkedIn'];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const filtered = filter === 'All' ? portfolio : portfolio.filter(p => p.category === filter);

  return (
    <>
      <PageBanner
        title="Our Portfolio"
        subtitle="Real campaigns. Real results. Explore our track record of delivering measurable growth for businesses across industries."
        breadcrumbs={[{ label: 'Portfolio' }]}
      />

      <section className="section portfolio-page">
        <div className="container">
          <SectionTitle
            badge="Our Work"
            title="Success Stories"
            highlight="That Inspire"
            description="Each project represents a unique challenge solved with creativity, data, and expertise."
          />
          <div className="pf-filters">
            {categories.map(cat => (
              <button key={cat} className={`pf-filter ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)}>
                {cat}
              </button>
            ))}
          </div>
          <motion.div className="pf-grid" layout>
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  className="pf-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  onClick={() => setSelected(item)}
                  layout
                >
                  <div className="pf-img-wrap">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="pf-overlay">
                      <div className="pf-overlay-content">
                        <div className="pf-tags">
                          {item.tags.map(t => <span key={t}>{t}</span>)}
                        </div>
                        <h3>{item.title}</h3>
                        <p className="pf-result">📈 {item.result}</p>
                        <button className="pf-view-btn">View Details</button>
                      </div>
                    </div>
                  </div>
                  <div className="pf-info">
                    <h3>{item.title}</h3>
                    <span>{item.client} · {item.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div className="pf-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div
              className="pf-modal-inner"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="pf-modal-close" onClick={() => setSelected(null)}><FiX /></button>
              <img src={selected.image} alt={selected.title} />
              <div className="pf-modal-content">
                <div className="pf-tags mb-4">
                  {selected.tags.map(t => <span key={t}>{t}</span>)}
                </div>
                <h2>{selected.title}</h2>
                <p className="pf-client">Client: <strong>{selected.client}</strong></p>
                <div className="pf-modal-result">
                  <span>📈</span>
                  <strong>Result: {selected.result}</strong>
                </div>
                <p>This campaign delivered exceptional results through a combination of strategic planning, creative execution, and data-driven optimization. Our team worked closely with {selected.client} to achieve their growth objectives.</p>
                <div className="pf-modal-actions">
                  <a href="#" className="pf-btn-live"><FiExternalLink /> Live Preview</a>
                  <Link href="/contact" className="pf-btn-discuss">Discuss Your Project <FiArrowRight /></Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTA />
    </>
  );
}
