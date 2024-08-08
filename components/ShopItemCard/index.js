"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Rating from "@/components/Common/Rating";
import Link from "next/link";
import { slugify } from "@/lib/utils";
export default function ShopItemCard({
  title,
  image,
  price,
  rating,
  ratingTotal,
  className,
  currencySymbol = "$",
}) {
  return (
    <div className={cn("border rounded-xl p-5 shadow-sm", className)}>
      <div className="flex flex-col h-full">
        <div className="relative h-[200px] w-full mb-5">
          <Link href={`/${slugify(title)}`}>
            <Image
              src={image}
              fill={true}
              style={{ "object-fit": "contain" }}
            />
          </Link>
        </div>
        <div className="font-medium flex-1">
          <Link href={`/${slugify(title)}`}>{title}</Link>
        </div>

        <div className="font-bold text-lg text-fuchsia-900">
          {currencySymbol}
          {price}
        </div>
        <Rating rating={rating} total={ratingTotal} />
      </div>
    </div>
  );
}
