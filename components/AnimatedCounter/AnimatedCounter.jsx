'use client';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ end, duration = 2000, decimals = 0, separator = true, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;
      setCount(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration, decimals]);

  const formatted = separator && decimals === 0 ? count.toLocaleString() : count;

  return <span ref={ref}>{formatted}{suffix}</span>;
};

export default AnimatedCounter;
