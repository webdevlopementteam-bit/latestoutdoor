import { SITE_URL, categories } from "@/data/site";
import posts from "@/data/posts.json";

export default function sitemap() {
  const now = new Date();
  const page = (path, priority) => ({ url: `${SITE_URL}${path}`, lastModified: now, changeFrequency: "daily", priority });

  return [
    page("", 1),
    page("/about-us", 0.8),
    page("/product", 0.9),
    ...categories.map((c) => page(`/${c.slug}`, 0.9)),
    page("/blog", 0.7),
    ...posts.map((p) => ({ ...page(`/blog/${p.slug}`, 0.6), lastModified: new Date(p.date) })),
    page("/contact", 0.7),
  ];
}
