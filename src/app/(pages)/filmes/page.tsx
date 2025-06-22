"use client"

import CardFilm from "@/components/Card"
import Filme from "@/interfaces/Filme"
import filmesAPI from "@/services/api/filmes"
import { CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"

export default function Filmes() {
  const [filmes, setFilmes] = useState<Filme[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilmes() {
      try {
        const res = await filmesAPI.get("/movie/now_playing", {
          params: {
            api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
            language: "pt-br",
            page: 1,
          },
        })

        setFilmes(res.data.results)
      } catch (error) {
        console.error("Erro ao buscar filmes:", error)
      } finally {
        setLoading(false)
      }
    }

    loadFilmes()
  }, [])

  if(loading === true) {
    return (
      <div className="w-full h-[100vh] text-center content-center">
        <CircularProgress disableShrink size={100} />
      </div>
    )
  }

  return (
    <>
      <main>
        <section>
          <div className="grid grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-1 gap-8 px-12 py-5 max-md:p-6">
            {filmes.map((filme) => {
              return <CardFilm filme={filme} key={filme.id} />
            })}
          </div>
        </section>
      </main>
    </>
  )
}
