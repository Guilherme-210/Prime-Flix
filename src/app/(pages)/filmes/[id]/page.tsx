import { notFound } from "next/navigation"

import filmesAPI from "@/services/api/filmes"
import Filme from "@/interfaces/Filme"
import { Box, Container, Divider } from "@mui/material"
import CoverImage from "@/components/CoverImage"
import PosterPlayLink from "@/components/PosterPlayLink"
import MovieInfo from "@/components/MovieInfo"
import MovieRating from "@/components/MovieRating"
import RenderGenres from "@/components/RenderGenres"
import MovieSynopsis from "@/components/MovieSynopsis"
import BoxButtons from "@/components/BoxButtons"

// ✅ gerar as rotas estaticamente
export async function generateStaticParams() {
  // Exemplo: buscar alguns IDs de filmes populares para gerar estaticamente
  const res = await filmesAPI.get("/movie/popular", {
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
      language: "pt-BR",
      page: 1,
    },
  })

  // Ajuste conforme a estrutura do seu retorno
  return res.data.results.map((filme: Filme) => ({
    id: String(filme.id),
  }))
}

export default async function FilmePage({ params }: { params: { id: string } }) {
  const resolvedParams = await Promise.resolve(params)
  const { id } = resolvedParams

  try {
    const res = await filmesAPI.get(`/movie/${id}`, {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        language: "pt-BR",
      },
    })

    const filme: Filme = res.data
    console.log(res.data)

    const {
      backdrop_path,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      vote_average,
      genres,
      status,
    } = filme

    console.log(filme
    )
    return (
      <section className="min-h-screen relative text-white ">
        <CoverImage
          alt={`Capa do filme ${title}`}
          image={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        />

        <Container
          maxWidth="md"
          className="relative z-10 flex flex-col gap-6 pt-24 items-center"
        >
          <Box className="flex gap-6 flex-col sm:flex-row items-center sm:items-start">
            <PosterPlayLink
              href={`https://www.youtube.com/results?search_query=Trailer ${title}`}
              image={`https://image.tmdb.org/t/p/w300/${
                poster_path || backdrop_path
              }`}
              alt={`Capa do filme ${title}`}
            />

            <Box className="flex-1">
              <MovieInfo
                title={title}
                status={status}
                release_date={release_date}
                popularity={popularity}
              />

              <MovieRating voteAverage={vote_average} />

              <BoxButtons searchTrailer={title} filme={filme} />

              <RenderGenres genres={genres} />
            </Box>
          </Box>

          <Divider sx={{ borderColor: "#555" }} />

          <MovieSynopsis synopsis={overview} />
        </Container>
      </section>
    )
  } catch (err) {
    console.error("Erro ao buscar filme:", err)
    notFound()
  }
}