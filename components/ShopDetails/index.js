"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Rating from "@/components/Common/Rating";
import Link from "next/link";
import ShopComments from "@/components/ShopComments";
import { FaChevronLeft } from "react-icons/fa6";
export default function ShopDetails({
  id,
  title,
  image,
  price,
  rating,
  className,
  currencySymbol = "$",
  description,
  category,
}) {
  return (
    <div className={cn("", className)}>
      <div className="mb-5 flex items-center gap-2">
        <FaChevronLeft />
        <Link href="/" className="hover:underline">
          Back to Products{" "}
        </Link>
      </div>
      <div className="flex gap-x-5">
        <div className="w-4/12 relative h-[400px]">
          <Image src={image} fill={true} style={{ "object-fit": "contain" }} />
        </div>

        <div className="w-8/12">
          <div className="rounded-full bg-white border inline-block px-4 py-2 mb-2 text-black">
            {category}
          </div>
          <div className="text-3xl mb-3">{title}</div>
          <div className="text-lg mb-2">{description}</div>
          <div className="font-bold text-2xl text-fuchsia-900 mb-2">
            {currencySymbol}
            {price}
          </div>
          <div className="mb-5">
            <Rating rating={rating?.rate} total={rating?.count} />
          </div>

          <div className="flex gap-5 w-8/12 mb-5">
            <div className="flex-1">
              <button className="bg-black text-white w-full py-4 rounded-full">
                Buy Now
              </button>
            </div>
            <div className="flex-1">
              <button className="bg-[#e2d814] text-black font-bold w-full py-4 rounded-full">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="">
            <ShopComments shopid={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
