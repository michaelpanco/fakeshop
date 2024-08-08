import PageClient from "./page.client";

export default async function Home() {
  // Set the initial products variable to empty array
  let products = [];
  try {
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
    products = data?.details;
  } catch (error) {}

  return <PageClient products={products} />;
}
