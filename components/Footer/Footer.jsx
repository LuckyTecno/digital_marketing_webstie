'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const services = [
  { label: 'SEO Optimization', path: '/services/seo' },
  { label: 'Google Ads', path: '/services/google-ads' },
  { label: 'Social Media Marketing', path: '/services/social-media' },
  { label: 'Content Marketing', path: '/services/content-marketing' },
  { label: 'Email Marketing', path: '/services/email-marketing' },
  { label: 'Brand Strategy', path: '/services/brand-strategy' },
];

const quickLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Blog', path: '/blog' },
  { label: 'Careers', path: '/careers' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <div className="footer-logo-icon">N</div>
              <span>Nexa<strong>Digital</strong></span>
            </Link>
            <p>We are a premium digital marketing agency helping businesses grow through data-driven strategies, creative excellence, and measurable results.</p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook" className="social-link"><FaFacebook /></a>
              <a href="#" aria-label="Twitter" className="social-link"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn" className="social-link"><FaLinkedin /></a>
              <a href="#" aria-label="Instagram" className="social-link"><FaInstagram /></a>
              <a href="#" aria-label="YouTube" className="social-link"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.path}>
                  <Link href={s.path}><FiArrowRight className="link-icon" /> {s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {quickLinks.map((l) => (
                <li key={l.path}>
                  <Link href={l.path}><FiArrowRight className="link-icon" /> {l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-contact">
              <a href="tel:+15551234567" className="contact-item">
                <div className="contact-icon"><FiPhone /></div>
                <div>
                  <span>Call Us</span>
                  <strong>+1 (555) 123-4567</strong>
                </div>
              </a>
              <a href="mailto:hello@nexadigital.com" className="contact-item">
                <div className="contact-icon"><FiMail /></div>
                <div>
                  <span>Email Us</span>
                  <strong>hello@nexadigital.com</strong>
                </div>
              </a>
              <div className="contact-item">
                <div className="contact-icon"><FiMapPin /></div>
                <div>
                  <span>Our Office</span>
                  <strong>123 Marketing Ave, New York, NY 10001</strong>
                </div>
              </div>
            </div>
            <div className="footer-badges">
              <div className="partner-badge">Google Partner</div>
              <div className="partner-badge">Meta Partner</div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} NexaDigital. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
