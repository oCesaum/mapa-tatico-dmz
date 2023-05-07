"use client"

import L from "leaflet";
import {
  MapContainer,
  ImageOverlay,
} from "react-leaflet";

export default function AshikaIsland() {
  const bounds = [
    [0, 0],
    [500, 500],
  ];

  return (
    <main className="overflow-hidden">
      <MapContainer
        className="w-screen h-[calc(100vh-56px)] bg-zinc-800"
        center={[225, 300]}
        zoom={1}
        scrollWheelZoom={true}
        crs={L.CRS.Simple}
        attributionControl={false}
        style={{ backgroundColor: "#000" }}
      >
        <ImageOverlay
          url="/al-mazrah/ashika-island.jpg"
          bounds={[
            [0, 0],
            [500, 500],
          ]}
        />
      </MapContainer>
    </main>
  );
}
