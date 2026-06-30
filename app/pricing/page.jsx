'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCheck, FiX, FiArrowRight } from 'react-icons/fi';
import PageBanner from '../../components/PageBanner/PageBanner';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import PricingCard from '../../components/PricingCard/PricingCard';
import FAQAccordion from '../../components/FAQ/FAQAccordion';
import CTA from '../../components/CTA/CTA';
import { pricingPlans } from '../../lib/data';
import './Pricing.css';

const compareFeatures = [
  { feature: 'SEO Keywords', starter: '10', professional: '30', enterprise: '100+' },
  { feature: 'Social Platforms', starter: '2', professional: '4', enterprise: 'All' },
  { feature: 'Blog Posts/Month', starter: '4', professional: '8', enterprise: '16+' },
  { feature: 'PPC Management', starter: false, professional: 'Up to $5K', enterprise: 'Up to $20K+' },
  { feature: 'Email Campaigns', starter: false, professional: '4/month', enterprise: 'Unlimited' },
  { feature: 'Landing Pages', starter: false, professional: '2', enterprise: 'Unlimited' },
  { feature: 'Account Manager', starter: false, professional: false, enterprise: true },
  { feature: 'Reporting', starter: 'Monthly', professional: 'Weekly', enterprise: 'Daily' },
  { feature: 'Support', starter: 'Email', professional: 'Priority', enterprise: '24/7' },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <PageBanner
        title="Simple, Transparent Pricing"
        subtitle="No hidden fees. No surprise charges. Choose the plan that fits your business and scale as you grow."
        breadcrumbs={[{ label: 'Pricing' }]}
      />

      <section className="section pricing-page">
        <div className="container">
          <SectionTitle
            badge="Pricing Plans"
            title="Invest in Your"
            highlight="Business Growth"
            description="Every plan includes a dedicated team, transparent reporting, and our commitment to measurable results."
          />

          <div className="pricing-toggle-wrap">
            <span className={!isYearly ? 'active' : ''}>Monthly</span>
            <button className={`pricing-toggle-btn ${isYearly ? 'on' : ''}`} onClick={() => setIsYearly(!isYearly)}>
              <div className="ptb-thumb" />
            </button>
            <span className={isYearly ? 'active' : ''}>Yearly <em>Save 20%</em></span>
          </div>

          <div className="pricing-plans-grid">
            {pricingPlans.map((plan, i) => (
              <PricingCard key={plan.id} plan={plan} isYearly={isYearly} index={i} />
            ))}
          </div>

          <div className="compare-table-wrap">
            <SectionTitle badge="Compare Plans" title="Feature" highlight="Comparison" description="See exactly what is included in each plan." />
            <div className="compare-table">
              <div className="ct-header">
                <div className="ct-col-label">Feature</div>
                {pricingPlans.map(p => (
                  <div key={p.id} className={`ct-col-plan ${p.popular ? 'popular' : ''}`} style={{ '--plan-color': p.color }}>
                    {p.name}
                  </div>
                ))}
              </div>
              {compareFeatures.map((row, i) => (
                <motion.div
                  key={i}
                  className="ct-row"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="ct-feature">{row.feature}</div>
                  {['starter', 'professional', 'enterprise'].map(plan => (
                    <div key={plan} className="ct-value">
                      {row[plan] === true ? <FiCheck className="ct-check" /> :
                       row[plan] === false ? <FiX className="ct-x" /> :
                       <span>{row[plan]}</span>}
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="enterprise-cta">
            <div className="ec-content">
              <h3>Need a Custom Plan?</h3>
              <p>For enterprise businesses with unique requirements, we offer fully customized marketing packages. Let us build a solution tailored specifically to your goals.</p>
              <Link href="/contact" className="ec-btn">
                Talk to Our Team <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion limit={6} />
      <CTA />
    </>
  );
}
