"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { MdStorefront } from "react-icons/md";
export default function Header({ className }) {
  return (
    <div className={cn("py-5", className)}>
      <div className="flex gap-2">
        <div>
          <MdStorefront className="h-10 w-10 text-purple-400" />
        </div>
        <div className="font-bold text-3xl">Fakestore</div>
      </div>
    </div>
  );
}
