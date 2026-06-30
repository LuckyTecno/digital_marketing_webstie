'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import PageBanner from '../../components/PageBanner/PageBanner';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import BlogCard from '../../components/BlogCard/BlogCard';
import Newsletter from '../../components/Newsletter/Newsletter';
import { blogPosts } from '../../lib/data';
import './Blog.css';

const categories = ['All', 'SEO', 'PPC', 'Content', 'Social Media', 'Email', 'Local SEO'];

export default function Blog() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = blogPosts.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <PageBanner
        title="Marketing Insights Blog"
        subtitle="Expert strategies, industry insights, and actionable tips to help you grow your business online."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="section blog-page">
        <div className="container">
          <div className="blog-controls">
            <div className="blog-search">
              <FiSearch />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                aria-label="Search blog posts"
              />
            </div>
            <div className="blog-cats">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`blog-cat-btn ${category === cat ? 'active' : ''}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filtered[0] && (
            <motion.div
              className="blog-featured"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bf-image">
                <img src={filtered[0].image} alt={filtered[0].title} />
                <span className="bf-category">{filtered[0].category}</span>
              </div>
              <div className="bf-content">
                <div className="bf-meta">
                  <span>By {filtered[0].author}</span>
                  <span>{filtered[0].readTime}</span>
                  <span>{new Date(filtered[0].date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h2><a href={`/blog/${filtered[0].id}`}>{filtered[0].title}</a></h2>
                <p>{filtered[0].excerpt}</p>
                <a href={`/blog/${filtered[0].id}`} className="bf-read-btn">Read Full Article →</a>
              </div>
            </motion.div>
          )}

          <div className="blog-grid-wrap">
            <div className="blog-main">
              <h3 className="blog-section-title">
                {search || category !== 'All' ? `${filtered.length} article${filtered.length !== 1 ? 's' : ''} found` : 'Latest Articles'}
              </h3>
              {filtered.length > 0 ? (
                <div className="blog-page-grid">
                  {filtered.slice(1).map((post, i) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                    >
                      <BlogCard post={post} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="blog-empty">
                  <p>No articles found. Try a different search term.</p>
                </div>
              )}
            </div>

            <aside className="blog-sidebar">
              <div className="sidebar-widget">
                <h4>Recent Posts</h4>
                {blogPosts.slice(0, 4).map(post => (
                  <a key={post.id} href={`/blog/${post.id}`} className="recent-post">
                    <img src={post.image} alt={post.title} />
                    <div>
                      <span className="rp-cat">{post.category}</span>
                      <p>{post.title}</p>
                      <small>{new Date(post.date).toLocaleDateString()}</small>
                    </div>
                  </a>
                ))}
              </div>
              <div className="sidebar-widget">
                <h4>Categories</h4>
                <div className="sidebar-cats">
                  {categories.filter(c => c !== 'All').map(cat => (
                    <button key={cat} className={`sidebar-cat ${category === cat ? 'active' : ''}`} onClick={() => setCategory(cat)}>
                      {cat} <span>{blogPosts.filter(p => p.category === cat).length}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="sidebar-widget sidebar-cta-widget">
                <h4>Free SEO Audit</h4>
                <p>Get a free comprehensive analysis of your website's SEO performance.</p>
                <a href="/contact" className="sidebar-cta-btn">Get Free Audit →</a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
