import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-4 py-28 text-center">
      <h1 className="text-6xl font-bold text-brand">404</h1>
      <p className="mt-4 text-xl text-ink">Sorry, this page could not be found.</p>
      <Link href="/" className="mt-8 inline-block bg-brand px-8 py-3 font-semibold uppercase text-white hover:bg-teal-dark">
        Back to Home
      </Link>
    </section>
  );
}
