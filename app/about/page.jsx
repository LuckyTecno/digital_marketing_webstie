'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiAward, FiUsers, FiTarget } from 'react-icons/fi';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import PageBanner from '../../components/PageBanner/PageBanner';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Stats from '../../components/Stats/Stats';
import CTA from '../../components/CTA/CTA';
import { team } from '../../lib/data';
import './About.css';

const milestones = [
  { year: '2012', title: 'Founded', desc: 'NexaDigital was born with a mission to help businesses grow online.' },
  { year: '2015', title: 'First 100 Clients', desc: 'Crossed the milestone of 100 happy clients across 15 industries.' },
  { year: '2018', title: 'Google Premier Partner', desc: 'Achieved Google Premier Partner status for excellence in Google Ads.' },
  { year: '2020', title: 'Global Expansion', desc: 'Expanded services to clients in 30+ countries worldwide.' },
  { year: '2022', title: 'Meta Business Partner', desc: 'Recognized as a Meta Business Partner for social media excellence.' },
  { year: '2025', title: '480+ Clients', desc: 'Serving 480+ businesses and generating $50M+ in client revenue.' },
];

const values = [
  { icon: <FiTarget />, title: 'Results-First', desc: 'We obsess over outcomes, not activities. Every campaign is measured against real business goals.' },
  { icon: <FiUsers />, title: 'True Partnership', desc: 'We treat every client like a long-term partner, not just a contract.' },
  { icon: <FiAward />, title: 'Excellence Always', desc: 'We hold ourselves to the highest standards in everything we do.' },
  { icon: <FiCheck />, title: 'Full Transparency', desc: 'No black boxes. You always know exactly what we are doing and why.' },
];

export default function About() {
  return (
    <>
      <PageBanner
        title="About NexaDigital"
        subtitle="We are a passionate team of digital marketing experts driven by results, guided by data, and fueled by our clients' success."
        breadcrumbs={[{ label: 'About' }]}
      />

      <section className="section about-mission">
        <div className="container about-mission-inner">
          <motion.div
            className="mission-visual"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700" alt="Team collaboration" loading="lazy" />
            <div className="mission-card">
              <strong>Our Mission</strong>
              <p>To empower businesses with the digital marketing strategies they need to compete, grow, and win in the modern marketplace.</p>
            </div>
          </motion.div>
          <div className="mission-content">
            <SectionTitle
              badge="Our Story"
              title="Built on Passion for"
              highlight="Digital Growth"
              align="left"
              description="Founded in 2012, NexaDigital started with a simple belief: every business deserves access to world-class digital marketing. Today, we are a team of 45+ specialists helping companies across 30+ countries drive meaningful growth online."
            />
            <div className="mission-points">
              {['Data-driven strategy with creative execution', 'Dedicated specialists for every marketing channel', 'Transparent reporting and real-time performance data', 'Flexible engagement models to fit any business size'].map((p, i) => (
                <motion.div
                  key={i}
                  className="mission-point"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <FiCheck className="mp-icon" /> <span>{p}</span>
                </motion.div>
              ))}
            </div>
            <Link href="/contact" className="about-cta-btn">
              Start Working Together <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <Stats />

      <section className="section about-values bg-light">
        <div className="container">
          <SectionTitle badge="Our Values" title="What We" highlight="Stand For" description="These are the core values that guide every decision we make and every campaign we run." />
          <div className="values-grid">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-timeline">
        <div className="container">
          <SectionTitle badge="Our Journey" title="From Startup to" highlight="Industry Leader" description="A decade of growth, learning, and delivering exceptional results for our clients." />
          <div className="timeline">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="timeline-content">
                  <span className="timeline-year">{m.year}</span>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
                <div className="timeline-dot" />
              </motion.div>
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </section>

      <section className="section about-team bg-light">
        <div className="container">
          <SectionTitle badge="Meet the Team" title="The People Behind" highlight="Your Success" description="Our diverse team of experts brings decades of combined experience to every client engagement." />
          <div className="team-grid">
            {team.slice(0, 8).map((member, i) => (
              <motion.div
                key={member.id}
                className="team-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="tc-img-wrap">
                  <img src={member.image} alt={member.name} loading="lazy" />
                  <div className="tc-social">
                    <a href={member.linkedin} aria-label="LinkedIn"><FaLinkedin /></a>
                    <a href={member.twitter} aria-label="Twitter"><FaTwitter /></a>
                  </div>
                </div>
                <div className="tc-body">
                  <h3>{member.name}</h3>
                  <span className="tc-role">{member.role}</span>
                  <div className="tc-expertise">
                    {member.expertise.map(e => <span key={e}>{e}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="section-cta" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/team" className="btn-view-all-link">View Full Team →</Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
