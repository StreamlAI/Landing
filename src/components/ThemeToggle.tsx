import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 transition-colors duration-300 hover:border-primary/30 cursor-pointer"
      aria-label="Toggle theme"
    >
      {/* Track background glow */}
      <div
        className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
          isLight ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.05))",
        }}
      />

      {/* Sliding thumb */}
      <motion.div
        className="absolute top-0.5 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg flex items-center justify-center"
        initial={false}
        animate={{
          x: isLight ? 28 : 2,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {/* Icon with fade transition */}
        <motion.div
          initial={false}
          animate={{
            rotate: isLight ? 0 : 180,
            scale: isLight ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          {isLight ? (
            <Sun className="w-3.5 h-3.5 text-white" />
          ) : (
            <Moon className="w-3.5 h-3.5 text-white" />
          )}
        </motion.div>
      </motion.div>

      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <Sun
          className={`w-3 h-3 transition-all duration-300 ${
            isLight ? "text-primary/30" : "text-muted-foreground/40"
          }`}
        />
        <Moon
          className={`w-3 h-3 transition-all duration-300 ${
            isLight ? "text-muted-foreground/40" : "text-primary/30"
          }`}
        />
      </div>
    </button>
  );
}
