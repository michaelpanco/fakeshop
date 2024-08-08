"use server";
import PageClient from "./page.client";
import { slugify } from "@/lib/utils";
export async function generateStaticParams() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  return data.details.map((product) => {
    return {
      slug: slugify(product?.title),
    };
  });
}

export default async function Home({ params }) {
  const { product } = params;

  let productDetails = {};
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${product}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    productDetails = data?.details;
  } catch (error) {}

  return <PageClient product={productDetails} />;
}
