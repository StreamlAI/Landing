import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

interface NavigationProps {
  showLinks?: boolean;
}

export function Navigation({ showLinks = true }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-border/40 h-16 shadow-lg shadow-primary/5"
          : "bg-background/80 backdrop-blur-xl border-border/40 h-16"
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <img
            src="/favicon.png"
            alt="Streaml"
            className="w-10 h-10 group-hover:scale-105 transition-transform duration-300"
          />
          <span className="text-xl font-bold tracking-tight text-foreground">
            Streaml
          </span>
        </Link>

        {showLinks && (
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#architecture"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Architecture
            </a>
            <a
              href="/#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
          </div>
        )}

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />

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
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border/40"
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          <div className="flex items-center justify-between py-2">
            <span className="text-base font-medium text-muted-foreground">Theme</span>
            <ThemeToggle />
          </div>

          {showLinks && (
            <>
              <a
                href="/#architecture"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Architecture
              </a>
              <a
                href="/#features"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Features
              </a>
            </>
          )}

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
  );
}
