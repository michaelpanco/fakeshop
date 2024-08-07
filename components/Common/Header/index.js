"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Header({ className }) {
  return (
    <div className={cn("", className)}>
      <div className="flex justify-between">
        <div className="font-bold text-3xl">
          <Image
            width={200}
            height={100}
            src="/logo.png"
            alt="Frugll"
            className="mb-3"
          />
        </div>
      </div>
    </div>
  );
}
