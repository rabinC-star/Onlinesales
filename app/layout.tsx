import type { Metadata } from "next";

import "@/app/globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "MarketSpace | Scalable Marketplace UI",
  description: "Modern marketplace frontend UI prepared for Java Spring Boot integration."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </body>
    </html>
  );
}
