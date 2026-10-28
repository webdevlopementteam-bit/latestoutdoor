import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ContentBlocks from "@/components/ContentBlocks";
import pages from "@/data/pages.json";

export const metadata = {
  title: "Outdoor Furniture Manufacturer in Delhi",
  description: "Latest Outdoor Furniture is a leading outdoor furniture manufacturer in Delhi offering stylish, durable furniture with free shipping.",
  alternates: { canonical: "/about-us" },
};

// Manufacturing process video shown at the bottom; set to null to hide the section.
const ABOUT_VIDEO = "/videos/about.mp4";

const at = (text) => pages.about.findIndex((b) => b.text === text);
const intro = pages.about.slice(0, at("ABOUT LATEST OUTDOOR"));
const welcome = pages.about[at("OUTDOOR FURNITURE MANUFACTURER IN DELHI") + 1].text;
const whyStart = pages.about.findIndex((b) => b.text.startsWith("Why Choose Us"));
const why = pages.about.slice(whyStart + 1);

// The first "Outdoor Furniture Manufacturer" in the welcome text is a bold link home, as on the original.
const LINK_TEXT = "Outdoor Furniture Manufacturer";
const linkAt = welcome.indexOf(LINK_TEXT);

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" crumb="About" image="/images/about-banner.webp" align="left" />

      {/* Nature's Haven */}
      <section className="px-2.5 pt-2.5 md:px-5 md:pt-5 xl:px-[100px] xl:pt-10">
        <div className="mx-auto max-w-[1140px] p-2.5">
          <h3 className="text-[25px] font-medium leading-snug text-ink md:text-[30px]">{intro[0].text}</h3>
          <p className="mt-5 text-base leading-[1.65] text-body">{intro[1].text}</p>
        </div>
      </section>

      {/* About Latest Outdoor + image */}
      <section className="px-2.5 py-2.5 lg:px-0 lg:py-0 xl:px-[100px] xl:pt-5">
        <div className="mx-auto grid max-w-[1140px] items-center lg:grid-cols-2">
          <div className="p-2.5">
            <div className="bg-brand p-2.5 md:mr-[200px] lg:mr-0">
              <h2 className="text-[23px] font-medium leading-tight text-white md:text-[35px]">ABOUT LATEST OUTDOOR</h2>
            </div>
            <h2 className="pt-5 text-[23px] font-medium text-ink">OUTDOOR FURNITURE MANUFACTURER IN DELHI</h2>
            <p className="mt-5 text-base leading-[1.65] text-body">
              {welcome.slice(0, linkAt)}
              <Link href="/" className="bg-[#FAFBFC] font-bold text-ink hover:text-brand">{LINK_TEXT}</Link>
              {welcome.slice(linkAt + LINK_TEXT.length)}
            </p>
          </div>
          <div className="p-2.5">
            <Image
              src="/images/CASTLE-scaled-1-1024x683-1.webp"
              alt="Outdoor Furniture Manufacturer in Haryana"
              width={1024}
              height={683}
              sizes="(max-width:1024px) 100vw, 570px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="px-2.5 py-2.5 lg:py-0 lg:pl-5 xl:px-[100px] xl:pt-5">
        <div className="mx-auto max-w-[1140px] p-2.5 pb-12">
          <h3 className="text-[25px] font-medium leading-snug text-ink md:text-[30px]">
            {pages.about[whyStart].text}
          </h3>
          <div className="mt-5 [&_h4]:pt-1 [&_h4]:text-xl [&_h4]:font-semibold [&_p]:text-base [&_p]:leading-[1.65]">
            <ContentBlocks blocks={why} />
          </div>
        </div>
      </section>

      {ABOUT_VIDEO && (
        <section className="xl:px-[100px]">
          <div className="mx-auto max-w-[1140px] p-2.5 pb-5 md:pt-5 md:pb-[50px]">
            <video src={ABOUT_VIDEO} autoPlay loop muted controls playsInline controlsList="nodownload" className="aspect-video w-full bg-black" />
          </div>
        </section>
      )}
    </>
  );
}
