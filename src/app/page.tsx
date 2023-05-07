import Image from "next/image";

import TremAlMazrah from "../../public/trem-de-almazrah.png"

export default function Home() {
  return (
    <main className="bg-zinc-800 text-zinc-300 min-h-screen">
      {/* <div className="relative">
      <svg
        pointer-events="none"
        width="1110"
        height="713"
        viewBox="-92 -59 1110 713"
        className="absolute translate3d-514-75-0"
      >
        <g>
          <path
            stroke="#ffd952"
            stroke-opacity="1"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="5"
            stroke-dashoffset="5"
            fill="#ffd952"
            fill-opacity="0.2"
            fill-rule="evenodd"
            d="M853,287a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0 "
          ></path>
          <path
            stroke="#ffd952"
            stroke-opacity="1"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="5"
            stroke-dashoffset="5"
            fill="#ffd952"
            fill-opacity="0.2"
            fill-rule="evenodd"
            d="M853,457a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0 "
          ></path>
          <path
            stroke="#ffd952"
            stroke-opacity="1"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="5"
            stroke-dashoffset="5"
            fill="#ffd952"
            fill-opacity="0.2"
            fill-rule="evenodd"
            d="M793,289a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0 "
          ></path>
          <path
            stroke="#ffd952"
            stroke-opacity="1"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="5"
            stroke-dashoffset="5"
            fill="#ffd952"
            fill-opacity="0.2"
            fill-rule="evenodd"
            d="M810,238a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0 "
          ></path>
          <path
            stroke="#f5f34b"
            stroke-opacity="1"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="0"
            stroke-dashoffset="0"
            fill="#f5f34b"
            fill-opacity="0.2"
            fill-rule="evenodd"
            d="M787,242a14,14 0 1,0 28,0 a14,14 0 1,0 -28,0 "
          ></path>
          <path
            stroke="#f5f34b"
            stroke-opacity="1"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="0"
            stroke-dashoffset="0"
            fill="#f5f34b"
            fill-opacity="0.2"
            fill-rule="evenodd"
            d="M648,323a14,14 0 1,0 28,0 a14,14 0 1,0 -28,0 "
          ></path>
          <path
            stroke="#f5f34b"
            stroke-opacity="1"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="0"
            stroke-dashoffset="0"
            fill="#f5f34b"
            fill-opacity="0.2"
            fill-rule="evenodd"
            d="M792,493a14,14 0 1,0 28,0 a14,14 0 1,0 -28,0 "
          ></path>
          <path
            stroke="#f5f34b"
            stroke-opacity="1"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="0"
            stroke-dashoffset="0"
            fill="#f5f34b"
            fill-opacity="0.2"
            fill-rule="evenodd"
            d="M682,452a14,14 0 1,0 28,0 a14,14 0 1,0 -28,0 "
          ></path>
          <path
            stroke="#f5f34b"
            stroke-opacity="1"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="0"
            stroke-dashoffset="0"
            fill="#f5f34b"
            fill-opacity="0.2"
            fill-rule="evenodd"
            d="M757,342a14,14 0 1,0 28,0 a14,14 0 1,0 -28,0 "
          ></path>
          <path
            stroke="#2eff00"
            stroke-opacity="1"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="5"
            stroke-dashoffset="5"
            fill="#2eff00"
            fill-opacity="0.2"
            fill-rule="evenodd"
            d="M858,460a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0 "
          ></path>
          <path
            stroke="#2eff00"
            stroke-opacity="1"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="5"
            stroke-dashoffset="5"
            fill="#2eff00"
            fill-opacity="0.2"
            fill-rule="evenodd"
            d="M619,371a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0 "
          ></path>
          <path
            stroke="#2eff00"
            stroke-opacity="1"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="5"
            stroke-dashoffset="5"
            fill="#2eff00"
            fill-opacity="0.2"
            fill-rule="evenodd"
            d="M857,292a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0 "
          ></path>
          <path
            stroke="#2eff00"
            stroke-opacity="1"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="5"
            stroke-dashoffset="5"
            fill="#2eff00"
            fill-opacity="0.2"
            fill-rule="evenodd"
            d="M676,249a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0 "
          ></path>
          <path
            stroke="#2eff00"
            stroke-opacity="1"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="5"
            stroke-dashoffset="5"
            fill="#2eff00"
            fill-opacity="0.2"
            fill-rule="evenodd"
            d="M688,345a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0 "
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M514 587L514 536L565 536L565 587z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M514 536L514 485L565 485L565 536z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M514 485L514 433L565 433L565 485z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M514 433L514 382L565 382L565 433z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M514 382L514 331L565 331L565 382z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M514 331L514 280L565 280L565 331z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M514 280L514 229L565 229L565 280z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M514 229L514 177L565 177L565 229z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M514 177L514 126L565 126L565 177z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M514 126L514 75L565 75L565 126z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M565 587L565 536L616 536L616 587z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M565 536L565 485L616 485L616 536z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M565 485L565 433L616 433L616 485z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M565 433L565 382L616 382L616 433z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M565 382L565 331L616 331L616 382z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M565 331L565 280L616 280L616 331z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M565 280L565 229L616 229L616 280z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M565 229L565 177L616 177L616 229z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M565 177L565 126L616 126L616 177z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M565 126L565 75L616 75L616 126z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M616 587L616 536L668 536L668 587z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M616 536L616 485L668 485L668 536z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M616 485L616 433L668 433L668 485z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M616 433L616 382L668 382L668 433z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M616 382L616 331L668 331L668 382z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M616 331L616 280L668 280L668 331z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M616 280L616 229L668 229L668 280z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M616 229L616 177L668 177L668 229z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M616 177L616 126L668 126L668 177z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M616 126L616 75L668 75L668 126z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M668 587L668 536L719 536L719 587z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M668 536L668 485L719 485L719 536z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M668 485L668 433L719 433L719 485z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M668 433L668 382L719 382L719 433z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M668 382L668 331L719 331L719 382z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M668 331L668 280L719 280L719 331z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M668 280L668 229L719 229L719 280z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M668 229L668 177L719 177L719 229z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M668 177L668 126L719 126L719 177z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M668 126L668 75L719 75L719 126z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M719 587L719 536L770 536L770 587z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M719 536L719 485L770 485L770 536z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M719 485L719 433L770 433L770 485z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M719 433L719 382L770 382L770 433z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M719 382L719 331L770 331L770 382z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M719 331L719 280L770 280L770 331z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M719 280L719 229L770 229L770 280z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M719 229L719 177L770 177L770 229z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M719 177L719 126L770 126L770 177z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M719 126L719 75L770 75L770 126z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M770 587L770 536L821 536L821 587z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M770 536L770 485L821 485L821 536z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M770 485L770 433L821 433L821 485z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M770 433L770 382L821 382L821 433z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M770 382L770 331L821 331L821 382z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M770 331L770 280L821 280L821 331z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M770 280L770 229L821 229L821 280z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M770 229L770 177L821 177L821 229z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M770 177L770 126L821 126L821 177z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M770 126L770 75L821 75L821 126z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M821 587L821 536L872 536L872 587z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M821 536L821 485L872 485L872 536z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M821 485L821 433L872 433L872 485z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M821 433L821 382L872 382L872 433z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M821 382L821 331L872 331L872 382z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M821 331L821 280L872 280L872 331z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M821 280L821 229L872 229L872 280z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M821 229L821 177L872 177L872 229z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M821 177L821 126L872 126L872 177z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M821 126L821 75L872 75L872 126z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M872 587L872 536L924 536L924 587z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M872 536L872 485L924 485L924 536z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M872 485L872 433L924 433L924 485z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M872 433L872 382L924 382L924 433z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M872 382L872 331L924 331L924 382z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M872 331L872 280L924 280L924 331z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M872 280L872 229L924 229L924 280z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M872 229L872 177L924 177L924 229z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M872 177L872 126L924 126L924 177z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M872 126L872 75L924 75L924 126z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M924 587L924 536L975 536L975 587z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M924 536L924 485L975 485L975 536z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M924 485L924 433L975 433L975 485z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M924 433L924 382L975 382L975 433z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M924 382L924 331L975 331L975 382z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M924 331L924 280L975 280L975 331z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M924 280L924 229L975 229L975 280z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M924 229L924 177L975 177L975 229z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M924 177L924 126L975 126L975 177z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M924 126L924 75L975 75L975 126z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M1020 587L975 587L975 536L1020 536z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M1020 536L975 536L975 485L1020 485z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M1020 485L975 485L975 433L1020 433z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M1020 433L975 433L975 382L1020 382z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M1020 382L975 382L975 331L1020 331z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M1020 331L975 331L975 280L1020 280z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M1020 280L975 280L975 229L1020 229z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M1020 229L975 229L975 177L1020 177z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M1020 177L975 177L975 126L1020 126z"
          ></path>
          <path
            stroke="#ffffff"
            stroke-opacity="0.065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M1020 126L975 126L975 75L1020 75z"
          ></path>
        </g>
      </svg>
      <Image className="absolute z-10 translate3d-514-75-0 w-[512px] h-[512px]" src={TremAlMazrah} alt="Trem de Al Mazrah" width={512} height={512}/>
      </div> */}
    </main>
  );
}
