"use client";

import { create } from "zustand";

interface MarketplaceState {
  searchQuery: string;
  selectedCategory: string;
  minPrice: number;
  maxPrice: number;
  locationQuery: string;
  sortBy: "newest" | "price-low-high";
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  setMinPrice: (price: number) => void;
  setMaxPrice: (price: number) => void;
  setLocationQuery: (location: string) => void;
  setSortBy: (sortBy: "newest" | "price-low-high") => void;
  resetFilters: () => void;
}

const defaultState = {
  searchQuery: "",
  selectedCategory: "all",
  minPrice: 0,
  maxPrice: 5000,
  locationQuery: "",
  sortBy: "newest" as const
};

export const useMarketplaceStore = create<MarketplaceState>((set) => ({
  ...defaultState,
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
  setMinPrice: (minPrice) => set({ minPrice }),
  setMaxPrice: (maxPrice) => set({ maxPrice }),
  setLocationQuery: (locationQuery) => set({ locationQuery }),
  setSortBy: (sortBy) => set({ sortBy }),
  resetFilters: () => set(defaultState)
}));
