"use client";

import { cn } from "@/lib/utils";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

export default function Rating({ rating, total }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => {
        //const difference = Math.round((rating - parseInt(rating)) * 10);
        const diff = rating - star + 1;

        return (
          <>
            {diff >= 0.4 && diff <= 0.99 ? (
              diff > 0.8 ? (
                <FaStar className="text-amber-400" />
              ) : (
                <FaStarHalfStroke className="text-amber-400" />
              )
            ) : (
              <FaStar
                className={cn(
                  "text-gray-200",
                  rating >= star && "text-amber-400"
                )}
              />
            )}
          </>
        );
      })}
      <div className="text-xs ml-1 text-gray-400">({total})</div>
    </div>
  );
}
