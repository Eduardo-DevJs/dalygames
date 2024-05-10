"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Input() {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleSearch(evemt: FormEvent) {
    evemt.preventDefault();
    if (input === "") return;
    router.push(`/game/search/${input}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="w-full bg-slate-200 my-5 flex items-center gap-2 justify-between rounded-lg p-2"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-11/12 bg-slate-200 outline-none"
        type="text"
        placeholder="Procurando algum jogo?..."
      />g
      <button>
        <FiSearch size={24} color="#ea580c" />
      </button>
    </form>
  );
}
