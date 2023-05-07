import Image from "next/image";

import nordeste from "../../../public/al-mazrah/nordeste.png";
import sudeste from "../../../public/al-mazrah/sudeste.png";
import sudoeste from "../../../public/al-mazrah/sudoeste.png";
import noroeste from "../../../public/al-mazrah/noroeste.png";

export default function AlMazrah() {
  return (
    <main className="bg-zinc-800 text-zinc-300 min-h-screen grid place-content-center">
      <div className="grid grid-cols-2">
        <Image height={512} width={512} src={noroeste} alt="Noroeste de Al Mazrah"/>
        <Image height={512} width={512} src={nordeste} alt="Nordeste de Al Mazrah"/>
        <Image height={512} width={512} src={sudoeste} alt="Sudoeste de Al Mazrah"/>
        <Image height={512} width={512} src={sudeste} alt="Sudeste de Al Mazrah"/>
      </div>
    </main>
  );
}
