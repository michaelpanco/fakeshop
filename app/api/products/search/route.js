import { NextResponse } from "next/server";

// no real API for the search, we just created fake search here and control the response data
export async function GET(req) {
  const url = new URL(req.url);

  const q = url?.searchParams?.get("q");

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

    const searchResults = data.filter(function (value) {
      return value.title.toLowerCase().indexOf(q.toLowerCase()) >= 0;
    });

    return NextResponse.json(
      { success: true, details: searchResults || null, message: "OK" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.details.message },
      { status: error.details.status }
    );
  }
}
