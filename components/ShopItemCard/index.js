"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Rating from "@/components/Common/Rating";
export default function ShopItemCard({
  title,
  price,
  rating,
  ratingTotal,
  className,
  currencySymbol = "$",
}) {
  return (
    <div
      className={cn("min-w-[200px] border rounded-xl p-5 shadow-sm", className)}
    >
      <div className="flex flex-col">
        <div className="relative h-[200px] w-full mb-5">
          <Image
            src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
            fill={true}
            style={{ "object-fit": "contain" }}
          />
        </div>
        <div className="font-medium">{title}</div>
        <div className="font-bold text-lg text-fuchsia-900">
          {currencySymbol}
          {price}
        </div>
        <Rating rating={rating} total={ratingTotal} />
      </div>
    </div>
  );
}
