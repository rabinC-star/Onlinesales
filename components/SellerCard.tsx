import { MessageCircle } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { User } from "@/types/user";

interface SellerCardProps {
  seller: User;
}

export function SellerCard({ seller }: SellerCardProps) {
  return (
    <Card>
      <CardContent className="space-y-4 p-5">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={seller.avatar} alt={seller.name} />
            <AvatarFallback>{seller.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-slate-900">{seller.name}</p>
            <p className="text-sm text-slate-500">Rating: {seller.rating.toFixed(1)} / 5</p>
          </div>
        </div>
        <Button className="w-full">
          <MessageCircle className="h-4 w-4" />
          Contact seller
        </Button>
      </CardContent>
    </Card>
  );
}
