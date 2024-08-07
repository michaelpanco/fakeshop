"use client";
import MainLayout from "@/layouts/main";
import ShopItems from "@/components/ShopItems";
export default function Home() {
  return (
    <MainLayout>
      <main className="">
        <ShopItems />
      </main>
    </MainLayout>
  );
}
