import Image from "next/image";
import { notFound } from "next/navigation";

import { MapPreview } from "@/components/MapPreview";
import { SellerCard } from "@/components/SellerCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getListingById } from "@/services/listingService";

interface ListingDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function ListingDetailsPage({ params }: ListingDetailsPageProps) {
  const { id } = await params;
  const listing = await getListingById(id);

  if (!listing) {
    notFound();
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>{listing.category}</Badge>
        <p className="text-sm text-slate-500">
          Listed in {listing.location.city}, {listing.location.state}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200">
          <Image src={listing.images[0]} alt={listing.title} fill className="object-cover" priority />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
          {listing.images.slice(1).map((image) => (
            <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200">
              <Image src={image} alt={listing.title} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card>
          <CardContent className="space-y-4 p-6">
            <h1 className="text-3xl font-bold text-slate-900">{listing.title}</h1>
            <p className="text-2xl font-semibold text-blue-600">${listing.price.toLocaleString()}</p>
            <p className="text-slate-600">{listing.description}</p>
            <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
              <p>
                Location: {listing.location.city}, {listing.location.state}, {listing.location.country}
              </p>
              <p>Posted: {new Date(listing.createdAt).toLocaleDateString()}</p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <SellerCard seller={listing.seller} />
          <MapPreview location={listing.location} compact />
        </div>
      </div>
    </section>
  );
}
