import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-14 px-5 bg-zinc-900 text-zinc-300 flex justify-between items-center">
      <h2>DMZ</h2>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/al-mazrah">Al Mazrah</Link>
          </li>
          <li>
            <Link href="/ashika-island">Ashika Island</Link>
          </li>
          <li>
            <Link href="/building-21">Prédio 21</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
