import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import CategoryCard from "@/components/CategoryCard";
import ContentBlocks from "@/components/ContentBlocks";
import FaqList from "@/components/FaqList";
import { categories } from "@/data/site";
import pages from "@/data/pages.json";

export const metadata = {
  title: "Outdoor Furniture Manufacturer | Patio & Wicker Furniture",
  description:
    "Premium outdoor garden furniture in Delhi for homes, hotels and commercial spaces: wicker, poolside, open bar and terrace furniture.",
  alternates: { canonical: "/product" },
};

const faqStart = pages.product.findIndex((b) => b.text.includes("Frequently Asked Questions"));
const content = pages.product.slice(0, faqStart);
const faqs = [];
for (let i = faqStart + 1; i < pages.product.length; i += 2) {
  faqs.push({ q: pages.product[i].text.replace(/^\d+\.\s*/, ""), a: pages.product[i + 1]?.text });
}

export default function ProductPage() {
  return (
    <>
      <PageBanner title="Product" crumb="Product" />

      <section className="bg-cream px-4 py-12">
        <p className="mx-auto max-w-[1000px] text-center text-[17px] leading-relaxed">
          Latest Outdoor Furniture is a leading Outdoor Furniture Manufacturer, offering premium Outdoor Garden Furniture
          in Delhi for homes, hotels, and commercial spaces. As a trusted Patio Furniture Manufacturer, we specialize in
          Wicker Furniture, Pool Side, Open Bar, and Terrace Furniture with durable, stylish designs. Explore our
          high-quality collections today!
        </p>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-[1290px]">
          <SectionHeading lineWidth={120}>Category</SectionHeading>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {categories.map((c) => (
              <CategoryCard key={c.slug} href={`/${c.slug}`} name={c.name} image={c.productImage} uppercase />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-[1000px]">
          <ContentBlocks blocks={content} />
        </div>
      </section>

      <section className="bg-cream px-4 py-16">
        <div className="mx-auto max-w-[1000px]">
          <SectionHeading as="h3">Frequently Asked Questions</SectionHeading>
          <FaqList faqs={faqs} />
        </div>
      </section>
    </>
  );
}
