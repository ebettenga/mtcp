// To add a new blog post: create a .ts file in src/content/ (see blog1.ts for the shape),
// then import it here and add it to the `entries` array.

import blog1 from '../content/blog1';

export interface BlogPostData {
  slug: string;
  title: string;
  description: string;
  content: string;
  authorName?: string;
  authorImage?: string;
  authorBio?: string;
  authorLink?: { url: string; label?: string };
  publishedDate?: string;
}

export interface BlogPost extends BlogPostData {
  readTimeMinutes: number;
}

function computeReadTimeMinutes(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function hydrate(data: BlogPostData): BlogPost {
  return { ...data, readTimeMinutes: computeReadTimeMinutes(data.content) };
}

const entries: BlogPostData[] = [blog1];

const postsCache: BlogPost[] = entries.map(hydrate).sort((a, b) => a.slug.localeCompare(b.slug));
const slugToPost = new Map(postsCache.map((p) => [p.slug, p]));

export function getBlogPosts(): BlogPost[] {
  return postsCache;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return slugToPost.get(slug);
}

export function getLatestBlogPost(): BlogPost | undefined {
  return postsCache[0];
}
