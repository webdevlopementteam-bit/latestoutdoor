/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export into /out for any web host (cPanel, Hostinger, S3, Netlify...).
  output: "export",
  // Same URL style as the old WordPress site: /about-us/ -> out/about-us/index.html
  trailingSlash: true,
  // No image server in a static export; images in /public are already WebP.
  images: { unoptimized: true },
};

export default nextConfig;
