"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import ShopItemCard from "@/components/ShopItemCard";

export default function ShopItems({ className }) {
  const products = ["hey", "hey"];
  return (
    <div className={cn("", className)}>
      <div className="flex gap-5">
        {products.map((product, index) => {
          return (
            <ShopItemCard
              title={"Title"}
              price={23.43}
              rating={3.4}
              ratingTotal={1}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
