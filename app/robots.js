import { SITE_URL } from "@/data/site";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/search" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

export const dynamic = "force-static";
