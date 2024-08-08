import { NextResponse } from "next/server";

export async function GET() {
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

    return NextResponse.json(
      { success: true, details: data || null, message: "OK" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.details.message },
      { status: error.details.status }
    );
  }
}
