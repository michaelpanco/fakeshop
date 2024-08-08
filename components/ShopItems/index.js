"use client";

import { cn } from "@/lib/utils";
import ShopItemCard from "@/components/ShopItemCard";
import { useAppSelector } from "@/lib/hooks";
import ShopItemsLoader from "@/components/ShopItems/loader";
export default function ShopItems({ className }) {
  const productState = useAppSelector((state) => state.product);
  console.log(productState, "productState");
  return (
    <div className={cn("", className)}>
      {productState.status === "PENDING" ? (
        <ShopItemsLoader />
      ) : (
        <div className="flex gap-5 flex-wrap pb-10">
          {productState?.lists?.map((product, index) => {
            return (
              <ShopItemCard
                image={product?.image}
                title={product?.title}
                price={product?.price}
                rating={product?.ratingAvg}
                ratingTotal={product?.ratingTotal}
                key={index}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
