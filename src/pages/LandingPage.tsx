import { motion } from "framer-motion";
import { ArrowRight, Terminal, Layers, Cpu, Network, RefreshCcw, Database, Shield, Zap, ChevronRight, Cloud, GitBranch, Play, BarChart3, Settings, Linkedin, MessageSquare } from "lucide-react";

const heroBg = "/generated_images/dark_abstract_network_graph_background.png";
const workflowImg = "/generated_images/isometric_marketing_workflow_schematic.png";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black overflow-x-hidden font-sans">
      <div className="scanline"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/favicon.png" alt="Streaml" className="w-8 h-8" />
            <span className="text-xl font-bold tracking-tighter font-mono">STREAML_</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            <a href="#features" className="hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4">01_FEATURES</a>
            <a href="#architecture" className="hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4">02_ARCHITECTURE</a>
            <a href="#evolution" className="hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4">03_EVOLUTION</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 border-b border-border">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-3 py-1 mb-8 text-primary font-mono text-xs"
            >
              <span className="w-2 h-2 bg-primary animate-pulse"></span>
              AI_NATIVE_RUNTIME // AUTONOMOUS_GROWTH
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-6 uppercase"
            >
              Fully-Automated <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">AI Marketing Infra</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 font-light leading-relaxed"
            >
              An AI-native runtime that <span className="text-primary font-medium">generates</span>, <span className="text-primary font-medium">executes</span>, and <span className="text-primary font-medium">evolves</span> marketing workflows autonomously. A/B test, patch decay, and re-deploy without manual intervention.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://calendly.com/yirancai00/30min?month=2025-06"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-black px-8 py-4 text-lg font-bold hover:bg-white transition-all hover:scale-105 font-mono uppercase flex items-center gap-2 group"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 p-6 hidden lg:block">
          <div className="grid grid-cols-2 gap-2 text-xs font-mono text-muted-foreground opacity-50">
            <div>RUNTIME: ACTIVE</div>
            <div>AGENTS: 12</div>
            <div>WORKFLOWS: 847</div>
            <div>UPTIME: 99.9%</div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="py-24 border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16">
            <div className="text-primary font-mono mb-2">01_CORE_FEATURES</div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
              The Streaml Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A complete runtime for autonomous marketing workflows with continuous optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1: Client App / UI */}
            <div className="group border border-border p-8 hover:border-primary transition-colors bg-card relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Terminal className="w-24 h-24" />
              </div>
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 text-primary border border-primary/20">
                <Play className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Client App / UI</h3>
              <p className="text-muted-foreground mb-6">
                Intuitive interface for prompts, execution status, and campaign history visualization.
              </p>
              <ul className="space-y-2 text-sm font-mono text-muted-foreground">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div>Real-time Status</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div>Campaign History</li>
              </ul>
            </div>

            {/* Feature 2: Coordination & Scheduling */}
            <div className="group border border-border p-8 hover:border-primary transition-colors bg-card relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Settings className="w-24 h-24" />
              </div>
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 text-primary border border-primary/20">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Coordination & Scheduling</h3>
              <p className="text-muted-foreground mb-6">
                Define parameters for channels, volume, and execution limits with full control.
              </p>
              <ul className="space-y-2 text-sm font-mono text-muted-foreground">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div>Channel Controls</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div>Volume Limits</li>
              </ul>
            </div>

            {/* Feature 3: Workflow Generation */}
            <div className="group border border-border p-8 hover:border-primary transition-colors bg-card relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Layers className="w-24 h-24" />
              </div>
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 text-primary border border-primary/20">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Workflow Generation</h3>
              <p className="text-muted-foreground mb-6">
                Convert prompts into executable, versioned workflows that evolve and remain traceable.
              </p>
              <ul className="space-y-2 text-sm font-mono text-muted-foreground">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div>Prompt to Workflow</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div>Version Control</li>
              </ul>
            </div>

            {/* Feature 4: Cloud Sandbox Execution */}
            <div className="group border border-border p-8 hover:border-primary transition-colors bg-card relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cloud className="w-24 h-24" />
              </div>
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 text-primary border border-primary/20">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cloud Sandbox Execution</h3>
              <p className="text-muted-foreground mb-6">
                Isolated per-user cloud sandboxes ensure safe, secure execution for each client.
              </p>
              <ul className="space-y-2 text-sm font-mono text-muted-foreground">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div>Isolated Environments</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div>Secure by Default</li>
              </ul>
            </div>

            {/* Feature 5: Evaluation & Evolution Engine */}
            <div className="group border border-border p-8 hover:border-primary transition-colors bg-card relative overflow-hidden md:col-span-2 lg:col-span-2">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <BarChart3 className="w-24 h-24" />
              </div>
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 text-primary border border-primary/20">
                <RefreshCcw className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Evaluation & Evolution Engine</h3>
              <p className="text-muted-foreground mb-6">
                Analyzes performance data to automatically adjust behavior and improve outcomes. The system learns from every execution cycle.
              </p>
              <ul className="space-y-2 text-sm font-mono text-muted-foreground">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div>Performance Analysis</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div>Auto-Optimization</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div>Continuous Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section id="architecture" className="py-24 border-b border-border bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="text-primary font-mono mb-2">02_SYSTEM_ARCHITECTURE</div>
              <h2 className="text-4xl font-bold uppercase tracking-tight mb-8">
                Multi-Channel Agent Runtime
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 border border-border flex items-center justify-center bg-white/5">
                    <Network className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Cross-Platform Execution</h3>
                    <p className="text-muted-foreground text-sm">Agents operate across LinkedIn, X, Reddit and more. Post, connect, follow, and engage directly on each platform.</p>
                    <div className="flex gap-2 mt-3">
                      <div className="px-2 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-mono">LinkedIn</div>
                      <div className="px-2 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-mono">X</div>
                      <div className="px-2 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-mono">Reddit</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 border border-border flex items-center justify-center bg-white/5">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sandbox Agent Runtime</h3>
                    <p className="text-muted-foreground text-sm">Each client operates in a dedicated environment with built-in safety mechanisms and human-like behaviors for long-running executions.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 border border-border flex items-center justify-center bg-white/5">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Proprietary Data Integration</h3>
                    <p className="text-muted-foreground text-sm">Continuously learns from CRM and internal knowledge sources to improve decision-making and results over time.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20"></div>
              <img src={workflowImg} alt="Architecture Schematic" className="relative z-10 w-full border border-primary/20 bg-black/50 backdrop-blur-sm" />
              <div className="absolute -bottom-6 -right-6 font-mono text-xs text-primary/50 border border-primary/20 p-2">
                FIG 2.1: AGENT_RUNTIME
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evolving Workflows Section */}
      <section id="evolution" className="py-24 border-b border-border bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-primary font-mono mb-2">03_WORKFLOW_EVOLUTION</div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">Versioned & Self-Healing Workflows</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every workflow is versioned and treated as an executable unit. The system auto-patches performance decay without manual resets.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[800px] flex justify-between items-center relative">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10"></div>
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 -z-10 animate-pulse"></div>

              {[
                { step: "01", title: "Prompt Input", sub: "Define your goal" },
                { step: "02", title: "Workflow Generated", sub: "Versioned & executable" },
                { step: "03", title: "Sandbox Execution", sub: "Isolated & secure" },
                { step: "04", title: "Performance Eval", sub: "Analyze results" },
                { step: "05", title: "Auto-Patch", sub: "Evolve & redeploy" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center group cursor-default">
                  <div className="w-4 h-4 bg-black border-2 border-primary rounded-full mb-4 relative z-10 group-hover:scale-150 transition-transform duration-300">
                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 blur-md transition-opacity"></div>
                  </div>
                  <div className="bg-card border border-border p-4 w-40 text-center hover:border-primary transition-colors">
                    <div className="text-xs font-mono text-primary mb-1">{item.step}</div>
                    <div className="font-bold text-sm mb-1">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key differentiator callout */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="border border-primary/30 bg-primary/5 p-6 text-center">
              <div className="text-primary font-mono text-sm mb-2">KEY_DIFFERENTIATOR</div>
              <p className="text-lg text-foreground">
                Strategy changes produce traceable versions. Roll back or update when performance decays or environments change. <span className="text-primary font-medium">Campaigns continuously improve without requiring manual intervention.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5">
           <div className="absolute inset-0 bg-[radial-gradient(#00FFFF_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8">
            Deploy Autonomous<br/>Growth Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Join the companies using AI-native infrastructure for continuous, self-optimizing marketing.
          </p>
          <a
            href="https://calendly.com/yirancai00/30min?month=2025-06"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-black px-12 py-5 text-xl font-bold hover:bg-white transition-all hover:scale-105 font-mono uppercase inline-flex items-center gap-3"
          >
            Book a Demo
            <ChevronRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-black text-sm font-mono text-muted-foreground">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img src="/favicon.png" alt="Streaml" className="w-6 h-6" />
            <span className="text-foreground font-bold">STREAML_</span>
          </div>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
          <div className="mt-4 md:mt-0">
            &copy; 2025 STREAML SYSTEM.
          </div>
        </div>
      </footer>
    </div>
  );
}
