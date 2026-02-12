import { AnimatePresence, motion } from "framer-motion";
import { Link } from "wouter";
import { Cookie } from "lucide-react";
import { useCookieConsent } from "@/hooks/useCookieConsent";

export function CookieConsent() {
  const { consent, acceptAll, rejectNonEssential } = useCookieConsent();

  return (
    <AnimatePresence>
      {consent === null && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="mx-auto" style={{ maxWidth: "900px" }}>
            <div
              className="p-6 md:p-8"
              style={{
                backgroundColor: "#FAFAFA",
                border: "2px solid #1A1A1A",
                boxShadow: "4px -4px 0 #1A1A1A",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#FFB703" }}
                >
                  <Cookie className="w-5 h-5 text-[#1A1A1A]" />
                </div>

                <div className="flex-1">
                  <span
                    className="text-xs font-bold tracking-wider uppercase mb-2 block"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "#4A4A4A",
                    }}
                  >
                    COOKIE_PREFERENCES
                  </span>

                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{
                      fontFamily: "'Manrope', system-ui, sans-serif",
                      color: "#4A4A4A",
                    }}
                  >
                    We use cookies to analyze site traffic and improve your
                    experience. Read our{" "}
                    <Link
                      href="/privacy-policy"
                      className="underline underline-offset-2 hover:text-[#E63946] transition-colors"
                      style={{ color: "#1D3557", fontWeight: 600 }}
                    >
                      Privacy Policy
                    </Link>{" "}
                    for details.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={acceptAll}
                      className="neo-btn-primary text-sm px-6 py-2.5 cursor-pointer"
                    >
                      Accept All
                    </button>
                    <button
                      onClick={rejectNonEssential}
                      className="neo-btn-secondary text-sm px-6 py-2.5 cursor-pointer"
                    >
                      Reject Non-Essential
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
