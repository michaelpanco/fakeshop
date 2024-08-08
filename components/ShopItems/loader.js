"use client";

import BarLoader from "@/components/Common/Loader/Bar";

export default function ShopItems({ className }) {
  return (
    <div className="">
      <div className="flex gap-5 flex-wrap pb-10">
        {new Array(8).fill("").map((_, i) => {
          return (
            <div key={i} className="w-[200px]">
              <BarLoader />
            </div>
          );
        })}
      </div>
    </div>
  );
}
