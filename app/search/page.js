import { Suspense } from "react";
import PageBanner from "@/components/PageBanner";
import SearchResults from "@/components/SearchResults";

export const metadata = { title: "Search", robots: { index: false } };

export default function SearchPage() {
  return (
    <Suspense fallback={<PageBanner title="Search" />}>
      <SearchResults />
    </Suspense>
  );
}
