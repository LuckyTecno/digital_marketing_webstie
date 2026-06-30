'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FiX, FiArrowRight, FiCheck } from 'react-icons/fi';
import Hero from './Hero';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Stats from '../components/Stats/Stats';
import CTA from '../components/CTA/CTA';
import Newsletter from '../components/Newsletter/Newsletter';
import TestimonialCard from '../components/TestimonialCard/TestimonialCard';
import { services, testimonials } from '../lib/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Home.css';

const iconMap: Record<string, string> = {
  FaSearch: '🔍', FaMapMarkerAlt: '📍', FaCode: '⚙️', FaPen: '✍️',
  FaEnvelope: '📧', FaShareAlt: '📱', FaFacebook: '📘', FaGoogle: '🎯',
};

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <Hero onVideoOpen={() => setVideoOpen(true)} />

      <Stats />

      <section className="section home-services">
        <div className="container">
          <SectionTitle
            badge="What We Do"
            title="Digital Marketing Services"
            highlight="That Drive Results"
            description="From SEO to paid advertising, we offer comprehensive digital marketing solutions tailored to grow your business."
          />
          <div className="services-grid">
            {services.slice(0, 6).map((service: any, i: number) => (
              <motion.div
                key={service.id}
                className="service-card"
                style={{ '--service-color': service.color } as any}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -8 }}
              >
                <div className="sc-icon">
                  <div className="sc-icon-inner" style={{ background: `${service.color}15`, color: service.color }}>
                    {iconMap[service.icon] || '⚡'}
                  </div>
                </div>
                <h3 className="sc-title">{service.title}</h3>
                <p className="sc-desc">{service.description}</p>
                <div className="sc-features">
                  {service.features.slice(0, 3).map((f: string, j: number) => (
                    <span key={j} className="sc-feature"><FiCheck /> {f}</span>
                  ))}
                </div>
                <div className="sc-footer">
                  <span className="sc-price">{service.price}</span>
                  <Link href={`/services/${service.id}`} className="sc-link">Learn More <FiArrowRight /></Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="section-cta">
            <Link href="/services" className="btn-view-all">View All 20 Services <FiArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="section home-testimonials bg-light">
        <div className="container">
          <SectionTitle
            badge="Client Reviews"
            title="What Our"
            highlight="Clients Say"
            description="Don't just take our word for it. Hear from businesses we've helped grow."
          />
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="testimonials-swiper"
          >
            {(testimonials as any[]).map((t) => (
              <SwiperSlide key={t.id}><TestimonialCard testimonial={t} /></SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Newsletter />
      <CTA />

      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              className="video-modal-inner"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <button className="video-close" onClick={() => setVideoOpen(false)}><FiX /></button>
              <div className="video-placeholder">
                <div className="vp-icon">▶</div>
                <p>Company Story Video</p>
                <span>See how NexaDigital helps businesses grow</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
