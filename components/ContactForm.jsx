"use client";

import { useState } from "react";
import { contact } from "@/data/site";

const field = "w-full border border-gray-200 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-brand";

// No backend yet: the form opens the visitor's mail client with the message filled in.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nPhone: ${f.get("phone")}\n\n${f.get("message")}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(f.get("subject") || "Website enquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 bg-white p-6 shadow-sm md:p-10">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Your Name" className={field} />
        <input name="email" type="email" required placeholder="Your Email" className={field} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="phone" type="tel" placeholder="Phone Number" className={field} />
        <input name="subject" placeholder="Subject" className={field} />
      </div>
      <textarea name="message" required rows={6} placeholder="Your Message" className={field} />
      <button type="submit" className="bg-brand px-10 py-3.5 font-semibold uppercase tracking-wider text-white transition-colors hover:bg-teal-dark">
        Submit
      </button>
      {sent && <p className="text-sm text-teal-dark">Thank you! Your email app should open to send the message.</p>}
    </form>
  );
}
