import { motion } from "framer-motion";
import { ArrowRight, Users, Megaphone, MessageSquare, Database, BarChart3 } from "lucide-react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { Navigation } from "@/components/Navigation";

const caseStudy = {
  tag: "GO-TO-MARKET",
  title: "Go-To-Market for a Series A Startup",
  subtitle:
    "Streaml deployed a network of GTM agents to help a Series A startup scale growth.",
  highlights: [
    {
      icon: <Megaphone className="w-5 h-5" />,
      title: "Creator & Community Outreach",
      desc: "Agents identified relevant creators and communities, generated personalized outreach, and coordinated collaborations across platforms such as YouTube, X, TikTok, and LinkedIn. This helped the company increase product visibility and reach new audiences through creator-led distribution.",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Content & Social Engagement",
      desc: "Supported founder and company content by generating posts, managing engagement, and identifying topics that resonated with the company's target audience across social platforms.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Pipeline & Lead Management",
      desc: "Assisted with outbound and inbound workflows by identifying target accounts, qualifying incoming leads, and routing opportunities to the team—helping the startup build pipeline more efficiently.",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "CRM Automation",
      desc: "Helped maintain CRM hygiene by automatically logging interactions, updating contact records, tracking deal stages, and organizing inbound and outbound conversations.",
    },
  ],
  result:
    "By deploying specialized agents across these workflows, the company was able to scale GTM execution while keeping the team lean.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Streaml Customers",
  description:
    "See how companies deploy Streaml's agent networks to automate go-to-market, sales pipeline, and CRM workflows.",
  url: "https://streaml.app/customers",
  publisher: {
    "@type": "Organization",
    name: "Streaml",
    url: "https://streaml.app",
    logo: "https://streaml.app/favicon.png",
  },
  mainEntity: {
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.subtitle,
    author: {
      "@type": "Organization",
      name: "Streaml",
    },
    publisher: {
      "@type": "Organization",
      name: "Streaml",
      logo: {
        "@type": "ImageObject",
        url: "https://streaml.app/favicon.png",
      },
    },
    about: [
      "Go-To-Market Automation",
      "Creator Outreach",
      "Lead Management",
      "CRM Automation",
    ],
  },
};

export default function Customers() {
  useSEO({
    title: "Streaml | Customers — Agent-Powered Growth Stories",
    description:
      "See how companies deploy Streaml's agent networks to automate go-to-market, sales pipeline, and CRM workflows at scale.",
    canonicalPath: "/customers",
    keywords:
      "AI agents, customer stories, case studies, GTM automation, agent workflows, sales automation, CRM automation, creator outreach",
  });

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] overflow-x-hidden font-sans selection:bg-[#E63946]/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 neo-grid opacity-50" />

          {/* Decorative blocks */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-20 right-[-5%] w-[30%] h-[40vh] bg-[#1D3557] hidden lg:block"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-12 right-[20%] w-16 h-16 bg-[#E63946] hidden lg:block"
          />

          <div className="container mx-auto px-6 relative z-10">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block px-3 py-1 mb-6 text-xs font-mono font-bold tracking-wider uppercase border-2 border-[#1A1A1A]"
            >
              /// CUSTOMER STORIES
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] mb-6"
            >
              CUSTOMERS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg md:text-xl text-[#4A4A4A] max-w-2xl leading-relaxed"
            >
              See how companies deploy Streaml's agent networks to scale
              operations across go-to-market, sales, and beyond.
            </motion.p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1A1A1A]" />
        </section>

        {/* Case Study Card */}
        <section aria-label="Customer case studies" className="py-20 md:py-28" style={{ borderTop: "4px solid #1A1A1A" }}>
          <div className="container mx-auto px-6">
            <article aria-label={caseStudy.title}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="neo-card p-0 overflow-hidden hover:transform-none hover:shadow-none"
              style={{ border: "2px solid #1A1A1A" }}
            >
              {/* Card Header */}
              <header className="bg-[#1D3557] px-8 py-10 md:px-12 md:py-14">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-mono font-bold tracking-wider uppercase bg-[#FFB703] text-[#1A1A1A]">
                  {caseStudy.tag}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                  {caseStudy.title}
                </h2>
                <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
                  {caseStudy.subtitle}
                </p>
              </header>

              {/* Card Body — Highlights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {caseStudy.highlights.map((item, i) => (
                  <div
                    key={i}
                    className="p-8 md:p-10"
                    style={{
                      borderBottom: i < 2 ? "2px solid #1A1A1A" : undefined,
                      borderRight: i % 2 === 0 ? "2px solid #1A1A1A" : undefined,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`neo-index ${
                        i === 0 ? "neo-index-red" :
                        i === 1 ? "neo-index-yellow" :
                        i === 2 ? "neo-index-blue" :
                        "neo-index-red"
                      }`}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                    </div>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Card Footer — Result */}
              <div
                className="px-8 py-8 md:px-12 md:py-10 bg-[#FAFAFA] flex flex-col md:flex-row items-start md:items-center gap-4"
                style={{ borderTop: "2px solid #1A1A1A" }}
              >
                <BarChart3 className="w-6 h-6 text-[#E63946] shrink-0 mt-0.5 md:mt-0" />
                <p className="text-base font-medium leading-relaxed">
                  {caseStudy.result}
                </p>
              </div>
            </motion.div>
            </article>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-20 md:py-28 relative overflow-hidden"
          style={{ backgroundColor: "#1D3557", borderTop: "4px solid #1A1A1A" }}
        >
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute top-1/2 -translate-y-1/2 right-[10%] w-24 h-36 bg-[#E63946] hidden lg:block"
          />
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-10 right-[22%] w-16 h-16 bg-[#FFB703] hidden lg:block"
          />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white"
              >
                READY TO SCALE
                <br />
                <span className="text-[#FFB703]">YOUR OPERATIONS?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-white/70 max-w-xl mb-10"
              >
                Talk to our team about deploying agent networks for your
                workflows.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="https://calendly.com/yirancai00/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3 font-medium text-sm transition-all duration-200 bg-[#E63946] text-white border-2 border-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_white]"
                  style={{ fontFamily: "'Cabin', system-ui, sans-serif" }}
                >
                  Talk to Founder
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 px-6 py-3 font-medium text-sm transition-all duration-200 bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#1D3557]"
                  style={{ fontFamily: "'Cabin', system-ui, sans-serif" }}
                >
                  Back to Home
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="py-8"
        style={{ backgroundColor: "#FAFAFA", borderTop: "2px solid #1A1A1A" }}
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm font-bold tracking-wider">Streaml, Inc.</span>
          <div className="flex gap-8 text-xs text-[#4A4A4A]">
            <a href="/privacy-policy" className="hover:text-[#1A1A1A] transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-[#1A1A1A] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
