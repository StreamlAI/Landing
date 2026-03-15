import { motion } from "framer-motion";
import {
  ArrowRight,
  Network,
  RefreshCcw,
  Database,
  Zap,
  Cpu,
  Terminal,
  Activity,
  Server,
  Lock,
  Menu,
  X,
  Mail,
  Phone,
} from "lucide-react";
import { useState, useEffect } from "react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";
import { RedditIcon } from "@/components/icons/RedditIcon";
import { useSEO } from "@/hooks/useSEO";
import IntegrationWorkflow from "@/components/IntegrationWorkflow";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useSEO({
    title: "Streaml | The Execution and Optimization Layer for AI Agents",
    description: "Streaml is an AI agent runtime that combines tool connectivity with model optimization. Build production-grade AI systems with a single platform.",
    canonicalPath: "/",
    keywords: "AI agent runtime, execution layer, model optimization, model routing, inference optimization, AI infrastructure, agent tools, workflow orchestration",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] overflow-x-hidden font-sans selection:bg-[#E63946]/20">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
        style={{
          backgroundColor: "#FAFAFA",
          borderBottom: "2px solid #1A1A1A",
        }}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group">
            <img
              src="/favicon.png"
              alt="Streaml"
              className="w-8 h-8 group-hover:scale-105 transition-transform duration-200"
            />
            <span className="text-xl font-bold tracking-tight">
              Streaml
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-medium text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
            >
              Home
            </a>
            <a
              href="/blog"
              className="text-sm font-medium text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
            >
              Blog
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://calendly.com/yirancai00/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn-secondary flex items-center gap-2 group"
            >
              <Phone className="w-4 h-4" />
              <span>Book Demo</span>
            </a>

            <a
              href="http://linkedin.com/in/caivivian"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn-secondary flex items-center gap-2"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:vivian@streaml.app"
              className="neo-btn-secondary flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu panel */}
        <motion.div
          initial={false}
          animate={{
            height: mobileMenuOpen ? "auto" : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="md:hidden overflow-hidden"
          style={{
            backgroundColor: "#FAFAFA",
            borderBottom: mobileMenuOpen ? "2px solid #1A1A1A" : "none",
          }}
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors py-2"
            >
              Home
            </a>
            <a
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors py-2"
            >
              Blog
            </a>
            <a
              href="https://calendly.com/yirancai00/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn-primary flex items-center justify-center gap-2 mt-2"
            >
              <span>Schedule Call</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="http://linkedin.com/in/caivivian"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors py-2"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:vivian@streaml.app"
              className="flex items-center justify-center gap-2 text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors py-2"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
          </div>
        </motion.div>
      </nav>

      <main>
        {/* Hero Section - Neo-Geo Style */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 neo-grid opacity-50"></div>

          {/* Geometric Color Blocks */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-24 right-[-5%] w-[40%] h-[50vh] bg-[#1D3557] hidden lg:block"
          />
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[55vh] right-[5%] w-[25%] h-[25vh] bg-[#FFB703] hidden lg:block"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-24 right-[25%] w-20 h-20 bg-[#E63946] hidden lg:block"
          />

          {/* Bottom Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1A1A1A]"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-wide uppercase"
                  style={{
                    border: "2px solid #1A1A1A",
                    backgroundColor: "#FAFAFA",
                  }}
                >
                  <Zap className="w-3 h-3 text-[#E63946]" />
                  AI AGENT RUNTIME
                </span>
              </motion.div>

              {/* Headline */}
              <div className="space-y-2 mb-10">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.9]"
                >
                  THE EXECUTION &
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.9]"
                >
                  OPTIMIZATION LAYER
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.9] text-[#1D3557]"
                >
                  FOR AI AGENTS
                </motion.h1>
              </div>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-lg md:text-xl text-[#4A4A4A] max-w-lg mb-10 leading-relaxed"
              >
                Connect agents to real-world tools while optimizing model execution, routing, and performance.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="https://calendly.com/yirancai00/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn-primary flex items-center gap-3 group"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="mailto:vivian@streaml.app"
                  className="neo-btn-secondary flex items-center gap-3 group"
                >
                  Contact Us
                  <Mail className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section
          className="py-16 relative"
          style={{
            backgroundColor: "#FAFAFA",
            borderTop: "4px solid #1A1A1A",
            borderBottom: "4px solid #1A1A1A"
          }}
        >
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1A1A1A]">
                Trusted by Fortune 500 companies
              </h2>
            </motion.div>
          </div>
        </section>

        {/* Category Definition Section */}
        <section
          className="py-24 md:py-32 relative"
          style={{
            backgroundColor: "#FAFAFA"
          }}
        >
          <div className="absolute inset-0 neo-grid opacity-30"></div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                A NEW CATEGORY OF
                <br />
                <span className="text-[#1D3557]">AI INFRASTRUCTURE</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-[#4A4A4A] max-w-3xl mx-auto"
              >
                Most platforms connect agents to tools.
                <br />
                <span className="font-bold text-[#1A1A1A]">Streaml goes deeper.</span>
              </motion.p>
            </div>

            {/* Two Column Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="neo-block-blue p-10 md:p-12 md:border-r-4 md:border-[#1A1A1A] border-b-4 md:border-b-0"
                style={{ minHeight: "300px" }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Tool Connectivity Layer
                </h3>
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  Connect agents to APIs and tools
                </p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <Network className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Integration with external services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Terminal className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>API connectivity and authentication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Database className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Data source access</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="neo-block-yellow p-10 md:p-12"
                style={{ minHeight: "300px" }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A1A1A]">
                  Model Optimization Layer
                </h3>
                <p className="text-lg text-[#1A1A1A]/80 leading-relaxed mb-6">
                  Optimize model routing, inference, and cost
                </p>
                <ul className="space-y-3 text-[#1A1A1A]/70">
                  <li className="flex items-start gap-3">
                    <Cpu className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Intelligent model routing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Inference efficiency optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Activity className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Performance monitoring and tuning</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Integration Workflow Visualization */}
          <IntegrationWorkflow />
        </section>

        {/* Platform Section - 4 Cards */}
        <section
          id="platform"
          className="py-24 md:py-32 relative"
          style={{ borderTop: "4px solid #1A1A1A" }}
        >
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="mb-16">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block px-3 py-1 mb-4 text-xs font-mono font-bold tracking-wider uppercase border-2 border-[#1A1A1A]"
              >
                /// PLATFORM
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                EVERYTHING TEAMS NEED
                <br />
                <span className="text-[#1D3557]">TO SHIP AI AGENTS</span>
              </motion.h2>
            </div>

            {/* 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="neo-card p-10 relative group"
              >
                <div className="neo-index neo-index-blue absolute top-8 left-8">
                  01
                </div>
                <div className="pt-12">
                  <div className="mb-6">
                    <Network className="w-8 h-8 text-[#1A1A1A]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Tool Connectivity
                  </h3>
                  <p className="text-[#4A4A4A] text-base leading-relaxed">
                    Connect agents to APIs and tools. Access any service or data source your agents need to operate.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="neo-card p-10 relative group"
              >
                <div className="neo-index neo-index-red absolute top-8 left-8">
                  02
                </div>
                <div className="pt-12">
                  <div className="mb-6">
                    <Activity className="w-8 h-8 text-[#1A1A1A]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Workflow Orchestration
                  </h3>
                  <p className="text-[#4A4A4A] text-base leading-relaxed">
                    Orchestrate multi-step AI workflows. Chain together complex sequences of agent actions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="neo-card p-10 relative group"
              >
                <div className="neo-index neo-index-yellow absolute top-8 left-8">
                  03
                </div>
                <div className="pt-12">
                  <div className="mb-6">
                    <Cpu className="w-8 h-8 text-[#1A1A1A]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Model Routing
                  </h3>
                  <p className="text-[#4A4A4A] text-base leading-relaxed">
                    Optimize model routing and inference. Route requests to the best model for each task.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="neo-card p-10 relative group"
              >
                <div className="neo-index neo-index-blue absolute top-8 left-8">
                  04
                </div>
                <div className="pt-12">
                  <div className="mb-6">
                    <Server className="w-8 h-8 text-[#1A1A1A]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Production Runtime
                  </h3>
                  <p className="text-[#4A4A4A] text-base leading-relaxed">
                    Run reliable AI systems in production. Enterprise-grade infrastructure for agent deployment.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Streaml / Differentiation Section */}
        <section
          id="why-streaml"
          className="py-24 md:py-32 relative"
          style={{
            borderTop: "4px solid #1A1A1A",
            backgroundColor: "#FAFAFA"
          }}
        >
          <div className="absolute inset-0 neo-grid opacity-30"></div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-12"
              >
                WHY <span className="text-[#1D3557]">STREAML</span>
              </motion.h2>
            </div>

            {/* 2x2 Grid of Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-[#1D3557]">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Model Routing</h3>
                <p className="text-[#4A4A4A] leading-relaxed">
                  Intelligent routing to the optimal model for each task
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-[#FFB703]">
                  <Zap className="w-8 h-8 text-[#1A1A1A]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Inference Efficiency</h3>
                <p className="text-[#4A4A4A] leading-relaxed">
                  Optimize model inference for maximum performance
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-[#E63946]">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Execution Latency</h3>
                <p className="text-[#4A4A4A] leading-relaxed">
                  Reduce latency for faster agent response times
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center p-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-[#1A1A1A]">
                  <RefreshCcw className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Cost Optimization</h3>
                <p className="text-[#4A4A4A] leading-relaxed">
                  Control costs with intelligent resource allocation
                </p>
              </motion.div>
            </div>

            {/* Bottom Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-[#1A1A1A] max-w-3xl mx-auto">
                This makes AI systems faster, cheaper, and more reliable.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Section */}
        <section
          id="blog"
          className="py-24 md:py-32 relative"
          style={{
            borderTop: "4px solid #1A1A1A",
            backgroundColor: "#FAFAFA"
          }}
        >
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="mb-16">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block px-3 py-1 mb-4 text-xs font-mono font-bold tracking-wider uppercase border-2 border-[#1A1A1A]"
              >
                /// BLOG
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold tracking-tight"
              >
                FROM THE <span className="text-[#1D3557]">BLOG</span>
              </motion.h2>
            </div>

            {/* Blog Card and CTA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Featured Blog Post */}
              <motion.a
                href="/blog/beyond-transformers"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="neo-card p-8 block group"
              >
                <div className="mb-4">
                  <span className="text-xs font-mono font-bold text-[#4A4A4A] tracking-wider uppercase">
                    MAR 15, 2026
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#1D3557] transition-colors">
                  Beyond Transformers: Where the Next AI Paradigm Shift Might Come From
                </h3>
                <p className="text-[#4A4A4A] text-sm leading-relaxed">
                  In 2017, a single paper changed the trajectory of artificial intelligence. But every paradigm eventually hits its limits. What comes after Transformers?
                </p>
              </motion.a>

              {/* View All Blog CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-center h-full"
              >
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    More Insights on AI Infrastructure
                  </h3>
                  <p className="text-[#4A4A4A] text-lg mb-8">
                    Explore our latest articles on agent systems, model optimization, and intelligent infrastructure.
                  </p>
                  <a
                    href="/blog"
                    className="neo-btn-primary inline-flex items-center gap-2"
                  >
                    <span>View All Articles</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section - Deep Blue Background */}
        <section
          className="py-24 md:py-32 relative overflow-hidden"
          style={{
            backgroundColor: "#1D3557",
            borderTop: "4px solid #1A1A1A"
          }}
        >
          {/* Decorative Red Block */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute top-1/2 -translate-y-1/2 right-[10%] w-32 h-48 bg-[#E63946] hidden lg:block"
          />
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-12 right-[25%] w-20 h-20 bg-[#FFB703] hidden lg:block"
          />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white"
              >
                BUILD
                <br />
                <span className="text-[#FFB703]">PRODUCTION AI SYSTEMS</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-white/70 max-w-xl mb-10"
              >
                Stop stitching together multiple services. Use Streaml as the runtime layer for intelligent systems.
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
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="mailto:vivian@streaml.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 font-medium text-sm transition-all duration-200 bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#1D3557]"
                  style={{ fontFamily: "'Cabin', system-ui, sans-serif" }}
                >
                  Contact Us
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Minimal One-Line */}
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
            <a
              href="#blog"
              className="hover:text-[#1A1A1A] transition-colors"
            >
              Blog
            </a>
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
