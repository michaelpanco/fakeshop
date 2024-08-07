"use client";

import { cn } from "@/lib/utils";
import Header from "@/components/Common/Header";
export default function MainLayout({ children, className }) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl lg:max-w-screen-lg px-4 sm:px-6 xl:max-w-screen-xl  2xl:max-w-screen-2xl 2xl:px-0",
        className
      )}
    >
      <Header />
      <div className="flex">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
