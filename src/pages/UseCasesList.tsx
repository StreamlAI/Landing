import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { getAllUseCases, formatDate, type UseCase } from "@/lib/use-cases";

export default function UseCasesList() {
  const [useCases, setUseCases] = useState<UseCase[]>([]);
  const [loading, setLoading] = useState(true);

  useSEO({
    title: "Use Cases | Streaml",
    description: "Discover how enterprises use Streaml to build production-grade AI agent systems across industries.",
    canonicalPath: "/use-cases",
    keywords: "AI use cases, agent infrastructure, enterprise AI, AI deployment, production AI systems, AI agent examples",
  });

  useEffect(() => {
    async function loadUseCases() {
      setLoading(true);
      const allUseCases = await getAllUseCases();
      setUseCases(allUseCases);
      setLoading(false);
    }
    loadUseCases();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] overflow-x-hidden font-sans selection:bg-[#E63946]/20">
      {/* Navigation */}
      <nav
        className="h-20"
        style={{
          backgroundColor: "#FAFAFA",
          borderBottom: "2px solid #1A1A1A",
        }}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-3 cursor-pointer group">
              <img
                src="/favicon.png"
                alt="Streaml"
                className="w-8 h-8 group-hover:scale-105 transition-transform duration-200"
              />
              <span className="text-xl font-bold tracking-tight">Streaml</span>
            </a>
          </Link>

          <Link href="/">
            <a className="text-sm font-medium text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors">
              &larr; Back to Home
            </a>
          </Link>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="py-24 md:py-32 relative">
          <div className="absolute inset-0 neo-grid opacity-30"></div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-wide uppercase mb-6"
                style={{
                  border: "2px solid #1A1A1A",
                  backgroundColor: "#FAFAFA",
                }}
              >
                USE CASES
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                REAL-WORLD
                <br />
                <span className="text-[#1D3557]">AI AGENT DEPLOYMENTS</span>
              </h1>
              <p className="text-xl text-[#4A4A4A] leading-relaxed">
                See how enterprises leverage Streaml to build and deploy production AI agent systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section
          className="py-24 md:py-32 relative"
          style={{
            borderTop: "4px solid #1A1A1A",
            backgroundColor: "#FAFAFA"
          }}
        >
          <div className="container mx-auto px-6">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-xl text-[#4A4A4A]">Loading use cases...</p>
              </div>
            ) : useCases.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-[#4A4A4A]">Use cases coming soon.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/use-cases/${useCase.slug}`}>
                      <a className="block neo-card p-8 h-full group">
                        {/* Date and Reading Time */}
                        <div className="flex items-center gap-4 mb-4 text-xs font-mono font-bold text-[#4A4A4A] tracking-wider uppercase">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(useCase.date)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{useCase.readingTime}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-3 group-hover:text-[#1D3557] transition-colors">
                          {useCase.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6">
                          {useCase.excerpt}
                        </p>

                        {/* Tags */}
                        {useCase.tags && useCase.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {useCase.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 text-xs font-mono font-bold bg-[#E5E5E5] text-[#1A1A1A]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Read More Link */}
                        <div className="flex items-center gap-2 text-[#E63946] font-bold text-sm group-hover:gap-3 transition-all">
                          <span>Read Use Case</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </a>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="py-8"
        style={{
          backgroundColor: "#FAFAFA",
          borderTop: "2px solid #1A1A1A",
        }}
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold tracking-wider">
              Streaml, Inc.
            </span>
          </div>

          <div className="flex gap-8 text-xs text-[#4A4A4A]">
            <Link href="/privacy-policy">
              <a className="hover:text-[#1A1A1A] transition-colors">
                Privacy Policy
              </a>
            </Link>
            <Link href="/terms-of-service">
              <a className="hover:text-[#1A1A1A] transition-colors">
                Terms of Service
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
