import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const BASE_URL = "https://streaml.app";
const DEFAULT_OG_IMAGE = `${BASE_URL}/opengraph.png`;

export function useSEO({
  title,
  description,
  canonicalPath = "/",
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tag
    const updateMeta = (selector: string, content: string, isProperty = false) => {
      const meta = document.querySelector(selector);
      if (meta) {
        meta.setAttribute("content", content);
      }
    };

    // Update meta description
    updateMeta('meta[name="description"]', description);
    updateMeta('meta[name="title"]', title);

    // Update keywords if provided
    if (keywords) {
      updateMeta('meta[name="keywords"]', keywords);
    }

    // Update robots meta if noIndex
    if (noIndex) {
      updateMeta('meta[name="robots"]', "noindex, nofollow");
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `${BASE_URL}${canonicalPath}`);
    }

    // Update OG tags
    updateMeta('meta[property="og:title"]', title);
    updateMeta('meta[property="og:description"]', description);
    updateMeta('meta[property="og:url"]', `${BASE_URL}${canonicalPath}`);
    updateMeta('meta[property="og:image"]', ogImage);

    // Update Twitter tags
    updateMeta('meta[name="twitter:title"]', title);
    updateMeta('meta[name="twitter:description"]', description);
    updateMeta('meta[name="twitter:image"]', ogImage);
  }, [title, description, canonicalPath, keywords, ogImage, noIndex]);
}
