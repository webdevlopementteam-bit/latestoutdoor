import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { categories } from "@/data/site";
import data from "@/data/categories.json";
import posts from "@/data/posts.json";

export const metadata = { title: "Search", robots: { index: false } };

export default async function SearchPage({ searchParams }) {
  const q = ((await searchParams).q ?? "").trim().toLowerCase();
  const results = q
    ? [
        ...categories
          .filter((c) => `${c.name} ${data[c.slug].title} ${data[c.slug].intro}`.toLowerCase().includes(q))
          .map((c) => ({ href: `/${c.slug}`, title: c.name, image: c.image, kind: "Category" })),
        ...posts
          .filter((p) => p.title.toLowerCase().includes(q))
          .map((p) => ({ href: `/blog/${p.slug}`, title: p.title, image: p.image, kind: "Blog" })),
      ]
    : [];

  return (
    <>
      <PageBanner title={q ? `Search: ${q}` : "Search"} />
      <section className="px-4 py-16">
        <div className="mx-auto max-w-[1000px]">
          {results.length === 0 ? (
            <p className="text-center text-lg">No results</p>
          ) : (
            <ul className="space-y-4">
              {results.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="flex items-center gap-5 bg-cream p-4 transition-colors hover:bg-cream-hover">
                    <span className="relative h-20 w-20 shrink-0 overflow-hidden">
                      <Image src={r.image} alt={r.title} fill sizes="80px" className="object-cover" />
                    </span>
                    <span>
                      <span className="text-xs font-semibold uppercase text-brand">{r.kind}</span>
                      <span className="block text-lg font-semibold text-ink">{r.title}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
