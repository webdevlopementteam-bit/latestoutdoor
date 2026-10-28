export const SITE_URL = "https://www.latestoutdoorfurniture.com";

export const LOGO = "/images/logo.webp";

export const contact = {
  phone: "+91 9958785299",
  email: "info@latestfurniture.com",
  address:
    "Shop No.-15, Furniture Block Kirti Nagar, New Delhi-110015, Delhi, India, 110015",
};

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/latestoutdoorfurniture?mibextid=ZbWKwL" },
  { label: "Instagram", href: "https://www.instagram.com/latestoutdoorfurniture1/profilecard/" },
  { label: "Youtube", href: "https://www.youtube.com/@latestoutdoorfurniture" },
];

// Order matches the site's Product dropdown and homepage grid.
export const categories = [
  { slug: "braid-rope-set", name: "Braid & Rope Set", image: `/images/LOF-RP-07-1.webp`, productImage: `/images/BRD-06.webp` },
  { slug: "sofa-set", name: "Sofa Set", image: `/images/mh_860-075_0-1.webp`, productImage: `/images/sofa-set-1.webp` },
  { slug: "garden-chair-table-set", name: "Garden Chair & Table Set", image: `/images/Chinese-Centre-Pole-1.webp`, productImage: `/images/Garden-chair.webp` },
  { slug: "pool-side-loungers", name: "Poolside Loungers", image: `/images/e6204e8f5e26b9101c4dcb2a0bacef57.webp`, productImage: `/images/GCL-04.webp` },
  { slug: "bar-set", name: "Bar Set", image: `/images/1-30-500x500-1.webp`, productImage: `/images/BARSET-1024x737-1.webp` },
  { slug: "garden-swings", name: "Garden Swings", image: `/images/garden-swing-500x500-1.webp`, productImage: `/images/GCSW-11.webp` },
  { slug: "garden-benches", name: "Garden Benches", image: `/images/victorian_cast_iron_green_park_bench.webp`, productImage: `/images/LIOF-GB-07-1024x1024-1.webp` },
  { slug: "sun-beds", name: "Sun Beds", image: `/images/GCDB-02.webp`, productImage: `/images/GCDB-21.webp` },
  { slug: "garden-umbrella-gazebo", name: "Garden Umbrella & Gazebo", image: `/images/LIOF-GZ-05.webp`, productImage: `/images/Chinese-Side-Pole-02.webp` },
  { slug: "garden-accessories", name: "Garden Accessories", image: `/images/LIOF-AC-12.webp`, productImage: `/images/LIOF-AC-08.webp` },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Product", href: "/product", children: categories.map((c) => ({ label: c.name, href: `/${c.slug}` })) },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerTopCategories = [
  { label: "Bar Sets", href: "/bar-set" },
  { label: "Sofa Sets", href: "/sofa-set" },
  { label: "Sun Beds", href: "/sun-beds" },
  { label: "Braid And Rope Sets", href: "/braid-rope-set" },
  { label: "Garden Accessories", href: "/garden-accessories" },
  { label: "Garden Swings", href: "/garden-swings" },
  { label: "Pool Side Loungers", href: "/pool-side-loungers" },
];
