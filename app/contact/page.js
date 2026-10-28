import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import { contact, socials } from "@/data/site";
import { MailIcon, PhoneIcon, PinIcon, socialIcon } from "@/components/Icons";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Latest Outdoor Furniture, Kirti Nagar, New Delhi. Call +91 9958785299.",
  alternates: { canonical: "/contact" },
};

const cards = [
  { label: "Contact Number", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}`, Icon: PhoneIcon },
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, Icon: MailIcon },
  { label: "Address", value: contact.address, Icon: PinIcon },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" crumb="Contact" />

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-[1290px] gap-6 md:grid-cols-3">
          {cards.map(({ label, value, href, Icon }) => (
            <div key={label} className="bg-cream p-8 text-center transition-colors hover:bg-cream-hover">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
                <Icon width={28} height={28} />
              </span>
              <p className="mt-5 text-xl font-semibold text-ink">{label}</p>
              {href ? (
                <a href={href} className="mt-2 block break-words text-[17px] hover:text-brand">{value}</a>
              ) : (
                <p className="mt-2 text-[17px]">{value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream px-4 py-16">
        <div className="mx-auto grid max-w-[1290px] gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-[28px] font-bold uppercase text-ink md:text-[32px]">Get In Touch</h2>
            <span className="mt-3 block h-[3px] w-[150px] bg-brand" />
            <h3 className="mt-6 text-xl font-semibold text-ink">Needs Help? Let&rsquo;s Get in Touch</h3>
            <p className="mt-2 text-[17px]">We will get back to you as soon as possible. Your satisfaction is our priority.</p>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => {
                const Icon = socialIcon[s.label];
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-dark text-white transition-colors hover:bg-brand">
                    <Icon />
                  </a>
                );
              })}
            </div>
            <iframe
              title="Latest Outdoor Furniture location"
              src="https://www.google.com/maps?q=Furniture+Block+Kirti+Nagar+New+Delhi+110015&output=embed"
              className="mt-8 h-72 w-full border-0"
              loading="lazy"
            />
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
