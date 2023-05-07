import "./globals.css";

export const metadata = {
  title: "Mapa tático DMZ",
  description: "Este é um mapa tático de um brasileiro para jogadores de DMZ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
          integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
          crossOrigin=""
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
