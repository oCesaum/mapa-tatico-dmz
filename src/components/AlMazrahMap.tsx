import L from "leaflet";
import { MapContainer, ImageOverlay } from "react-leaflet";

export default function AlMazrahMap() {
  const bounds = [
    [0, 0],
    [512, 512],
  ];

  return (
    <main className="overflow-hidden h-[calc(100vh-56px)] bg-zinc-800">
      <MapContainer
        className="w-screen h-[calc(100vh-56px)] bg-zinc-800"
        center={[256, 256]}
        zoom={2}
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
