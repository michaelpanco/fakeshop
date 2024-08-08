"use client";

import { cn } from "@/lib/utils";
import Header from "@/components/Common/Header";
import SearchBar from "@/components/SearchBar";
import ShopFilter from "@/components/ShopFilter";
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
        <div className="w-3/12">
          <div className="sticky top-10">
            <ShopFilter />
          </div>
        </div>
        <div className="w-10/12">
          <div>
            <SearchBar />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
