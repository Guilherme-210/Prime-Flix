import { CardMedia } from "@mui/material";

interface CoverImageProps {
  alt: string
  image: string
}

export default function CoverImage({ alt, image }: CoverImageProps) {
  return (
    <>
      <div className="absolute itens-center inset-0 z-0">
        <CardMedia
          component="img"
          image={image}
          alt={alt}
          sx={{
            width: "100%",
            height: "40%",
            objectFit: "cover",
            opacity: 0.5,
          }}
        />
      </div>
    </>
  )
}