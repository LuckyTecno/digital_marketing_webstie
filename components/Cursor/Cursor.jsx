'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Cursor.css';

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const style = window.getComputedStyle(el);
        setIsPointer(style.cursor === 'pointer');
      }
    };
    const hide = () => setIsHidden(true);
    const show = () => setIsHidden(false);
    const down = () => setIsClicking(true);
    const up = () => setIsClicking(false);

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', hide);
    document.addEventListener('mouseenter', show);
    document.addEventListener('mousedown', down);
    document.addEventListener('mouseup', up);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', hide);
      document.removeEventListener('mouseenter', show);
      document.removeEventListener('mousedown', down);
      document.removeEventListener('mouseup', up);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className={`cursor-dot ${isHidden ? 'hidden' : ''}`}
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: isClicking ? 0.5 : 1 }}
        transition={{ type: 'spring', damping: 50, stiffness: 500, mass: 0.1 }}
      />
      <motion.div
        className={`cursor-ring ${isPointer ? 'pointer' : ''} ${isHidden ? 'hidden' : ''}`}
        animate={{ x: pos.x - 20, y: pos.y - 20, scale: isClicking ? 0.8 : isPointer ? 1.5 : 1 }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
      />
    </>
  );
};

export default Cursor;
