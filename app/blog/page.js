import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import posts from "@/data/posts.json";

export const metadata = {
  title: "Blog",
  description: "Tips, guides and news on outdoor, garden, hotel and restaurant furniture from Latest Outdoor Furniture.",
  alternates: { canonical: "/blog" },
};

export const formatDate = (d) =>
  new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

const excerpt = (post) => {
  const text = post.content.find((b) => b.type === "p")?.text ?? "";
  return text.length > 230 ? `${text.slice(0, 230).replace(/\s+\S*$/, "")}…` : text;
};

export default function BlogPage() {
  return (
    <>
      <PageBanner title="Blog" crumb="Blog" />
      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-[1290px] gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} className="group flex flex-col bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
              <Link href={`/blog/${p.slug}`} className="relative block aspect-square overflow-hidden">
                <Image src={p.image} alt={p.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">Blog</span>
                <h2 className="mt-2 text-xl font-bold text-ink">
                  <Link href={`/blog/${p.slug}`} className="hover:text-brand">{p.title}</Link>
                </h2>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed">{excerpt(p)}</p>
                <p className="mt-4 text-sm text-gray-500">bizmartbharat · {formatDate(p.date)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
