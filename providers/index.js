"use client";

import StoreProvider from "@/providers/StoreProvider";

export default function Providers({ children }) {
  return (
    <>
      <StoreProvider>{children}</StoreProvider>
    </>
  );
}
