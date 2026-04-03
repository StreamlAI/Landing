import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, Mail, Phone, ArrowRight } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

interface NavigationProps {
  showLinks?: boolean;
}

export function Navigation({ showLinks = true }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
              href="/"
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

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.streaml.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn-primary flex items-center gap-2 group bg-green-600 hover:bg-green-700 border-green-600"
          >
            <span>Start Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

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
          {showLinks && (
            <>
              <a
                href="/"
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
            href="https://app.streaml.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn-primary flex items-center justify-center gap-2 mt-2 bg-green-600 hover:bg-green-700 border-green-600"
          >
            <span>Start Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="https://calendly.com/yirancai00/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn-primary flex items-center justify-center gap-2"
          >
            <span>Schedule Call</span>
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
  );
}
