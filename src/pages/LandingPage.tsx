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
    title: "Streaml | Agent-to-Agent Execution Infrastructure",
    description: "A runtime where AI agents discover, communicate, and execute workflows across tools, data, and platforms.",
    canonicalPath: "/",
    keywords: "AI agents, agent-to-agent, autonomous execution, agent runtime, multi-agent architecture, workflow automation, agent economy",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const architectureCards = [
    {
      title: "Agent-to-Agent",
      subtitle: "Coordination",
      desc: "Agents call internal company agents, interact with external APIs, retrieve organizational knowledge, and trigger actions across SaaS systems.",
      icon: <Network className="w-8 h-8" />,
      bg: "neo-block-blue",
    },
    {
      title: "Humanoid",
      subtitle: "Execution",
      desc: "Natural timing variability, contextual language generation, and adaptive behavior across platforms. Agents blend seamlessly into real operational workflows.",
      icon: <Activity className="w-8 h-8" />,
      bg: "neo-block-yellow",
    },
    {
      title: "Data Network",
      subtitle: "Effect",
      desc: "Your company's knowledge becomes the intelligence layer. CRM data, internal documentation, historical workflow execution, and performance analytics.",
      icon: <Database className="w-8 h-8" />,
      bg: "neo-block-white",
    },
  ];


  const features = [
    {
      icon: <Terminal className="w-5 h-5" />,
      title: "Client Control Interface",
      desc: "Central dashboard for monitoring agent activity, workflows, and system performance.",
      color: "neo-index-red",
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Agent Workflow Engine",
      desc: "Compiles natural-language instructions into executable multi-agent workflows.",
      color: "neo-index-yellow",
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: "Cloud Sandbox Runtime",
      desc: "Secure, isolated environments where agents execute tasks across tools and platforms.",
      color: "neo-index-blue",
    },
    {
      icon: <RefreshCcw className="w-5 h-5" />,
      title: "Evolution Engine",
      desc: "Continuous optimization loop that analyzes performance and improves workflows automatically.",
      color: "neo-index-red",
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Secure Execution Layer",
      desc: "Enterprise-grade permissions and safeguards for agent actions.",
      color: "neo-index-yellow",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Persistent Memory",
      desc: "Long-term context storage enabling agents to learn from past interactions.",
      color: "neo-index-blue",
    },
  ];

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
              href="#automation"
              className="text-sm font-medium text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
            >
              Automation
            </a>
            <a
              href="#architecture"
              className="text-sm font-medium text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
            >
              Architecture
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
            >
              Features
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
              href="#automation"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors py-2"
            >
              Automation
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors py-2"
            >
              Architecture
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors py-2"
            >
              Features
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
                  STREAML
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
                  AGENT-TO-AGENT
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.9]"
                >
                  EXECUTION
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.9] text-[#1D3557]"
                >
                  INFRASTRUCTURE
                </motion.h1>
              </div>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-lg md:text-xl text-[#4A4A4A] max-w-lg mb-10 leading-relaxed"
              >
                A runtime where AI agents discover, communicate, and execute
                workflows across tools, data, and platforms.
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
                  Talk to Founder
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Integration Workflow */}
        <IntegrationWorkflow />

        {/* Architecture Section - Three Cards */}
        <section
          id="architecture"
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
                /// MULTI-AGENT ARCHITECTURE
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                AGENT-TO-AGENT
                <br />
                <span className="text-[#1D3557]">COORDINATION</span>
              </motion.h2>
            </div>

            {/* Three Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0">
              {architectureCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`${card.bg} p-8 md:p-10 transition-all duration-200 ${
                    i === 2 ? "" : "md:border-r-4 md:border-[#1A1A1A]"
                  } border-b-4 md:border-b-0 border-[#1A1A1A] last:border-b-0`}
                  style={{
                    minHeight: "320px",
                  }}
                >
                  <div className="mb-6">{card.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-1">
                    {card.title}
                  </h3>
                  <h4 className="text-2xl md:text-3xl font-bold mb-6 opacity-70">
                    {card.subtitle}
                  </h4>
                  <p className={`text-base leading-relaxed ${
                    card.bg === "neo-block-yellow" ? "text-[#1A1A1A]/70" :
                    card.bg === "neo-block-white" ? "text-[#4A4A4A]" : "text-white/70"
                  }`}>
                    {card.desc}
                  </p>

                  {/* Platform Icons for Agent-to-Agent card */}
                  {i === 0 && (
                    <div className="flex gap-4 mt-8">
                      <div
                        className="w-12 h-12 flex items-center justify-center"
                        style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                      >
                        <LinkedInIcon className="w-6 h-6 text-white" />
                      </div>
                      <div
                        className="w-12 h-12 flex items-center justify-center"
                        style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                      >
                        <XIcon className="w-6 h-6 text-white" />
                      </div>
                      <div
                        className="w-12 h-12 flex items-center justify-center"
                        style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                      >
                        <RedditIcon className="w-6 h-6 text-white" />
                      </div>
                      <div
                        className="w-12 h-12 flex items-center justify-center"
                        style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                      >
                        <Database className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Features Grid - 2x3 */}
        <section
          id="features"
          className="py-24 md:py-32 relative"
          style={{
            borderTop: "4px solid #1A1A1A",
            backgroundColor: "#FAFAFA"
          }}
        >
          <div className="absolute inset-0 neo-grid opacity-30"></div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="mb-16 text-center md:text-left">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block px-3 py-1 mb-4 text-xs font-mono font-bold tracking-wider uppercase border-2 border-[#1A1A1A]"
              >
                /// CORE SYSTEM MODULES
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                CORE MODULES
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-[#4A4A4A] max-w-2xl"
              >
                A unified execution layer orchestrates every interaction.
              </motion.p>
            </div>

            {/* 2x3 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="neo-card p-8 relative group"
                >
                  {/* Index Badge */}
                  <div className={`neo-index ${feature.color} absolute top-6 left-6`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="pt-12">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-[#1A1A1A]">{feature.icon}</div>
                      <h3 className="text-lg font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
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
                DEPLOY
                <br />
                <span className="text-[#FFB703]">AUTONOMOUS WORK</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-white/70 max-w-xl mb-10"
              >
                The future of software is agent networks executing workflows autonomously. Streaml provides the infrastructure layer that makes this possible.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="mailto:vivian@streaml.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3 font-medium text-sm transition-all duration-200 bg-[#E63946] text-white border-2 border-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_white]"
                  style={{ fontFamily: "'Cabin', system-ui, sans-serif" }}
                >
                  Initialize your agent runtime
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://calendly.com/yirancai00/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 font-medium text-sm transition-all duration-200 bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#1D3557]"
                  style={{ fontFamily: "'Cabin', system-ui, sans-serif" }}
                >
                  Talk to Founder
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
