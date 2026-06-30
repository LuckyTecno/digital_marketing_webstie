'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { FiSend, FiMail } from 'react-icons/fi';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    toast.success('You have been subscribed! Check your inbox for a welcome email.');
    setEmail('');
    setLoading(false);
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <motion.div
          className="newsletter-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="newsletter-icon"><FiMail /></div>
          <div className="newsletter-text">
            <h2>Stay Ahead of the Digital Curve</h2>
            <p>Get weekly marketing insights, growth tips, and exclusive strategies delivered to your inbox. Join 12,000+ marketing professionals.</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="newsletter-input-wrap">
              <FiMail className="input-icon" />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
            </div>
            <button type="submit" disabled={loading} className="newsletter-btn">
              {loading ? <span className="nl-spinner" /> : <><FiSend /> Subscribe</>}
            </button>
          </form>
          <p className="newsletter-disclaimer">No spam. Unsubscribe anytime. 100% free.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
