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
  Code,
  Server,
  Lock,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";
import { RedditIcon } from "@/components/icons/RedditIcon";
import { Mail } from "lucide-react";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDiagram, setActiveDiagram] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          scrolled
            ? "h-16 shadow-lg shadow-black/10"
            : "bg-transparent border-transparent h-24"
        }`}
        style={
          scrolled
            ? {
                background: "rgba(85, 80, 110, 0.25)",
                borderColor: "rgba(164, 132, 215, 0.15)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }
            : undefined
        }
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group">
            <img
              src="/favicon.png"
              alt="Streaml"
              className="w-7 h-7 group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-xl font-bold tracking-tight text-foreground">
              Streaml
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#architecture"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Architecture
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">

            <a
              href="https://calendly.com/yirancai00/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-glass flex items-center gap-2 group"
            >
              <span>Book Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="http://linkedin.com/in/caivivian"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
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
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden border-t"
          style={{
            background: "rgba(85, 80, 110, 0.3)",
            borderColor: "rgba(164, 132, 215, 0.15)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Architecture
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Features
            </a>
            <a
              href="https://calendly.com/yirancai00/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-glow flex items-center justify-center gap-2 mt-2"
            >
              <span>Book Demo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="http://linkedin.com/in/caivivian"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors py-2"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Full-screen background video */}
        <BackgroundVideo
          src="https://customer-cbeadsgr09pnsezs.cloudflarestream.com/257c7359efd4b4aaebcc03aa8fc78a36/manifest/video.m3u8"
          poster="https://customer-cbeadsgr09pnsezs.cloudflarestream.com/257c7359efd4b4aaebcc03aa8fc78a36/thumbnails/thumbnail.jpg"
        />

        {/* Subtle gradient overlay on top of video */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center lg:items-start">
            {/* Text Content */}
            <div className="max-w-2xl z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide"
                  style={{
                    background: "rgba(85, 80, 110, 0.4)",
                    border: "1px solid rgba(164, 132, 215, 0.5)",
                    backdropFilter: "blur(12px)",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  <Zap className="w-3 h-3 text-primary" />
                  AI-Native Marketing Runtime
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
              >
                AUTONOMOUS
                <br />
                GROWTH
                <br />
                <span className="text-gradient-blue">INFRASTRUCTURE</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-white/55 font-light max-w-xl mb-8 sm:mb-12 leading-relaxed"
              >
                A continuous runtime that generates, executes, and optimizes
                marketing workflows. Deploy intelligent agents that self-evolve.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-6"
              >
                <a
                  href="https://calendly.com/yirancai00/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-glow flex items-center gap-3 group"
                >
                  TALK TO FOUNDER
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section
        id="architecture"
        className="py-32 border-t relative overflow-hidden"
        style={{ borderColor: "rgba(164, 132, 215, 0.1)", background: "rgba(85, 80, 110, 0.04)" }}
      >
        <div className="absolute inset-0 bg-grid opacity-30"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div
                className="inline-block px-3 py-1 mb-4 rounded-sm"
                style={{
                  border: "1px solid rgba(123, 57, 252, 0.2)",
                  background: "rgba(123, 57, 252, 0.05)",
                }}
              >
                <span className="text-xs font-tech text-primary">
                  /// ARCHITECTURE_VIEW
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-8">
                MULTI-CHANNEL
                <br />
                <span className="text-gradient-blue">
                  AGENT RUNTIME
                </span>
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: "Cross-Platform Execution",
                    desc: "Native browser interaction with LinkedIn, X, and Reddit.",
                    icon: <Network className="w-5 h-5" />,
                  },
                  {
                    title: "Humanoid Behavior",
                    desc: "Stochastic timing and natural language patterns.",
                    icon: <Activity className="w-5 h-5" />,
                  },
                  {
                    title: "Proprietary Data Moat",
                    desc: "Internal CRM & Knowledge Base ingestion.",
                    icon: <Database className="w-5 h-5" />,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    onClick={() => setActiveDiagram(i)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex gap-4 p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                      activeDiagram === i
                        ? "border-primary/40 bg-primary/8 shadow-[0_0_20px_rgba(123,57,252,0.1)]"
                        : "border-transparent hover:border-primary/15 hover:bg-primary/5"
                    }`}
                  >
                    <div
                      className={`mt-1 transition-colors ${
                        activeDiagram === i ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4
                        className={`font-bold text-base mb-1 transition-colors ${
                          activeDiagram === i ? "text-primary" : ""
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                    {activeDiagram === i && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="ml-auto self-center w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_rgba(123,57,252,0.6)]"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div
                className="relative rounded-lg p-1 backdrop-blur-sm"
                style={{
                  border: "1px solid rgba(164, 132, 215, 0.2)",
                  background: "rgba(85, 80, 110, 0.1)",
                }}
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-pulse"></div>
                <div className="aspect-square md:aspect-[4/3] bg-background/50 rounded-lg overflow-hidden relative flex items-center justify-center p-4 md:p-8">
                  <div className="absolute inset-0 bg-grid opacity-20"></div>

                  {/* Diagram 1: Cross-Platform Execution */}
                  {activeDiagram === 0 && (
                    <motion.div
                      key="diagram-0"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full flex items-center justify-center scale-[0.7] sm:scale-[0.8] md:scale-100 origin-center"
                    >
                      {/* Central Agent */}
                      <motion.div
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute z-20 w-32 h-32 bg-card border-2 border-primary/40 rounded-xl flex flex-col items-center justify-center shadow-[0_0_30px_rgba(123,57,252,0.2)]"
                      >
                        <Cpu className="w-12 h-12 text-primary mb-1" />
                        <span className="text-xs font-tech text-primary">
                          AGENT
                        </span>
                      </motion.div>

                      {/* Platform Nodes */}
                      {[
                        {
                          label: "LinkedIn",
                          Icon: LinkedInIcon,
                          x: -160,
                          y: -80,
                          color: "text-blue-400",
                          delay: 0,
                        },
                        {
                          label: "X",
                          Icon: XIcon,
                          x: 160,
                          y: -80,
                          color: "text-foreground",
                          delay: 0.1,
                        },
                        {
                          label: "Reddit",
                          Icon: RedditIcon,
                          x: -160,
                          y: 80,
                          color: "text-orange-400",
                          delay: 0.2,
                        },
                        {
                          label: "Email",
                          Icon: Mail,
                          x: 160,
                          y: 80,
                          color: "text-green-400",
                          delay: 0.3,
                        },
                      ].map((node, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 0, y: 0 }}
                          animate={{ opacity: 1, x: node.x, y: node.y }}
                          transition={{ delay: node.delay, duration: 0.4 }}
                          className="absolute z-10 w-20 h-20 rounded-lg flex flex-col items-center justify-center"
                          style={{
                            background: "rgba(85, 80, 110, 0.3)",
                            border: "1px solid rgba(164, 132, 215, 0.2)",
                          }}
                        >
                          <node.Icon className={`w-6 h-6 ${node.color} mb-1`} />
                          <span className="text-[10px] font-tech text-muted-foreground">
                            {node.label}
                          </span>
                        </motion.div>
                      ))}

                      {/* Animated connection lines */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <defs>
                          <linearGradient
                            id="flowGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              stopColor="rgba(123,57,252,0.7)"
                            />
                            <stop
                              offset="100%"
                              stopColor="rgba(164,132,215,0.7)"
                            />
                          </linearGradient>
                        </defs>
                        {[
                          { x2: "30%", y2: "35%" },
                          { x2: "70%", y2: "35%" },
                          { x2: "30%", y2: "65%" },
                          { x2: "70%", y2: "65%" },
                        ].map((line, i) => (
                          <motion.line
                            key={i}
                            x1="50%"
                            y1="50%"
                            x2={line.x2}
                            y2={line.y2}
                            stroke="url(#flowGradient)"
                            strokeWidth="2"
                            strokeDasharray="6 3"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                          />
                        ))}
                      </svg>

                      {/* Data flow particles */}
                      {[0, 1, 2, 3].map((i) => (
                        <motion.div
                          key={`flow-${i}`}
                          className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_6px_rgba(123,57,252,0.8)]"
                          animate={{
                            x: [0, (i % 2 === 0 ? -1 : 1) * 100, 0],
                            y: [0, (i < 2 ? -1 : 1) * 40, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                          style={{ top: "50%", left: "50%" }}
                        />
                      ))}

                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-[9px] font-tech text-green-400/80">
                          MULTI_CHANNEL_ACTIVE
                        </span>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Diagram 2: Humanoid Behavior */}
                  {activeDiagram === 1 && (
                    <motion.div
                      key="diagram-2"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full flex items-center justify-center"
                    >
                      {/* Timeline visualization */}
                      <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent rounded-full"></div>

                      {/* Time markers with variable spacing */}
                      {[
                        { pos: 15, label: "9:02", action: "Post" },
                        { pos: 32, label: "11:47", action: "Reply" },
                        { pos: 48, label: "2:23", action: "Like" },
                        { pos: 67, label: "4:51", action: "Comment" },
                        { pos: 88, label: "7:18", action: "Share" },
                      ].map((marker, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.15 }}
                          className="absolute flex flex-col items-center"
                          style={{ left: `${marker.pos}%`, top: "50%" }}
                        >
                          <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.4,
                            }}
                            className="w-3 h-3 bg-violet-400 rounded-full shadow-[0_0_8px_rgba(167,139,250,0.6)] mb-2"
                          />
                          <span className="text-[8px] font-tech text-violet-400">
                            {marker.label}
                          </span>
                          <span className="text-[7px] font-tech text-muted-foreground mt-0.5">
                            {marker.action}
                          </span>
                        </motion.div>
                      ))}

                      {/* Behavior pattern card */}
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute top-6 left-1/2 -translate-x-1/2 rounded-lg px-4 py-2"
                        style={{
                          background: "rgba(85, 80, 110, 0.3)",
                          border: "1px solid rgba(167, 139, 250, 0.3)",
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <Activity className="w-4 h-4 text-violet-400" />
                          <div>
                            <span className="text-[10px] font-tech text-violet-400 block">
                              BEHAVIOR_PATTERN
                            </span>
                            <span className="text-[8px] text-muted-foreground">
                              Stochastic · Natural · Adaptive
                            </span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Random delay indicators */}
                      {[25, 42, 58, 78].map((pos, i) => (
                        <motion.div
                          key={`delay-${i}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 0.5, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.7,
                          }}
                          className="absolute top-[55%] text-[7px] font-tech text-violet-300/50"
                          style={{ left: `${pos}%` }}
                        >
                          +{Math.floor(Math.random() * 45 + 5)}m
                        </motion.div>
                      ))}

                      {/* Humanoid avatar */}
                      <motion.div
                        animate={{ x: [-120, 120, -120] }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute bottom-8 w-10 h-10 border rounded-full flex items-center justify-center shadow-[0_0_12px_rgba(167,139,250,0.2)]"
                        style={{
                          background: "rgba(85, 80, 110, 0.4)",
                          borderColor: "rgba(167, 139, 250, 0.4)",
                        }}
                      >
                        <span className="text-lg">🤖</span>
                      </motion.div>

                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse"></div>
                        <span className="text-[9px] font-tech text-violet-400/80">
                          HUMAN_LIKE_TIMING
                        </span>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Diagram 3: Proprietary Data Moat */}
                  {activeDiagram === 2 && (
                    <motion.div
                      key="diagram-1"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full flex items-center justify-center scale-[0.7] sm:scale-[0.8] md:scale-100 origin-center"
                    >
                      {/* Central Database */}
                      <motion.div
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute z-20 w-36 h-36 bg-card border-2 border-accent/40 rounded-xl flex flex-col items-center justify-center shadow-[0_0_30px_rgba(248,123,82,0.15)]"
                      >
                        <Database className="w-14 h-14 text-accent mb-1" />
                        <span className="text-sm font-tech text-accent">
                          DATA_CORE
                        </span>
                      </motion.div>

                      {/* Data layers - concentric rings */}
                      {[240, 190, 140].map((size, i) => (
                        <motion.div
                          key={`ring-${i}`}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{
                            opacity: 0.25 - i * 0.06,
                            scale: 1,
                            rotate: i % 2 === 0 ? 360 : -360,
                          }}
                          transition={{
                            opacity: { delay: i * 0.2, duration: 0.5 },
                            scale: { delay: i * 0.2, duration: 0.5 },
                            rotate: {
                              duration: 30 + i * 10,
                              repeat: Infinity,
                              ease: "linear",
                            },
                          }}
                          className="absolute border border-accent/25 rounded-full"
                          style={{ width: size, height: size }}
                        />
                      ))}

                      {/* Data source nodes */}
                      {[
                        { label: "CRM", angle: 0, Icon: Database },
                        { label: "DOCS", angle: 72, Icon: Server },
                        { label: "WIKI", angle: 144, Icon: Code },
                        { label: "API", angle: 216, Icon: Network },
                        { label: "LOGS", angle: 288, Icon: Terminal },
                      ].map((node, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="absolute z-10 w-16 h-16 rounded-lg flex flex-col items-center justify-center"
                          style={{
                            transform: `translate(-50%, -50%) rotate(${node.angle}deg) translateY(-130px) rotate(-${node.angle}deg)`,
                            top: "50%",
                            left: "50%",
                            background: "rgba(85, 80, 110, 0.3)",
                            border: "1px solid rgba(248, 123, 82, 0.25)",
                          }}
                        >
                          <node.Icon className="w-5 h-5 text-accent mb-0.5" />
                          <span className="text-[9px] font-tech text-muted-foreground">
                            {node.label}
                          </span>
                        </motion.div>
                      ))}

                      {/* Data flow lines */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        {[0, 72, 144, 216, 288].map((angle, i) => (
                          <motion.line
                            key={i}
                            x1="50%"
                            y1="50%"
                            x2={`${
                              50 + 25 * Math.cos(((angle - 90) * Math.PI) / 180)
                            }%`}
                            y2={`${
                              50 + 25 * Math.sin(((angle - 90) * Math.PI) / 180)
                            }%`}
                            stroke="rgba(248,123,82,0.3)"
                            strokeWidth="1"
                            strokeDasharray="4 2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                          />
                        ))}
                      </svg>

                      {/* Ingestion particles */}
                      {[0, 1, 2, 3, 4].map((i) => (
                        <motion.div
                          key={`ingest-${i}`}
                          className="absolute w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_5px_rgba(248,123,82,0.8)]"
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                          style={{
                            top: `${
                              50 +
                              25 * Math.sin(((i * 72 - 90) * Math.PI) / 180)
                            }%`,
                            left: `${
                              50 +
                              25 * Math.cos(((i * 72 - 90) * Math.PI) / 180)
                            }%`,
                          }}
                        />
                      ))}

                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
                        <span className="text-[9px] font-tech text-accent/80">
                          INGESTING_DATA
                        </span>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-20 text-center md:text-left">
            <span className="text-primary font-medium tracking-wide text-sm uppercase mb-4 block">
              System Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              CORE MODULES
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl font-light">
              Full-stack autonomous runtime with continuous optimization loops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Terminal className="w-6 h-6 text-primary" />,
                title: "Client Dashboard",
                desc: "Real-time command interface for prompts, execution status, and logs.",
              },
              {
                icon: <Cpu className="w-6 h-6 text-primary" />,
                title: "Workflow Engine",
                desc: "Compiles natural language prompts into executable, versioned code.",
              },
              {
                icon: <Server className="w-6 h-6 text-primary" />,
                title: "Cloud Sandbox",
                desc: "Isolated execution environments ensuring security and scalability.",
              },
              {
                icon: <RefreshCcw className="w-6 h-6 text-primary" />,
                title: "Evolution Loop",
                desc: "Self-correcting algorithms that analyze and improve performance.",
              },
              {
                icon: <Lock className="w-6 h-6 text-primary" />,
                title: "Secure Runtime",
                desc: "Enterprise-grade security with strict permission boundaries.",
              },
              {
                icon: <Database className="w-6 h-6 text-primary" />,
                title: "Data Persistence",
                desc: "Long-term memory vector stores for contextual awareness.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-10 group"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{ background: "rgba(123, 57, 252, 0.08)" }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "rgba(123, 57, 252, 0.04)" }}></div>
        <div className="absolute inset-0 bg-grid opacity-10"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8">
            DEPLOY{" "}
            <span className="text-gradient-blue">INTELLIGENCE</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12">
            Join the automated future. Initialize your first agent swarm today.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 border-t"
        style={{
          borderColor: "rgba(164, 132, 215, 0.1)",
          background: "rgba(85, 80, 110, 0.04)",
        }}
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold tracking-wider">
              Streaml, Inc.
            </span>
          </div>

          <div className="flex gap-8 text-xs text-muted-foreground">
            <a
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
