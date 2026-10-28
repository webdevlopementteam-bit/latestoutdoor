import Link from "next/link";

// Static-export friendly redirect: works without JS and tells search engines the new URL.
// The real 301 for Apache hosts lives in public/.htaccess.
export default function StaticRedirect({ to }) {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <link rel="canonical" href={to} />
      <meta name="robots" content="noindex" />
      <p className="px-4 py-28 text-center text-lg">
        This page has moved to <Link href={to} className="font-semibold text-brand">{to}</Link>
      </p>
    </>
  );
}
