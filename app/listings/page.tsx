import { MarketplaceClient } from "@/components/MarketplaceClient";
import { getListings } from "@/services/listingService";

export default async function ListingsPage() {
  const listings = await getListings();

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">All Listings</h1>
        <p className="text-sm text-slate-500">Filter by price, category, location, and sorting preference.</p>
      </div>
      <MarketplaceClient listings={listings} />
    </section>
  );
}
