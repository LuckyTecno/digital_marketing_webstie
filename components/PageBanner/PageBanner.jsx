'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiChevronRight, FiHome } from 'react-icons/fi';
import './PageBanner.css';

const PageBanner = ({ title, subtitle, breadcrumbs = [], bg }) => {
  return (
    <section className="page-banner" style={bg ? { backgroundImage: `url(${bg})` } : {}}>
      <div className="page-banner-overlay" />
      <div className="page-banner-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>
      <div className="container page-banner-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.nav
          className="breadcrumb"
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/" className="breadcrumb-item">
            <FiHome size={14} /> Home
          </Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="breadcrumb-group">
              <FiChevronRight className="breadcrumb-sep" />
              {crumb.path ? (
                <Link href={crumb.path} className="breadcrumb-item">{crumb.label}</Link>
              ) : (
                <span className="breadcrumb-item active">{crumb.label}</span>
              )}
            </span>
          ))}
        </motion.nav>
      </div>
    </section>
  );
};

export default PageBanner;
