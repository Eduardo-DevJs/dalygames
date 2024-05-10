import Container from "@/components/Container";
import Input from "@/components/Input";
import GameCard from "@/components/gameCard";
import { GameProps } from "@/utils/types/game";

async function getData(title: string) {
  try {
    const decodeTitle = decodeURI(title)
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`
    );
    return res.json();
  } catch (err) {
    return null;
  }
}

export default async function Search({
  params: { title },
}: {
  params: { title: string };
}) {
  const games: GameProps[] = await getData(title);

  return (
    <main className="w-full text-black ">
      <Container>
        <Input />
        <h1 className="mt-8 font-bold text-xl mb-5">
          Veja o que encontramos na nossa base:
        </h1>
        {!games && <p>Esse jogo nao foi encontrado...</p>}

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games && games.map((game) => (
            <>
              <GameCard key={game.id} data={game} />
            </>
          ))}
        </section>
      </Container>
    </main>
  );
}
