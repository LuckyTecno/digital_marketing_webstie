'use client';
import { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiClock, FiUser, FiCalendar, FiShare2, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import PageBanner from '../../../components/PageBanner/PageBanner';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Newsletter from '../../../components/Newsletter/Newsletter';
import BlogCard from '../../../components/BlogCard/BlogCard';
import { blogPosts } from '../../../lib/data';
import './BlogDetails.css';

export default function BlogDetails({ params }) {
  const { id } = use(params);
  const post = blogPosts.find(p => String(p.id) === id);
  const related = blogPosts.filter(p => String(p.id) !== id).slice(0, 3);

  if (!post) return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', paddingTop: 'var(--navbar-height)' }}>
      <h2>Post not found</h2>
      <Link href="/blog" style={{ color: 'var(--primary)' }}>← Back to Blog</Link>
    </div>
  );

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      <PageBanner
        title={post.title}
        breadcrumbs={[{ label: 'Blog', path: '/blog' }, { label: post.category }]}
      />

      <section className="section blog-details-page">
        <div className="container bd-layout">
          <article className="bd-article">
            <div className="bd-hero-img">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="bd-meta">
              <span><FiUser /> {post.author}</span>
              <span><FiCalendar /> {formattedDate}</span>
              <span><FiClock /> {post.readTime}</span>
              <span className="bd-cat">{post.category}</span>
            </div>
            <div className="bd-body">
              <p className="bd-lead">{post.excerpt}</p>
              <h2>Understanding the Foundation</h2>
              <p>In today's highly competitive digital landscape, having a strong online presence is no longer optional — it's essential. Businesses that invest in strategic digital marketing consistently outperform their competitors and achieve sustainable growth.</p>
              <p>This comprehensive guide will walk you through everything you need to know about implementing effective strategies that deliver real, measurable results for your business.</p>
              <h2>Key Strategies for Success</h2>
              <p>The most successful digital marketing campaigns are built on a foundation of deep audience understanding. Before launching any campaign, it's critical to:</p>
              <ul className="bd-list">
                <li>Define your target audience with precision using demographic and psychographic data</li>
                <li>Understand their pain points, goals, and preferred communication channels</li>
                <li>Map out the customer journey from awareness to conversion</li>
                <li>Set clear, measurable KPIs aligned with your business objectives</li>
              </ul>
              <div className="bd-quote">
                <blockquote>
                  "The best marketing doesn't feel like marketing. It feels like a conversation with a friend who understands your problem and has the perfect solution."
                </blockquote>
              </div>
              <h2>Implementing Your Strategy</h2>
              <p>Once you have a clear understanding of your audience and goals, the implementation phase is where strategy meets execution. Working with experienced digital marketing professionals can make the difference between campaigns that generate modest results and those that deliver transformational growth.</p>
              <h2>Measuring and Optimizing Results</h2>
              <p>Data is the backbone of effective digital marketing. We recommend setting up comprehensive analytics tracking from day one, including Google Analytics 4, Google Search Console, platform-specific analytics, and CRM integration for full attribution.</p>
            </div>
            <div className="bd-share">
              <span><FiShare2 /> Share this article:</span>
              <div className="share-btns">
                <a href="#" className="share-btn facebook" aria-label="Share on Facebook"><FaFacebook /></a>
                <a href="#" className="share-btn twitter" aria-label="Share on Twitter"><FaTwitter /></a>
                <a href="#" className="share-btn linkedin" aria-label="Share on LinkedIn"><FaLinkedin /></a>
              </div>
            </div>
            <div className="bd-author">
              <img src="https://randomuser.me/api/portraits/men/45.jpg" alt={post.author} />
              <div>
                <strong>{post.author}</strong>
                <span>Senior Digital Marketing Specialist at NexaDigital</span>
                <p>Expert digital marketer with 8+ years of experience helping businesses grow their online presence through data-driven strategies and creative excellence.</p>
              </div>
            </div>
            <div className="bd-nav">
              <Link href="/blog" className="bd-nav-link prev"><FiArrowLeft /> Back to Blog</Link>
              {related[0] && (
                <Link href={`/blog/${related[0].id}`} className="bd-nav-link next">
                  Next Article <FiArrowRight />
                </Link>
              )}
            </div>
          </article>
          <aside className="bd-sidebar">
            <div className="bd-sidebar-widget">
              <h4>About the Author</h4>
              <div className="bd-author-mini">
                <img src="https://randomuser.me/api/portraits/men/45.jpg" alt={post.author} />
                <div>
                  <strong>{post.author}</strong>
                  <span>Digital Marketing Expert</span>
                </div>
              </div>
            </div>
            <div className="bd-sidebar-widget">
              <h4>Related Posts</h4>
              {related.map(p => (
                <Link key={p.id} href={`/blog/${p.id}`} className="bd-related-post">
                  <img src={p.image} alt={p.title} />
                  <div>
                    <p>{p.title}</p>
                    <small>{p.readTime}</small>
                  </div>
                </Link>
              ))}
            </div>
            <div className="bd-sidebar-widget bd-cta-widget">
              <h4>Free Consultation</h4>
              <p>Ready to grow your business? Schedule a free strategy call with our experts.</p>
              <Link href="/contact" className="bd-cta-btn">Book Free Call →</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <SectionTitle badge="Keep Reading" title="Related" highlight="Articles" />
          <div className="bd-related-grid">
            {related.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <BlogCard post={p} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
