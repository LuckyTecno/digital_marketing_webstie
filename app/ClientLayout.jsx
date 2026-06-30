'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import Cursor from '../components/Cursor/Cursor';
import Loader from '../components/Loader/Loader';
import useScrollProgress from '../hooks/useScrollProgress';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/15551234567"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    style={{
      position: 'fixed', bottom: '5.5rem', right: '2rem',
      width: '48px', height: '48px',
      background: '#25D366', borderRadius: '50%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', fontSize: '1.5rem',
      boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
      zIndex: 200,
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    }}
  >
    💬
  </a>
);

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const progress = useScrollProgress();
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      {!loading && (
        <>
          <div className="scroll-progress" style={{ width: `${progress}%` }} />
          <Cursor />
          <Navbar />
          <main className="main-content">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <WhatsAppButton />
        </>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </ThemeProvider>
  );
}
