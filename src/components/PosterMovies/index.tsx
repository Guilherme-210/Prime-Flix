import { CardMedia } from "@mui/material";

interface PosterMoviesProps {
  href: string
  image: string
  alt: string
}

export default function PosterMovies({ image, alt }: PosterMoviesProps) {
  return (
    <>
      <CardMedia
        component="img"
        image={image}
        alt={alt}
        sx={{
          width: "200px",
          borderTopLeftRadius: "12px",
          borderBottomLeftRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
        }}
      />
    </>
  )
}
