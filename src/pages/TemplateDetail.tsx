import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams, Redirect } from "wouter";
import { trackEvent } from "@/lib/analytics";
import { useSEO } from "@/hooks/useSEO";
import { Navigation } from "@/components/Navigation";
import { getTemplateBySlug } from "@/lib/templates";
import { useUtmUrl } from "@/hooks/useUtmUrl";

export default function TemplateDetail() {
  const { slug } = useParams<{ slug: string }>();
  const tpl = getTemplateBySlug(slug);
  const calendlyUrl = useUtmUrl("https://calendly.com/yirancai00/30min");

  useSEO({
    title: tpl
      ? `Streaml | ${tpl.title}`
      : "Streaml | Template Not Found",
    description: tpl?.description ?? "",
    canonicalPath: `/templates/${slug}`,
    keywords: tpl
      ? `${tpl.title}, ${tpl.category}, AI agent workflow, automation template`
      : "",
  });

  if (!tpl) return <Redirect to="/templates" />;

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] overflow-x-hidden font-sans selection:bg-[#E63946]/20">
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
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8"
            >
              <Link
                href="/templates"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Templates
              </Link>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              <span className="px-3 py-1 text-xs font-mono font-bold tracking-wider uppercase bg-[#FFB703] text-[#1A1A1A]">
                {tpl.category}
              </span>
              {tpl.departments.map((d) => (
                <span
                  key={d}
                  className="px-3 py-1 text-xs font-mono font-bold tracking-wider uppercase border-2 border-[#1A1A1A]"
                >
                  {d}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] mb-6 max-w-4xl"
            >
              {tpl.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg md:text-xl text-[#4A4A4A] max-w-2xl leading-relaxed"
            >
              {tpl.description}
            </motion.p>

            {/* Integrations */}
            {tpl.integrations && tpl.integrations.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#4A4A4A]">
                  Integrations:
                </span>
                {tpl.integrations.map((int) => (
                  <span
                    key={int}
                    className="px-3 py-1 text-xs font-mono tracking-wide uppercase border-2 border-[#1A1A1A]/20 bg-white"
                  >
                    {int}
                  </span>
                ))}
              </motion.div>
            )}
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1A1A1A]" />
        </section>

        {/* ── Challenge ── */}
        <section
          className="py-16 md:py-24"
          style={{ borderTop: "4px solid #1A1A1A" }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-3 py-1 mb-6 text-xs font-mono font-bold tracking-wider uppercase bg-[#E63946] text-white">
                  CHALLENGE
                </span>
                <p className="text-lg md:text-xl leading-relaxed text-[#4A4A4A]">
                  {tpl.challenge}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Solution ── */}
        <section
          className="py-16 md:py-24"
          style={{ backgroundColor: "#1D3557", borderTop: "4px solid #1A1A1A" }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-3 py-1 mb-6 text-xs font-mono font-bold tracking-wider uppercase bg-[#FFB703] text-[#1A1A1A]">
                  SOLUTION
                </span>
                <p className="text-lg md:text-xl leading-relaxed text-white/80">
                  {tpl.solution}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── How It Works (Steps) ── */}
        <section
          className="py-16 md:py-24"
          style={{ borderTop: "4px solid #1A1A1A" }}
        >
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-16"
            >
              HOW IT WORKS
            </motion.h2>

            <div className="max-w-3xl space-y-12">
              {tpl.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border-2 border-[#1A1A1A] bg-[#FFB703] text-[#1A1A1A] font-mono font-bold text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">
                      {step.heading}
                    </h3>
                    <p className="text-[#4A4A4A] leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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
                READY TO
                <br />
                <span className="text-[#FFB703]">DEPLOY THIS WORKFLOW?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-white/70 max-w-xl mb-10"
              >
                Talk to our team about getting this agent workflow running for
                your organisation.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3 font-medium text-sm transition-all duration-200 bg-[#E63946] text-white border-2 border-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_white]"
                  style={{ fontFamily: "'Cabin', system-ui, sans-serif" }}
                  onClick={() => trackEvent("cta_book_demo", { location: "template_detail" })}
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/templates"
                  className="inline-flex items-center gap-3 px-8 py-3 font-medium text-sm transition-all duration-200 bg-transparent text-white border-2 border-white/40 hover:border-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_rgba(255,255,255,0.2)]"
                  style={{ fontFamily: "'Cabin', system-ui, sans-serif" }}
                >
                  Browse More Templates
                  <ArrowRight className="w-4 h-4" />
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
