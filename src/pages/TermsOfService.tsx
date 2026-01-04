import { motion } from "framer-motion";
import { Terminal, ChevronLeft, FileText, UserCheck, Shield, CreditCard, Scale, Database, AlertTriangle, Gavel, Globe, Bell, Mail } from "lucide-react";
import { Link } from "wouter";

export default function TermsOfService() {
  const sections = [
    { id: "acceptance", title: "Acceptance of Terms", icon: UserCheck },
    { id: "service", title: "Description of Service", icon: Terminal },
    { id: "account", title: "Account Registration and Security", icon: Shield },
    { id: "acceptable-use", title: "Acceptable Use Policy", icon: FileText },
    { id: "payment", title: "Subscription and Payment", icon: CreditCard },
    { id: "ip", title: "Intellectual Property Rights", icon: Scale },
    { id: "content", title: "User Content and Data", icon: Database },
    { id: "disclaimers", title: "Disclaimers and Limitations", icon: AlertTriangle },
    { id: "indemnification", title: "Indemnification", icon: Shield },
    { id: "termination", title: "Termination", icon: AlertTriangle },
    { id: "governing-law", title: "Governing Law and Disputes", icon: Gavel },
    { id: "changes", title: "Changes to Terms", icon: Bell },
    { id: "contact", title: "Contact Information", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl shadow-lg shadow-primary/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 cursor-pointer group">
            <img src="/favicon.png" alt="Streaml" className="w-10 h-10 group-hover:scale-105 transition-transform duration-300" />
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Streaml</span>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-3 py-1 mb-6 text-primary font-mono text-xs">
              <Gavel className="w-4 h-4" />
              LEGAL_DOCUMENT
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4">
              Terms of Service
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
                Welcome to Streaml. These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and Streaml, Inc. ("Streaml," "we," "us," or "our") governing your access to and use of our AI-powered sales automation platform, including all related websites, applications, and services (collectively, the "Service").
              </p>
              <div className="border border-destructive/30 bg-destructive/5 p-4 mt-6">
                <p className="text-sm font-mono text-destructive mb-2">IMPORTANT:</p>
                <p className="text-sm text-foreground">
                  By accessing or using our Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
                </p>
              </div>
            </div>

            {/* Section 1: Acceptance of Terms */}
            <section id="acceptance" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <UserCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">01</span>
                  <h2 className="text-2xl font-bold">Acceptance of Terms</h2>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                By creating an account, accessing, or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy, which is incorporated herein by reference.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Eligibility</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>You must be at least 18 years old to use the Service</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>You must have the legal capacity to enter into binding contracts</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>If using the Service on behalf of an organization, you represent that you have authority to bind that organization to these Terms</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Authorization</h3>
                  <p className="text-muted-foreground">
                    If you are using the Service on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind such entity to these Terms. In such cases, "you" and "your" will refer to such entity.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Description of Service */}
            <section id="service" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <Terminal className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">02</span>
                  <h2 className="text-2xl font-bold">Description of Service</h2>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                Streaml provides an AI-powered sales automation platform designed to help businesses:
              </p>

              <ul className="space-y-2 text-muted-foreground mb-8">
                <li className="flex gap-3"><span className="text-primary">-</span>Identify and qualify potential leads and prospects</li>
                <li className="flex gap-3"><span className="text-primary">-</span>Automate outreach and follow-up communications</li>
                <li className="flex gap-3"><span className="text-primary">-</span>Manage customer relationships and sales pipelines</li>
                <li className="flex gap-3"><span className="text-primary">-</span>Generate personalized sales content using artificial intelligence</li>
                <li className="flex gap-3"><span className="text-primary">-</span>Analyze sales performance and optimize strategies</li>
              </ul>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Service Availability</h3>
                  <p className="text-muted-foreground">
                    We strive to maintain high availability of our Service but do not guarantee uninterrupted access. We may modify, suspend, or discontinue any aspect of the Service at any time, with or without notice.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Third-Party Integrations</h3>
                  <p className="text-muted-foreground">
                    The Service may integrate with third-party platforms and services. Your use of such integrations is subject to the terms and policies of those third parties.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Account Registration and Security */}
            <section id="account" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">03</span>
                  <h2 className="text-2xl font-bold">Account Registration and Security</h2>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Account Creation</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>You must provide accurate, complete, and current information during registration</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>You are responsible for maintaining the accuracy of your account information</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>One person or entity may not maintain multiple free accounts</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Account Security</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>You are responsible for safeguarding your account credentials</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>You must notify us immediately of any unauthorized access or security breach</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>You are liable for all activities that occur under your account</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>We recommend enabling two-factor authentication when available</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Account Sharing</h3>
                  <p className="text-muted-foreground">
                    Account credentials may not be shared with third parties. Each user must have their own account with appropriate subscription level.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Acceptable Use Policy */}
            <section id="acceptable-use" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">04</span>
                  <h2 className="text-2xl font-bold">Acceptable Use Policy</h2>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                You agree to use the Service in compliance with all applicable laws and regulations. You shall not:
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Prohibited Activities</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>Use the Service for any unlawful purpose or to violate any laws</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Send unsolicited commercial communications (spam) in violation of applicable laws</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Impersonate any person or entity or misrepresent your affiliation</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Attempt to gain unauthorized access to any part of the Service</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Use automated systems to access the Service in a manner that exceeds reasonable use</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Reverse engineer, decompile, or disassemble any aspect of the Service</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Remove, alter, or obscure any proprietary notices on the Service</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Content Restrictions</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>You may not upload or transmit content that is unlawful, harmful, threatening, abusive, or defamatory</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>You may not use the Service to distribute malware or other harmful code</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>You are responsible for ensuring your content does not infringe third-party rights</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Compliance with Anti-Spam Laws</h3>
                  <p className="text-muted-foreground">
                    You agree to comply with all applicable anti-spam laws, including CAN-SPAM, GDPR, and CASL. You are solely responsible for obtaining necessary consents before sending communications through our Service.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Subscription and Payment */}
            <section id="payment" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">05</span>
                  <h2 className="text-2xl font-bold">Subscription and Payment</h2>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Subscription Plans</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>Access to certain features of the Service requires a paid subscription</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Subscription plans and pricing are available on our website</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>We reserve the right to modify pricing with reasonable notice</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Billing</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>Subscriptions are billed in advance on a monthly or annual basis</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>All fees are non-refundable except as expressly stated in these Terms</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>You authorize us to charge your payment method for all applicable fees</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Failed payments may result in suspension or termination of your account</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Free Trials</h3>
                  <p className="text-muted-foreground">
                    We may offer free trial periods. At the end of the trial, your account will automatically convert to a paid subscription unless you cancel before the trial ends.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Cancellation</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>You may cancel your subscription at any time through your account settings</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Cancellation takes effect at the end of the current billing period</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>No refunds are provided for partial billing periods</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6: Intellectual Property Rights */}
            <section id="ip" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <Scale className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">06</span>
                  <h2 className="text-2xl font-bold">Intellectual Property Rights</h2>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Streaml Ownership</h3>
                  <p className="text-muted-foreground">
                    The Service and all related technology, including software, algorithms, designs, graphics, and documentation, are owned by Streaml and protected by intellectual property laws. Nothing in these Terms grants you any rights to our intellectual property except the limited license to use the Service.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">License to Use Service</h3>
                  <p className="text-muted-foreground">
                    Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your internal business purposes during your subscription period.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Restrictions</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>You may not copy, modify, or create derivative works of the Service</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>You may not sublicense, sell, or transfer your access to the Service</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>You may not use our trademarks without prior written consent</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Feedback</h3>
                  <p className="text-muted-foreground">
                    If you provide feedback, suggestions, or ideas about the Service, you grant us a perpetual, irrevocable, worldwide license to use such feedback without compensation or attribution.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: User Content and Data */}
            <section id="content" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">07</span>
                  <h2 className="text-2xl font-bold">User Content and Data</h2>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Your Content</h3>
                  <p className="text-muted-foreground">
                    You retain ownership of all data, content, and materials you upload or input into the Service ("User Content"). You grant Streaml a limited license to use, process, and store User Content solely to provide and improve the Service.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Data Processing</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>We process your data in accordance with our Privacy Policy</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>We implement appropriate security measures to protect your data</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>We do not sell your data to third parties</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Data Portability</h3>
                  <p className="text-muted-foreground">
                    You may export your data from the Service at any time. Upon termination, you will have a limited period to export your data before it is deleted.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Responsibility for Content</h3>
                  <p className="text-muted-foreground">
                    You are solely responsible for the accuracy, quality, and legality of User Content and the means by which you acquired such content.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Disclaimers and Limitations */}
            <section id="disclaimers" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">08</span>
                  <h2 className="text-2xl font-bold">Disclaimers and Limitations</h2>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Disclaimer of Warranties</h3>
                  <div className="border border-border bg-card p-4">
                    <p className="text-sm text-muted-foreground uppercase">
                      THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Limitation of Liability</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>We are not liable for any indirect, incidental, special, consequential, or punitive damages</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Our total liability shall not exceed the amounts paid by you in the twelve months preceding the claim</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>We are not responsible for any loss of data, profits, or business opportunities</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">AI-Generated Content</h3>
                  <p className="text-muted-foreground">
                    The Service uses artificial intelligence to generate content and recommendations. We do not guarantee the accuracy, completeness, or appropriateness of AI-generated content. You are responsible for reviewing and verifying all AI-generated content before use.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Third-Party Services</h3>
                  <p className="text-muted-foreground">
                    We are not responsible for any third-party services integrated with or linked from the Service. Your use of third-party services is at your own risk.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Indemnification */}
            <section id="indemnification" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">09</span>
                  <h2 className="text-2xl font-bold">Indemnification</h2>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                You agree to indemnify, defend, and hold harmless Streaml, its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from:
              </p>

              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3"><span className="text-primary">-</span>Your use of the Service</li>
                <li className="flex gap-3"><span className="text-primary">-</span>Your violation of these Terms</li>
                <li className="flex gap-3"><span className="text-primary">-</span>Your violation of any applicable laws or regulations</li>
                <li className="flex gap-3"><span className="text-primary">-</span>Your User Content or any content you transmit through the Service</li>
                <li className="flex gap-3"><span className="text-primary">-</span>Your infringement of any third-party rights</li>
              </ul>
            </section>

            {/* Section 10: Termination */}
            <section id="termination" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">10</span>
                  <h2 className="text-2xl font-bold">Termination</h2>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Termination by You</h3>
                  <p className="text-muted-foreground">
                    You may terminate your account at any time by canceling your subscription and closing your account through the account settings.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Termination by Streaml</h3>
                  <p className="text-muted-foreground mb-3">
                    We may suspend or terminate your access to the Service at any time, with or without cause, including if:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>You violate these Terms</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>You fail to pay applicable fees</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Your use of the Service poses a security risk</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>We are required to do so by law</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Effect of Termination</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span>Upon termination, your right to use the Service immediately ceases</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>You will have 30 days to export your data after termination</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>We may delete your data after the export period expires</li>
                    <li className="flex gap-3"><span className="text-primary">-</span>Provisions that should survive termination will remain in effect</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 11: Governing Law and Disputes */}
            <section id="governing-law" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <Gavel className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">11</span>
                  <h2 className="text-2xl font-bold">Governing Law and Disputes</h2>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Governing Law</h3>
                  <p className="text-muted-foreground">
                    These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Dispute Resolution</h3>
                  <p className="text-muted-foreground mb-3">
                    Any disputes arising from these Terms or your use of the Service shall be resolved through:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary">-</span><strong className="text-foreground">Informal Resolution:</strong> First, by contacting us to attempt to resolve the dispute informally</li>
                    <li className="flex gap-3"><span className="text-primary">-</span><strong className="text-foreground">Arbitration:</strong> If informal resolution fails, disputes will be resolved through binding arbitration</li>
                    <li className="flex gap-3"><span className="text-primary">-</span><strong className="text-foreground">Class Action Waiver:</strong> You waive any right to participate in class action lawsuits or class-wide arbitration</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">Jurisdiction</h3>
                  <p className="text-muted-foreground">
                    For any matters not subject to arbitration, you consent to the exclusive jurisdiction of the state and federal courts located in Delaware.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 12: Changes to Terms */}
            <section id="changes" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">12</span>
                  <h2 className="text-2xl font-bold">Changes to Terms</h2>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">
                We may update these Terms from time to time. When we make material changes:
              </p>

              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex gap-3"><span className="text-primary">-</span>We will update the "Last Updated" date at the top of this page</li>
                <li className="flex gap-3"><span className="text-primary">-</span>We will notify you via email or through a prominent notice on the Service</li>
                <li className="flex gap-3"><span className="text-primary">-</span>Changes will take effect 30 days after notice unless otherwise specified</li>
              </ul>

              <p className="text-muted-foreground">
                Your continued use of the Service after changes take effect constitutes acceptance of the updated Terms. If you do not agree to the changes, you must stop using the Service.
              </p>
            </section>

            {/* Section 13: Contact Information */}
            <section id="contact" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-white/5">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs text-primary">13</span>
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>

              <div className="border border-border p-6 bg-card">
                <h3 className="text-lg font-bold mb-4 text-foreground">Legal Department</h3>
                <div className="space-y-2 text-muted-foreground font-mono text-sm">
                  <p>Streaml, Inc.</p>
                  <p>Email: <a href="mailto:vivian@streaml.app" className="text-primary hover:underline">vivian@streaml.app</a></p>
                  <p>Subject Line: Terms of Service Inquiry</p>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  We will respond to your inquiry within 30 business days.
                </p>
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
