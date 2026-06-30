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
import FAQAccordion from '../components/FAQ/FAQAccordion';
import BlogCard from '../components/BlogCard/BlogCard';
import TestimonialCard from '../components/TestimonialCard/TestimonialCard';
import PricingCard from '../components/PricingCard/PricingCard';
import { services, testimonials, blogPosts, pricingPlans, portfolio } from '../lib/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Home.css';

const process = [
  { step: '01', icon: '🔍', title: 'Discovery & Audit', desc: 'We dive deep into your business, competitors, and market to uncover growth opportunities.' },
  { step: '02', icon: '📋', title: 'Strategy Development', desc: 'We build a custom data-driven strategy tailored to your specific goals and budget.' },
  { step: '03', icon: '🚀', title: 'Execution & Launch', desc: 'Our team executes campaigns with precision, creativity, and relentless attention to detail.' },
  { step: '04', icon: '📈', title: 'Optimize & Scale', desc: 'We continuously analyze, test, and optimize to maximize ROI and scale what works.' },
];

const whyUs = [
  { icon: '🎯', title: 'Data-Driven Decisions', desc: 'Every strategy is backed by deep data analysis and performance metrics.' },
  { icon: '🏆', title: 'Proven Track Record', desc: '480+ clients served, $50M+ revenue generated for our partners.' },
  { icon: '👥', title: 'Expert Team', desc: 'Certified specialists in SEO, PPC, Social Media, and Content Marketing.' },
  { icon: '📊', title: 'Full Transparency', desc: 'Real-time dashboards and weekly reports keep you informed always.' },
  { icon: '⚡', title: 'Fast Results', desc: 'See measurable improvements within the first 30 days of working together.' },
  { icon: '🤝', title: 'True Partnership', desc: 'We treat your business like our own and are invested in your success.' },
];

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [isYearly, setIsYearly] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const categories = ['all', 'SEO', 'PPC', 'Social Media', 'E-Commerce', 'Branding', 'Content'];

  const filteredPortfolio = activeFilter === 'all'
    ? portfolio
    : portfolio.filter(p => p.category === activeFilter);

  return (
    <>
      <Hero onVideoOpen={() => setVideoOpen(true)} />

      {/* Services Section */}
      <section className="section home-services">
        <div className="container">
          <SectionTitle
            badge="What We Do"
            title="Digital Marketing Services"
            highlight="That Drive Results"
            description="From SEO to paid advertising, we offer comprehensive digital marketing solutions tailored to grow your business."
          />
          <div className="services-grid">
            {services.slice(0, 8).map((service, i) => (
              <motion.div
                key={service.id}
                className="service-card"
                style={{ '--service-color': service.color }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -8 }}
              >
                <div className="sc-icon">
                  <div className="sc-icon-inner" style={{ background: `${service.color}15`, color: service.color }}>
                    {service.icon === 'FaSearch' && '🔍'}
                    {service.icon === 'FaMapMarkerAlt' && '📍'}
                    {service.icon === 'FaCode' && '⚙️'}
                    {service.icon === 'FaPen' && '✍️'}
                    {service.icon === 'FaEnvelope' && '📧'}
                    {service.icon === 'FaShareAlt' && '📱'}
                    {service.icon === 'FaFacebook' && '📘'}
                    {service.icon === 'FaGoogle' && '🎯'}
                  </div>
                </div>
                <h3 className="sc-title">{service.title}</h3>
                <p className="sc-desc">{service.description}</p>
                <div className="sc-features">
                  {service.features.slice(0, 3).map((f, j) => (
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

      <Stats />

      {/* About Preview */}
      <section className="section home-about">
        <div className="container home-about-inner">
          <div className="about-image-wrap">
            <motion.div
              className="about-img-main"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" alt="Our Team" loading="lazy" />
            </motion.div>
            <motion.div
              className="about-img-second"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400" alt="Agency Office" loading="lazy" />
            </motion.div>
            <div className="about-badge">
              <strong>12+</strong>
              <span>Years of Excellence</span>
            </div>
          </div>
          <div className="about-content">
            <SectionTitle
              badge="About NexaDigital"
              title="We Are More Than Just a"
              highlight="Marketing Agency"
              align="left"
              description="We are growth partners. Since 2012, we have helped businesses across 30+ countries unlock their digital potential with smart strategies, creative execution, and measurable results."
            />
            <div className="about-points">
              {[
                'Google Premier Partner & Meta Business Partner',
                'Certified team of 45+ digital marketing experts',
                'Proprietary data analytics platform',
                'Proven 340%+ average traffic increase for clients',
              ].map((point, i) => (
                <motion.div
                  key={i}
                  className="about-point"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="ap-check"><FiCheck /></div>
                  <span>{point}</span>
                </motion.div>
              ))}
            </div>
            <div className="about-actions">
              <Link href="/about" className="btn-primary-about">Discover Our Story <FiArrowRight /></Link>
              <Link href="/team" className="btn-ghost-about">Meet the Team</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section home-process bg-light">
        <div className="container">
          <SectionTitle
            badge="How We Work"
            title="Our Proven"
            highlight="4-Step Process"
            description="We follow a systematic process that delivers consistent results for every client we work with."
          />
          <div className="process-grid">
            {process.map((step, i) => (
              <motion.div
                key={i}
                className="process-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="process-number">{step.step}</div>
                <div className="process-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {i < process.length - 1 && <div className="process-arrow" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section home-why">
        <div className="container">
          <SectionTitle
            badge="Why NexaDigital"
            title="Why 480+ Companies Choose"
            highlight="Us Over Others"
            description="We combine deep expertise with a genuine passion for client success. Here is what sets us apart."
          />
          <div className="why-grid">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                className="why-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section home-portfolio bg-light">
        <div className="container">
          <SectionTitle
            badge="Our Work"
            title="Recent"
            highlight="Portfolio"
            description="Explore some of our recent work and see the results we have delivered for our clients."
          />
          <div className="portfolio-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="portfolio-grid">
            {filteredPortfolio.slice(0, 6).map((item, i) => (
              <motion.div
                key={item.id}
                className="portfolio-item"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                layout
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="pi-overlay">
                  <div className="pi-content">
                    <div className="pi-tags">
                      {item.tags.map(t => <span key={t}>{t}</span>)}
                    </div>
                    <h3>{item.title}</h3>
                    <div className="pi-result">📈 {item.result}</div>
                    <Link href="/portfolio" className="pi-link">View Details <FiArrowRight /></Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="section-cta">
            <Link href="/portfolio" className="btn-view-all">View All Projects <FiArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section home-pricing">
        <div className="container">
          <SectionTitle
            badge="Transparent Pricing"
            title="Simple, Honest"
            highlight="Pricing Plans"
            description="No hidden fees. No surprise charges. Choose the plan that fits your business needs."
          />
          <div className="pricing-toggle">
            <span className={!isYearly ? 'active' : ''}>Monthly</span>
            <button
              className={`toggle-switch ${isYearly ? 'on' : ''}`}
              onClick={() => setIsYearly(!isYearly)}
              aria-label="Toggle yearly billing"
            >
              <div className="toggle-thumb" />
            </button>
            <span className={isYearly ? 'active' : ''}>Yearly <em>Save 20%</em></span>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan, i) => (
              <PricingCard key={plan.id} plan={plan} isYearly={isYearly} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section home-testimonials bg-light">
        <div className="container">
          <SectionTitle
            badge="Client Reviews"
            title="What Our"
            highlight="Clients Say"
            description="Do not just take our word for it. Hear from businesses we have helped grow."
          />
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map(t => (
              <SwiperSlide key={t.id}>
                <TestimonialCard testimonial={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Blog */}
      <section className="section home-blog">
        <div className="container">
          <SectionTitle
            badge="Marketing Insights"
            title="Latest From Our"
            highlight="Blog"
            description="Expert tips, strategies, and insights to help you stay ahead in digital marketing."
          />
          <div className="blog-grid">
            {blogPosts.slice(0, 3).map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <div className="section-cta">
            <Link href="/blog" className="btn-view-all">View All Articles <FiArrowRight /></Link>
          </div>
        </div>
      </section>

      <FAQAccordion limit={6} />
      <Newsletter />
      <CTA />

      {/* Video Modal */}
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
              onClick={e => e.stopPropagation()}
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
