import { Typography } from "@mui/material"

interface MovieInfoProps {
  title: string
  status: string
  release_date: string
  popularity: number
}

export default function MovieInfo({
  status,
  release_date,
  popularity,
}: MovieInfoProps) {
  return (
    <div className="flex flex-col gap-2 mt-2 text-sm sm:text-base">

      <Typography variant="body2" color="white">
        Status: <span className="font-medium">{status}</span>
      </Typography>

      <Typography variant="body2" color="white">
        Lançamento:{" "}
        <span className="font-medium">
          {new Date(release_date).toLocaleDateString("pt-BR")}
        </span>
      </Typography>

      <Typography variant="body2" color="white">
        Popularidade: <span className="font-medium">{popularity}</span>
      </Typography>
    </div>
  )
}
