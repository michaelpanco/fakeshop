"use client";

import BarLoader from "@/components/Common/Loader/Bar";

export default function ShopItems({ className }) {
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-5 pb-10">
        {new Array(8).fill("").map((_, i) => {
          return (
            <div key={i}>
              <BarLoader />
            </div>
          );
        })}
      </div>
    </div>
  );
}
