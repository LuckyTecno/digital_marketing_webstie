'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiCheck, FiX, FiZap } from 'react-icons/fi';
import './PricingCard.css';

const PricingCard = ({ plan, isYearly, index }) => {
  const { name, description, monthlyPrice, yearlyPrice, color, popular, features } = plan;
  const price = isYearly ? yearlyPrice : monthlyPrice;
  const savings = isYearly ? Math.round(((monthlyPrice - yearlyPrice) / monthlyPrice) * 100) : 0;

  return (
    <motion.div
      className={`pricing-card ${popular ? 'popular' : ''}`}
      style={{ '--card-color': color }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {popular && (
        <div className="pricing-popular-badge">
          <FiZap /> Most Popular
        </div>
      )}
      <div className="pricing-header">
        <h3 className="pricing-name">{name}</h3>
        <p className="pricing-desc">{description}</p>
        <div className="pricing-price">
          <span className="price-currency">$</span>
          <span className="price-amount">{price.toLocaleString()}</span>
          <span className="price-period">/month</span>
        </div>
        {isYearly && (
          <div className="pricing-savings">Save {savings}% with annual billing</div>
        )}
      </div>
      <ul className="pricing-features">
        {features.map((feature, i) => (
          <li key={i} className={`pricing-feature ${feature.included ? 'included' : 'excluded'}`}>
            {feature.included ? <FiCheck className="feat-icon" /> : <FiX className="feat-icon" />}
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      <Link href="/contact" className={`pricing-cta ${popular ? 'popular-cta' : ''}`}>
        Get Started Today
      </Link>
    </motion.div>
  );
};

export default PricingCard;
