import { Box, Rating, Typography } from "@mui/material"

interface MovieRatingProps {
  voteAverage: number
}

export default function MovieRating({ voteAverage }: MovieRatingProps) {
  return (
    <Box className="flex items-center gap-2 mt-3">
      <Rating
        name="read-only"
        value={voteAverage / 2}
        precision={0.5}
        readOnly
        size="small"
      />
      <Typography variant="body2" className="text-sm sm:text-base">
        {voteAverage.toFixed(1)} / 10
      </Typography>
    </Box>
  )
}
