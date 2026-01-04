import { motion } from "framer-motion";
import { ArrowRight, Terminal, Layers, Cpu, Network, RefreshCcw, Database, Shield, Zap, ChevronRight } from "lucide-react";

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
            <Terminal className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold tracking-tighter font-mono">STREAML_</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            <a href="#problem" className="hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4">01_PROBLEM</a>
            <a href="#solution" className="hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4">02_SOLUTION</a>
            <a href="#platform" className="hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4">03_PLATFORM</a>
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
              SYSTEM_STATUS: ONLINE // V.1.0.4
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-6 uppercase"
            >
              AI-Native <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Marketing Infra</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 font-light leading-relaxed"
            >
              Let companies <span className="text-primary font-medium">build</span>, <span className="text-primary font-medium">own</span>, and <span className="text-primary font-medium">evolve</span> their AI marketing agents. Stop shipping deterministic scripts. Start building autonomous systems.
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
            <div>CPU: 12%</div>
            <div>MEM: 4.2GB</div>
            <div>NET: 1.2GB/s</div>
            <div>LAT: 12ms</div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 border-b border-border bg-background relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-bold mb-4 uppercase tracking-tight">System Failure</h2>
              <p className="text-muted-foreground text-lg">
                Current AI marketing tools are fragile. They break at scale because they weren't built for autonomy.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
              {[
                { title: "Deterministic", desc: "Shipping one-size-fits-all agents that can't adapt." },
                { title: "Siloed Execution", desc: "Operating outside internal workflows and data layers." },
                { title: "No Memory", desc: "Optimizing content, not outcomes. Zero retention across attempts." },
                { title: "Open Loops", desc: "Tasks are executed without learning from success or failure." }
              ].map((item, i) => (
                <div key={i} className="bg-background p-8 hover:bg-white/5 transition-colors">
                  <div className="text-primary font-mono text-sm mb-2">ERR_0{i+1}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="border-t border-border pt-16 text-center">
            <div className="inline-block border border-destructive text-destructive px-4 py-2 font-mono uppercase text-sm mb-4">
              Critical Warning
            </div>
            <h3 className="text-2xl md:text-3xl font-bold max-w-3xl mx-auto leading-tight">
              Low conversion, poor retention, and limited long-term value.<br/>
              <span className="text-white">AI added on top of old tools ≠ AI-native marketing.</span>
            </h3>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16">
            <div className="text-primary font-mono mb-2">02_SOLUTION</div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
              The Streaml Protocol
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Enable companies to design, own, and evolve agentic workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group border border-border p-8 hover:border-primary transition-colors bg-card relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Network className="w-24 h-24" />
              </div>
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 text-primary border border-primary/20">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Design & Own</h3>
              <p className="text-muted-foreground mb-6">
                Create agentic marketing workflows, not predefined sequences. You own the graph, the logic, and the IP.
              </p>
              <ul className="space-y-2 text-sm font-mono text-muted-foreground">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div>Custom Logic Graphs</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div>Full IP Ownership</li>
              </ul>
            </div>

            <div className="group border border-border p-8 hover:border-primary transition-colors bg-card relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cpu className="w-24 h-24" />
              </div>
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 text-primary border border-primary/20">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Compose</h3>
              <p className="text-muted-foreground mb-6">
                Unify search, outbound, inbound, and execution into a single workflow graph. No more fragmented tools.
              </p>
              <ul className="space-y-2 text-sm font-mono text-muted-foreground">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div>Unified Execution</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div>Cross-Channel Sync</li>
              </ul>
            </div>

            <div className="group border border-border p-8 hover:border-primary transition-colors bg-card relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <RefreshCcw className="w-24 h-24" />
              </div>
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 text-primary border border-primary/20">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Optimize</h3>
              <p className="text-muted-foreground mb-6">
                Continuously improve through closed-loop feedback using real engagement and conversion signals.
              </p>
              <ul className="space-y-2 text-sm font-mono text-muted-foreground">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div>Real-time Learning</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div>Auto-Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Architecture */}
      <section id="platform" className="py-24 border-b border-border bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="text-primary font-mono mb-2">03_INFRASTRUCTURE</div>
              <h2 className="text-4xl font-bold uppercase tracking-tight mb-8">
                Built for Compounding Value
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 border border-border flex items-center justify-center bg-white/5">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Internal Data Layer</h3>
                    <p className="text-muted-foreground text-sm">CRM, documents, content, conversations, historical outcomes. The memory of your organization.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 border border-border flex items-center justify-center bg-white/5">
                    <Terminal className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Execution Layer</h3>
                    <p className="text-muted-foreground text-sm">Existing tools, channels, and operational paths. The hands of the system.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 border border-border flex items-center justify-center bg-white/5">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Learning Layer</h3>
                    <p className="text-muted-foreground text-sm">Feedback loops that persist across campaigns. The brain that gets smarter with every run.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20"></div>
              <img src={workflowImg} alt="Architecture Schematic" className="relative z-10 w-full border border-primary/20 bg-black/50 backdrop-blur-sm" />
              <div className="absolute -bottom-6 -right-6 font-mono text-xs text-primary/50 border border-primary/20 p-2">
                FIG 2.1: SYSTEM_ARCHITECTURE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closed Loop System Visual */}
      <section className="py-24 border-b border-border bg-[#050505]">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-tight mb-4">User Journey: A Closed-Loop System</h2>
          <p className="text-muted-foreground">Every run makes the system smarter.</p>
        </div>
        
        <div className="container mx-auto px-6 overflow-x-auto">
          <div className="min-w-[800px] flex justify-between items-center relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10"></div>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 -z-10 animate-pulse"></div>

            {[
              { step: "01", title: "Define Goal", sub: "Book meetings" },
              { step: "02", title: "Agent Executes", sub: "Search & Message" },
              { step: "03", title: "System Observes", sub: "Replies & Data" },
              { step: "04", title: "Evaluate", sub: "Success/Fail Logic" },
              { step: "05", title: "Evolve", sub: "New Strategies" },
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
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5">
           <div className="absolute inset-0 bg-[radial-gradient(#00FFFF_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8">
            Start Building<br/>Your System
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Join the companies moving from deterministic scripts to autonomous marketing infrastructure.
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
            <Terminal className="w-5 h-5 text-primary" />
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