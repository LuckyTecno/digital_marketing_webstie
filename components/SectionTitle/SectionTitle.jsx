'use client';
import { motion } from 'framer-motion';
import './SectionTitle.css';

const SectionTitle = ({ badge, title, highlight, description, align = 'center', light = false }) => {
  return (
    <div className={`section-title ${align} ${light ? 'light' : ''}`}>
      {badge && (
        <motion.div
          className="section-badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-dot" />
          {badge}
        </motion.div>
      )}
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}{' '}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </motion.h2>
      {description && (
        <motion.p
          className="section-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
