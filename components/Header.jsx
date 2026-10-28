"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LOGO, nav } from "@/data/site";
import { ChevronIcon, SearchIcon } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const onSearch = (e) => {
    e.preventDefault();
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:bg-white focus:px-3 focus:py-1">
        Skip to content
      </a>
      <div className="mx-auto flex h-20 max-w-[1290px] items-center justify-between px-4 md:px-6 lg:h-24">
        <Link href="/" aria-label="Latest Outdoor" className="shrink-0">
          <Image src={LOGO} alt="Latest Outdoor" width={906} height={649} priority className="h-16 w-auto object-contain lg:h-20" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Header Menu">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-9 text-[15px] font-semibold uppercase tracking-wide transition-colors hover:text-brand ${isActive(item.href) ? "text-brand" : "text-ink"}`}
                >
                  {item.label}
                  <ChevronIcon width={14} height={14} />
                </Link>
                <ul className="invisible absolute left-0 top-full w-64 translate-y-2 bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} className="block px-5 py-2.5 text-sm text-ink transition-colors hover:bg-cream hover:text-brand">
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-9 text-[15px] font-semibold uppercase tracking-wide transition-colors hover:text-brand ${isActive(item.href) ? "text-brand" : "text-ink"}`}
              >
                {item.label}
              </Link>
            )
          )}
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="ml-2 p-2 text-ink transition-colors hover:text-brand"
          >
            <SearchIcon />
          </button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button type="button" aria-label="Search" onClick={() => setSearchOpen((v) => !v)} className="p-2 text-ink">
            <SearchIcon />
          </button>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          >
            <span className={`h-0.5 w-6 bg-ink transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {searchOpen && (
        <form onSubmit={onSearch} className="border-t border-gray-100 bg-white">
          <div className="mx-auto flex max-w-[1290px] gap-2 px-4 py-4 md:px-6">
            <input
              autoFocus
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-1 border border-gray-200 px-4 py-3 text-ink outline-none focus:border-brand"
            />
            <button type="submit" className="bg-brand px-6 font-semibold uppercase text-white hover:bg-teal-dark">
              Search
            </button>
          </div>
        </form>
      )}

      {menuOpen && (
        <nav className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-gray-100 bg-white lg:hidden" aria-label="Mobile Menu">
          <ul className="px-4 py-2">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-gray-100 last:border-0">
                <div className="flex items-center justify-between">
                  <Link href={item.href} className={`block py-3 font-semibold uppercase ${isActive(item.href) ? "text-brand" : "text-ink"}`}>
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      aria-label="Toggle product categories"
                      onClick={() => setProductOpen((v) => !v)}
                      className="p-2 text-ink"
                    >
                      <ChevronIcon className={`transition ${productOpen ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {item.children && productOpen && (
                  <ul className="pb-2 pl-4">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="block py-2 text-sm text-body hover:text-brand">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
