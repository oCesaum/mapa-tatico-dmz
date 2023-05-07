"use client"

import L from "leaflet";
import {
  MapContainer,
  ImageOverlay,
} from "react-leaflet";

export default function AlMazrah() {
  const bounds = [
    [0, 0],
    [512, 512],
  ];

  return (
    <main>
      <MapContainer
        className="w-screen h-screen bg-zinc-800"
        center={[256, 256]}
        zoom={0}
        scrollWheelZoom={true}
        crs={L.CRS.Simple}
        attributionControl={false}
        style={{ backgroundColor: "#000" }}
      >
        <ImageOverlay
          url="/al-mazrah/al-mazrah.jpg"
          bounds={[
            [0, 0],
            [512, 512],
          ]}
        />
      </MapContainer>
    </main>
  );
}
