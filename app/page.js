import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import SectionHeading from "@/components/SectionHeading";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/site";

const slides = [
  `/images/f131408a-15c5-4db2-8029-6afe859f7d2d-1-scaled.webp`,
  `/images/BANNER-01-scaled.webp`,
];

const collections = [
  `/images/FB_IMG_1646031393891-1.webp`,
  `/images/GCSF-40-scaled-1.webp`,
  `/images/LIOF-RP-04.webp`,
  `/images/IMG_0987-scaled-1.webp`,
  `/images/a9c53c0b-4dc0-4f83-b1e6-bb6649aa30f7.webp`,
  `/images/06_01bdd2e7-281d-49df-961f-c32bd14ebbfd_1600x.webp`,
];

const materials = [
  { name: "ROPE TABLE SET", image: `/images/OD-DINE-4980-GREY-SET_scene2.webp` },
  { name: "WICKER DINING SET", image: `/images/LIOF-BR-16-768x472-1.webp` },
  { name: "CAST IRON TABLE SET", image: `/images/LIOF-CA-01-1024x640-1.webp` },
];

export default function Home() {
  return (
    <>
      <HeroSlider slides={slides} />

      {/* Intro */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-[1290px] items-center gap-10 lg:grid-cols-2">
          <div className="relative hidden aspect-[4/3] overflow-hidden lg:block">
            <Image
              src="/images/DSC_4313-scaled-1.webp"
              alt="Outdoor Garden Furniture in Noida"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-[28px] font-bold uppercase text-ink md:text-[32px]">Latest Outdoor Furniture</h2>
            <span className="mt-3 block h-[3px] w-[200px] bg-brand" />
            <h4 className="mt-6 text-xl font-semibold uppercase text-brand">Outdoor Garden Furniture in Delhi</h4>
            {/* On mobile/tablet the image sits under the red heading instead of beside the text. */}
            <div className="relative mt-5 aspect-[4/3] overflow-hidden lg:hidden">
              <Image
                src="/images/DSC_4313-scaled-1.webp"
                alt="Outdoor Garden Furniture in Noida"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 space-y-4 text-[17px] leading-relaxed">
              <p>
                The ideal option for designing an attractive and pleasant outdoor run is Delhi&rsquo;s Latest Outdoor
                Furniture&rsquo;s{" "}
                <Link href="/product" className="font-bold text-ink hover:text-brand">outdoor garden furniture</Link>. We
                have a large selection of high-quality furniture in our collection that is made to be protect and offers
                exclusive comfort and style. We have furniture for any outdoor area, if you&rsquo;re searching for
                comfortable sitting options, stylish dining sets, or long-lasting loungers.
              </p>
              <p>
                At Latest Outdoor Furniture, both practicality and beauty are given top priority. Because our furniture is
                constructed from high-quality materials, it will survive for many years. Your ideal outdoor setup may be
                delivered right to your door with free shipping available throughout Delhi.
              </p>
              <p>
                With our outdoor garden furniture in Delhi, you can turn your patio, balcony, or garden into a lovely and
                welcoming area. Order now and bring comfort and style to your garden!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="bg-cream px-4 py-16 md:py-20">
        <div className="mx-auto max-w-[1290px]">
          <SectionHeading lineWidth={155}>Collections</SectionHeading>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {collections.map((src, i) => (
              <div key={src} className="group relative h-[200px] overflow-hidden md:h-[300px]">
                <Image
                  src={src}
                  alt={`Outdoor furniture collection ${i + 1}`}
                  fill
                  sizes="(max-width:768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-white/30 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outdoor parties */}
      <section
        className="relative flex min-h-[550px] items-center bg-cover bg-fixed bg-center px-4 py-16"
        style={{ backgroundImage: `url(/images/41c46ebb45b478191da397e776b4a46c.webp)` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto w-full max-w-[1290px]">
          <div className="max-w-2xl text-white">
            <h2 className="text-3xl font-bold md:text-[40px]">Outdoor Parties and Gatherings</h2>
            <p className="mt-5 text-lg">
              If you host outdoor parties or gatherings, wicker daybeds serve as comfortable seating options for your
              guests. Additionally, their stylish design adds attractiveness to your outdoor area.
            </p>
            <ul className="mt-5 space-y-2 text-lg font-bold">
              {["Poolside Relaxation", "Patio Furniture", "Gardens and Balconies"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-brand" /> {t}
                </li>
              ))}
            </ul>
            <Link
              href="/product"
              className="relative mt-8 inline-block overflow-hidden border-2 border-white px-8 py-3.5 font-semibold uppercase tracking-wider text-white transition-colors before:absolute before:inset-0 before:-z-0 before:origin-left before:scale-x-0 before:bg-brand before:transition-transform before:duration-300 hover:border-brand hover:before:scale-x-100"
            >
              <span className="relative">Explore Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Shop by material */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="mx-auto max-w-[1290px]">
          <SectionHeading>Shop By Material</SectionHeading>
          <div className="grid gap-6 md:grid-cols-3">
            {materials.map((m) => (
              <div key={m.name} className="bg-cream p-5 transition-colors hover:bg-cream-hover">
                <div className="relative h-[250px] overflow-hidden md:h-[300px]">
                  <Image src={m.image} alt={m.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                </div>
                <h4 className="pt-5 text-center text-[22px] font-normal text-black">{m.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white px-4 pb-20">
        <div className="mx-auto max-w-[1290px]">
          <SectionHeading lineWidth={120}>Categories</SectionHeading>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {categories.map((c) => (
              <CategoryCard key={c.slug} href={`/${c.slug}`} name={c.name} image={c.image} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
