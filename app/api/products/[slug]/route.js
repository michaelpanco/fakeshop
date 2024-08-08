import { NextResponse } from "next/server";
import { slugify } from "@/lib/utils";
export async function GET(req, { params }) {
  const { slug } = params;

  try {
    const response = await fetch(
      `${process.env.PRODUCT_API_ENDPOINT}/products`
    );

    const data = await response.json();

    if (!response.ok) {
      throw {
        success: false,
        details: data.error,
      };
    }

    const details = data.find((product) => {
      return slugify(product.title) === slug;
    });

    if (!details) {
      return NextResponse.json(
        { success: false, details: null, message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, details: details || null, message: "OK" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.details.message },
      { status: error.details.status }
    );
  }
}
