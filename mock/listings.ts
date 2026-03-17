import type { Listing } from "@/types/listing";
import { mockUsers } from "@/mock/users";

export const mockListings: Listing[] = [
  {
    id: "listing-1",
    title: "Mid-Century Modern Sofa",
    description:
      "Beautiful three-seater sofa in excellent condition. Perfect for living rooms with modern decor.",
    price: 620,
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80"
    ],
    location: { city: "Austin", state: "TX", country: "USA", lat: 30.2672, lng: -97.7431 },
    category: "Furniture",
    createdAt: "2026-03-10T10:00:00.000Z",
    seller: mockUsers[0]
  },
  {
    id: "listing-2",
    title: "Road Bike - Carbon Frame",
    description: "Lightweight road bike with Shimano gears. Tuned and ready for long rides.",
    price: 980,
    images: [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80"
    ],
    location: { city: "Denver", state: "CO", country: "USA", lat: 39.7392, lng: -104.9903 },
    category: "Sports",
    createdAt: "2026-03-13T08:30:00.000Z",
    seller: mockUsers[1]
  },
  {
    id: "listing-3",
    title: "MacBook Pro 14-inch",
    description: "Apple M2 Pro, 16GB RAM, 512GB SSD. Includes original charger and box.",
    price: 1650,
    images: [
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80"
    ],
    location: { city: "Seattle", state: "WA", country: "USA", lat: 47.6062, lng: -122.3321 },
    category: "Electronics",
    createdAt: "2026-03-14T09:12:00.000Z",
    seller: mockUsers[2]
  },
  {
    id: "listing-4",
    title: "Dining Table Set for 6",
    description: "Solid oak dining table with six matching chairs. Minor wear, very sturdy.",
    price: 540,
    images: [
      "https://images.unsplash.com/photo-1617104551722-3b2d51366439?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80"
    ],
    location: { city: "Portland", state: "OR", country: "USA", lat: 45.5152, lng: -122.6784 },
    category: "Furniture",
    createdAt: "2026-03-08T13:45:00.000Z",
    seller: mockUsers[3]
  },
  {
    id: "listing-5",
    title: "Canon Mirrorless Camera",
    description: "Great starter camera with 24-70mm lens. Clean sensor and low shutter count.",
    price: 890,
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&w=1200&q=80"
    ],
    location: { city: "San Diego", state: "CA", country: "USA", lat: 32.7157, lng: -117.1611 },
    category: "Electronics",
    createdAt: "2026-03-09T12:00:00.000Z",
    seller: mockUsers[4]
  },
  {
    id: "listing-6",
    title: "Vintage Leather Jacket",
    description: "Classic brown leather jacket, barely worn, size medium.",
    price: 180,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=1200&q=80"
    ],
    location: { city: "Chicago", state: "IL", country: "USA", lat: 41.8781, lng: -87.6298 },
    category: "Fashion",
    createdAt: "2026-03-06T15:10:00.000Z",
    seller: mockUsers[0]
  },
  {
    id: "listing-7",
    title: "PlayStation 5 Bundle",
    description: "PS5 console, two controllers, and three popular games included.",
    price: 640,
    images: [
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1200&q=80"
    ],
    location: { city: "Miami", state: "FL", country: "USA", lat: 25.7617, lng: -80.1918 },
    category: "Gaming",
    createdAt: "2026-03-15T18:05:00.000Z",
    seller: mockUsers[1]
  },
  {
    id: "listing-8",
    title: "Acoustic Guitar",
    description: "Warm tone acoustic guitar, recently restrung and set up by a local shop.",
    price: 320,
    images: [
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=1200&q=80"
    ],
    location: { city: "Nashville", state: "TN", country: "USA", lat: 36.1627, lng: -86.7816 },
    category: "Music",
    createdAt: "2026-03-11T11:20:00.000Z",
    seller: mockUsers[2]
  },
  {
    id: "listing-9",
    title: "Standing Desk",
    description: "Electric height-adjustable standing desk with memory presets.",
    price: 410,
    images: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    location: { city: "Boston", state: "MA", country: "USA", lat: 42.3601, lng: -71.0589 },
    category: "Office",
    createdAt: "2026-03-12T07:55:00.000Z",
    seller: mockUsers[3]
  },
  {
    id: "listing-10",
    title: "Mountain Hiking Backpack",
    description: "65L backpack with rain cover, ergonomic support, and multiple compartments.",
    price: 145,
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    location: { city: "Salt Lake City", state: "UT", country: "USA", lat: 40.7608, lng: -111.891 },
    category: "Outdoors",
    createdAt: "2026-03-07T16:40:00.000Z",
    seller: mockUsers[4]
  },
  {
    id: "listing-11",
    title: "Convertible Crib",
    description: "Convertible baby crib in white finish. Includes mattress and storage drawer.",
    price: 260,
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?auto=format&fit=crop&w=1200&q=80"
    ],
    location: { city: "Charlotte", state: "NC", country: "USA", lat: 35.2271, lng: -80.8431 },
    category: "Kids",
    createdAt: "2026-03-05T09:25:00.000Z",
    seller: mockUsers[0]
  },
  {
    id: "listing-12",
    title: "Tesla Wall Connector",
    description: "Unused Tesla wall connector, unopened packaging. Great deal for EV owners.",
    price: 380,
    images: [
      "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"
    ],
    location: { city: "Phoenix", state: "AZ", country: "USA", lat: 33.4484, lng: -112.074 },
    category: "Automotive",
    createdAt: "2026-03-16T05:45:00.000Z",
    seller: mockUsers[2]
  }
];
