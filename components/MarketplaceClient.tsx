"use client";

import { useEffect, useMemo, useState } from "react";

import { FilterSidebar } from "@/components/FilterSidebar";
import { ListingGrid } from "@/components/ListingGrid";
import { MapPreview } from "@/components/MapPreview";
import { useMarketplaceStore } from "@/store/useMarketplaceStore";
import type { Listing } from "@/types/listing";

interface MarketplaceClientProps {
  listings: Listing[];
  showMap?: boolean;
}

export function MarketplaceClient({ listings, showMap = true }: MarketplaceClientProps) {
  const [isLoading, setIsLoading] = useState(true);

  const searchQuery = useMarketplaceStore((state) => state.searchQuery);
  const selectedCategory = useMarketplaceStore((state) => state.selectedCategory);
  const minPrice = useMarketplaceStore((state) => state.minPrice);
  const maxPrice = useMarketplaceStore((state) => state.maxPrice);
  const locationQuery = useMarketplaceStore((state) => state.locationQuery);
  const sortBy = useMarketplaceStore((state) => state.sortBy);

  const setSelectedCategory = useMarketplaceStore((state) => state.setSelectedCategory);
  const setMinPrice = useMarketplaceStore((state) => state.setMinPrice);
  const setMaxPrice = useMarketplaceStore((state) => state.setMaxPrice);
  const setLocationQuery = useMarketplaceStore((state) => state.setLocationQuery);
  const setSortBy = useMarketplaceStore((state) => state.setSortBy);
  const resetFilters = useMarketplaceStore((state) => state.resetFilters);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 650);
    return () => clearTimeout(timer);
  }, []);

  const categories = useMemo(
    () => Array.from(new Set(listings.map((listing) => listing.category))).sort((a, b) => a.localeCompare(b)),
    [listings]
  );

  const filtered = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();
    const normalizedLocation = locationQuery.trim().toLowerCase();

    const subset = listings.filter((listing) => {
      const matchesSearch =
        !normalizedSearch ||
        listing.title.toLowerCase().includes(normalizedSearch) ||
        listing.description.toLowerCase().includes(normalizedSearch);
      const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory;
      const matchesPrice = listing.price >= minPrice && listing.price <= maxPrice;
      const locationText = `${listing.location.city} ${listing.location.state} ${listing.location.country}`.toLowerCase();
      const matchesLocation = !normalizedLocation || locationText.includes(normalizedLocation);

      return matchesSearch && matchesCategory && matchesPrice && matchesLocation;
    });

    if (sortBy === "price-low-high") {
      return [...subset].sort((a, b) => a.price - b.price);
    }

    return [...subset].sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
  }, [listings, searchQuery, selectedCategory, minPrice, maxPrice, locationQuery, sortBy]);

  const featuredLocation = filtered[0]?.location ?? listings[0]?.location;

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <FilterSidebar
        categories={categories}
        selectedCategory={selectedCategory}
        minPrice={minPrice}
        maxPrice={maxPrice}
        locationQuery={locationQuery}
        sortBy={sortBy}
        onCategoryChange={setSelectedCategory}
        onMinPriceChange={setMinPrice}
        onMaxPriceChange={setMaxPrice}
        onLocationChange={setLocationQuery}
        onSortChange={setSortBy}
        onReset={resetFilters}
      />

      <div className="space-y-5">
        {showMap && featuredLocation ? <MapPreview location={featuredLocation} /> : null}
        <ListingGrid listings={filtered} loading={isLoading} />
      </div>
    </div>
  );
}
