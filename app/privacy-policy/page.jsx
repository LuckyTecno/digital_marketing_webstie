'use client';
import PageBanner from '../../components/PageBanner/PageBanner';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  return (
    <>
      <PageBanner title="Privacy Policy" subtitle="Last updated: January 1, 2025" breadcrumbs={[{ label: 'Privacy Policy' }]} />
      <section className="section legal-page">
        <div className="container legal-content">
          <div className="legal-toc">
            <h3>Table of Contents</h3>
            <ol>
              <li><a href="#information">Information We Collect</a></li>
              <li><a href="#use">How We Use Your Information</a></li>
              <li><a href="#sharing">Information Sharing</a></li>
              <li><a href="#cookies">Cookies Policy</a></li>
              <li><a href="#security">Data Security</a></li>
              <li><a href="#rights">Your Rights</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ol>
          </div>
          <div className="legal-body">
            <section id="information">
              <h2>1. Information We Collect</h2>
              <p>At NexaDigital, we collect information to provide and improve our digital marketing services. The types of information we may collect include:</p>
              <ul>
                <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and other contact details you provide when filling out forms on our website or contacting us.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and actions taken.</li>
                <li><strong>Marketing Data:</strong> Information about your preferences and responses to our marketing communications.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies.</li>
              </ul>
            </section>
            <section id="use">
              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and improve our digital marketing services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you relevant marketing communications (with your consent)</li>
                <li>Analyze and improve our website performance</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and abuse</li>
              </ul>
            </section>
            <section id="sharing">
              <h2>3. Information Sharing</h2>
              <p>We do not sell, rent, or trade your personal information to third parties. We may share information with trusted service providers who assist us in delivering our services, subject to strict confidentiality agreements. We may also disclose information when required by law.</p>
            </section>
            <section id="cookies">
              <h2>4. Cookies Policy</h2>
              <p>Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how you use our website. You can control cookie settings through your browser preferences. We use the following types of cookies:</p>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Marketing Cookies:</strong> Used to track the effectiveness of our marketing campaigns</li>
              </ul>
            </section>
            <section id="security">
              <h2>5. Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include SSL encryption, secure server infrastructure, and regular security audits. However, no method of transmission over the Internet is 100% secure.</p>
            </section>
            <section id="rights">
              <h2>6. Your Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
              <ul>
                <li>The right to access your personal data</li>
                <li>The right to correct inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to object to or restrict processing of your data</li>
                <li>The right to data portability</li>
              </ul>
            </section>
            <section id="contact">
              <h2>7. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or want to exercise your rights, please contact us at:</p>
              <div className="legal-contact">
                <strong>NexaDigital</strong>
                <span>123 Marketing Ave, Suite 500, New York, NY 10001</span>
                <a href="mailto:privacy@nexadigital.com">privacy@nexadigital.com</a>
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
