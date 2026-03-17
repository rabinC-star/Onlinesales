import type { Listing } from "@/types/listing";
import { ListingCard } from "@/components/ListingCard";
import { SkeletonLoader } from "@/components/SkeletonLoader";

interface ListingGridProps {
  listings: Listing[];
  loading?: boolean;
}

export function ListingGrid({ listings, loading }: ListingGridProps) {
  if (loading) {
    return <SkeletonLoader count={9} />;
  }

  if (!listings.length) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
        <h3 className="text-lg font-semibold text-slate-900">No listings match your filters.</h3>
        <p className="mt-2 text-sm text-slate-500">Try adjusting your search query or price range.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
