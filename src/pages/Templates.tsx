import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { Navigation } from "@/components/Navigation";
import { templates, categories, type Category } from "@/lib/templates";

/* ------------------------------------------------------------------ */
/*  JSON-LD                                                            */
/* ------------------------------------------------------------------ */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Streaml Templates",
  description:
    "Jumpstart your automation with pre-built agent workflow templates from Streaml.",
  url: "https://streaml.app/templates",
  publisher: {
    "@type": "Organization",
    name: "Streaml",
    url: "https://streaml.app",
    logo: "https://streaml.app/favicon.png",
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Templates() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");

  useSEO({
    title: "Streaml | Templates — Pre-Built Agent Workflows",
    description:
      "Jumpstart your automation with pre-built agent workflow templates. Browse by category and deploy in minutes.",
    canonicalPath: "/templates",
    keywords:
      "AI agent templates, workflow templates, automation templates, sales automation, marketing automation, HR automation",
  });

  const filtered = useMemo(() => {
    return templates.filter((t) => {
      const matchesCategory =
        activeCategory === "All" || t.category === activeCategory;
      const matchesSearch =
        search.trim() === "" ||
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] overflow-x-hidden font-sans selection:bg-[#E63946]/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      <main>
        {/* ── Hero ── */}
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
              /// TEMPLATES
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] mb-6"
            >
              FIND YOUR
              <br />
              TEMPLATE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg md:text-xl text-[#4A4A4A] max-w-2xl leading-relaxed"
            >
              Jumpstart your building process with pre-built agent workflow
              templates from Streaml.
            </motion.p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1A1A1A]" />
        </section>

        {/* ── Filters ── */}
        <section
          className="py-8 md:py-12 sticky top-16 z-30"
          style={{
            backgroundColor: "#FAFAFA",
            borderBottom: "2px solid #1A1A1A",
          }}
        >
          <div className="container mx-auto px-6 space-y-6">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A4A4A]" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search templates..."
                className="w-full pl-10 pr-4 py-2.5 text-sm border-2 border-[#1A1A1A] bg-white focus:outline-none focus:ring-2 focus:ring-[#1D3557] focus:ring-offset-1 placeholder:text-[#999]"
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-1.5 text-xs font-mono font-bold tracking-wider uppercase border-2 border-[#1A1A1A] transition-all duration-150"
                  style={{
                    backgroundColor:
                      activeCategory === cat ? "#1A1A1A" : "transparent",
                    color: activeCategory === cat ? "#FAFAFA" : "#1A1A1A",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Template Grid ── */}
        <section aria-label="Templates" className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-lg text-[#4A4A4A]">
                  No templates match your filters.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("All");
                    setSearch("");
                  }}
                  className="mt-4 text-sm font-medium text-[#1D3557] underline underline-offset-4 hover:text-[#1A1A1A] transition-colors"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((tpl, i) => (
                  <motion.div
                    key={tpl.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={`/templates/${tpl.slug}`}
                      className="block group h-full"
                    >
                      <article className="neo-card p-6 md:p-8 h-full flex flex-col">
                        {/* Category badge */}
                        <span className="self-start px-3 py-1 mb-4 text-xs font-mono font-bold tracking-wider uppercase bg-[#FFB703] text-[#1A1A1A]">
                          {tpl.category}
                        </span>

                        <h2 className="text-lg md:text-xl font-bold mb-3 group-hover:text-[#1D3557] transition-colors">
                          {tpl.title}
                        </h2>

                        <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6 flex-1">
                          {tpl.description}
                        </p>

                        {/* Integration tags */}
                        {tpl.integrations && tpl.integrations.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {tpl.integrations.map((int) => (
                              <span
                                key={int}
                                className="px-2 py-0.5 text-[11px] font-mono tracking-wide uppercase border border-[#1A1A1A]/20 text-[#4A4A4A]"
                              >
                                {int}
                              </span>
                            ))}
                          </div>
                        )}

                        <span className="inline-flex items-center gap-2 text-sm font-medium text-[#1D3557] group-hover:gap-3 transition-all">
                          View template
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </article>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-20 md:py-28 relative overflow-hidden"
          style={{
            backgroundColor: "#1D3557",
            borderTop: "4px solid #1A1A1A",
          }}
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
                NEED A CUSTOM
                <br />
                <span className="text-[#FFB703]">WORKFLOW?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-white/70 max-w-xl mb-10"
              >
                Talk to our team about building custom agent workflows tailored
                to your specific needs.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
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
          <span className="text-sm font-bold tracking-wider">
            Streaml, Inc.
          </span>
          <div className="flex gap-8 text-xs text-[#4A4A4A]">
            <a
              href="/privacy-policy"
              className="hover:text-[#1A1A1A] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="hover:text-[#1A1A1A] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
