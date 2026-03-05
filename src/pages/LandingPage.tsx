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
  Workflow,
  MousePointerClick,
  Sparkles,
  Eye,
  UserCheck,
  CloudCog,
  Play,
  Check,
  Search,
  Send,
  MoreHorizontal,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";
import { RedditIcon } from "@/components/icons/RedditIcon";
import { useSEO } from "@/hooks/useSEO";

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

  const workflowHighlights = [
    {
      icon: <Workflow className="w-8 h-8" />,
      tag: "WORKFLOW CANVAS",
      title: "Design Agent Workflows Visually.",
      titleAccent: "No Code Required.",
      subtitle: "Drag-and-drop actions across tools and agents.",
      color: "#FFB703",
      features: [
        {
          icon: <MousePointerClick className="w-5 h-5" />,
          title: "Lead Discovery",
          desc: "Find new prospects",
        },
        {
          icon: <Sparkles className="w-5 h-5" />,
          title: "AI Personalization",
          desc: "Context-aware messaging",
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: "Email / DM Automation",
          desc: "Multi-channel outreach",
        },
        {
          icon: <RefreshCcw className="w-5 h-5" />,
          title: "Conditional Logic",
          desc: "Smart branching flows",
        },
      ],
    },
    {
      icon: <CloudCog className="w-8 h-8" />,
      tag: "CLOUD AGENT ENVIRONMENT",
      title: "Always-On Execution.",
      titleAccent: "Runs 24/7.",
      subtitle: "Agents run in a persistent cloud environment.",
      color: "#E63946",
      features: [
        {
          icon: <UserCheck className="w-5 h-5" />,
          title: "Always Active",
          desc: "Maintains session state",
        },
        {
          icon: <Eye className="w-5 h-5" />,
          title: "Live Observability",
          desc: "Watch agents execute",
        },
        {
          icon: <Activity className="w-5 h-5" />,
          title: "Human-like Behavior",
          desc: "Stochastic timing",
        },
        {
          icon: <Play className="w-5 h-5" />,
          title: "Replay Executions",
          desc: "Full history access",
        },
      ],
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

        {/* Automation Section - Two Highlight Cards */}
        <section
          id="automation"
          className="py-24 md:py-32 relative overflow-hidden"
          style={{
            backgroundColor: "#1D3557",
            borderTop: "4px solid #1A1A1A",
          }}
        >
          {/* Background Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />

          <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="mb-16 md:mb-20 text-center">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block px-3 py-1 mb-4 text-xs font-mono font-bold tracking-wider uppercase border-2 border-white text-white"
              >
                /// AGENT RUNTIME
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
              >
                CONTINUOUS <span className="text-[#FFB703]">EXECUTION LAYER</span>
              </motion.h2>
            </div>

            {/* Highlight 1: Cloud Browser */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mb-8 lg:mb-12"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#E63946] hidden lg:block" />
              <div className="bg-white border-2 border-[#1A1A1A] relative overflow-hidden">
                <div className="grid lg:grid-cols-[1.6fr_1fr]">
                  {/* Left: Browser Demo */}
                  <div className="bg-[#1A1A1A] pt-6 md:pt-10 px-6 md:px-10 pb-0 min-h-[600px] order-2 lg:order-1 flex flex-col">
                    {/* Browser Window */}
                    <div className="bg-[#2D2D2D] rounded-lg overflow-hidden border border-[#404040] flex-1 flex flex-col">
                      {/* Browser Header */}
                      <div className="bg-[#3D3D3D] px-4 py-2.5 flex items-center gap-3 border-b border-[#404040]">
                        <div className="flex gap-2">
                          <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F57]" />
                          <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E]" />
                          <div className="w-3.5 h-3.5 rounded-full bg-[#28CA41]" />
                        </div>
                        <div className="flex-1 bg-[#2D2D2D] rounded px-4 py-1.5 text-sm text-[#888] flex items-center gap-2">
                          <Lock className="w-3.5 h-3.5" />
                          linkedin.com/messaging
                        </div>
                      </div>

                      {/* Browser Content - LinkedIn-style Messaging */}
                      <div className="flex-1 bg-white flex">
                        {/* Sidebar */}
                        <div className="w-24 md:w-36 lg:w-44 border-r border-[#E0E0E0] bg-[#F8F8F8]">
                          <div className="p-3 border-b border-[#E0E0E0]">
                            <div className="bg-[#E8E8E8] rounded px-3 py-1.5 text-xs text-[#666] flex items-center gap-2">
                              <Search className="w-3.5 h-3.5" /> <span className="hidden md:inline">Search</span>
                            </div>
                          </div>
                          {[
                            { initials: 'JD', name: 'John Doe', role: 'VP Operations' },
                            { initials: 'SK', name: 'Sarah K.', role: 'CEO' },
                            { initials: 'MR', name: 'Mike R.', role: 'CTO' },
                            { initials: 'AL', name: 'Alex L.', role: 'Director' },
                            { initials: 'JW', name: 'Jane W.', role: 'Manager' }
                          ].map((contact, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 + i * 0.08 }}
                              className={`p-2.5 flex items-center gap-2.5 border-b border-[#E8E8E8] hover:bg-[#EEF3F8] cursor-pointer transition-colors ${i === 0 ? 'bg-[#EEF3F8]' : ''}`}
                            >
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0A66C2] to-[#004182] flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-sm">
                                {contact.initials}
                              </div>
                              <div className="hidden md:block flex-1 min-w-0">
                                <p className="text-xs font-semibold text-[#1A1A1A] truncate">{contact.name}</p>
                                <p className="text-[10px] text-[#666] truncate">{contact.role}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 flex flex-col">
                          {/* Chat Header */}
                          <div className="p-4 border-b border-[#E0E0E0] flex items-center justify-between bg-white">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0A66C2] to-[#004182] flex items-center justify-center text-white text-sm font-bold shadow-sm">JD</div>
                              <div>
                                <p className="text-sm font-semibold text-[#1A1A1A]">John Doe</p>
                                <p className="text-xs text-[#666] flex items-center gap-1">
                                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                  VP of Operations at TechCorp
                                </p>
                              </div>
                            </div>
                            <MoreHorizontal className="w-5 h-5 text-[#666] cursor-pointer hover:text-[#1A1A1A]" />
                          </div>

                          {/* Messages */}
                          <div className="flex-1 p-4 space-y-4 overflow-hidden bg-[#F9F9F9]">
                            {/* Received Message */}
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 }}
                              className="flex gap-2"
                            >
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0A66C2] to-[#004182] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">JD</div>
                              <div className="flex-1">
                                <div className="bg-white border border-[#E0E0E0] rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] shadow-sm">
                                  <p className="text-xs text-[#1A1A1A] leading-relaxed">Thanks for reaching out! Yes, I'm always looking for better ways to scale our operations.</p>
                                </div>
                                <p className="text-[10px] text-[#999] mt-1 ml-1">2:31 PM</p>
                              </div>
                            </motion.div>

                            {/* Sent Message */}
                            <motion.div
                              initial={{ opacity: 0, x: 10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.7 }}
                              className="flex justify-end"
                            >
                              <div className="flex-1 flex flex-col items-end">
                                <div className="bg-[#0A66C2] text-white rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%] shadow-sm">
                                  <p className="text-xs leading-relaxed">We built an AI-powered system that personalizes interactions at scale. Helped similar teams improve their efficiency significantly.</p>
                                </div>
                                <div className="flex items-center gap-1.5 text-[10px] text-[#999] mt-1 mr-1">
                                  <Check className="w-3 h-3 text-[#0A66C2]" />
                                  Sent · 2:34 PM
                                </div>
                              </div>
                            </motion.div>

                            {/* Typing Indicator */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.9 }}
                              className="flex gap-2"
                            >
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0A66C2] to-[#004182] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">JD</div>
                              <div className="bg-white border border-[#E0E0E0] rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                                <div className="flex gap-1">
                                  <span className="w-2 h-2 bg-[#666] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                  <span className="w-2 h-2 bg-[#666] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                  <span className="w-2 h-2 bg-[#666] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                </div>
                              </div>
                            </motion.div>
                          </div>

                          {/* Input */}
                          <div className="p-3 border-t border-[#E0E0E0] bg-white">
                            <div className="bg-[#F3F3F3] rounded-full px-4 py-2.5 text-xs text-[#999] flex items-center gap-2">
                              Write a message...
                              <div className="ml-auto flex gap-2 text-[#666]">
                                <Send className="w-4 h-4" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Live indicator */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 }}
                      className="mt-3 mb-6 flex items-center justify-center gap-2"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E63946]"></span>
                      </span>
                      <span className="text-xs text-white/70">Live View</span>
                    </motion.div>
                  </div>

                  {/* Right: Content */}
                  <div className="p-6 md:p-10 order-1 lg:order-2">
                    <span className="inline-block px-2 py-1 text-[10px] font-mono font-bold tracking-wider text-white bg-[#E63946] mb-4">
                      CLOUD AGENT ENVIRONMENT
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-2 leading-tight">
                      Always-On Execution.
                      <br />
                      <span className="text-[#E63946]">Runs 24/7.</span>
                    </h3>
                    <p className="text-base text-[#666] mb-6">Agents run in a persistent cloud environment, even when you're offline.</p>

                    <div className="space-y-3">
                      {workflowHighlights[1].features.map((f, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 flex items-center justify-center bg-[#E63946]/10 border border-[#E63946]/30 flex-shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-[#E63946]" />
                          </div>
                          <span className="text-sm text-[#1A1A1A] leading-relaxed"><strong>{f.title}</strong> — {f.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E63946]" />
              </div>
            </motion.div>

            {/* Highlight 2: Workflow Canvas */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#FFB703] hidden lg:block" />
              <div className="bg-white border-2 border-[#1A1A1A] relative overflow-hidden">
                <div className="grid lg:grid-cols-[1fr_1.4fr]">
                  {/* Left: Content */}
                  <div className="p-6 md:p-10 order-1">
                    <span className="inline-block px-2 py-1 text-[10px] font-mono font-bold tracking-wider text-white bg-[#FFB703] mb-4">
                      WORKFLOW CANVAS
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-2 leading-tight">
                      Design Agent Workflows Visually.
                      <br />
                      <span className="text-[#FFB703]">No Code Required.</span>
                    </h3>
                    <p className="text-base text-[#666] mb-6">Drag-and-drop actions across tools and agents.</p>

                    <div className="space-y-3">
                      {workflowHighlights[0].features.map((f, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 flex items-center justify-center bg-[#FFB703]/10 border border-[#FFB703]/30 flex-shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-[#FFB703]" />
                          </div>
                          <span className="text-sm text-[#1A1A1A] leading-relaxed"><strong>{f.title}</strong> — {f.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Canvas Demo */}
                  <div className="bg-[#F5F5F5] border-t lg:border-t-0 lg:border-l-2 border-[#1A1A1A] p-6 md:p-8 min-h-[500px] relative overflow-hidden order-2">
                    {/* Canvas Grid Background */}
                    <div className="absolute inset-0 opacity-30" style={{
                      backgroundImage: 'radial-gradient(circle, #ccc 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }} />

                    {/* Workflow Nodes */}
                    <div className="relative h-full flex items-center justify-center py-8 md:py-0">
                      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        {/* Node 1: Discover */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                          className="bg-white border-2 border-[#1A1A1A] p-4 shadow-[4px_4px_0_#1A1A1A] w-40 md:w-32"
                        >
                          <div className="w-10 h-10 bg-blue-100 border border-blue-300 flex items-center justify-center mb-2">
                            <Search className="w-5 h-5 text-blue-600" />
                          </div>
                          <p className="text-sm font-bold text-[#1A1A1A]">Discover Leads</p>
                        </motion.div>

                        {/* Arrow 1 */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.35 }}
                          className="flex items-center md:origin-left"
                        >
                          {/* Mobile: Down Arrow */}
                          <ChevronDown className="w-5 h-5 text-[#FFB703] md:hidden" />
                          {/* Desktop: Right Arrow */}
                          <div className="hidden md:flex items-center">
                            <div className="w-8 md:w-12 h-0.5 bg-[#FFB703]" />
                            <ChevronRight className="w-5 h-5 text-[#FFB703] -ml-1" />
                          </div>
                        </motion.div>

                        {/* Node 2: Personalize */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                          className="bg-white border-2 border-[#1A1A1A] p-4 shadow-[4px_4px_0_#1A1A1A] w-40 md:w-32"
                        >
                          <div className="w-10 h-10 bg-purple-100 border border-purple-300 flex items-center justify-center mb-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                          </div>
                          <p className="text-sm font-bold text-[#1A1A1A]">AI Personalize</p>
                        </motion.div>

                        {/* Arrow 2 */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.55 }}
                          className="flex items-center md:origin-left"
                        >
                          {/* Mobile: Down Arrow */}
                          <ChevronDown className="w-5 h-5 text-[#FFB703] md:hidden" />
                          {/* Desktop: Right Arrow */}
                          <div className="hidden md:flex items-center">
                            <div className="w-8 md:w-12 h-0.5 bg-[#FFB703]" />
                            <ChevronRight className="w-5 h-5 text-[#FFB703] -ml-1" />
                          </div>
                        </motion.div>

                        {/* Node 3: Execute */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 }}
                          className="bg-white border-2 border-[#1A1A1A] p-4 shadow-[4px_4px_0_#FFB703] w-40 md:w-32"
                        >
                          <div className="w-10 h-10 bg-[#0A66C2]/10 border border-[#0A66C2]/30 flex items-center justify-center mb-2">
                            <Send className="w-5 h-5 text-[#0A66C2]" />
                          </div>
                          <p className="text-sm font-bold text-[#1A1A1A]">Execute Outreach</p>
                        </motion.div>
                      </div>
                    </div>

                    {/* Floating Status */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                      className="absolute bottom-4 left-4 bg-white border border-[#1A1A1A] px-3 py-2 text-xs flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-[#1A1A1A] font-medium">Optimizing messaging...</span>
                    </motion.div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FFB703]" />
              </div>
            </motion.div>
          </div>
        </section>
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
