import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiRightArrowCircle } from "react-icons/bi";

interface GameCardProps {
  data: GameProps;
}

export default function GameCard({ data }: GameCardProps) {
  return (
    <Link href={`game/${data.id}`}>
      <section className="w-full bg-slate-200 rounded-lg p-4 mb-5">
        <div className="relative w-full h-56 hover:scale-105 transition-all duration-300">
          <Image
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw"
            src={data.image_url}
            fill={true}
            quality={100}
            alt={data.title}
          />
        </div>
        <div className="flex items-center mt-4 justify-between">
          <p className="text-sm font-bold px-2 text-black  truncate overflow-hidden">
            {data.title}
          </p>
          <BiRightArrowCircle size={24} color="#000" />
        </div>
      </section>
    </Link>
  );
}
