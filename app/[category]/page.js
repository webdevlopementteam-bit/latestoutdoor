import Image from "next/image";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import ContentBlocks from "@/components/ContentBlocks";
import EnquireButton from "@/components/EnquireButton";
import { categories } from "@/data/site";
import data from "@/data/categories.json";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const page = data[category];
  if (!page) return {};
  return {
    title: page.title.replace(/\b\w+/g, (w) => w[0] + w.slice(1).toLowerCase()),
    description: page.intro.slice(0, 160),
    alternates: { canonical: `/${category}` },
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const page = data[category];
  if (!page) notFound();
  const meta = categories.find((c) => c.slug === category);

  return (
    <>
      <PageBanner title={page.title} crumb={meta.name} />

      <section className="bg-cream px-4 py-12">
        <p className="mx-auto max-w-[1000px] text-center text-[17px] leading-relaxed">{page.intro}</p>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-[1290px] grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {page.products.map((p) => (
            <div key={p.name} className="group bg-cream p-3 transition-colors hover:bg-cream-hover">
              <div className="relative aspect-square overflow-hidden bg-white">
                <Image
                  src={p.image}
                  alt={`${p.name} - ${meta.name}`}
                  fill
                  sizes="(max-width:768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h4 className="pt-4 text-center text-lg font-semibold text-ink">{p.name}</h4>
              <EnquireButton product={p.name} />
            </div>
          ))}
        </div>
      </section>

      {page.content.length > 0 && (
        <section className="px-4 pb-20">
          <div className="mx-auto max-w-[1000px]">
            <ContentBlocks blocks={page.content} />
          </div>
        </section>
      )}
    </>
  );
}
