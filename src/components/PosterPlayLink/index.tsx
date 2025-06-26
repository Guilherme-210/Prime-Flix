import { CardMedia } from "@mui/material"
import { PlayCircle } from "lucide-react"
import Link from "next/link"

interface PosterPlayLinkProps {
  href: string
  image: string
  alt: string
}

export default function PosterPlayLink({
  href,
  image,
  alt,
}: PosterPlayLinkProps) {
  return (
    <Link
      target="_blank"
      href={href}
      passHref
      rel="external"
      className="relative group w-[200px] transition-transform duration-300 hover:scale-105"
    >
      <CardMedia
        component="img"
        image={image}
        alt={alt}
        sx={{
          minWidth: "200px", // Agora a largura é sempre 100% do container pai (que já é responsivo)
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-tl-[12px] rounded-tr-[12px]">
        <PlayCircle className="text-white w-10 h-10 md:w-12 md:h-12" />
      </div>
    </Link>
  )
}
