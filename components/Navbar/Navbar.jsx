'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiSearch, FiX, FiMenu, FiChevronDown, FiPhone } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const megaMenuServices = [
  { label: 'SEO Optimization', path: '/services/seo', icon: '🔍' },
  { label: 'Local SEO', path: '/services/local-seo', icon: '📍' },
  { label: 'Technical SEO', path: '/services/technical-seo', icon: '⚙️' },
  { label: 'Content Marketing', path: '/services/content-marketing', icon: '✍️' },
  { label: 'Email Marketing', path: '/services/email-marketing', icon: '📧' },
  { label: 'Social Media', path: '/services/social-media', icon: '📱' },
  { label: 'Facebook Ads', path: '/services/facebook-ads', icon: '📘' },
  { label: 'Google Ads', path: '/services/google-ads', icon: '🎯' },
  { label: 'LinkedIn Marketing', path: '/services/linkedin-marketing', icon: '💼' },
  { label: 'Brand Strategy', path: '/services/brand-strategy', icon: '🏆' },
  { label: 'Performance Marketing', path: '/services/performance-marketing', icon: '📈' },
  { label: 'Analytics & Reporting', path: '/services/analytics', icon: '📊' },
];

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services', hasMega: true },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const megaRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) setMegaOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isHome = pathname === '/';

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''} ${isHome && !scrolled ? 'transparent' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container navbar-inner">
          <Link href="/" className="navbar-logo">
            <div className="logo-icon">N</div>
            <span className="logo-text">Nexa<span>Digital</span></span>
          </Link>

          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.path} className={`nav-item ${link.hasMega ? 'has-mega' : ''}`} ref={link.hasMega ? megaRef : null}>
                {link.hasMega ? (
                  <button
                    className={`nav-link mega-trigger ${megaOpen ? 'active' : ''}`}
                    onClick={() => setMegaOpen(!megaOpen)}
                    aria-expanded={megaOpen}
                  >
                    {link.label} <FiChevronDown className={`chevron ${megaOpen ? 'rotated' : ''}`} />
                  </button>
                ) : (
                  <Link href={link.path} className={`nav-link ${pathname === link.path ? 'active' : ''}`}>
                    {link.label}
                  </Link>
                )}

                {link.hasMega && (
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        className="mega-menu"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="mega-menu-inner">
                          <div className="mega-header">
                            <h3>Our Services</h3>
                            <p>Comprehensive digital marketing solutions</p>
                          </div>
                          <div className="mega-grid">
                            {megaMenuServices.map((s) => (
                              <Link key={s.path} href={s.path} className="mega-item">
                                <span className="mega-icon">{s.icon}</span>
                                <span>{s.label}</span>
                              </Link>
                            ))}
                          </div>
                          <div className="mega-cta">
                            <Link href="/services" className="mega-all-link">View All Services →</Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <button className="action-btn" onClick={() => setSearchOpen(true)} aria-label="Search">
              <FiSearch />
            </button>
            <button className="action-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
            <Link href="/contact" className="navbar-cta">
              <FiPhone size={14} /> Get Free Audit
            </Link>
            <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <FiMenu />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="search-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              className="search-box"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search services, blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button onClick={() => setSearchOpen(false)} aria-label="Close search">
                <FiX />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="drawer-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="drawer-header">
                <Link href="/" className="navbar-logo" onClick={() => setMobileOpen(false)}>
                  <div className="logo-icon">N</div>
                  <span className="logo-text">Nexa<span>Digital</span></span>
                </Link>
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu"><FiX /></button>
              </div>
              <ul className="drawer-links">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`drawer-link ${pathname === link.path ? 'active' : ''}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="drawer-footer">
                <Link href="/contact" className="btn btn-primary w-full" onClick={() => setMobileOpen(false)}>Get Free Audit</Link>
                <div className="drawer-actions">
                  <button onClick={toggleTheme}>{theme === 'dark' ? <FiSun /> : <FiMoon />} {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
