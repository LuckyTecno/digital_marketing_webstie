'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay, FiCheck } from 'react-icons/fi';
import AnimatedCounter from '../components/AnimatedCounter/AnimatedCounter';
import './Hero.css';

const typingWords = ['SEO Results', 'Brand Growth', 'Lead Generation', 'Revenue Growth', 'Digital Success'];

const Hero = ({ onVideoOpen }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typingWords[wordIndex];
    const speed = isDeleting ? 60 : 100;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.substring(0, displayed.length + 1));
        if (displayed.length === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayed(current.substring(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % typingWords.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [displayed, isDeleting, wordIndex]);

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient" />
        <div className="hero-grid" />
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`hero-orb orb-${i + 1}`} />
        ))}
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-pulse" />
            🏆 Award-Winning Digital Marketing Agency
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We Drive<br />
            <span className="hero-typing">
              {displayed}<span className="cursor-blink">|</span>
            </span><br />
            <span className="hero-title-sub">For Your Business</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform your digital presence with data-driven strategies that deliver measurable ROI.
            We have helped 480+ businesses generate $50M+ in revenue through expert digital marketing.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/contact" className="hero-btn-primary">
              Get Free Strategy Call <FiArrowRight />
            </Link>
            <button className="hero-btn-video" onClick={onVideoOpen}>
              <div className="play-btn">
                <FiPlay />
              </div>
              Watch Our Story
            </button>
          </motion.div>

          <motion.div
            className="hero-trust"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {['No long-term contracts', '100% transparent reporting', 'Dedicated account manager'].map((t, i) => (
              <div key={i} className="trust-item">
                <FiCheck /> <span>{t}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-dashboard">
            <div className="dashboard-header">
              <div className="dashboard-dots">
                <span /><span /><span />
              </div>
              <span className="dashboard-title">Campaign Performance</span>
            </div>
            <div className="dashboard-chart">
              {[40, 65, 45, 80, 55, 90, 75, 95, 70, 100, 85, 110].map((h, i) => (
                <motion.div
                  key={i}
                  className="chart-bar"
                  style={{ '--h': `${h}%` }}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.05 }}
                />
              ))}
            </div>
            <div className="dashboard-stats">
              <div className="d-stat">
                <strong><AnimatedCounter end={247} duration={2000} separator={false} />%</strong>
                <span>Traffic Growth</span>
              </div>
              <div className="d-stat">
                <strong><AnimatedCounter end={4.8} duration={2000} decimals={1} separator={false} />x</strong>
                <span>ROAS</span>
              </div>
              <div className="d-stat">
                <strong><AnimatedCounter end={189} duration={2000} separator={false} />%</strong>
                <span>Lead Growth</span>
              </div>
            </div>
          </div>

          <motion.div
            className="hero-float-card card-1"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="fc-icon">🎯</div>
            <div>
              <strong>Page 1 Ranking</strong>
              <span>94 Keywords</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-float-card card-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <div className="fc-icon">💰</div>
            <div>
              <strong>Revenue Generated</strong>
              <span>$2.4M this month</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-float-card card-3"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          >
            <div className="fc-stars">⭐⭐⭐⭐⭐</div>
            <span>4.9/5 from 200+ reviews</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-partners">
        <div className="container">
          <span>Trusted by brands worldwide</span>
          <div className="partners-logos">
            {['Google Partner', 'Meta Business', 'HubSpot', 'Shopify Plus', 'Semrush'].map((p) => (
              <div key={p} className="partner-logo">{p}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
