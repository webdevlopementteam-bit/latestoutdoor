import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ href, name, image, uppercase = false }) {
  return (
    <Link href={href} className="group block bg-[#EBEBEB1F]">
      <div className="bg-[#E0144624] p-2.5 transition-colors group-hover:bg-[#4E4E4E1F]">
        <div className="relative aspect-square overflow-hidden">
          <Image src={image} alt={name} fill sizes="(max-width:640px) 50vw, 20vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
      </div>
      <h5 className={`px-2 py-4 text-center text-lg font-semibold text-ink transition-colors group-hover:text-brand ${uppercase ? "uppercase" : ""}`}>
        {name}
      </h5>
    </Link>
  );
}
