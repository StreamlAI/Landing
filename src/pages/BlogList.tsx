import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { getAllPosts, formatDate, type BlogPost } from "@/lib/blog";
import { Navigation } from "@/components/Navigation";

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useSEO({
    title: "Blog | Streaml",
    description: "Insights on AI infrastructure, agent systems, and the future of intelligent software.",
    canonicalPath: "/blog",
    keywords: "AI blog, agent infrastructure, AI systems, machine learning, transformers, AI architecture",
  });

  useEffect(() => {
    async function loadPosts() {
      setLoading(true);
      const allPosts = await getAllPosts();
      setPosts(allPosts);
      setLoading(false);
    }
    loadPosts();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] overflow-x-hidden font-sans selection:bg-[#E63946]/20">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative">
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
                BLOG
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                INSIGHTS ON
                <br />
                <span className="text-[#1D3557]">AI INFRASTRUCTURE</span>
              </h1>
              <p className="text-xl text-[#4A4A4A] leading-relaxed">
                Exploring the future of AI systems, agent architecture, and intelligent infrastructure.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
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
                <p className="text-xl text-[#4A4A4A]">Loading posts...</p>
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-[#4A4A4A]">No blog posts yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <a className="block neo-card p-8 h-full group">
                        {/* Date and Reading Time */}
                        <div className="flex items-center gap-4 mb-4 text-xs font-mono font-bold text-[#4A4A4A] tracking-wider uppercase">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readingTime}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-3 group-hover:text-[#1D3557] transition-colors">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag) => (
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
                          <span>Read Article</span>
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
