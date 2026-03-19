export interface UseCase {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  readingTime: string;
  tags?: string[];
}

interface UseCaseMetadata {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  contentPath: string;
}

const useCasesMetadata: Record<string, UseCaseMetadata> = {
  'automated-meeting-intelligence': {
    title: 'Automated Meeting Intelligence: From Calendar to Action',
    date: '2026-03-19',
    author: 'Streaml Team',
    excerpt: 'How AI agents connect to Google Calendar, research companies, prepare discovery questions, and deliver strategic briefs to Slack and Gmail — automatically before every meeting.',
    tags: ['Meeting Prep', 'Google Calendar', 'Slack', 'Gmail', 'Enterprise AI'],
    contentPath: '/use-cases/automated-meeting-intelligence.md',
  },
  'automated-issue-monitoring-confluence': {
    title: 'Automated Issue Monitoring: From Confluence to Team Alerts',
    date: '2026-03-19',
    author: 'Streaml Team',
    excerpt: 'How AI agents connect to Confluence and Jira, monitor for critical issues daily, and deliver structured digests to Slack and Gmail — so nothing falls through the cracks.',
    tags: ['Confluence', 'Jira', 'Issue Tracking', 'Slack', 'Daily Digest'],
    contentPath: '/use-cases/automated-issue-monitoring-confluence.md',
  },
  'client-report-generation-google-sheets': {
    title: 'Automated Client Report Generation from Google Sheets',
    date: '2026-03-19',
    author: 'Streaml Team',
    excerpt: 'How AI agents read product and client data from Google Sheets, analyze usage trends, and generate polished client-facing reports — delivered automatically via Gmail and Google Drive.',
    tags: ['Google Sheets', 'Client Reports', 'Automation', 'Gmail', 'Google Drive'],
    contentPath: '/use-cases/client-report-generation-google-sheets.md',
  },
};

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function stripFrontMatter(text: string): string {
  const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
  return text.replace(frontMatterRegex, '');
}

export async function getAllUseCases(): Promise<UseCase[]> {
  const useCases: UseCase[] = [];

  for (const [slug, metadata] of Object.entries(useCasesMetadata)) {
    try {
      const response = await fetch(metadata.contentPath);
      const text = await response.text();
      const content = stripFrontMatter(text);

      useCases.push({
        slug,
        title: metadata.title,
        date: metadata.date,
        author: metadata.author,
        excerpt: metadata.excerpt,
        content,
        readingTime: calculateReadingTime(content),
        tags: metadata.tags,
      });
    } catch (error) {
      console.error(`Error loading use case ${slug}:`, error);
    }
  }

  return useCases.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getUseCaseBySlug(slug: string): Promise<UseCase | null> {
  const metadata = useCasesMetadata[slug];

  if (!metadata) {
    return null;
  }

  try {
    const response = await fetch(metadata.contentPath);
    const text = await response.text();
    const content = stripFrontMatter(text);

    return {
      slug,
      title: metadata.title,
      date: metadata.date,
      author: metadata.author,
      excerpt: metadata.excerpt,
      content,
      readingTime: calculateReadingTime(content),
      tags: metadata.tags,
    };
  } catch (error) {
    console.error(`Error loading use case ${slug}:`, error);
    return null;
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
