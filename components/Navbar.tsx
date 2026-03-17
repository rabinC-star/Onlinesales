"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { PlusCircle, UserCircle2 } from "lucide-react";

import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { useMarketplaceStore } from "@/store/useMarketplaceStore";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchQuery = useMarketplaceStore((state) => state.searchQuery);
  const setSearchQuery = useMarketplaceStore((state) => state.setSearchQuery);

  function handleSearch(value: string) {
    setSearchQuery(value);
    if (pathname !== "/" && pathname !== "/listings") {
      router.push("/listings");
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 text-xl font-bold tracking-tight text-blue-600">
          MarketSpace
        </Link>

        <SearchBar value={searchQuery} onChange={handleSearch} className="hidden flex-1 md:block" />

        <div className="ml-auto flex items-center gap-2">
          <Link href="/create">
            <Button>
              <PlusCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Create Listing</span>
            </Button>
          </Link>
          <Link href="/profile">
            <Button variant="outline" size="icon" aria-label="Profile">
              <UserCircle2 className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-100 px-4 pb-3 md:hidden sm:px-6 lg:px-8">
        <SearchBar value={searchQuery} onChange={handleSearch} />
      </div>
    </header>
  );
}
