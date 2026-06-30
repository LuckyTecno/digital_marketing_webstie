'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import PageBanner from '../../components/PageBanner/PageBanner';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CTA from '../../components/CTA/CTA';
import { team } from '../../lib/data';
import './Team.css';

export default function Team() {
  return (
    <>
      <PageBanner
        title="Meet Our Team"
        subtitle="45+ world-class digital marketing specialists dedicated to growing your business."
        breadcrumbs={[{ label: 'Team' }]}
      />

      <section className="section team-page">
        <div className="container">
          <SectionTitle
            badge="Our Experts"
            title="The People Driving"
            highlight="Your Success"
            description="Our diverse team brings together expertise from Google, Meta, HubSpot, and leading marketing agencies worldwide."
          />
          <div className="team-page-grid">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                className="team-member-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <div className="tmc-img">
                  <img src={member.image} alt={member.name} loading="lazy" />
                  <div className="tmc-overlay">
                    <p>{member.bio}</p>
                    <div className="tmc-social-overlay">
                      <a href={member.linkedin} aria-label="LinkedIn"><FaLinkedin /></a>
                      <a href={member.twitter} aria-label="Twitter"><FaTwitter /></a>
                    </div>
                  </div>
                </div>
                <div className="tmc-body">
                  <h3>{member.name}</h3>
                  <span className="tmc-role">{member.role}</span>
                  <div className="tmc-expertise">
                    {member.expertise.map(e => <span key={e}>{e}</span>)}
                  </div>
                  <div className="tmc-social">
                    <a href={member.linkedin} aria-label="LinkedIn"><FaLinkedin /></a>
                    <a href={member.twitter} aria-label="Twitter"><FaTwitter /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="team-join">
            <div className="tj-content">
              <h2>Want to Join Our Team?</h2>
              <p>We are always looking for talented, passionate people to join our growing team. If you love digital marketing and want to make a real impact, we want to hear from you.</p>
              <Link href="/careers" className="tj-btn">View Open Positions →</Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
