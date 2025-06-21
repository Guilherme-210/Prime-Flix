import { routes } from "@/app/routes"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <>
      <header className="flex flex-row gap-8 justify-around min-md:justify-between items-center px-4 py-2 bg-[#0b87e6]">
        <div className="w-15 h-15 relative">
          <Link href={routes.home} className="cursor-pointer">
            <Image
              src="/LogoPrimeFlix.png"
              alt="Imagem do jogo Dying Light"
              fill
              className="object-cover rounded-md"
              unoptimized
            />
          </Link>
        </div>
        <nav className="flex flex-row gap-8 text-black  ">
          <Link className="hover:text-zinc-100 text-lg " href={routes.filmes}>
            filmes
          </Link>
          <Link
            className="hover:text-zinc-100 text-lg "
            href={routes.filme(42)}
          >
            Ver filme
          </Link>
          <Link className="hover:text-zinc-100 text-lg " href={routes.series}>
            series
          </Link>
          <Link
            className="hover:text-zinc-100 text-lg "
            href={routes.serie(162)}
          >
            Ver serie
          </Link>
        </nav>
      </header>
    </>
  )
}
