import './globals.css'

export const metadata = {
  title: 'Mapa tático DMZ',
  description: 'Este é um mapa tático de um brasileiro para jogadores de DMZ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
