import { MarketplaceClient } from "@/components/MarketplaceClient";
import { getListings } from "@/services/listingService";

export default async function HomePage() {
  const listings = await getListings();

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Discover great deals nearby</h1>
        <p className="text-slate-600">Browse curated listings inspired by Zillow and Facebook Marketplace patterns.</p>
      </div>

      <MarketplaceClient listings={listings} />
    </section>
  );
}
