import { Typography } from "@mui/material";

interface MovieInfoProps {
  title: string
  status: string
  release_date: string
  popularity: number
}

export default function MovieInfo({ title, status, release_date, popularity }: MovieInfoProps) {
  return (
    <>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {title}
      </Typography>

      <Typography variant="body1" color="white" gutterBottom>
        Status: <span className="text-white font-medium">{status}</span>
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
    </>
  )
}
