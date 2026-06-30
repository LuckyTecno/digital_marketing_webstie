'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import SectionTitle from '../SectionTitle/SectionTitle';
import { faqs } from '../../lib/data';
import './FAQAccordion.css';

const FAQAccordion = ({ limit, title = 'Frequently Asked Questions', subtitle = 'Find answers to the most common questions about our services and how we work.' }) => {
  const [open, setOpen] = useState(null);
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="faq-section section">
      <div className="container">
        <SectionTitle
          badge="FAQ"
          title={title}
          description={subtitle}
        />
        <div className="faq-list">
          {items.map((faq, i) => (
            <motion.div
              key={i}
              className={`faq-item ${open === i ? 'open' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span className="faq-icon">
                  {open === i ? <FiMinus /> : <FiPlus />}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="faq-answer-inner">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
