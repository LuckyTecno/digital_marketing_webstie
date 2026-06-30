'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="nf-bg">
        <div className="nf-orb nf-orb-1" />
        <div className="nf-orb nf-orb-2" />
      </div>
      <motion.div
        className="nf-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="nf-number">404</div>
        <h1>Oops! Page Not Found</h1>
        <p>The page you are looking for might have been moved, renamed, or does not exist. Let us get you back on track.</p>
        <div className="nf-actions">
          <Link href="/" className="nf-btn-primary">
            <FiHome /> Go Home
          </Link>
          <Link href="/contact" className="nf-btn-secondary">
            <FiArrowLeft /> Contact Support
          </Link>
        </div>
        <div className="nf-links">
          <p>Or explore:</p>
          <div className="nf-quick-links">
            {[
              { href: '/services', label: 'Our Services' },
              { href: '/portfolio', label: 'Portfolio' },
              { href: '/blog', label: 'Blog' },
              { href: '/pricing', label: 'Pricing' },
            ].map(l => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
