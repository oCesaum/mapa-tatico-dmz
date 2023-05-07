"use client";

import dynamic from "next/dynamic";

const DynamicMap = dynamic(
  () => {
    return import("../../components/AshikaIsland");
  },
  { ssr: false }
);

export default function AshikaIsland() {
  return (
    <main>
      <DynamicMap />
    </main>
  );
}
