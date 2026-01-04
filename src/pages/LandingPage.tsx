import { motion } from "framer-motion";
import { ArrowRight, Layers, Network, RefreshCcw, Database, Shield, Zap, Cpu, Terminal, Activity, Code, Server, Lock, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDiagram, setActiveDiagram] = useState(0);

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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${scrolled ? "bg-background/80 backdrop-blur-xl border-border/40 h-16 shadow-lg shadow-primary/5" : "bg-transparent border-transparent h-24"
          }`}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group">
            <img src="/favicon.png" alt="Streaml" className="w-10 h-10 group-hover:scale-105 transition-transform duration-300" />
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Streaml</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Features</a>
            <a href="#architecture" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Platform</a>
          </div>

          <a
            href="https://calendly.com/yirancai00/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex btn-secondary-glass items-center gap-2 group"
          >
            <span>Book Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Elegant Background Elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Text Content */}
            <div className="lg:w-1/2 z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 flex items-center gap-3"
              >
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
              >
                Autonomous<br />
                Marketing<br />
                <span className="text-gradient-blue">Infrastructure</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground font-light max-w-xl mb-12 leading-relaxed"
              >
                A continuous runtime that generates, executes, and optimizes marketing workflows. Deploy intelligent agents that self-evolve.
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
                  Talk to Founder
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>

            {/* Right Side - Enhanced Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="lg:w-1/2 relative w-full flex items-center justify-center"
            >
              <div className="relative w-full aspect-square max-w-lg">

                {/* Ambient Glow Layers */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full blur-[80px] animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent/15 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '1s' }}></div>

                {/* Outer Orbital Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px]"
                >
                  <svg className="w-full h-full">
                    <circle cx="50%" cy="50%" r="200" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" />
                  </svg>
                  {/* Outer ring particles */}
                  {[0, 90, 180, 270].map((angle, i) => (
                    <motion.div
                      key={`outer-${i}`}
                      className="absolute w-2 h-2 bg-primary/60 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                      style={{
                        top: `${50 + 47.6 * Math.sin((angle * Math.PI) / 180)}%`,
                        left: `${50 + 47.6 * Math.cos((angle * Math.PI) / 180)}%`,
                      }}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    />
                  ))}
                </motion.div>

                {/* Middle Orbital Ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px]"
                >
                  <svg className="w-full h-full">
                    <circle cx="50%" cy="50%" r="150" fill="none" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="1" strokeDasharray="8 4" />
                  </svg>
                </motion.div>

                {/* Inner Orbital Ring with Icons */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px]"
                >
                  <svg className="w-full h-full">
                    <circle cx="50%" cy="50%" r="120" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2" />
                  </svg>
                  {/* Orbiting Icons */}
                  {[
                    { Icon: Code, color: "text-primary", angle: 0 },
                    { Icon: Database, color: "text-accent", angle: 120 },
                    { Icon: RefreshCcw, color: "text-indigo-400", angle: 240 },
                  ].map(({ Icon, color, angle }, i) => (
                    <motion.div
                      key={`icon-${i}`}
                      className="absolute"
                      style={{
                        top: `${50 + 46 * Math.sin((angle * Math.PI) / 180)}%`,
                        left: `${50 + 46 * Math.cos((angle * Math.PI) / 180)}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="w-12 h-12 bg-card/80 backdrop-blur-xl border border-white/20 flex items-center justify-center rounded-xl shadow-lg"
                      >
                        <Icon className={`w-5 h-5 ${color}`} />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Central Glass Core */}
                <motion.div
                  animate={{ y: [0, -8, 0], scale: [1, 1.02, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  {/* Pulsing ring behind core */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-[-20px] border-2 border-primary/30 rounded-[2rem]"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute inset-[-30px] border border-primary/20 rounded-[2.5rem]"
                  />

                  <div className="relative w-36 h-36 bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-[0_0_80px_rgba(59,130,246,0.3)] flex items-center justify-center overflow-hidden">
                    {/* Animated gradient overlay */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-conic from-primary/30 via-transparent via-50% to-primary/30 opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 rounded-3xl"></div>

                    {/* Core icon */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Server className="w-14 h-14 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
                    </motion.div>

                    {/* Inner glowing border */}
                    <div className="absolute inset-3 border border-white/20 rounded-2xl"></div>
                  </div>
                </motion.div>

                {/* Floating Data Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_6px_rgba(59,130,246,0.8)]"
                    initial={{
                      x: Math.random() * 400 - 200,
                      y: Math.random() * 400 - 200,
                      opacity: 0,
                    }}
                    animate={{
                      x: [null, Math.random() * 300 - 150, Math.random() * 300 - 150],
                      y: [null, Math.random() * 300 - 150, Math.random() * 300 - 150],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut",
                    }}
                    style={{
                      top: '50%',
                      left: '50%',
                    }}
                  />
                ))}

                {/* Energy Lines connecting to center */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                  <defs>
                    <linearGradient id="energy-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                      <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
                      <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                    </linearGradient>
                  </defs>
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <motion.line
                      key={`line-${i}`}
                      x1="50%"
                      y1="50%"
                      x2={`${50 + 35 * Math.cos((angle * Math.PI) / 180)}%`}
                      y2={`${50 + 35 * Math.sin((angle * Math.PI) / 180)}%`}
                      stroke="url(#energy-gradient)"
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: [0, 1, 0], opacity: [0, 0.8, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </svg>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-20 text-center md:text-left">
            <span className="text-primary font-medium tracking-wide text-sm uppercase mb-4 block">System Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Core Modules</h2>
            <p className="text-xl text-muted-foreground max-w-2xl font-light">
              Full-stack autonomous runtime with continuous optimization loops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Terminal className="w-6 h-6 text-primary" />,
                title: "Client Dashboard",
                desc: "Real-time command interface for prompts, execution status, and logs."
              },
              {
                icon: <Cpu className="w-6 h-6 text-primary" />,
                title: "Workflow Engine",
                desc: "Compiles natural language prompts into executable, versioned code."
              },
              {
                icon: <Server className="w-6 h-6 text-primary" />,
                title: "Cloud Sandbox",
                desc: "Isolated execution environments ensuring security and scalability."
              },
              {
                icon: <RefreshCcw className="w-6 h-6 text-primary" />,
                title: "Evolution Loop",
                desc: "Self-correcting algorithms that analyze and improve performance."
              },
              {
                icon: <Lock className="w-6 h-6 text-primary" />,
                title: "Secure Runtime",
                desc: "Enterprise-grade security with strict permission boundaries."
              },
              {
                icon: <Database className="w-6 h-6 text-primary" />,
                title: "Data Persistence",
                desc: "Long-term memory vector stores for contextual awareness."
              }
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
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-32 border-t border-border/30 bg-card/20 relative overflow-hidden">
        {/* Background noise */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 mb-4 border border-blue-500/20 bg-blue-500/5 rounded-sm">
                <span className="text-xs font-mono-tech text-blue-500">/// ARCHITECTURE_VIEW</span>
              </div>
              <h2 className="text-4xl font-bold mb-8">MULTI-CHANNEL<br /><span className="text-gradient hover:text-glow-blue transition-all duration-300 text-primary">AGENT RUNTIME</span></h2>

              <div className="space-y-4">
                {[
                  { title: "Cross-Platform Execution", desc: "Native API integration with LinkedIn, X, and Reddit.", icon: <Network className="w-5 h-5" /> },
                  { title: "Proprietary Data Moat", desc: "Internal CRM & Knowledge Base ingestion.", icon: <Database className="w-5 h-5" /> },
                  { title: "Humanoid Behavior", desc: "Stochastic timing and natural language patterns.", icon: <Activity className="w-5 h-5" /> }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    onClick={() => setActiveDiagram(i)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex gap-4 p-4 border rounded-lg cursor-pointer transition-all duration-300 ${activeDiagram === i
                      ? 'border-primary/50 bg-primary/10 shadow-[0_0_20px_rgba(59,130,246,0.15)]'
                      : 'border-transparent hover:border-primary/20 hover:bg-primary/5'
                      }`}
                  >
                    <div className={`mt-1 transition-colors ${activeDiagram === i ? 'text-primary' : 'text-accent'}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className={`font-bold text-base mb-1 transition-colors ${activeDiagram === i ? 'text-primary' : ''}`}>
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    {activeDiagram === i && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="ml-auto self-center w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-lg border border-primary/20 bg-card/80 p-1 backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
                <div className="aspect-square md:aspect-[4/3] bg-background/50 rounded-lg overflow-hidden relative flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-grid opacity-20"></div>

                  {/* Diagram 1: Cross-Platform Execution */}
                  {activeDiagram === 0 && (
                    <motion.div
                      key="diagram-0"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full flex items-center justify-center"
                    >
                      {/* Central Agent */}
                      <motion.div
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute z-20 w-32 h-32 bg-card border-2 border-primary/50 rounded-xl flex flex-col items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.3)]"
                      >
                        <Cpu className="w-12 h-12 text-primary mb-1" />
                        <span className="text-xs font-mono-tech text-primary">AGENT</span>
                      </motion.div>

                      {/* Platform Nodes */}
                      {[
                        { label: "LinkedIn", x: -160, y: -80, color: "text-blue-400", delay: 0 },
                        { label: "X", x: 160, y: -80, color: "text-white", delay: 0.1 },
                        { label: "Reddit", x: -160, y: 80, color: "text-orange-400", delay: 0.2 },
                        { label: "Email", x: 160, y: 80, color: "text-green-400", delay: 0.3 },
                      ].map((node, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 0, y: 0 }}
                          animate={{ opacity: 1, x: node.x, y: node.y }}
                          transition={{ delay: node.delay, duration: 0.4 }}
                          className="absolute z-10 w-20 h-20 bg-card/90 border border-white/20 rounded-lg flex flex-col items-center justify-center"
                        >
                          <Network className={`w-6 h-6 ${node.color} mb-1`} />
                          <span className="text-[10px] font-mono-tech text-muted-foreground">{node.label}</span>
                        </motion.div>
                      ))}

                      {/* Animated connection lines */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <defs>
                          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(59,130,246,0.8)" />
                            <stop offset="100%" stopColor="rgba(6,182,212,0.8)" />
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
                            x1="50%" y1="50%"
                            x2={line.x2} y2={line.y2}
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
                          className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_rgba(59,130,246,1)]"
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
                          style={{ top: '50%', left: '50%' }}
                        />
                      ))}

                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-[9px] font-mono-tech text-green-400/80">MULTI_CHANNEL_ACTIVE</span>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Diagram 2: Proprietary Data Moat */}
                  {activeDiagram === 1 && (
                    <motion.div
                      key="diagram-1"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full flex items-center justify-center"
                    >
                      {/* Central Database */}
                      <motion.div
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute z-20 w-36 h-36 bg-card border-2 border-accent/50 rounded-xl flex flex-col items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.3)]"
                      >
                        <Database className="w-14 h-14 text-accent mb-1" />
                        <span className="text-sm font-mono-tech text-accent">DATA_CORE</span>
                      </motion.div>

                      {/* Data layers - concentric rings */}
                      {[240, 190, 140].map((size, i) => (
                        <motion.div
                          key={`ring-${i}`}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 0.3 - i * 0.08, scale: 1, rotate: i % 2 === 0 ? 360 : -360 }}
                          transition={{
                            opacity: { delay: i * 0.2, duration: 0.5 },
                            scale: { delay: i * 0.2, duration: 0.5 },
                            rotate: { duration: 30 + i * 10, repeat: Infinity, ease: "linear" }
                          }}
                          className="absolute border border-accent/30 rounded-full"
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
                          className="absolute z-10 w-16 h-16 bg-card/90 border border-accent/30 rounded-lg flex flex-col items-center justify-center"
                          style={{
                            transform: `translate(-50%, -50%) rotate(${node.angle}deg) translateY(-130px) rotate(-${node.angle}deg)`,
                            top: '50%',
                            left: '50%',
                          }}
                        >
                          <node.Icon className="w-5 h-5 text-accent mb-0.5" />
                          <span className="text-[9px] font-mono-tech text-muted-foreground">{node.label}</span>
                        </motion.div>
                      ))}

                      {/* Data flow lines */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        {[0, 72, 144, 216, 288].map((angle, i) => (
                          <motion.line
                            key={i}
                            x1="50%"
                            y1="50%"
                            x2={`${50 + 25 * Math.cos((angle - 90) * Math.PI / 180)}%`}
                            y2={`${50 + 25 * Math.sin((angle - 90) * Math.PI / 180)}%`}
                            stroke="rgba(6,182,212,0.4)"
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
                          className="absolute w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_6px_rgba(6,182,212,1)]"
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
                            top: `${50 + 25 * Math.sin((i * 72 - 90) * Math.PI / 180)}%`,
                            left: `${50 + 25 * Math.cos((i * 72 - 90) * Math.PI / 180)}%`,
                          }}
                        />
                      ))}

                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
                        <span className="text-[9px] font-mono-tech text-accent/80">INGESTING_DATA</span>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Diagram 3: Humanoid Behavior */}
                  {activeDiagram === 2 && (
                    <motion.div
                      key="diagram-2"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full flex items-center justify-center"
                    >
                      {/* Timeline visualization */}
                      <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent rounded-full"></div>

                      {/* Time markers with variable spacing (stochastic timing) */}
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
                          style={{ left: `${marker.pos}%`, top: '50%' }}
                        >
                          <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                            className="w-3 h-3 bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(129,140,248,0.8)] mb-2"
                          />
                          <span className="text-[8px] font-mono-tech text-indigo-400">{marker.label}</span>
                          <span className="text-[7px] font-mono-tech text-muted-foreground mt-0.5">{marker.action}</span>
                        </motion.div>
                      ))}

                      {/* Behavior pattern card */}
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute top-6 left-1/2 -translate-x-1/2 bg-card/90 border border-indigo-400/30 rounded-lg px-4 py-2"
                      >
                        <div className="flex items-center gap-3">
                          <Activity className="w-4 h-4 text-indigo-400" />
                          <div>
                            <span className="text-[10px] font-mono-tech text-indigo-400 block">BEHAVIOR_PATTERN</span>
                            <span className="text-[8px] text-muted-foreground">Stochastic • Natural • Adaptive</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Random delay indicators */}
                      {[25, 42, 58, 78].map((pos, i) => (
                        <motion.div
                          key={`delay-${i}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 0.6, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
                          className="absolute top-[55%] text-[7px] font-mono-tech text-indigo-300/60"
                          style={{ left: `${pos}%` }}
                        >
                          +{Math.floor(Math.random() * 45 + 5)}m
                        </motion.div>
                      ))}

                      {/* Humanoid avatar */}
                      <motion.div
                        animate={{ x: [-120, 120, -120] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-8 w-10 h-10 bg-card border border-indigo-400/50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(129,140,248,0.3)]"
                      >
                        <span className="text-lg">🤖</span>
                      </motion.div>

                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></div>
                        <span className="text-[9px] font-mono-tech text-indigo-400/80">HUMAN_LIKE_TIMING</span>
                      </motion.div>
                    </motion.div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute inset-0 bg-grid-small opacity-10"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            DEPLOY <span className="text-primary text-glow-blue">INTELLIGENCE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Join the automated future. Initialize your first agent swarm today.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-mono-tech text-sm font-bold tracking-wider">Streaml, Inc.</span>
          </div>

          <div className="flex gap-8 text-xs font-mono-tech text-muted-foreground">
            <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Icon component needed for the mapping above
function MessageSquareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
