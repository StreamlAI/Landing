export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  readingTime: string;
  tags?: string[];
}

interface BlogPostMetadata {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  contentPath: string;
}

const blogPostsMetadata: Record<string, BlogPostMetadata> = {
  'beyond-transformers': {
    title: 'Beyond Transformers: Where the Next AI Paradigm Shift Might Come From',
    date: '2026-03-15',
    author: 'Streaml Team',
    excerpt: 'In 2017, a single paper changed the trajectory of artificial intelligence. But every paradigm eventually hits its limits. What comes after Transformers?',
    tags: ['AI', 'Machine Learning', 'Transformers', 'Architecture'],
    contentPath: '/blog/beyond-transformers.md',
  },
};

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function stripFrontMatter(text: string): string {
  // Remove YAML front matter if present
  const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
  return text.replace(frontMatterRegex, '');
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];

  for (const [slug, metadata] of Object.entries(blogPostsMetadata)) {
    try {
      const response = await fetch(metadata.contentPath);
      const text = await response.text();
      const content = stripFrontMatter(text);

      posts.push({
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
      console.error(`Error loading blog post ${slug}:`, error);
    }
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const metadata = blogPostsMetadata[slug];
  
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
    console.error(`Error loading blog post ${slug}:`, error);
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
