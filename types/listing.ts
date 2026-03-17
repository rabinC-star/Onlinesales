import type { Location } from "@/types/location";
import type { User } from "@/types/user";

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  location: Location;
  category: string;
  createdAt: string;
  seller: User;
}
