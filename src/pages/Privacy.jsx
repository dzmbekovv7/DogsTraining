import React from "react";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto p-8 mt-10 bg-gradient-to-br from-white via-[#FFF8E7] to-[#FFF1DC] rounded-3xl shadow-lg text-[#4B2E2E] font-sans"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-extrabold mb-6 flex items-center gap-3">
        <PawPrint size={36} className="text-[#EFAE62] opacity-90" />
        Privacy Policy
      </h1>
      <p className="text-sm text-[#4B2E2E]/70 mb-10 font-semibold">
        Last Updated: May 2025
      </p>

      {/* Section */}
      <Section number="1" title="Introduction">
        This Privacy Policy explains how Bu Financial (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, discloses, and safeguards your information when you use our financial services in Qatar. By accessing or using our services, you agree to the collection and use of information in accordance with this policy.
      </Section>

      <Section number="2" title="Information We Collect">
        We collect several types of information, including personal identification data (name, contact, Qatar ID, etc.), financial info, and technical usage data (IP address, device info, etc.).
      </Section>

      <Section number="3" title="How We Use Your Information">
        To provide services, verify identity, comply with Qatari laws, improve offerings, detect fraud, and more.
      </Section>

      <Section number="4" title="Data Sharing and Disclosure">
        We may share data with service providers, legal authorities, or during business transfers. We do not sell your data.
      </Section>

      <Section number="5" title="Data Security">
        We use encryption, audits, access control, and staff training. However, no method is 100% secure.
      </Section>

      <Section number="6" title="Data Retention">
        We retain your data only as long as needed to provide services and comply with Qatari law.
      </Section>

      <Section number="7" title="Your Rights">
        You have the right to access, correct, delete, or object to processing. You may also withdraw consent.
      </Section>

      <Section number="8" title="International Transfers">
        Your data may be transferred internationally with appropriate safeguards in place.
      </Section>

      <Section number="9" title="Changes to This Policy">
        We may update this policy and will notify users by updating this page.
      </Section>

      <Section number="10" title="Contact Us">
        <span role="img" aria-label="location">
          📍
        </span>{" "}
        Location: 123 Book Street, Library City
      </Section>
    </motion.div>
  );
};

const Section = ({ number, title, children }) => (
  <motion.section
    className="mb-8"
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: number * 0.1 }}
  >
    <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-[#D98C00]">
      <span className="text-[#EFAE62] font-extrabold">{number}.</span> {title}
      <PawPrint size={24} className="text-[#EFAE62] opacity-80" />
    </h2>
    <p className="text-[#4B2E2E]/90 leading-relaxed font-medium">{children}</p>
  </motion.section>
);

export default PrivacyPolicy;
