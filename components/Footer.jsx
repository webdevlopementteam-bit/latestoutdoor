import Link from "next/link";
import { contact, footerTopCategories, socials } from "@/data/site";
import { ArrowIcon, MailIcon, PhoneIcon, PinIcon, socialIcon } from "./Icons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Product", href: "/product" },
  { label: "Contact", href: "/contact" },
];

function FooterHeading({ children }) {
  return <h4 className="mb-5 text-xl font-semibold text-white">{children}</h4>;
}

export default function Footer() {
  return (
    <footer className="text-white">
      <div className="bg-teal px-4 py-14 md:px-[60px] md:py-[60px]">
        <div className="mx-auto grid max-w-[1290px] gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <FooterHeading>About Us</FooterHeading>
            <p className="text-[17px] leading-relaxed">
              <strong>LATEST OUTDOOR FURNITURE</strong>
              <br />
              Trendy, practical and comfortable Lounge Sunbeds, Outdoor Furniture, Outdoor Sofa Set, Garden Umbrella and
              Wicker Bar Set are available here!
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => {
                const Icon = socialIcon[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-dark text-white transition-colors hover:bg-white hover:text-brand"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <FooterHeading>Quick Link</FooterHeading>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="flex items-center gap-1 text-[17px] transition-opacity hover:opacity-75">
                    <ArrowIcon width={16} height={16} /> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Top Category</FooterHeading>
            <ul className="space-y-2.5">
              {footerTopCategories.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="flex items-center gap-1 text-[17px] transition-opacity hover:opacity-75">
                    <ArrowIcon width={16} height={16} /> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Contact Us</FooterHeading>
            <ul className="space-y-4 text-[17px]">
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="flex gap-3 hover:opacity-75">
                  <PhoneIcon className="mt-1 shrink-0" /> {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="flex gap-3 break-all hover:opacity-75">
                  <MailIcon className="mt-1 shrink-0" /> {contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <PinIcon className="mt-1 shrink-0" /> {contact.address}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-teal-dark px-4 py-4 text-center text-sm">
        Copyright © 2024 Latest Outdoor All Right Reserved | Powered by{" "}
        <a href="https://www.cybertricksmedia.com/" target="_blank" rel="noopener" className="font-semibold hover:underline">
          Bharat Bizmart
        </a>
      </div>
    </footer>
  );
}
