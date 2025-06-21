"use client"

import CardFilm from "@/components/Card"
import Filme from "@/interfaces/Filme"
import filmesAPI from "@/services/api/filmes"
import { useEffect, useState } from "react"

export default function Filmes() {
  const [filmes, setFilmes] = useState<Filme[]>([])

  useEffect(() => {
    async function loadFilmes() {
      const res = await filmesAPI.get("/movie/now_playing", {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
          language: "pt-br",
          page: 1,
        },
      })

      setFilmes(res.data.results)
    }

    loadFilmes()
  }, [])

  return (
    <>
      <main>
        <section>
          <div className="grid grid-cols-2 gap-6 px-12 py-5 max-md:grid-cols-1 max-md:p-6">
            {filmes.map((filme) => {
              return <CardFilm filme={filme} key={filme.id} />
            })}
          </div>
        </section>
      </main>
    </>
  )
}
