import { contact } from "@/data/site";

// The original site has no cart; enquiries go to WhatsApp on the business number.
export default function EnquireButton({ product }) {
  const text = encodeURIComponent(`Hi, I'm interested in ${product}. Please share details.`);
  return (
    <a
      href={`https://wa.me/${contact.phone.replace(/\D/g, "")}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 block bg-brand py-2.5 text-center text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-teal-dark"
    >
      Enquire Now
    </a>
  );
}
