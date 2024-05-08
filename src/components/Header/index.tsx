import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../../public/logo.svg";
import { LiaGamepadSolid } from "react-icons/lia";

export default function Header() {
  return (
    <header className="w-full h-28 text-black px-2 bg-slate-100">
      <Container>
        <div className="flex justify-between items-center h-28">
          <nav className="flex justify-center items-center gap-4">
            <Link href={"/"}>
              <Image
                alt="Logo do site dalygame"
                quality={100}
                priority={true}
                src={logoImg}
                className="w-full"
              />
            </Link>
            <Link href={"/"}>Games</Link>
            <Link href={"/profile"}>Perfil</Link>
          </nav>

          <div className="hidden sm:flex justify-center items-center">
            <Link href={"/profile"}>
              <LiaGamepadSolid size={34} color="#475569" />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
