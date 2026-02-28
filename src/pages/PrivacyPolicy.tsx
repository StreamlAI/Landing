import { motion } from "framer-motion";
import { Terminal, ChevronLeft, Shield, Database, Lock, Globe, Users, FileText, Bell, Mail } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";

export default function PrivacyPolicy() {
  useSEO({
    title: "Privacy Policy | Streaml",
    description: "Learn how Streaml collects, uses, and protects your personal information. Our commitment to data privacy and security.",
    canonicalPath: "/privacy-policy",
  });

  const sections = [
    { id: "collect", title: "Information We Collect", icon: Database },
    { id: "use", title: "How We Use Your Information", icon: FileText },
    { id: "sharing", title: "Information Sharing and Disclosure", icon: Users },
    { id: "security", title: "Data Security", icon: Lock },
    { id: "retention", title: "Data Retention", icon: Database },
    { id: "rights", title: "Your Rights and Choices", icon: Shield },
    { id: "transfers", title: "International Data Transfers", icon: Globe },
    { id: "children", title: "Children's Privacy", icon: Users },
    { id: "changes", title: "Changes to This Policy", icon: Bell },
    { id: "contact", title: "Contact Us", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black overflow-x-hidden font-sans">
      {/* Navigation */}
      <Navigation showLinks={false} />

      {/* Header */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-3 py-1 mb-6 text-primary font-mono text-xs">
              <Shield className="w-4 h-4" />
              LEGAL_DOCUMENT
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Last Updated: January 2026
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Table of Contents - Sidebar */}
          <aside className="lg:w-72 shrink-0">
            <div className="lg:sticky lg:top-24">
              <div className="border border-border bg-card p-6">
                <h3 className="font-mono text-sm text-primary mb-4">TABLE_OF_CONTENTS</h3>
                <nav className="space-y-2">
                  {sections.map((section, i) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      <span className="font-mono text-xs text-primary/50">{String(i + 1).padStart(2, '0')}</span>
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-3xl">
            {/* Introduction */}
            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to Streaml. This Privacy Policy explains how Streaml ("we," "us," or "our") collects, uses, and protects your personal information when you use our AI-powered automation platform and related services (the "Service").
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using our Service, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our Service.
              </p>
              <div className="border border-primary/30 bg-primary/5 p-4 mt-6">
                <p className="text-sm font-mono text-primary mb-2">QUICK_SUMMARY:</p>
                <p className="text-sm text-foreground">
                  We collect information to provide and improve our automation services. We never sell your personal data and only share it when necessary to provide our services or when required by law.
                </p>
              </div>
            </div>

            {/* Section 1: Information We Collect */}
            <section id="collect" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">01</span>
                  <h2 className="text-2xl font-bold">Information We Collect</h2>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Personal Information You Provide</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary">-</span>
                      <span><strong className="text-foreground">Account Information:</strong> Name, email address, company name, job title, and password when you create an account</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">-</span>
                      <span><strong className="text-foreground">Profile Information:</strong> Additional details you choose to provide in your user profile</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">-</span>
                      <span><strong className="text-foreground">Contact Information:</strong> Phone number, mailing address, and other contact details</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">-</span>
                      <span><strong className="text-foreground">Payment Information:</strong> Billing address and payment method details (processed securely through our payment processors)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">-</span>
                      <span><strong className="text-foreground">Communications:</strong> Messages, feedback, and support requests you send to us</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Information Collected Automatically</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary">-</span>
                      <span><strong className="text-foreground">Usage Data:</strong> How you interact with our Service, including features used, time spent, and user preferences</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">-</span>
                      <span><strong className="text-foreground">Device Information:</strong> IP address, browser type, operating system, and device identifiers</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">-</span>
                      <span><strong className="text-foreground">Log Data:</strong> Server logs, error reports, and performance data</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">-</span>
                      <span><strong className="text-foreground">Cookies and Tracking:</strong> We use cookies and similar technologies to enhance your experience and analyze usage patterns</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Business Contact Data</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary">-</span>
                      <span><strong className="text-foreground">Contact Information:</strong> Contact details, company information, and professional data of contacts you upload or target through our Service</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">-</span>
                      <span><strong className="text-foreground">CRM Integration Data:</strong> Information synced from your customer relationship management systems</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">-</span>
                      <span><strong className="text-foreground">Third-Party Data:</strong> Publicly available business information and data from our authorized data partners</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2: How We Use Your Information */}
            <section id="use" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">02</span>
                  <h2 className="text-2xl font-bold">How We Use Your Information</h2>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Service Delivery</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>Provide, maintain, and improve our AI-powered automation platform</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Process and fulfill your requests for services</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Personalize your experience and customize content recommendations</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Enable AI-powered features like contact identification and message generation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Communication and Support</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>Respond to your inquiries and provide customer support</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Send service-related notifications, updates, and security alerts</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Share product updates, industry insights, and educational content (with your consent)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Business Operations</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>Process payments and manage billing</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Analyze usage patterns to improve our Service and develop new features</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Conduct research and analytics to enhance our AI algorithms</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Ensure security and prevent fraud or abuse</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Legal and Compliance</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>Comply with applicable laws, regulations, and legal processes</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Protect our rights, property, and safety, and that of our users</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Enforce our Terms of Service and other agreements</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: Information Sharing and Disclosure */}
            <section id="sharing" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">03</span>
                  <h2 className="text-2xl font-bold">Information Sharing and Disclosure</h2>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Service Providers</h3>
                  <p className="text-muted-foreground mb-3">We work with trusted third-party service providers who help us deliver our Service, including:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>Cloud hosting and infrastructure providers</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Payment processing companies</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Email delivery services</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Analytics and monitoring tools</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Customer support platforms</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Business Transfers</h3>
                  <p className="text-muted-foreground">
                    If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you before your information is transferred and becomes subject to a different privacy policy.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Legal Requirements</h3>
                  <p className="text-muted-foreground mb-3">We may disclose your information when required by law or in response to valid legal processes, such as:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>Court orders, subpoenas, or government requests</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Compliance with regulatory requirements</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Protection of our legal rights and interests</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Investigation of potential violations of our Terms of Service</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Consent</h3>
                  <p className="text-muted-foreground">
                    We may share your information with your explicit consent for purposes not described in this Privacy Policy.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Data Security */}
            <section id="security" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">04</span>
                  <h2 className="text-2xl font-bold">Data Security</h2>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                We implement industry-standard security measures to protect your personal information:
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Technical Safeguards</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span><strong className="text-foreground">Encryption:</strong> All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption</li>
                    <li className="flex gap-3"><span className="text-primary">-</span><strong className="text-foreground">Access Controls:</strong> Role-based access controls limit employee access to your data on a need-to-know basis</li>
                    <li className="flex gap-3"><span className="text-primary">-</span><strong className="text-foreground">Network Security:</strong> Firewalls, intrusion detection systems, and network monitoring</li>
                    <li className="flex gap-3"><span className="text-primary">-</span><strong className="text-foreground">Secure Infrastructure:</strong> We use enterprise-grade cloud infrastructure with built-in security features</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Operational Safeguards</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span><strong className="text-foreground">Security Training:</strong> Regular security awareness training for all employees</li>
                    <li className="flex gap-3"><span className="text-primary">-</span><strong className="text-foreground">Background Checks:</strong> Comprehensive background checks for employees with data access</li>
                    <li className="flex gap-3"><span className="text-primary">-</span><strong className="text-foreground">Incident Response:</strong> Established procedures for detecting, investigating, and responding to security incidents</li>
                    <li className="flex gap-3"><span className="text-primary">-</span><strong className="text-foreground">Regular Audits:</strong> Periodic security assessments and penetration testing</li>
                  </ul>
                </div>

                <div className="border border-primary/30 bg-primary/5 p-4">
                  <p className="text-sm font-mono text-primary mb-2">SECURITY_CERTIFICATIONS:</p>
                  <p className="text-sm text-foreground">
                    We maintain SOC 2 Type II compliance and follow GDPR and CCPA requirements for data protection.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Data Retention */}
            <section id="retention" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">05</span>
                  <h2 className="text-2xl font-bold">Data Retention</h2>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes described in this Privacy Policy:
              </p>

              <div className="space-y-4">
                <div className="border border-border p-4 bg-card">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Account Data</span>
                    <span className="font-mono text-sm text-primary">Active + 3 years</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Retained while your account is active and for up to 3 years after account closure for legal and business purposes</p>
                </div>

                <div className="border border-border p-4 bg-card">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Usage Data</span>
                    <span className="font-mono text-sm text-primary">Indefinite (anonymized)</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Aggregated and anonymized usage data may be retained indefinitely for analytics and service improvement</p>
                </div>

                <div className="border border-border p-4 bg-card">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Communication Records</span>
                    <span className="font-mono text-sm text-primary">5 years</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Customer support communications retained for 5 years</p>
                </div>

                <div className="border border-border p-4 bg-card">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Financial Records</span>
                    <span className="font-mono text-sm text-primary">7 years</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Payment and billing information retained for 7 years as required by law</p>
                </div>

                <div className="border border-border p-4 bg-card">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Communication Data</span>
                    <span className="font-mono text-sm text-primary">Until opt-out</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Contact information for communication purposes retained until you opt out</p>
                </div>
              </div>

              <p className="text-muted-foreground mt-6">
                When we no longer need your personal information, we securely delete or anonymize it in accordance with our data retention policy.
              </p>
            </section>

            {/* Section 6: Your Rights and Choices */}
            <section id="rights" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">06</span>
                  <h2 className="text-2xl font-bold">Your Rights and Choices</h2>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                You have several rights regarding your personal information:
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Access and Portability</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>Request a copy of the personal information we hold about you</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Export your data in a machine-readable format</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Correction and Updates</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>Update your account information and preferences through your account settings</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Request correction of inaccurate or incomplete information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Deletion</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>Request deletion of your personal information (subject to legal retention requirements)</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Close your account and request data deletion</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Communication Preferences</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>Opt out of notification emails using the unsubscribe link in our emails</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Update your communication preferences in your account settings</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Contact us to opt out of all non-essential communications</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Cookie Preferences</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>Manage cookie settings through your browser preferences</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Opt out of analytics cookies while maintaining essential functionality</li>
                  </ul>
                </div>
              </div>

              <p className="text-muted-foreground mt-6">
                To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </section>

            {/* Section 7: International Data Transfers */}
            <section id="transfers" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">07</span>
                  <h2 className="text-2xl font-bold">International Data Transfers</h2>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                Our Service is hosted and operated in the United States. If you are located outside the United States, please be aware that information we collect will be transferred to and processed in the United States.
              </p>

              <p className="text-muted-foreground mb-4">
                For users in the European Economic Area (EEA), United Kingdom, or Switzerland, we ensure appropriate safeguards are in place for international data transfers, including:
              </p>

              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex gap-3"><span className="text-primary">-</span>Standard Contractual Clauses approved by the European Commission</li>
                <li className="flex gap-3"><span className="text-primary">-</span>Adequacy decisions by the European Commission</li>
                <li className="flex gap-3"><span className="text-primary">-</span>Other lawful transfer mechanisms as approved by relevant data protection authorities</li>
              </ul>

              <p className="text-muted-foreground">
                By using our Service, you consent to the transfer of your information to the United States and other countries where we operate.
              </p>
            </section>

            {/* Section 8: Children's Privacy */}
            <section id="children" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">08</span>
                  <h2 className="text-2xl font-bold">Children's Privacy</h2>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">
                Our Service is designed for businesses and is not intended for children under the age of 16. We do not knowingly collect personal information from children under 16.
              </p>

              <p className="text-muted-foreground">
                If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal information from a child under 16 without parental consent, we will take steps to delete that information from our servers.
              </p>
            </section>

            {/* Section 9: Changes to This Policy */}
            <section id="changes" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">09</span>
                  <h2 className="text-2xl font-bold">Changes to This Privacy Policy</h2>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.
              </p>

              <p className="text-muted-foreground mb-4">
                When we make material changes to this Privacy Policy, we will:
              </p>

              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex gap-3"><span className="text-primary">-</span>Update the "Last Updated" date at the top of this policy</li>
                <li className="flex gap-3"><span className="text-primary">-</span>Notify you via email or through a prominent notice on our Service</li>
                <li className="flex gap-3"><span className="text-primary">-</span>Provide you with the opportunity to review the changes before they take effect</li>
              </ul>

              <p className="text-muted-foreground">
                Your continued use of our Service after any changes to this Privacy Policy will constitute your acceptance of such changes.
              </p>
            </section>

            {/* Section 10: Contact Us */}
            <section id="contact" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">10</span>
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>

              <div className="space-y-6">
                <div className="border border-border p-6 bg-card">
                  <h3 className="text-lg font-bold mb-4 text-foreground">Privacy Officer</h3>
                  <div className="space-y-2 text-muted-foreground font-mono text-sm">
                    <p>Streaml, Inc.</p>
                    <p>Email: <a href="mailto:vivian@streaml.app" className="text-primary hover:underline">vivian@streaml.app</a></p>
                    <p>Subject Line: Privacy Policy Inquiry</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    We will respond to your inquiry within 30 days of receipt. For urgent privacy concerns, please indicate "URGENT" in your subject line.
                  </p>
                </div>

                <div className="border border-border p-6 bg-card">
                  <h3 className="text-lg font-bold mb-4 text-foreground">Data Protection Officer (EU/UK Users)</h3>
                  <p className="text-muted-foreground mb-2">
                    If you are located in the European Union or United Kingdom, you may also contact our Data Protection Officer:
                  </p>
                  <p className="font-mono text-sm">
                    Email: <a href="mailto:vivian@streaml.app" className="text-primary hover:underline">vivian@streaml.app</a>
                  </p>
                </div>

                <div className="border border-primary/30 bg-primary/5 p-6">
                  <h3 className="text-lg font-bold mb-4 text-foreground">Supervisory Authority</h3>
                  <p className="text-muted-foreground">
                    If you are located in the EEA, UK, or Switzerland, you have the right to lodge a complaint with your local data protection authority if you believe we have violated your privacy rights.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <img src="/favicon.png" alt="Streaml" className="w-6 h-6" />
            <span className="font-mono-tech text-sm font-bold tracking-wider">Streaml, Inc</span>
          </Link>
          <div className="flex gap-8 text-xs font-mono-tech text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
