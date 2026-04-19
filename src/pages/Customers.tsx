import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { Navigation } from "@/components/Navigation";
import { useUtmUrl } from "@/hooks/useUtmUrl";

const caseStudies = [
  {
    slug: "gtm-series-a-startup",
    tag: "GO-TO-MARKET",
    title: "Go-To-Market for a Series A Startup",
    subtitle:
      "Streaml deployed a network of GTM agents to help a Series A startup scale growth across creator outreach, content, pipeline, and CRM.",
    cover: "/use-cases/gtm-cover.jpg",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Streaml Use Cases",
  description:
    "See how companies deploy Streaml's agent networks to automate go-to-market, sales pipeline, and CRM workflows.",
  url: "https://streaml.app/use-cases",
  publisher: {
    "@type": "Organization",
    name: "Streaml",
    url: "https://streaml.app",
    logo: "https://streaml.app/favicon.png",
  },
};

export default function Customers() {
  useSEO({
    title: "Streaml | Use Cases — Agent-Powered Growth Stories",
    description:
      "See how companies deploy Streaml's agent networks to automate go-to-market, sales pipeline, and CRM workflows at scale.",
    canonicalPath: "/use-cases",
    keywords:
      "AI agents, customer stories, case studies, GTM automation, agent workflows, sales automation, CRM automation, creator outreach",
  });

  const calendlyUrl = useUtmUrl("https://calendly.com/yirancai00/30min");

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] overflow-x-hidden font-sans selection:bg-[#E63946]/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 neo-grid opacity-50" />

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
              /// USE CASES
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] mb-6"
            >
              USE CASES
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

        {/* Case Study Cards Grid */}
        <section
          aria-label="Use cases"
          className="py-16 md:py-24"
          style={{ borderTop: "4px solid #1A1A1A" }}
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, i) => (
                <motion.div
                  key={study.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={`/use-cases/${study.slug}`}
                    className="block group"
                  >
                    <article className="neo-card overflow-hidden p-0">
                      {/* Cover Image */}
                      <div className="relative overflow-hidden aspect-[16/9]">
                        <img
                          src={study.cover}
                          alt={study.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-mono font-bold tracking-wider uppercase bg-[#FFB703] text-[#1A1A1A]">
                          {study.tag}
                        </span>
                      </div>

                      {/* Card Body */}
                      <div className="p-6 md:p-8">
                        <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-[#1D3557] transition-colors">
                          {study.title}
                        </h2>
                        <p className="text-[#4A4A4A] text-sm leading-relaxed mb-4">
                          {study.subtitle}
                        </p>
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-[#1D3557] group-hover:gap-3 transition-all">
                          Read story
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
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
              >
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3 font-medium text-sm transition-all duration-200 bg-[#E63946] text-white border-2 border-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_white]"
                  style={{ fontFamily: "'Cabin', system-ui, sans-serif" }}
                >
                  Talk to Founder
                  <ArrowRight className="w-4 h-4" />
                </a>
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
