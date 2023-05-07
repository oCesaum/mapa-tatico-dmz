"use client";

import dynamic from "next/dynamic";

const DynamicMap = dynamic(
  () => {
    return import("../../components/AlMazrahMap");
  },
  { ssr: false }
);

export default function AlMazrah() {
  return (
    <main>
      <DynamicMap />
    </main>
  );
}
