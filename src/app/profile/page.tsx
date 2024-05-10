import Container from "@/components/Container";
import Image from "next/image";
import userImg from "../../../public/user.png";
import { FaShareAlt } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="w-full text-black">
      <Container>
        <section className="mt-8 mb-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row">
          <div className="w-full flex items-center gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-normal">
            <Image
              src={userImg}
              alt="Imagem perfil do usuario"
              className="rounded-full object-cover h-56 w-56"
            />
            <div>
              <h1 className="font-bold text-2xl">Eduardo de Oliveira</h1>
              <p>
                O mais lindo de todos, tento nao ser lindo, mas é dificil essa
                situação.
              </p>
            </div>
          </div>

          <div className="sm:absolute top-0 right-0 gap-3 flex items-center justify-center">
            <button className="bg-gray-700 px-4 py-3 rounded-lg text-white">
              Configurações
            </button>
            <button className="bg-gray-700 px-4 py-3 rounded-lg">
              <FaShareAlt size={24} color="#fff" />
            </button>
          </div>
        </section>
      </Container>
    </div>
  );
}
