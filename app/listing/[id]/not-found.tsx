import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function ListingNotFound() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
      <h1 className="text-2xl font-semibold text-slate-900">Listing not found</h1>
      <p className="mt-2 text-slate-500">This listing may have been removed or the link is incorrect.</p>
      <Link href="/listings" className="mt-4 inline-flex">
        <Button>Back to listings</Button>
      </Link>
    </div>
  );
}
