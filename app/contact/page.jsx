'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheck } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import PageBanner from '../../components/PageBanner/PageBanner';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Contact.css';

const contactInfo = [
  { icon: <FiPhone />, label: 'Call Us', value: '+1 (555) 123-4567', sub: 'Mon–Fri, 9am–6pm EST', href: 'tel:+15551234567' },
  { icon: <FiMail />, label: 'Email Us', value: 'hello@nexadigital.com', sub: 'We reply within 24 hours', href: 'mailto:hello@nexadigital.com' },
  { icon: <FiMapPin />, label: 'Our Office', value: '123 Marketing Ave, Suite 500', sub: 'New York, NY 10001', href: '#' },
  { icon: <FiClock />, label: 'Office Hours', value: 'Monday – Friday', sub: '9:00 AM – 6:00 PM EST', href: '#' },
];

const servicesList = ['SEO Optimization', 'Google Ads / PPC', 'Social Media Marketing', 'Content Marketing', 'Email Marketing', 'Brand Strategy', 'Website Development', 'Marketing Automation', 'Analytics & Reporting', 'Other'];

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', budget: '', message: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Invalid email address';
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    try {
      await new Promise(r => setTimeout(r, 1500));
      setSubmitted(true);
      toast.success('Message sent! We will be in touch within 24 hours.');
      setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
    } catch {
      toast.error('Failed to send message. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageBanner
        title="Get In Touch"
        subtitle="Ready to grow your business? Let's talk. Schedule a free 30-minute strategy session with our experts today."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="section contact-page">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-form-wrap">
              <motion.div
                className="contact-form-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {submitted ? (
                  <div className="form-success">
                    <div className="fs-icon"><FiCheck /></div>
                    <h3>Message Sent Successfully!</h3>
                    <p>Thank you for reaching out. Our team will review your request and get back to you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="fs-btn">Send Another Message</button>
                  </div>
                ) : (
                  <>
                    <h2>Send Us a Message</h2>
                    <p>Fill out the form below and we will get back to you with a custom growth strategy.</p>
                    <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>
                      <div className="form-row">
                        <div className={`form-group ${errors.name ? 'error' : ''}`}>
                          <label htmlFor="name">Full Name *</label>
                          <input id="name" name="name" type="text" placeholder="John Smith" value={formData.name} onChange={handleChange} />
                          {errors.name && <span className="form-error">{errors.name}</span>}
                        </div>
                        <div className={`form-group ${errors.email ? 'error' : ''}`}>
                          <label htmlFor="email">Email Address *</label>
                          <input id="email" name="email" type="email" placeholder="john@company.com" value={formData.email} onChange={handleChange} />
                          {errors.email && <span className="form-error">{errors.email}</span>}
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="phone">Phone Number</label>
                          <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="company">Company Name</label>
                          <input id="company" name="company" type="text" placeholder="Your Company" value={formData.company} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="service">Service Interested In</label>
                          <select id="service" name="service" value={formData.service} onChange={handleChange}>
                            <option value="">Select a service...</option>
                            {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="budget">Monthly Budget</label>
                          <select id="budget" name="budget" value={formData.budget} onChange={handleChange}>
                            <option value="">Select budget range...</option>
                            <option value="under-1k">Under $1,000</option>
                            <option value="1k-3k">$1,000 – $3,000</option>
                            <option value="3k-5k">$3,000 – $5,000</option>
                            <option value="5k-10k">$5,000 – $10,000</option>
                            <option value="10k+">$10,000+</option>
                          </select>
                        </div>
                      </div>
                      <div className={`form-group ${errors.message ? 'error' : ''}`}>
                        <label htmlFor="message">Your Message *</label>
                        <textarea id="message" name="message" rows={5} placeholder="Tell us about your business, goals, and current challenges..." value={formData.message} onChange={handleChange} />
                        {errors.message && <span className="form-error">{errors.message}</span>}
                      </div>
                      <button type="submit" className="form-submit-btn" disabled={loading}>
                        {loading ? <><span className="submit-spinner" /> Sending...</> : <><FiSend /> Send Message</>}
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>

            <div className="contact-info">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3>Contact Information</h3>
                <p>Reach out through any of these channels and our team will respond promptly.</p>
                <div className="contact-cards">
                  {contactInfo.map((info, i) => (
                    <a key={i} href={info.href} className="contact-info-card">
                      <div className="ci-icon">{info.icon}</div>
                      <div>
                        <span className="ci-label">{info.label}</span>
                        <strong className="ci-value">{info.value}</strong>
                        <small className="ci-sub">{info.sub}</small>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="contact-social">
                  <h4>Follow Us</h4>
                  <div className="contact-social-links">
                    <a href="#" aria-label="Facebook"><FaFacebook /></a>
                    <a href="#" aria-label="Twitter"><FaTwitter /></a>
                    <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                    <a href="#" aria-label="Instagram"><FaInstagram /></a>
                  </div>
                </div>
                <div className="contact-free-offer">
                  <div className="cfo-icon">🎯</div>
                  <h4>Free Website Audit</h4>
                  <p>Get a free comprehensive audit of your website's SEO, performance, and growth opportunities. No strings attached.</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="contact-map">
            <div className="map-placeholder">
              <div className="map-pin">📍</div>
              <strong>NexaDigital Headquarters</strong>
              <span>123 Marketing Ave, Suite 500, New York, NY 10001</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
