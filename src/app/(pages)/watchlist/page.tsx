"use client"

import CardList from "@/components/CardList"
import Filme from "@/interfaces/Filme"
import { useEffect, useState } from "react"

export default function FavoritesList() {
  const [savedMovies, setSavedMovies] = useState<Filme[]>([])

  useEffect(() => {
    try {
      const myFilmsList = localStorage.getItem("@primefilxFilmes")
      const parsedList = JSON.parse(myFilmsList || "[]")
      setSavedMovies(parsedList)
    } catch (error) {
      console.error("Erro ao baixar filmes:", error)
    }
  }, [])

  return (
    <>
      <section
        className={"p-15 flex flex-col w-full justify-center items-center"}
      >
        {savedMovies.length === 0 ? (
          <h2>Voce não tem nenhum filme salvo.</h2>
        ) : (
          <ul className="flex flex-col justify-center gap-5">
            {savedMovies.map((filme) => (
              <li key={filme.id}>
                <CardList filme={filme} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}
