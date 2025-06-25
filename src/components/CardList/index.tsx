"use client"

import Filme from "@/interfaces/Filme"
import PosterMovies from "../PosterMovies"
import CircularProgressWithLabel from "./_components/CircularProgressWithLabel"
import RenderGenres from "../RenderGenres"
import { Calendar, List, Play, Star, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Button, ButtonGroup } from "@mui/material"

interface CardListProps {
  filme: Filme
}

export default function CardList({ filme }: CardListProps) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const getImageUrl = () => {
    if (isMobile) {
      return `https://image.tmdb.org/t/p/w500/${backdrop_path || poster_path}`
    }
    return `https://image.tmdb.org/t/p/w500/${poster_path || backdrop_path}`
  }
  const widthImage = () => {
    if (isMobile) {
      return "100%"
    }
    return "200px"
  }

  const {
    backdrop_path,
    poster_path,
    title,
    vote_average,
    genres,
    release_date,
    overview,
  } = filme

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="w-full bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 border border-slate-700">
      <div className="flex flex-col md:flex-row">
        {/* Poster Section */}
        <div className="flex-shrink-0 w-full md:w-48 lg:w-56">
          <div className="h-64 md:h-full">
            <PosterMovies
              href={`https://www.youtube.com/results?search_query=Trailer ${title}`}
              image={getImageUrl()}
              alt={`Capa do filme ${title}`}
              widthImage={widthImage}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          {/* Header */}
          <div className="flex flex-row justify-between">
            <h2 className="text-2xl font-bold text-white mb-2 leading-tight">
              {title}
            </h2>
            {/* Release Date */}
            <div className="flex items-center gap-2 text-gray-300">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">
                Lançamento: {formatDate(release_date)}
              </span>
            </div>
          </div>

          {overview && (
            <p className="text-gray-300 text-sm line-clamp-3 mb-2">
              {overview}
            </p>
          )}

          <div className={"flex flex-row justify-between mb-4"}>
            {/* Rating and Genres */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <CircularProgressWithLabel value={vote_average * 10} />
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-white font-medium">
                    {vote_average.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>

            {/* Genres */}
            {genres && genres.length > 0 && (
              <div className="space-y-2">
                <span className="text-gray-400 text-xs uppercase tracking-wide font-medium">
                  Gêneros
                </span>
                <RenderGenres genres={genres} />
              </div>
            )}
          </div>

          <div className={"flex flex-row justify-between"}>
            <ButtonGroup>
              <Button className="gap-1">
                <Star className="size-4" />
                Avalie
              </Button>
              <Button className="gap-1">
                <List className="size-4" />
                Salvar
              </Button>
              <Button className="gap-1">
                <Play className="size-4" />
                Trailer
              </Button>
              <Button className="gap-1">
                <X className="size-4" />
                Remover
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
