"use client"

import { notFound } from "next/navigation"
import { useEffect, useState } from "react"
import filmesAPI from "@/services/api/filmes"
import { CircularProgress } from "@mui/material"
import Filme from "@/interfaces/Filme"

export default function FilmePage({ params }: { params: { id: string } }) {
  const [filme, setFilme] = useState<Filme | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getFilme() {
      try {
        const res = await filmesAPI.get(`/movie/${params.id}`, {
          params: {
            api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
            language: "pt-br",
          },
        })

        setFilme(res.data)
      } catch (error) {
        console.error("Erro ao buscar filme:", error)
      } finally {
        setLoading(false)
      }
    }

    getFilme()
  }, [params.id])

  if (loading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <CircularProgress disableShrink size={100} />
      </div>
    )
  }

  if (!filme) {
    notFound()
  }

  return (
    <main className="p-8">
      <h2 className="text-3xl font-bold mb-4">{filme?.title}</h2>
      <p>{filme?.overview}</p>
    </main>
  )
}
