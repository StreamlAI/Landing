import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

interface NavigationProps {
  showLinks?: boolean;
}

export function Navigation({ showLinks = true }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-16"
      style={{
        backgroundColor: "#FAFAFA",
        borderBottom: "2px solid #1A1A1A",
      }}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <img
            src="/favicon.png"
            alt="Streaml"
            className="w-8 h-8 group-hover:scale-105 transition-transform duration-200"
          />
          <span className="text-xl font-bold tracking-tight text-[#1A1A1A]">
            Streaml
          </span>
        </Link>

        {showLinks && (
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#architecture"
              className="text-sm font-medium text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
            >
              Architecture
            </a>
            <a
              href="/#features"
              className="text-sm font-medium text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
            >
              Features
            </a>
            <a
              href="/use-cases"
              className="text-sm font-medium text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
            >
              Use Cases
            </a>
            <a
              href="/templates"
              className="text-sm font-medium text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
            >
              Templates
            </a>
          </div>
        )}

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://calendly.com/yirancai00/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn-secondary flex items-center gap-2 group"
          >
            <span>Schedule Call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="http://linkedin.com/in/caivivian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-5 h-5" />
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
          {showLinks && (
            <>
              <a
                href="/#architecture"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors py-2"
              >
                Architecture
              </a>
              <a
                href="/#features"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors py-2"
              >
                Features
              </a>
              <a
                href="/use-cases"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors py-2"
              >
                Use Cases
              </a>
              <a
                href="/templates"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors py-2"
              >
                Templates
              </a>
            </>
          )}

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
        </div>
      </motion.div>
    </nav>
  );
}
