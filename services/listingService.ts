import { mockListings } from "@/mock/listings";
import type { Listing } from "@/types/listing";

const MOCK_DELAY = 400;

function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// TODO: connect to Java Spring Boot API
export async function getListings(): Promise<Listing[]> {
  await wait(MOCK_DELAY);
  return mockListings;
}

// TODO: connect to Java Spring Boot API
export async function getListingById(id: string): Promise<Listing | null> {
  await wait(MOCK_DELAY);
  return mockListings.find((listing) => listing.id === id) ?? null;
}

// TODO: connect to Java Spring Boot API
export async function createListing(newListing: Listing): Promise<Listing> {
  await wait(MOCK_DELAY);
  return newListing;
}
