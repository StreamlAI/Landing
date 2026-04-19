import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams, Redirect } from "wouter";
import { trackEvent } from "@/lib/analytics";
import { useSEO } from "@/hooks/useSEO";
import { Navigation } from "@/components/Navigation";
import { useUtmUrl } from "@/hooks/useUtmUrl";

interface Story {
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  cover: string;
  sections: { heading: string; body: string }[];
  conclusion: string;
}

const stories: Record<string, Story> = {
  "gtm-series-a-startup": {
    slug: "gtm-series-a-startup",
    tag: "GO-TO-MARKET",
    title: "Go-To-Market for a Series A Startup",
    subtitle: "",
    cover: "/use-cases/gtm-cover.jpg",
    sections: [
      {
        heading: "Creator & Community Outreach",
        body: "Identified relevant creators and communities, generated personalized outreach, and coordinated collaborations across platforms such as YouTube, X, TikTok, and LinkedIn. This helped the company increase product visibility and reach new audiences through creator-led distribution.",
      },
      {
        heading: "Content & Social Engagement",
        body: "Supported founder and company content by generating posts, managing engagement, and identifying topics that resonated with the company's target audience across social platforms.",
      },
      {
        heading: "Pipeline & Lead Management",
        body: "Assisted with outbound and inbound workflows by identifying target accounts, qualifying incoming leads, and routing opportunities to the team — helping the startup build pipeline more efficiently.",
      },
      {
        heading: "CRM Automation",
        body: "Helped maintain CRM hygiene by automatically logging interactions, updating contact records, tracking deal stages, and organizing inbound and outbound conversations.",
      },
    ],
    conclusion:
      "The company was able to scale GTM execution while keeping the team lean.",
  },
};

export default function CustomerStory() {
  const { slug } = useParams<{ slug: string }>();
  const story = slug ? stories[slug] : undefined;
  const calendlyUrl = useUtmUrl("https://calendly.com/yirancai00/30min");

  if (!story) {
    return <Redirect to="/use-cases" />;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.subtitle,
    image: `https://streaml.app${story.cover}`,
    url: `https://streaml.app/use-cases/${story.slug}`,
    author: { "@type": "Organization", name: "Streaml" },
    publisher: {
      "@type": "Organization",
      name: "Streaml",
      logo: { "@type": "ImageObject", url: "https://streaml.app/favicon.png" },
    },
  };

  useSEO({
    title: `${story.title} | Streaml Use Cases`,
    description: story.subtitle,
    canonicalPath: `/use-cases/${story.slug}`,
    keywords:
      "AI agents, case study, GTM automation, creator outreach, CRM automation, sales pipeline",
  });

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] overflow-x-hidden font-sans selection:bg-[#E63946]/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      <main>
        {/* Hero / Cover */}
        <section className="relative pt-24 md:pt-32">
          {/* Cover Image */}
          <div className="w-full h-[280px] md:h-[400px] lg:h-[480px] relative overflow-hidden">
            <img
              src={story.cover}
              alt={story.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent" />
          </div>

          {/* Title overlay on cover bottom */}
          <div
            className="relative bg-[#1D3557] py-10 md:py-14"
            style={{ borderBottom: "4px solid #1A1A1A" }}
          >
            <div className="container mx-auto px-6">
              <Link
                href="/use-cases"
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                All use cases
              </Link>

              <span className="block px-3 py-1 mb-4 text-xs font-mono font-bold tracking-wider uppercase bg-[#FFB703] text-[#1A1A1A] w-fit">
                {story.tag}
              </span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 max-w-3xl"
              >
                {story.title}
              </motion.h1>

              {story.subtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-white/70 max-w-2xl leading-relaxed"
                >
                  {story.subtitle}
                </motion.p>
              )}
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              {story.sections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="mb-12 last:mb-0"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`neo-index shrink-0 mt-1 ${
                        i % 3 === 0
                          ? "neo-index-red"
                          : i % 3 === 1
                            ? "neo-index-yellow"
                            : "neo-index-blue"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">
                      {section.heading}
                    </h2>
                  </div>
                  <p className="text-[#4A4A4A] text-base md:text-lg leading-relaxed pl-12">
                    {section.body}
                  </p>
                </motion.div>
              ))}

              {/* Conclusion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 p-8 md:p-10"
                style={{
                  backgroundColor: "#1D3557",
                  border: "2px solid #1A1A1A",
                }}
              >
                <p className="text-white text-base md:text-lg leading-relaxed font-medium">
                  {story.conclusion}
                </p>
              </motion.div>
            </div>
          </div>
        </article>

        {/* Bottom CTA */}
        <section
          className="py-16 md:py-20 relative overflow-hidden"
          style={{ borderTop: "4px solid #1A1A1A", backgroundColor: "#FAFAFA" }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Want similar results?
                </h3>
                <p className="text-[#4A4A4A]">
                  Talk to us about deploying agents for your workflows.
                </p>
              </div>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn-primary flex items-center gap-3 group shrink-0"
                onClick={() => trackEvent("cta_book_demo", { location: "customer_story" })}
              >
                Talk to Founder
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="py-8"
        style={{ backgroundColor: "#FAFAFA", borderTop: "2px solid #1A1A1A" }}
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm font-bold tracking-wider">Streaml, Inc.</span>
          <div className="flex gap-8 text-xs text-[#4A4A4A]">
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
    </div>
  );
}
