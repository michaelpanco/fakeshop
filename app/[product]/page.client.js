"use client";
import ProductLayout from "@/layouts/product";
import ShopDetails from "@/components/ShopDetails";
import { populateProducts } from "@/state/product/productSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";
import { slugify } from "@/lib/utils";

export default function Home({ product }) {
  return (
    <ProductLayout>
      <main className="">
        <ShopDetails {...product} />
      </main>
    </ProductLayout>
  );
}
