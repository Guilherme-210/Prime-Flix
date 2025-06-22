import { notFound } from "next/navigation"
import filmesAPI from "@/services/api/filmes"
import Filme from "@/interfaces/Filme"
import {
  Box,
  CardMedia,
  Typography,
  Rating,
  Container,
  Divider,
  Button,
} from "@mui/material"
import Link from "next/link"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function FilmePage({ params }: PageProps) {
  const { id } = await params

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

    return (
      <main className="min-h-screen text-white">
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={`Capa do filme ${title}`}
          sx={{
            width: "100%",
            maxHeight: "500px",
            objectFit: "cover",
            zIndex: "0",
            position: "absolute",
            opacity: "50%",
          }}
        />

        <Container
          maxWidth="md"
          className="flex flex-col gap-6 z-10 absolute pt-100 items-center inset-0"
        >
          <div>
            <Box className="flex gap-6 flex-col sm:flex-row items-center sm:items-start">
              <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w300/${
                  poster_path || backdrop_path
                }`}
                alt={`Capa do filme ${title}`}
                sx={{
                  width: "200px",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                }}
              />

              <Box className="flex-1">
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  {title}
                </Typography>

                <Typography variant="body1" color="white" gutterBottom>
                  Status:{" "}
                  <span className="text-white font-medium">{status}</span>
                </Typography>

                <Typography variant="body1" color="white" gutterBottom>
                  Lançamento:{" "}
                  <span className="text-white font-medium">
                    {new Date(release_date).toLocaleDateString("pt-BR")}
                  </span>
                </Typography>

                <Typography variant="body1" color="white" gutterBottom>
                  Popularidade:{" "}
                  <span className="text-white font-medium">{popularity}</span>
                </Typography>

                <Box className="flex items-center gap-2 mt-2">
                  <Rating
                    name="read-only"
                    value={vote_average / 2}
                    precision={0.5}
                    readOnly
                  />
                  <Typography variant="body2">
                    {vote_average.toFixed(1)} / 10
                  </Typography>
                </Box>

                <Box className="flex gap-4 mt-6">
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      fontWeight: "bold",
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      backgroundColor: "#2196f3",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#1976d2",
                      },
                    }}
                  >
                    Salvar
                  </Button>

                  <Link href={"#"} passHref>
                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        fontWeight: "bold",
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        borderColor: "#2196f3",
                        color: "#2196f3",
                        "&:hover": {
                          backgroundColor: "#2196f3",
                          color: "#fff",
                        },
                      }}
                    >
                      Trailer
                    </Button>
                  </Link>
                </Box>

                <Box className="flex gap-4 mt-6">
                  {genres.map((gender, key) => {
                    return <p key={gender.id || key}>{gender.name}</p>
                  })}
                </Box>
              </Box>
            </Box>

            <Divider sx={{ borderColor: "#555" }} />

            {/* Descrição */}
            <Typography variant="h6" fontWeight="bold">
              Sinopse
            </Typography>
            <Typography variant="body1" color="gray">
              {overview || "Sem descrição disponível."}
            </Typography>
          </div>
        </Container>
      </main>
    )
  } catch (err) {
    console.error("Erro ao buscar filme:", err)
    notFound()
  }
}
