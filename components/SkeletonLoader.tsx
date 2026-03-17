import { Skeleton } from "@/components/ui/skeleton";

interface SkeletonLoaderProps {
  count?: number;
}

export function SkeletonLoader({ count = 8 }: SkeletonLoaderProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4">
          <Skeleton className="mb-4 aspect-[4/3] w-full rounded-xl" />
          <Skeleton className="mb-3 h-5 w-3/4" />
          <Skeleton className="mb-3 h-5 w-1/3" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
}
