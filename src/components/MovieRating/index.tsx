import { Box, Rating, Typography } from "@mui/material"

interface MovieRatingProps {
  voteAverage: number
}

export default function MovieRating({ voteAverage }: MovieRatingProps) {
  return (
    <>
      {" "}
      <Box className="flex items-center gap-2 mt-2">
        <Rating
          name="read-only"
          value={voteAverage / 2}
          precision={0.5}
          readOnly
        />
        <Typography variant="body2">{voteAverage.toFixed(1)} / 10</Typography>
      </Box>
    </>
  )
}
