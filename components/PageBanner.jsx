import Link from "next/link";

const DEFAULT_IMAGE = "/images/41c46ebb45b478191da397e776b4a46c.webp";

export default function PageBanner({ title, crumb, image = DEFAULT_IMAGE, align = "center" }) {
  const left = align === "left";
  return (
    <section
      className={`relative flex items-center bg-cover bg-center bg-no-repeat px-4 ${
        left ? "min-h-[250px] md:min-h-[400px]" : "min-h-[260px] justify-center text-center md:min-h-[320px]"
      }`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className={`relative ${left ? "mx-auto w-full max-w-[1140px] pl-5 md:pl-[50px] xl:pl-2.5" : ""}`}>
        <h1
          className={`font-bold uppercase text-white ${
            left ? "text-[30px] leading-tight md:text-[35px]" : "text-3xl tracking-wide md:text-5xl"
          }`}
        >
          {title}
        </h1>
        {crumb && (
          <ol className={`mt-4 flex items-center gap-2.5 ${left ? "text-white" : "justify-center text-white/90"}`}>
            <li>
              <Link href="/" className="hover:text-brand">Home</Link>
            </li>
            <li aria-hidden>»</li>
            <li className={left ? "" : "text-brand"}>{crumb}</li>
          </ol>
        )}
      </div>
    </section>
  );
}
