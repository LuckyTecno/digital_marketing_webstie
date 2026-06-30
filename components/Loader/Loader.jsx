'use client';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="loader-logo"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loader-icon">N</div>
        <span>NexaDigital</span>
      </motion.div>
      <div className="loader-bar">
        <motion.div
          className="loader-progress"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </div>
      <p className="loader-text">Loading premium experience...</p>
    </motion.div>
  );
};

export default Loader;
