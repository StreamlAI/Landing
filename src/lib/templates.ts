/* ------------------------------------------------------------------ */
/*  Shared template types & data                                       */
/* ------------------------------------------------------------------ */

export interface Template {
  slug: string;
  title: string;
  description: string;
  category: string;
  integrations?: string[];
}

export interface TemplateDetail extends Template {
  challenge: string;
  solution: string;
  steps: { heading: string; body: string }[];
  departments: string[];
}

export const categories = [
  "All",
  "Sales",
  "Marketing",
  "Operations",
  "Finance",
  "HR",
  "IT",
  "Customer Support",
] as const;

export type Category = (typeof categories)[number];

/* ------------------------------------------------------------------ */
/*  Template catalogue                                                 */
/* ------------------------------------------------------------------ */

export const templates: TemplateDetail[] = [
  {
    slug: "call-preparation-automation",
    title: "Call Preparation Automation",
    description:
      "Automatically generate investor call briefs including company background, metrics, recent announcements, and suggested diligence questions by integrating with Notion, Crunchbase, and LinkedIn.",
    category: "Finance",
    integrations: ["Notion", "Crunchbase", "LinkedIn"],
    departments: ["Investment Team", "Business Development"],
    challenge:
      "Investment professionals spend 45–90 minutes before every call manually gathering company data across Crunchbase, LinkedIn, internal Notion memos, and news sources. The process is repetitive, error-prone, and scales poorly — an associate covering 8–10 calls per week can lose an entire working day just on prep. Critical data points get missed, and the lack of standardised briefs means partners walk into calls with inconsistent context.",
    solution:
      "Streaml deploys an agent workflow that triggers automatically when a new call is scheduled. The agents fan out in parallel — one pulls the company profile and funding history from Crunchbase, another scans the founders' and key executives' LinkedIn activity, a third retrieves any internal notes and prior meeting memos from Notion, and a fourth monitors recent news and press mentions. A synthesis agent then merges everything into a structured brief with company overview, key metrics, latest developments, competitive landscape, and tailored diligence questions. The finished document is dropped into your Notion workspace and optionally pushed to Slack before the call.",
    steps: [
      {
        heading: "Trigger & Extraction",
        body: "When a calendar event matching your naming convention (e.g. \"Intro Call — [Company]\") is detected, the workflow extracts the company name, domain, and any attendee LinkedIn URLs from the invite.",
      },
      {
        heading: "Data Collection",
        body: "Parallel agents query Crunchbase for funding rounds, valuation, investors, and team size; scrape founder and executive LinkedIn profiles for recent posts, career history, and mutual connections; and pull any existing memos, tags, or deal notes from your Notion deal pipeline.",
      },
      {
        heading: "News & Market Scan",
        body: "A dedicated research agent searches recent news articles, press releases, and industry publications for mentions of the company, its competitors, and relevant market trends from the past 90 days.",
      },
      {
        heading: "Brief Synthesis",
        body: "A synthesis agent consolidates all collected data into a standardised brief template: company snapshot, founding story, product overview, traction & metrics, recent announcements, competitive landscape, and 5–8 tailored diligence questions ranked by priority.",
      },
      {
        heading: "Delivery & Notification",
        body: "The completed brief is written to a new Notion page linked to the deal record. A Slack message is sent to the relevant channel or DM with a summary and a link to the full brief, 30 minutes before the scheduled call.",
      },
    ],
  },
  {
    slug: "research-prep-reading-automation",
    title: "Research & Prep Reading Automation",
    description:
      "Aggregate research materials, pitch decks, and company updates from Google Drive and PitchBook, and generate suggested diligence questions and investment summaries stored in Notion.",
    category: "Finance",
    integrations: ["Google Drive", "PitchBook", "Notion"],
    departments: ["Investment Team", "Research"],
    challenge:
      "Before every investment committee or partner meeting, analysts must manually hunt through shared Google Drive folders for the latest pitch deck versions, pull comparable company data from PitchBook, cross-reference prior internal memos, and stitch it all into a coherent summary. With dozens of active deals in the pipeline, materials are scattered across folders, naming conventions are inconsistent, and version control is unreliable. Analysts routinely spend 2–3 hours per deal assembling prep packets, and critical updates — such as a revised cap table uploaded the night before — frequently get overlooked.",
    solution:
      "Streaml deploys an agent workflow that automatically compiles all relevant research materials for a given deal into a single, structured investment summary. When triggered, agents scan the designated Google Drive folders for the latest pitch decks, financials, and data room documents, while a parallel agent pulls the company's PitchBook profile including valuation history, comparable transactions, investor syndicate, and sector benchmarks. A synthesis agent then merges internal memos, external data, and document highlights into a standardised investment summary with an executive overview, key metrics table, risk factors, and a prioritised list of diligence questions tailored to the deal stage. The finished summary is written to Notion and linked to the deal record for easy access by the full team.",
    steps: [
      {
        heading: "Deal Identification",
        body: "The workflow is triggered manually from a Notion deal page or automatically when a meeting tagged with a deal name appears on the calendar. The agent extracts the company name, deal stage, and any linked Drive folder or PitchBook URL from the deal record.",
      },
      {
        heading: "Document Aggregation",
        body: "A Drive agent scans the deal's shared folder and subfolders, identifies the most recent versions of pitch decks, financial models, term sheets, and data room files by parsing file names, modification dates, and folder structure. It extracts key content from each document — slide summaries from decks, headline figures from financial models, and clause highlights from term sheets.",
      },
      {
        heading: "Market & Comparable Data",
        body: "A PitchBook agent pulls the company's profile, funding history, post-money valuations, and investor list. It also retrieves comparable transactions in the same sector and stage, along with relevant public market benchmarks to contextualise the deal's pricing and growth trajectory.",
      },
      {
        heading: "Summary Generation",
        body: "A synthesis agent consolidates all collected materials into a standardised Notion template: executive overview, founding team background, product and traction summary, financial highlights, comparable analysis, identified risk factors, and 6–10 stage-appropriate diligence questions ranked by importance.",
      },
      {
        heading: "Storage & Distribution",
        body: "The completed investment summary is written to a new Notion page linked to the deal record, with inline references back to the original source documents in Drive. A notification is sent to the deal team via Slack or email with a link to the summary ahead of the scheduled meeting.",
      },
    ],
  },
  {
    slug: "automated-sourcing-email-generator",
    title: "Automated Sourcing Email Generator",
    description:
      "Generate personalized founder outreach emails using startup and contact data from Apollo and LinkedIn, and distribute messages through Gmail or CRM platforms such as HubSpot.",
    category: "Sales",
    integrations: ["Apollo", "LinkedIn", "Gmail", "HubSpot"],
    departments: ["Investment Team", "Business Development"],
    challenge:
      "Sourcing teams send hundreds of outreach emails per week to founders, but personalization is what separates a reply from the trash folder. Manually researching each founder's background on LinkedIn, pulling company details from Apollo, and crafting a tailored email takes 10–15 minutes per contact. At scale, associates either sacrifice quality — sending generic templates that get ignored — or sacrifice volume, leaving promising deals untouched. CRM hygiene also suffers: outreach activity is logged inconsistently, making it difficult to track which founders have been contacted, what messaging was used, and where follow-ups are overdue.",
    solution:
      "Streaml deploys an agent workflow that turns a target list into fully personalized, ready-to-send outreach emails. When a new batch of companies is added to your sourcing pipeline — via a HubSpot list, a spreadsheet, or a Notion database — agents fan out in parallel: one pulls firmographic data from Apollo (funding stage, headcount, tech stack, recent hiring signals), another scans the founder's LinkedIn profile for career history, recent posts, shared connections, and personal interests. A composition agent then generates a personalized email for each founder, referencing specific details that demonstrate genuine familiarity — a recent product launch, a mutual investor, or a LinkedIn post the founder wrote last week. Emails are routed through Gmail or queued in HubSpot with tracking enabled, and all activity is logged back to the CRM contact record automatically.",
    steps: [
      {
        heading: "Target List Ingestion",
        body: "The workflow triggers when new contacts are added to a designated HubSpot list, Notion database, or uploaded CSV. The agent parses each entry for company name, founder name, email address, and any existing notes or tags.",
      },
      {
        heading: "Contact & Company Enrichment",
        body: "An Apollo agent enriches each contact with firmographic data — funding round, total raised, employee count, industry vertical, tech stack, and recent hiring activity. Simultaneously, a LinkedIn agent pulls the founder's career history, education, recent posts, mutual connections, and any shared group memberships.",
      },
      {
        heading: "Signal Detection",
        body: "A dedicated analysis agent identifies the strongest personalization hooks for each founder: a recent funding announcement, a product launch covered in the press, a hiring surge suggesting expansion, a LinkedIn post expressing a pain point your fund can address, or a mutual connection who could serve as a warm intro.",
      },
      {
        heading: "Email Composition",
        body: "A composition agent generates a personalized outreach email for each founder using the enriched data and detected signals. Each email follows your team's tone and structure guidelines while weaving in 2–3 specific references that demonstrate genuine research — no generic \"I came across your company\" openers.",
      },
      {
        heading: "Distribution & CRM Logging",
        body: "Approved emails are sent through Gmail with open and click tracking, or queued as sequences in HubSpot. All outreach activity — email content, send time, and engagement metrics — is automatically logged to the corresponding CRM contact record, ensuring full visibility for the team and clean data for follow-up workflows.",
      },
    ],
  },
  {
    slug: "fundraising-deal-flow-tracking-automation",
    title: "Fundraising & Deal Flow Tracking Automation",
    description:
      "Detect and track startups currently fundraising using signals from Crunchbase, AngelList, and LinkedIn, and manage deal flow pipelines through databases such as Airtable or venture CRM systems such as Affinity.",
    category: "Finance",
    integrations: ["Crunchbase", "AngelList", "LinkedIn", "Airtable", "Affinity"],
    departments: ["Investment Team", "Deal Flow Operations"],
    challenge:
      "Staying on top of which startups are actively raising is one of the hardest parts of venture sourcing. Fundraising signals are scattered across Crunchbase alerts, AngelList listings, LinkedIn posts from founders announcing rounds, and word-of-mouth from the network. Analysts manually monitor these channels daily, copy-pasting findings into spreadsheets or CRM records that quickly become stale. Deals slip through the cracks when a signal is spotted but never logged, or when two team members chase the same company without realising it. The result is a fragmented pipeline with no single source of truth, inconsistent coverage across sectors, and a constant fear of missing the next breakout company.",
    solution:
      "Streaml deploys an always-on agent workflow that continuously monitors fundraising signals across Crunchbase, AngelList, and LinkedIn, then automatically populates and maintains your deal flow pipeline in Airtable or Affinity. Agents run on a configurable schedule — hourly, daily, or in real time — scanning for new funding announcements, round updates, and founder posts that indicate active fundraising. Each detected signal is enriched with company metadata, founding team profiles, sector tags, and estimated round size, then deduplicated against your existing pipeline to prevent overlap. New opportunities are created as structured records in your CRM with all enrichment data attached, while existing records are updated when new information surfaces. The team receives a daily digest summarising newly detected deals, stage changes, and flagged high-priority opportunities.",
    steps: [
      {
        heading: "Signal Monitoring",
        body: "Scheduled agents continuously scan Crunchbase for new funding rounds and status changes, AngelList for newly listed startups seeking investment, and LinkedIn for founder posts containing fundraising keywords such as \"raising\", \"seed round\", \"looking for investors\", or \"pre-Series A\". Monitoring frequency is configurable per source.",
      },
      {
        heading: "Enrichment & Classification",
        body: "Each detected signal triggers an enrichment pipeline: the agent pulls the company's full Crunchbase profile (sector, location, founding date, prior rounds, investors), scrapes founder LinkedIn profiles for background and network overlap, and classifies the opportunity by stage, sector vertical, and geography against your fund's investment thesis.",
      },
      {
        heading: "Deduplication & Matching",
        body: "Before creating a new record, the agent checks your existing Airtable or Affinity pipeline for matches by company name, domain, and founder names. If the company already exists, the record is updated with the latest signal and a change log entry is appended. If it is net-new, a full deal record is created with all enriched fields populated.",
      },
      {
        heading: "Pipeline Management",
        body: "New deal records are automatically tagged with source channel, signal strength score, thesis-fit rating, and assigned to the relevant sector lead based on your team's coverage map. Stage fields are updated as new signals arrive — for example, a company detected on AngelList that later appears with a Crunchbase round announcement is automatically moved from \"Scouting\" to \"Active Fundraise\".",
      },
      {
        heading: "Digest & Alerts",
        body: "A daily summary is delivered via Slack or email to the investment team, listing newly detected opportunities, notable stage transitions, and high-priority flags — such as a portfolio company's competitor raising a large round, or a thesis-fit company with a mutual connection in the network. Individual deal alerts can be configured for specific sectors or geographies.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

export function getTemplateBySlug(slug: string): TemplateDetail | undefined {
  return templates.find((t) => t.slug === slug);
}
