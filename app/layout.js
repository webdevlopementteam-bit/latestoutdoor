import { Urbanist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/data/site";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Buy Outdoor Garden Furniture in Delhi - Free Shipping",
    template: "%s - Latest Outdoor Furniture",
  },
  description:
    "Latest Outdoor Furniture offers premium outdoor garden furniture in Delhi: wicker sofa sets, rope sets, poolside loungers, bar sets, swings and more with free shipping.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} font-sans antialiased`}>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
