import Filme from "@/interfaces/Filme"
import Image from "next/image"

interface CardFilmProps {
  filme: Filme
}

export default function CardFilm({ filme }: CardFilmProps) {
  return (
    <>
      <div className="flex flex-col p-4 m-6 gap-5 bg-[#45adfc] rounded-md overflow-hidden shadow-lg transition hover:scale-[1.01] hover:shadow-xl">
        <div className="relative w-full h-64">
          <Image
            src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
            alt={`Capa do filme ${filme.title}`}
            fill
            unoptimized
            className="object-cover"
          />
        </div>
        <h3 className="text-white text-xl font-semibold">{filme.title}</h3>
      </div>
    </>
  )
}
