import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Check, Heart, X as XIcon, Building2, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { trackEvent } from "@/lib/analytics";
import {
  brandSchema,
  influencerSchema,
  platformOptions,
  budgetOptions,
  followerOptions,
  type BrandFormData,
  type InfluencerFormData,
} from "@/lib/waitlist-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const platformEmojis: Record<string, string> = {
  Instagram: "📸",
  TikTok: "🎵",
  YouTube: "▶️",
  LinkedIn: "💼",
  Other: "🌐",
};

type SubmissionState = "idle" | "submitting" | "success" | "error";

export default function WaitlistPage() {
  useSEO({
    title: "Join the Waitlist | Swipe to Match with Influencers",
    description:
      "Get early access to the Tinder-style influencer matching platform. Swipe, match, and collaborate with influencers who align with your brand.",
    canonicalPath: "/waitlist",
    keywords:
      "influencer matching, brand collaboration, influencer marketing, waitlist, early access",
  });

  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [successOpen, setSuccessOpen] = useState(false);
  const { toast } = useToast();
  const brandRef = useRef<HTMLDivElement>(null);
  const influencerRef = useRef<HTMLDivElement>(null);

  const brandForm = useForm<BrandFormData>({
    resolver: zodResolver(brandSchema),
    defaultValues: {
      user_type: "brand",
      name: "",
      email: "",
      company_name: "",
      platforms: [],
      referred: false,
      referred_by: "",
    },
  });

  const influencerForm = useForm<InfluencerFormData>({
    resolver: zodResolver(influencerSchema),
    defaultValues: {
      user_type: "influencer",
      name: "",
      email: "",
      social_handle: "",
      platforms: [],
      referred: false,
      referred_by: "",
    },
  });

  async function onSubmit(data: BrandFormData | InfluencerFormData) {
    setSubmissionState("submitting");
    trackEvent("waitlist_submit_attempt", { user_type: data.user_type });

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status === 409) {
        toast({
          title: "You're already on the waitlist!",
          description: "We'll reach out when it's your turn.",
        });
        setSubmissionState("idle");
        return;
      }

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      trackEvent("waitlist_signup_success", {
        user_type: data.user_type,
        platforms: data.platforms,
        referred: data.referred,
      });
      setSubmissionState("success");
      setSuccessOpen(true);
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
      setSubmissionState("error");
      setTimeout(() => setSubmissionState("idle"), 2000);
    }
  }

  function scrollTo(ref: React.RefObject<HTMLDivElement | null>) {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] overflow-x-hidden font-sans selection:bg-[#E63946]/20">
      <Navigation />

      <main>
        {/* ── Hero Section ── */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 neo-grid opacity-50" />

          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-24 right-[-5%] w-[40%] h-[50vh] bg-[#1D3557] hidden lg:block"
          />
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[55vh] right-[5%] w-[25%] h-[25vh] bg-[#FFB703] hidden lg:block"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-24 right-[25%] w-20 h-20 bg-[#E63946] hidden lg:block"
          />

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1A1A1A]" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-wide uppercase"
                  style={{ border: "2px solid #1A1A1A", backgroundColor: "#FAFAFA" }}
                >
                  🎉 EARLY ACCESS
                </span>
              </motion.div>

              <div className="space-y-2 mb-8">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.9]"
                >
                  JOIN THE WAITLIST
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.9] text-[#E63946]"
                >
                  EARLY.
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="text-lg md:text-xl text-[#4A4A4A] max-w-xl mb-10 leading-relaxed"
              >
                Swipe, match, and collaborate with influencers who align with
                your brand. Reserve your spot and get first access when we open
                the doors.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => scrollTo(brandRef)}
                  className="neo-btn-primary flex items-center gap-3 group"
                >
                  <Building2 className="w-4 h-4" />
                  Join as Brand
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollTo(influencerRef)}
                  className="neo-btn-primary flex items-center gap-3 group bg-[#E63946] hover:bg-[#c62d39] border-[#E63946]"
                >
                  <User className="w-4 h-4" />
                  Join as Influencer
                  <span>✨</span>
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Feature Badges ── */}
        <section
          className="py-12 relative"
          style={{
            backgroundColor: "#FAFAFA",
            borderTop: "4px solid #1A1A1A",
            borderBottom: "4px solid #1A1A1A",
          }}
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
              {[
                { emoji: "✅", title: "Verified Creators", desc: "Every influencer profile is vetted for authenticity" },
                { emoji: "⚡", title: "Fast Matching", desc: "Swipe-based discovery powered by smart recommendations" },
                { emoji: "🔒", title: "No Spam", desc: "Only real connection requests, no unsolicited messages" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`text-center px-6 ${i < 2 ? "md:border-r-2 md:border-[#1A1A1A]" : ""}`}
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <h3 className="text-base font-bold tracking-tight mt-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4A4A4A] mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Swipe Matching Visualization ── */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 neo-grid opacity-30" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                HOW IT <span className="text-[#E63946]">WORKS</span>
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-lg mx-auto">
                Finding your perfect influencer partner is as easy as a swipe.
              </p>
            </motion.div>

            <SwipeDemo />
          </div>
        </section>

        {/* ── Brand Section ── */}
        <div ref={brandRef} className="scroll-mt-24">
          <section
            className="py-20 md:py-28 relative"
            style={{ borderTop: "4px solid #1A1A1A" }}
          >
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Left: Info */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-3xl mb-4 block">🏙️</span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                    FOR <span className="text-[#1D3557]">BRANDS</span>
                  </h2>
                  <p className="text-lg text-[#4A4A4A] mb-8 leading-relaxed">
                    Discover influencers that match your brand values. Swipe
                    through curated profiles and connect directly — no agencies,
                    no middlemen.
                  </p>
                  <div className="space-y-4">
                    {[
                      { icon: "🔎", text: "Browse curated influencer profiles" },
                      { icon: "📅", text: "Schedule collaborations seamlessly" },
                      { icon: "💸", text: "Transparent pricing, no hidden fees" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-3">
                        <span
                          className="w-10 h-10 flex items-center justify-center text-lg border-2 border-[#1A1A1A]"
                          style={{ backgroundColor: "#FAFAFA" }}
                        >
                          {item.icon}
                        </span>
                        <span className="text-base font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Right: Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-6 md:p-10"
                  style={{ border: "2px solid #1A1A1A", backgroundColor: "#FAFAFA" }}
                >
                  <h3 className="text-xl font-bold tracking-tight mb-6">
                    Join as a Brand
                  </h3>
                  <BrandForm
                    form={brandForm}
                    onSubmit={onSubmit}
                    submitting={submissionState === "submitting"}
                  />
                </motion.div>
              </div>
            </div>
          </section>
        </div>

        {/* ── Influencer Section ── */}
        <div ref={influencerRef} className="scroll-mt-24">
          <section
            className="py-20 md:py-28 relative"
            style={{
              borderTop: "4px solid #1A1A1A",
              backgroundColor: "#1A1A1A",
            }}
          >
            <div className="absolute inset-0 neo-grid opacity-10" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Left: Info */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-3xl mb-4 block">🧑‍🚀</span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
                    FOR <span className="text-[#E63946]">INFLUENCERS</span>
                  </h2>
                  <p className="text-lg text-white/70 mb-8 leading-relaxed">
                    Get discovered by brands that value your content. No cold
                    outreach — just swipe and match with the right partners.
                  </p>
                  <div className="space-y-4">
                    {[
                      { icon: "🌐", text: "Get matched with relevant brands" },
                      { icon: "💰", text: "Fair compensation, fast payouts" },
                      { icon: "📈", text: "Grow your portfolio and reach" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-3">
                        <span
                          className="w-10 h-10 flex items-center justify-center text-lg border-2 border-white/30"
                        >
                          {item.icon}
                        </span>
                        <span className="text-base font-medium text-white/90">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Right: Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-6 md:p-10"
                  style={{ border: "2px solid #FAFAFA", backgroundColor: "#FAFAFA" }}
                >
                  <h3 className="text-xl font-bold tracking-tight mb-6">
                    Join as an Influencer
                  </h3>
                  <InfluencerForm
                    form={influencerForm}
                    onSubmit={onSubmit}
                    submitting={submissionState === "submitting"}
                  />
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="py-8"
        style={{ backgroundColor: "#FAFAFA", borderTop: "2px solid #1A1A1A" }}
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold tracking-wider">Streaml, Inc.</span>
          </div>
          <div className="flex gap-8 text-xs text-[#4A4A4A]">
            <a href="/blog" className="hover:text-[#1A1A1A] transition-colors">Blog</a>
            <a href="/privacy-policy" className="hover:text-[#1A1A1A] transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-[#1A1A1A] transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* ── Success Dialog ── */}
      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent
          className="border-2 border-[#1A1A1A] rounded-none max-w-md"
          style={{ backgroundColor: "#FAFAFA" }}
        >
          <DialogHeader className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
              className="mx-auto mb-4 w-20 h-20 bg-[#E63946] flex items-center justify-center"
            >
              <span className="text-3xl">🎉</span>
            </motion.div>
            <DialogTitle
              className="text-2xl font-black tracking-tight"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              You're on the list!
            </DialogTitle>
            <DialogDescription className="text-[#4A4A4A] text-base mt-2">
              We'll reach out soon with exclusive updates and early access. Get
              ready to find your perfect influencer match.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <a href="/" className="neo-btn-primary inline-flex items-center gap-2 group">
              <span>Back to Home</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   Swipe Demo — interactive card stack visualization
   ═══════════════════════════════════════════════════════ */

const demoProfiles = [
  { name: "Sarah Chen", role: "Fashion Influencer", followers: "125K", platform: "Instagram", emoji: "👗" },
  { name: "Alex Rivera", role: "Tech Creator", followers: "89K", platform: "YouTube", emoji: "💻" },
  { name: "Mia Johnson", role: "Fitness Coach", followers: "340K", platform: "TikTok", emoji: "💪" },
];

function SwipeDemo() {
  const [cards, setCards] = useState(demoProfiles);
  const [matched, setMatched] = useState(false);

  function handleSwipe(direction: "left" | "right") {
    if (cards.length === 0) return;

    if (direction === "right" && cards.length === 1) {
      setMatched(true);
      setTimeout(() => {
        setMatched(false);
        setCards(demoProfiles);
      }, 2500);
    }

    setCards((prev) => prev.slice(1));
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-72 h-96 mx-auto mb-8">
        <AnimatePresence>
          {matched && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 z-30 flex flex-col items-center justify-center border-4 border-[#E63946] bg-[#FAFAFA]"
            >
              <span className="text-5xl mb-3">🎉</span>
              <h3 className="text-2xl font-black text-[#E63946] tracking-tight">
                It's a Match!
              </h3>
              <p className="text-sm text-[#4A4A4A] mt-1">Start collaborating now</p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {cards.map((profile, i) => (
            <SwipeCard
              key={profile.name}
              profile={profile}
              index={i}
              onSwipe={handleSwipe}
              isTop={i === 0}
            />
          ))}
        </AnimatePresence>

        {cards.length === 0 && !matched && (
          <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-[#1A1A1A]/20">
            <p className="text-[#4A4A4A] text-sm">Loading more...</p>
          </div>
        )}
      </div>

      {/* Swipe buttons */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => handleSwipe("left")}
          className="w-14 h-14 flex items-center justify-center border-2 border-[#1A1A1A] bg-[#FAFAFA] hover:bg-[#1A1A1A] hover:text-white transition-colors"
          aria-label="Pass"
        >
          <XIcon className="w-6 h-6" />
        </button>
        <span className="text-sm text-[#4A4A4A] font-medium">Swipe to match</span>
        <button
          onClick={() => handleSwipe("right")}
          className="w-14 h-14 flex items-center justify-center border-2 border-[#E63946] bg-[#FAFAFA] text-[#E63946] hover:bg-[#E63946] hover:text-white transition-colors"
          aria-label="Like"
        >
          <Heart className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

function SwipeCard({
  profile,
  index,
  onSwipe,
  isTop,
}: {
  profile: (typeof demoProfiles)[0];
  index: number;
  onSwipe: (dir: "left" | "right") => void;
  isTop: boolean;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);

  function handleDragEnd(_: unknown, info: { offset: { x: number } }) {
    if (info.offset.x > 80) onSwipe("right");
    else if (info.offset.x < -80) onSwipe("left");
  }

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{
        scale: 1 - index * 0.05,
        y: index * 8,
        opacity: 1 - index * 0.15,
      }}
      exit={{ x: 300, opacity: 0, rotate: 15 }}
      transition={{ duration: 0.3 }}
      style={{ x: isTop ? x : 0, rotate: isTop ? rotate : 0, zIndex: 20 - index }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      onDragEnd={isTop ? handleDragEnd : undefined}
      className="absolute inset-0 cursor-grab active:cursor-grabbing border-2 border-[#1A1A1A] bg-[#FAFAFA] flex flex-col"
    >
      {/* LIKE / NOPE overlays */}
      {isTop && (
        <>
          <motion.div
            style={{ opacity: likeOpacity }}
            className="absolute top-4 left-4 z-10 px-3 py-1 border-2 border-green-500 text-green-500 font-bold text-sm rotate-[-12deg]"
          >
            LIKE
          </motion.div>
          <motion.div
            style={{ opacity: nopeOpacity }}
            className="absolute top-4 right-4 z-10 px-3 py-1 border-2 border-[#E63946] text-[#E63946] font-bold text-sm rotate-[12deg]"
          >
            NOPE
          </motion.div>
        </>
      )}

      <div className="flex-1 flex items-center justify-center bg-[#1D3557]/5">
        <span className="text-7xl">{profile.emoji}</span>
      </div>
      <div className="p-5 border-t-2 border-[#1A1A1A]">
        <h4 className="text-lg font-bold tracking-tight">{profile.name}</h4>
        <p className="text-sm text-[#4A4A4A]">{profile.role}</p>
        <div className="flex items-center gap-3 mt-2 text-xs text-[#4A4A4A]">
          <span className="px-2 py-1 border border-[#1A1A1A]/20">{profile.platform}</span>
          <span>{profile.followers} followers</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   Form Components
   ═══════════════════════════════════════════════════════ */

function BrandForm({
  form,
  onSubmit,
  submitting,
}: {
  form: ReturnType<typeof useForm<BrandFormData>>;
  onSubmit: (data: BrandFormData) => void;
  submitting: boolean;
}) {
  const referred = form.watch("referred");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-bold">Name *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  className="border-2 border-[#1A1A1A] rounded-none h-11 focus-visible:ring-[#1D3557]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-bold">Company Name *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your company"
                  className="border-2 border-[#1A1A1A] rounded-none h-11 focus-visible:ring-[#1D3557]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-bold">Work Email *</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@company.com"
                  className="border-2 border-[#1A1A1A] rounded-none h-11 focus-visible:ring-[#1D3557]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="monthly_budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-bold">Monthly Budget</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-2 border-[#1A1A1A] rounded-none h-11">
                    <SelectValue placeholder="Select a range" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="border-2 border-[#1A1A1A] rounded-none">
                  {budgetOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <PlatformCheckboxes form={form} />
        <ReferralToggle form={form} referred={referred} />
        <SubmitButton submitting={submitting} accent="#1D3557" />
      </form>
    </Form>
  );
}

function InfluencerForm({
  form,
  onSubmit,
  submitting,
}: {
  form: ReturnType<typeof useForm<InfluencerFormData>>;
  onSubmit: (data: InfluencerFormData) => void;
  submitting: boolean;
}) {
  const referred = form.watch("referred");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-bold">Name *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  className="border-2 border-[#1A1A1A] rounded-none h-11 focus-visible:ring-[#E63946]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="social_handle"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-bold">Social Media Handle *</FormLabel>
              <FormControl>
                <Input
                  placeholder="@yourhandle"
                  className="border-2 border-[#1A1A1A] rounded-none h-11 focus-visible:ring-[#E63946]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-bold">Email *</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@email.com"
                  className="border-2 border-[#1A1A1A] rounded-none h-11 focus-visible:ring-[#E63946]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="follower_count"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-bold">Follower Count</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-2 border-[#1A1A1A] rounded-none h-11">
                    <SelectValue placeholder="Select a range" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="border-2 border-[#1A1A1A] rounded-none">
                  {followerOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <PlatformCheckboxes form={form} />
        <ReferralToggle form={form} referred={referred} />
        <SubmitButton submitting={submitting} accent="#E63946" />
      </form>
    </Form>
  );
}

/* ─── Shared Form Parts ─── */

function PlatformCheckboxes({
  form,
}: {
  form: ReturnType<typeof useForm<BrandFormData>> | ReturnType<typeof useForm<InfluencerFormData>>;
}) {
  return (
    <FormField
      control={form.control as any}
      name="platforms"
      render={() => (
        <FormItem>
          <FormLabel className="text-sm font-bold">Platforms *</FormLabel>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1">
            {platformOptions.map((platform) => (
              <FormField
                key={platform}
                control={form.control as any}
                name="platforms"
                render={({ field }) => (
                  <FormItem key={platform}>
                    <label
                      className={`flex items-center gap-2 px-3 py-2.5 border-2 border-[#1A1A1A] cursor-pointer transition-all duration-150 text-sm ${
                        (field.value as string[])?.includes(platform)
                          ? "bg-[#1A1A1A] text-white"
                          : "bg-transparent hover:bg-[#1A1A1A]/5"
                      }`}
                    >
                      <FormControl>
                        <Checkbox
                          className="sr-only"
                          checked={(field.value as string[])?.includes(platform)}
                          onCheckedChange={(checked) => {
                            const current = (field.value as string[]) || [];
                            field.onChange(
                              checked
                                ? [...current, platform]
                                : current.filter((v: string) => v !== platform),
                            );
                          }}
                        />
                      </FormControl>
                      <span>{platformEmojis[platform]}</span>
                      <span className="font-medium">{platform}</span>
                      {(field.value as string[])?.includes(platform) && (
                        <Check className="w-3 h-3 ml-auto" />
                      )}
                    </label>
                  </FormItem>
                )}
              />
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function ReferralToggle({
  form,
  referred,
}: {
  form: ReturnType<typeof useForm<BrandFormData>> | ReturnType<typeof useForm<InfluencerFormData>>;
  referred: boolean;
}) {
  return (
    <>
      <FormField
        control={form.control as any}
        name="referred"
        render={({ field }) => (
          <FormItem className="flex items-center justify-between gap-4 py-1">
            <FormLabel className="text-sm font-bold">
              Were you referred?
            </FormLabel>
            <FormControl>
              <Switch
                checked={field.value as boolean}
                onCheckedChange={field.onChange}
              />
            </FormControl>
          </FormItem>
        )}
      />

      <AnimatePresence>
        {referred && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <FormField
              control={form.control as any}
              name="referred_by"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-bold">Who referred you?</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name or email"
                      className="border-2 border-[#1A1A1A] rounded-none h-11"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SubmitButton({
  submitting,
  accent,
}: {
  submitting: boolean;
  accent: string;
}) {
  return (
    <button
      type="submit"
      disabled={submitting}
      className="w-full py-3.5 text-sm font-bold tracking-wide text-white border-2 flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 disabled:opacity-60 mt-2"
      style={{
        backgroundColor: accent,
        borderColor: accent,
        fontFamily: "'Cabin', system-ui, sans-serif",
      }}
    >
      {submitting ? (
        <>Submitting... <ArrowRight className="w-4 h-4 animate-pulse" /></>
      ) : (
        <>
          Join the Waitlist <ArrowRight className="w-4 h-4" />
        </>
      )}
    </button>
  );
}
