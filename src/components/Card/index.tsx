import { useState } from "react"
import { routes } from "@/app/routes"
import Filme from "@/interfaces/Filme"
import {
  Button,
  CircularProgress,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Box,
} from "@mui/material"
import Link from "next/link"

interface CardFilmProps {
  filme: Filme
}

export default function CardFilm({ filme }: CardFilmProps) {
  const [imageLoading, setImageLoading] = useState(true)

  return (
    <Card
      sx={{
        maxWidth: 220,
        height: 420,
        backgroundColor: "#121212",
        color: "#fff",
        borderRadius: 2,
        boxShadow: 3,
        overflow: "hidden",
        position: "relative",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 6,
        },
      }}
    >
      {/* Imagem com Loader */}
      <Box sx={{ position: "relative", height: 320 }}>
        {imageLoading && (
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "rgba(255,255,255,0.1)",
              zIndex: 1,
            }}
          >
            <CircularProgress color="secondary" size={40} thickness={6} />
          </Box>
        )}
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`}
          alt={`Capa do filme ${filme.title}`}
          onLoad={() => setImageLoading(false)}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        />
      </Box>

      {/* Botão */}
      <Link href={routes.filme(filme.id)} passHref>
        <CardActions
          sx={{ backgroundColor: "#2196f3", justifyContent: "center" }}
        >
          <Button size="small" sx={{ color: "#fff", fontWeight: "bold" }}>
            SOBRE
          </Button>
        </CardActions>
      </Link>

      {/* Título */}
      <CardContent sx={{ textAlign: "center", p: 1 }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            fontSize: "1rem",
            lineHeight: 1.4,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {filme.title}
        </Typography>
      </CardContent>
    </Card>
  )
}
