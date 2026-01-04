import { motion } from "framer-motion";
import { ArrowRight, Layers, Network, RefreshCcw, Database, Shield, Zap, Cpu, Terminal, Activity, Code, Server, Lock } from "lucide-react";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/20 selection:text-primary">
      {/* Global Tech Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="scanline"></div>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-50"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${scrolled ? "bg-background/90 backdrop-blur-md border-border/60 h-16" : "bg-transparent border-transparent h-20"
          }`}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-8 h-8 flex items-center justify-center bg-primary/10 rounded-sm border border-primary/30 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
              <Terminal className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
            </div>
            <span className="text-xl font-bold tracking-tight font-mono-tech group-hover:text-glow-blue transition-all">Streaml</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-mono-tech text-muted-foreground hover:text-primary transition-colors hover:text-glow-blue">/// FEATURES</a>
            <a href="#architecture" className="text-sm font-mono-tech text-muted-foreground hover:text-primary transition-colors hover:text-glow-blue">/// PLATFORM</a>
            <a href="#process" className="text-sm font-mono-tech text-muted-foreground hover:text-primary transition-colors hover:text-glow-blue">/// PROCESS</a>
          </div>

          <a
            href="https://calendly.com/yirancai00/30min?month=2025-06"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex btn-cyber items-center gap-2"
          >
            <span>Initialize</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 flex items-center gap-3"
              >
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-sm">
                  <div className="status-dot status-dot-active"></div>
                  <span className="text-xs font-mono-tech text-primary tracking-wider">SYSTEM ONLINE v2.4.0</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8 glitch"
                data-text="Autonomous Marketing Infrastructure"
              >
                AUTONOMOUS<br />
                MARKETING<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient bg-300%">INFRASTRUCTURE</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground font-light max-w-xl mb-12 leading-relaxed border-l-2 border-primary/30 pl-6"
              >
                <span className="text-primary font-mono-tech">&gt;&gt;</span> A runtime that generates, executes, and continuously optimizes marketing workflows.
                <br />
                <span className="text-primary font-mono-tech">&gt;&gt;</span> Deploy intelligent agents that self-evolve.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-6"
              >
                <a
                  href="https://calendly.com/yirancai00/30min?month=2025-06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber flex items-center gap-3 group"
                >
                  Book Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>

            {/* Right Side - Tech Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:w-1/2 relative min-h-[500px] w-full flex items-center justify-center p-10"
            >
              {/* Server/Node Visualization */}
              <div className="relative w-full aspect-square max-w-md">

                {/* Central Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="relative w-32 h-32 bg-card border border-primary/50 shadow-[0_0_50px_rgba(59,130,246,0.2)] rounded-sm flex items-center justify-center corner-brackets">
                    <Server className="w-12 h-12 text-primary animate-pulse" />
                    {/* Ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-[-10px] border border-dashed border-primary/30 rounded-full"
                    />
                  </div>
                </div>

                {/* Orbiting Satellite Nodes */}
                {[0, 72, 144, 216, 288].map((angle, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: -i * 5 }}
                  >
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[50%]"
                      style={{
                        transform: `rotate(${angle}deg) translateY(-140px)`,
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + i * 0.2 }}
                        className="w-12 h-12 bg-background border border-accent/40 flex items-center justify-center rounded-sm shadow-[0_0_15px_rgba(6,182,212,0.15)] relative"
                      >
                        {/* Static counter-rotation to keep icon upright */}
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: -i * 5 }}
                        >
                          {i === 0 && <Code className="w-5 h-5 text-accent" />}
                          {i === 1 && <MessageSquareIcon className="w-5 h-5 text-accent" />}
                          {i === 2 && <RefreshCcw className="w-5 h-5 text-accent" />}
                          {i === 3 && <Lock className="w-5 h-5 text-accent" />}
                          {i === 4 && <Database className="w-5 h-5 text-accent" />}
                        </motion.div>

                        {/* Connecting Line to Center */}
                        <div className="absolute top-full left-1/2 w-px h-[76px] bg-gradient-to-b from-accent/30 to-transparent origin-top -z-10" style={{ transform: 'rotate(0deg)' }}></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}

                {/* Data Packets */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                  <circle cx="50%" cy="50%" r="140" fill="none" stroke="rgba(59, 130, 246, 0.1)" />
                  <circle cx="50%" cy="50%" r="90" fill="none" stroke="rgba(59, 130, 246, 0.05)" />
                </svg>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 bg-background relative border-t border-border/50">
        <div className="absolute inset-0 bg-grid-small opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-20">
            <div className="inline-block px-3 py-1 mb-4 border border-accent/20 bg-accent/5 rounded-sm">
              <span className="text-xs font-mono-tech text-accent">/// SYSTEM CAPABILITIES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">CORE MODULES</h2>
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
                className="tech-card p-8 group hover:bg-card/80"
              >
                <div className="w-12 h-12 bg-primary/5 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>

                {/* Decorative corner */}
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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

              <div className="space-y-6">
                {[
                  { title: "Cross-Platform Execution", desc: "Native API integration with LinkedIn, X, and Reddit.", icon: <Network className="w-5 h-5 text-accent" /> },
                  { title: "Proprietary Data Moat", desc: "Internal CRM & Knowledge Base ingestion.", icon: <Database className="w-5 h-5 text-accent" /> },
                  { title: "Humanoid Behavior", desc: "Stochastic timing and natural language patterns.", icon: <Activity className="w-5 h-5 text-accent" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all rounded-sm cursor-default">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-base mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-sm border border-primary/20 bg-card/80 p-1 backdrop-blur-sm tech-card">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
                <div className="aspect-video bg-background/50 rounded-sm overflow-hidden relative flex items-center justify-center p-6">
                  <div className="absolute inset-0 bg-grid opacity-20"></div>

                  {/* Architecture Diagram */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Central Agent Runtime */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="absolute z-20 w-28 h-28 bg-card border-2 border-primary/50 rounded-sm flex flex-col items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    >
                      <Cpu className="w-8 h-8 text-primary mb-1" />
                      <span className="text-[10px] font-mono-tech text-primary">AGENT_CORE</span>
                    </motion.div>

                    {/* Platform Nodes */}
                    {[
                      { label: "LinkedIn", x: -140, y: -60, delay: 0.2 },
                      { label: "X/Twitter", x: 140, y: -60, delay: 0.3 },
                      { label: "Reddit", x: -140, y: 60, delay: 0.4 },
                      { label: "CRM_API", x: 140, y: 60, delay: 0.5 },
                    ].map((node, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: node.x * 0.5, y: node.y * 0.5 }}
                        whileInView={{ opacity: 1, x: node.x, y: node.y }}
                        viewport={{ once: true }}
                        transition={{ delay: node.delay, duration: 0.5 }}
                        className="absolute z-10 w-20 h-14 bg-card/80 border border-accent/40 rounded-sm flex flex-col items-center justify-center"
                      >
                        <Network className="w-4 h-4 text-accent mb-1" />
                        <span className="text-[8px] font-mono-tech text-muted-foreground">{node.label}</span>
                      </motion.div>
                    ))}

                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                      <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(6,182,212,0.5)" />
                          <stop offset="100%" stopColor="rgba(59,130,246,0.5)" />
                        </linearGradient>
                      </defs>
                      {/* Lines from center to nodes */}
                      <motion.line
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        x1="50%" y1="50%" x2="25%" y2="30%"
                        stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 2"
                      />
                      <motion.line
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        x1="50%" y1="50%" x2="75%" y2="30%"
                        stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 2"
                      />
                      <motion.line
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        x1="50%" y1="50%" x2="25%" y2="70%"
                        stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 2"
                      />
                      <motion.line
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                        x1="50%" y1="50%" x2="75%" y2="70%"
                        stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 2"
                      />
                    </svg>

                    {/* Data Flow Indicator */}
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2"
                    >
                      <div className="status-dot status-dot-active"></div>
                      <span className="text-[9px] font-mono-tech text-primary/60">DATA_SYNC_ACTIVE</span>
                    </motion.div>
                  </div>
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

          <a
            href="https://calendly.com/yirancai00/30min?month=2025-06"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber inline-flex items-center gap-3 px-12 py-5 text-lg"
          >
            INITIALIZE SEQUENCE
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary/20 flex items-center justify-center rounded-xs">
              <span className="text-xs font-bold text-primary">S</span>
            </div>
            <span className="font-mono-tech text-sm font-bold tracking-wider">Streaml_Inc</span>
          </div>

          <div className="flex gap-8 text-xs font-mono-tech text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">PRIVACY_PROTOCOL</a>
            <a href="#" className="hover:text-primary transition-colors">TERMS_OF_EXECUTION</a>
            <span className="opacity-50">SYSTEM_ID: 883-291</span>
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
