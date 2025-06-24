import { Box, Typography } from "@mui/material"

interface MovieSynopsisProps {
  synopsis: string
}

export default function MovieSynopsis({ synopsis }: MovieSynopsisProps) {
  return (
    <>
      <Box className="flex-1">
        <Typography variant="h6" fontWeight="bold">
          Sinopse
        </Typography>
        <Typography variant="body1" color="gray">
          {synopsis || "Sem descrição disponível."}
        </Typography>
      </Box>
    </>
  )
}
