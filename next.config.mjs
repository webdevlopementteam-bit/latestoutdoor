/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/poolside-loungers", destination: "/pool-side-loungers", permanent: true },
    ];
  },
};

export default nextConfig;
