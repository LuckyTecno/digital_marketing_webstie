'use client';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { stats } from '../../lib/data';
import AnimatedCounter from '../AnimatedCounter/AnimatedCounter';
import './Stats.css';

const Stats = ({ dark = false }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className={`stats-section ${dark ? 'stats-dark' : ''}`} ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="stat-value">
                <AnimatedCounter end={stat.value} duration={2500} />
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
