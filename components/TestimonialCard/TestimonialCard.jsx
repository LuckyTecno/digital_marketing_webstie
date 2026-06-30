'use client';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  const { name, role, image, rating, text, result } = testimonial;

  return (
    <motion.div
      className="testimonial-card"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
    >
      <div className="tc-header">
        <FaQuoteLeft className="tc-quote" />
        <div className="tc-stars">
          {Array.from({ length: rating }).map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
      </div>
      <p className="tc-text">{text}</p>
      {result && (
        <div className="tc-result">
          <span>📈</span> {result}
        </div>
      )}
      <div className="tc-footer">
        <img src={image} alt={name} className="tc-avatar" loading="lazy" />
        <div className="tc-info">
          <strong>{name}</strong>
          <span>{role}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
