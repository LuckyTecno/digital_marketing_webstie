'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiClock, FiBriefcase, FiArrowRight, FiX } from 'react-icons/fi';
import { toast } from 'react-toastify';
import PageBanner from '../../components/PageBanner/PageBanner';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Careers.css';

const jobs = [
  { id: 1, title: 'Senior SEO Specialist', dept: 'SEO', location: 'New York, NY (Hybrid)', type: 'Full-time', exp: '4+ years', desc: 'Lead SEO campaigns for our top-tier clients, conducting audits, building link strategies, and driving measurable organic growth.' },
  { id: 2, title: 'Google Ads Manager', dept: 'PPC', location: 'Remote', type: 'Full-time', exp: '3+ years', desc: 'Manage and optimize Google Ads campaigns with $100K+ monthly budgets, delivering strong ROAS for diverse clients.' },
  { id: 3, title: 'Social Media Strategist', dept: 'Social Media', location: 'New York, NY (Hybrid)', type: 'Full-time', exp: '2+ years', desc: 'Create and execute social media strategies that build audiences and drive measurable business results.' },
  { id: 4, title: 'Content Marketing Manager', dept: 'Content', location: 'Remote', type: 'Full-time', exp: '3+ years', desc: 'Develop and execute content strategies that attract, engage, and convert target audiences across multiple channels.' },
  { id: 5, title: 'Email Marketing Specialist', dept: 'Email', location: 'Remote', type: 'Full-time', exp: '2+ years', desc: 'Design, build, and optimize email marketing campaigns and automation sequences that drive revenue.' },
  { id: 6, title: 'Junior Digital Marketing Analyst', dept: 'Analytics', location: 'New York, NY', type: 'Full-time', exp: '0-2 years', desc: 'Support the analytics team with campaign reporting, data analysis, and performance insights.' },
];

const benefits = [
  { icon: '💰', title: 'Competitive Salary', desc: 'Market-leading compensation with performance bonuses' },
  { icon: '🏠', title: 'Remote Flexibility', desc: 'Hybrid and fully remote options for most roles' },
  { icon: '📚', title: 'Learning Budget', desc: '$2,000 annual budget for courses, conferences, and certifications' },
  { icon: '🏥', title: 'Health Benefits', desc: 'Full health, dental, and vision insurance coverage' },
  { icon: '🌴', title: 'Unlimited PTO', desc: 'Flexible time off policy that trusts you to manage your time' },
  { icon: '📈', title: 'Career Growth', desc: 'Clear growth paths with mentorship from industry leaders' },
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applyJob, setApplyJob] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', linkedin: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleApply = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    toast.success(`Application submitted for ${applyJob.title}! We will be in touch within 3 business days.`);
    setApplyJob(null);
    setForm({ name: '', email: '', linkedin: '', message: '' });
    setLoading(false);
  };

  return (
    <>
      <PageBanner
        title="Join Our Team"
        subtitle="Build your career with a team that is passionate about digital marketing and obsessed with results."
        breadcrumbs={[{ label: 'Careers' }]}
      />

      <section className="section careers-why">
        <div className="container">
          <SectionTitle badge="Our Culture" title="Why People Love" highlight="Working Here" description="We are a fast-growing agency with big ambitions and an amazing team culture." />
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <motion.div key={i} className="benefit-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="bc-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section careers-jobs bg-light">
        <div className="container">
          <SectionTitle badge="Open Positions" title="Current" highlight="Job Openings" description="We are hiring across multiple disciplines. Check out our current openings." />
          <div className="jobs-list">
            {jobs.map((job, i) => (
              <motion.div key={job.id} className="job-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <div className="jc-header">
                  <div>
                    <span className="jc-dept">{job.dept}</span>
                    <h3>{job.title}</h3>
                    <div className="jc-meta">
                      <span><FiMapPin /> {job.location}</span>
                      <span><FiClock /> {job.type}</span>
                      <span><FiBriefcase /> {job.exp}</span>
                    </div>
                  </div>
                  <div className="jc-actions">
                    <button className="jc-details-btn" onClick={() => setSelectedJob(job === selectedJob ? null : job)}>
                      {selectedJob?.id === job.id ? 'Hide Details' : 'View Details'}
                    </button>
                    <button className="jc-apply-btn" onClick={() => setApplyJob(job)}>
                      Apply Now <FiArrowRight />
                    </button>
                  </div>
                </div>
                {selectedJob?.id === job.id && (
                  <motion.div className="jc-details" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}>
                    <p>{job.desc}</p>
                    <button className="jc-apply-btn-full" onClick={() => setApplyJob(job)}>Apply for This Position <FiArrowRight /></button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {applyJob && (
        <div className="apply-modal" onClick={() => setApplyJob(null)}>
          <motion.div className="apply-modal-inner" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} onClick={e => e.stopPropagation()}>
            <button className="apply-close" onClick={() => setApplyJob(null)}><FiX /></button>
            <h3>Apply for: {applyJob.title}</h3>
            <form onSubmit={handleApply} className="apply-form">
              <div className="af-group">
                <label>Full Name *</label>
                <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" />
              </div>
              <div className="af-group">
                <label>Email Address *</label>
                <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="your@email.com" />
              </div>
              <div className="af-group">
                <label>LinkedIn Profile</label>
                <input type="url" value={form.linkedin} onChange={e => setForm({...form, linkedin: e.target.value})} placeholder="https://linkedin.com/in/..." />
              </div>
              <div className="af-group">
                <label>Why do you want to join NexaDigital? *</label>
                <textarea required rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell us about yourself and why you are a great fit..." />
              </div>
              <button type="submit" className="af-submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
}
