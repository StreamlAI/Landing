import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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

  const [activeTab, setActiveTab] = useState<"brand" | "influencer">("brand");
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [successOpen, setSuccessOpen] = useState(false);
  const { toast } = useToast();

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

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] overflow-x-hidden font-sans selection:bg-[#E63946]/20">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 neo-grid opacity-50" />

          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-24 right-[-5%] w-[35%] h-[40vh] bg-[#1D3557] hidden lg:block"
          />
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[50vh] right-[8%] w-[20%] h-[20vh] bg-[#FFB703] hidden lg:block"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-24 right-[28%] w-16 h-16 bg-[#E63946] hidden lg:block"
          />

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1A1A1A]" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-wide uppercase"
                  style={{
                    border: "2px solid #1A1A1A",
                    backgroundColor: "#FAFAFA",
                  }}
                >
                  <Sparkles className="w-3 h-3" />
                  EARLY ACCESS
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-6"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                FIND YOUR
                <br />
                PERFECT
                <br />
                <span className="text-[#E63946]">INFLUENCER</span>
                <br />
                MATCH
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-[#4A4A4A] max-w-lg mb-8"
              >
                Swipe, match, and collaborate with influencers who align with
                your brand. Join the waitlist for early access to the
                Tinder-style influencer matching platform.
              </motion.p>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                href="#waitlist-form"
                className="neo-btn-primary inline-flex items-center gap-2 group"
              >
                <span>Join the Waitlist</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="waitlist-form" className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2
                className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-center"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                GET EARLY ACCESS
              </h2>
              <p className="text-[#4A4A4A] text-center mb-12">
                Tell us a bit about yourself so we can tailor your experience.
              </p>

              <div
                className="p-6 md:p-10"
                style={{
                  border: "2px solid #1A1A1A",
                  backgroundColor: "#FAFAFA",
                }}
              >
                <Tabs
                  value={activeTab}
                  onValueChange={(v) => {
                    setActiveTab(v as "brand" | "influencer");
                    trackEvent("waitlist_tab_switch", { user_type: v });
                  }}
                >
                  <TabsList className="grid w-full grid-cols-2 mb-8 h-auto p-0 bg-transparent gap-3">
                    <TabsTrigger
                      value="brand"
                      className="py-3 text-sm font-bold tracking-wide border-2 border-[#1A1A1A] rounded-none data-[state=active]:bg-[#1D3557] data-[state=active]:text-white data-[state=active]:border-[#1D3557] bg-transparent text-[#1A1A1A]"
                    >
                      I'm a Brand
                    </TabsTrigger>
                    <TabsTrigger
                      value="influencer"
                      className="py-3 text-sm font-bold tracking-wide border-2 border-[#1A1A1A] rounded-none data-[state=active]:bg-[#E63946] data-[state=active]:text-white data-[state=active]:border-[#E63946] bg-transparent text-[#1A1A1A]"
                    >
                      I'm an Influencer
                    </TabsTrigger>
                  </TabsList>

                  <AnimatePresence mode="wait">
                    <TabsContent value="brand" key="brand" asChild>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <BrandForm
                          form={brandForm}
                          onSubmit={onSubmit}
                          submitting={submissionState === "submitting"}
                        />
                      </motion.div>
                    </TabsContent>

                    <TabsContent value="influencer" key="influencer" asChild>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <InfluencerForm
                          form={influencerForm}
                          onSubmit={onSubmit}
                          submitting={submissionState === "submitting"}
                        />
                      </motion.div>
                    </TabsContent>
                  </AnimatePresence>
                </Tabs>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="py-8"
        style={{
          backgroundColor: "#FAFAFA",
          borderTop: "2px solid #1A1A1A",
        }}
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold tracking-wider">
              Streaml, Inc.
            </span>
          </div>
          <div className="flex gap-8 text-xs text-[#4A4A4A]">
            <a href="/blog" className="hover:text-[#1A1A1A] transition-colors">
              Blog
            </a>
            <a
              href="/privacy-policy"
              className="hover:text-[#1A1A1A] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="hover:text-[#1A1A1A] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>

      {/* Success Dialog */}
      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent
          className="border-2 border-[#1A1A1A] rounded-none max-w-md"
          style={{ backgroundColor: "#FAFAFA" }}
        >
          <DialogHeader className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
              }}
              className="mx-auto mb-4 w-16 h-16 bg-[#E63946] flex items-center justify-center"
            >
              <Check className="w-8 h-8 text-white" />
            </motion.div>
            <DialogTitle
              className="text-2xl font-black tracking-tight"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              You're on the list!
            </DialogTitle>
            <DialogDescription className="text-[#4A4A4A] text-base mt-2">
              We'll notify you when it's time to start swiping. Get ready to
              find your perfect influencer match.
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

/* ─── Brand Form ─── */

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-bold uppercase tracking-wide">
                Name *
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  className="border-2 border-[#1A1A1A] rounded-none h-12 focus-visible:ring-[#1D3557]"
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
              <FormLabel className="text-sm font-bold uppercase tracking-wide">
                Work Email *
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@company.com"
                  className="border-2 border-[#1A1A1A] rounded-none h-12 focus-visible:ring-[#1D3557]"
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
              <FormLabel className="text-sm font-bold uppercase tracking-wide">
                Company Name *
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your company"
                  className="border-2 border-[#1A1A1A] rounded-none h-12 focus-visible:ring-[#1D3557]"
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
              <FormLabel className="text-sm font-bold uppercase tracking-wide">
                Monthly Influencer Marketing Budget
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-2 border-[#1A1A1A] rounded-none h-12">
                    <SelectValue placeholder="Select a range" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="border-2 border-[#1A1A1A] rounded-none">
                  {budgetOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <PlatformCheckboxes form={form} label="Target Platforms *" />

        <ReferralToggle form={form} referred={referred} />

        <SubmitButton submitting={submitting} />
      </form>
    </Form>
  );
}

/* ─── Influencer Form ─── */

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-bold uppercase tracking-wide">
                Name *
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  className="border-2 border-[#1A1A1A] rounded-none h-12 focus-visible:ring-[#E63946]"
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
              <FormLabel className="text-sm font-bold uppercase tracking-wide">
                Email *
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@email.com"
                  className="border-2 border-[#1A1A1A] rounded-none h-12 focus-visible:ring-[#E63946]"
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
              <FormLabel className="text-sm font-bold uppercase tracking-wide">
                Primary Social Handle *
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="@yourhandle"
                  className="border-2 border-[#1A1A1A] rounded-none h-12 focus-visible:ring-[#E63946]"
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
              <FormLabel className="text-sm font-bold uppercase tracking-wide">
                Follower Count
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-2 border-[#1A1A1A] rounded-none h-12">
                    <SelectValue placeholder="Select a range" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="border-2 border-[#1A1A1A] rounded-none">
                  {followerOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <PlatformCheckboxes form={form} label="Content Platforms *" />

        <ReferralToggle form={form} referred={referred} />

        <SubmitButton submitting={submitting} accent="#E63946" />
      </form>
    </Form>
  );
}

/* ─── Shared Components ─── */

function PlatformCheckboxes({
  form,
  label,
}: {
  form: ReturnType<typeof useForm<BrandFormData>> | ReturnType<typeof useForm<InfluencerFormData>>;
  label: string;
}) {
  return (
    <FormField
      control={form.control as any}
      name="platforms"
      render={() => (
        <FormItem>
          <FormLabel className="text-sm font-bold uppercase tracking-wide">
            {label}
          </FormLabel>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
            {platformOptions.map((platform) => (
              <FormField
                key={platform}
                control={form.control as any}
                name="platforms"
                render={({ field }) => (
                  <FormItem key={platform}>
                    <label
                      className={`flex items-center gap-2 p-3 border-2 border-[#1A1A1A] cursor-pointer transition-colors ${
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
                      <span className="text-base">{platformEmojis[platform]}</span>
                      <span className="text-sm font-medium">{platform}</span>
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
          <FormItem className="flex items-center justify-between gap-4 py-2">
            <FormLabel className="text-sm font-bold uppercase tracking-wide">
              Were you referred by someone?
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
                  <FormLabel className="text-sm font-bold uppercase tracking-wide">
                    Who referred you?
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name or email of the person who referred you"
                      className="border-2 border-[#1A1A1A] rounded-none h-12"
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
  accent = "#1D3557",
}: {
  submitting: boolean;
  accent?: string;
}) {
  return (
    <button
      type="submit"
      disabled={submitting}
      className="w-full py-4 text-sm font-bold tracking-wide uppercase text-white border-2 flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 disabled:opacity-60"
      style={{
        backgroundColor: accent,
        borderColor: accent,
        fontFamily: "'Cabin', system-ui, sans-serif",
      }}
    >
      {submitting ? (
        "Submitting..."
      ) : (
        <>
          Join the Waitlist
          <ArrowRight className="w-4 h-4" />
        </>
      )}
    </button>
  );
}
