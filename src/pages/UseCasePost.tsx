import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { getUseCaseBySlug, formatDate, type UseCase } from "@/lib/use-cases";
import MarkdownContent from "@/components/MarkdownContent";

export default function UseCasePost() {
  const params = useParams();
  const slug = params.slug as string;
  const [useCase, setUseCase] = useState<UseCase | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useSEO({
    title: useCase ? `${useCase.title} | Streaml Use Cases` : "Use Case | Streaml",
    description: useCase?.excerpt || "Discover how enterprises deploy AI agent systems with Streaml.",
    canonicalPath: `/use-cases/${slug}`,
    keywords: useCase?.tags?.join(", ") || "AI use cases, agent infrastructure, enterprise AI",
  });

  useEffect(() => {
    async function loadUseCase() {
      if (!slug) {
        setError(true);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(false);

      try {
        const fetched = await getUseCaseBySlug(slug);
        if (fetched) {
          setUseCase(fetched);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error loading use case:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadUseCase();
  }, [slug]);

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

          <Link href="/use-cases">
            <a className="flex items-center gap-2 text-sm font-medium text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Use Cases</span>
            </a>
          </Link>
        </div>
      </nav>

      <main>
        {loading ? (
          <div className="container mx-auto px-6 py-24 text-center">
            <p className="text-xl text-[#4A4A4A]">Loading use case...</p>
          </div>
        ) : error || !useCase ? (
          <div className="container mx-auto px-6 py-24 text-center">
            <h1 className="text-4xl font-bold mb-6">Use Case Not Found</h1>
            <p className="text-xl text-[#4A4A4A] mb-8">
              Sorry, we couldn't find the use case you're looking for.
            </p>
            <Link href="/use-cases">
              <a className="neo-btn-primary inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Use Cases</span>
              </a>
            </Link>
          </div>
        ) : (
          <>
            {/* Article Header */}
            <section className="py-16 md:py-24 relative">
              <div className="absolute inset-0 neo-grid opacity-30"></div>

              <div className="container mx-auto px-6 relative z-10">
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-4xl mx-auto"
                >
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-6 mb-8 text-sm font-mono font-bold text-[#4A4A4A] tracking-wider uppercase">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{formatDate(useCase.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      <span>{useCase.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{useCase.readingTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
                    {useCase.title}
                  </h1>

                  {/* Tags */}
                  {useCase.tags && useCase.tags.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-8">
                      {useCase.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-2 text-xs font-mono font-bold bg-[#E5E5E5] text-[#1A1A1A] border-2 border-[#1A1A1A]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Excerpt */}
                  <p className="text-xl md:text-2xl text-[#4A4A4A] leading-relaxed mb-12 pb-12 border-b-4 border-[#1A1A1A]">
                    {useCase.excerpt}
                  </p>
                </motion.article>
              </div>
            </section>

            {/* Article Content */}
            <section className="py-12 md:py-16 relative">
              <div className="container mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="max-w-4xl mx-auto"
                >
                  <MarkdownContent content={useCase.content} />
                </motion.div>
              </div>
            </section>

            {/* Back to Use Cases CTA */}
            <section
              className="py-16 md:py-24 relative"
              style={{
                borderTop: "4px solid #1A1A1A",
                backgroundColor: "#FAFAFA"
              }}
            >
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Explore More Use Cases
                  </h2>
                  <p className="text-lg text-[#4A4A4A] mb-8">
                    See how other enterprises are deploying AI agent systems with Streaml.
                  </p>
                  <Link href="/use-cases">
                    <a className="neo-btn-primary inline-flex items-center gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back to Use Cases</span>
                    </a>
                  </Link>
                </div>
              </div>
            </section>
          </>
        )}
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
