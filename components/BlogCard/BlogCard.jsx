'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiClock, FiUser, FiArrowRight } from 'react-icons/fi';
import './BlogCard.css';

const BlogCard = ({ post }) => {
  const { id, title, category, date, author, image, excerpt, readTime } = post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric'
  });

  return (
    <motion.article
      className="blog-card"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/blog/${id}`} className="blog-card-image-wrap">
        <img src={image} alt={title} loading="lazy" />
        <span className="blog-card-category">{category}</span>
      </Link>
      <div className="blog-card-body">
        <div className="blog-card-meta">
          <span><FiUser /> {author}</span>
          <span><FiClock /> {readTime}</span>
          <span>{formattedDate}</span>
        </div>
        <h3 className="blog-card-title">
          <Link href={`/blog/${id}`}>{title}</Link>
        </h3>
        <p className="blog-card-excerpt">{excerpt}</p>
        <Link href={`/blog/${id}`} className="blog-card-link">
          Read More <FiArrowRight />
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;
