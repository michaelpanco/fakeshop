"use client";
import MainLayout from "@/layouts/main";
import ShopItems from "@/components/ShopItems";
import { populateProducts } from "@/state/product/productSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";

export default function Home({ products }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(populateProducts(products));
  }, [products]);

  return (
    <MainLayout>
      <main className="">
        <ShopItems />
      </main>
    </MainLayout>
  );
}
