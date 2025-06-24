"use client"

import Filme from "@/interfaces/Filme"
import PosterMovies from "../PosterMovies"
import {
  Box,
  ButtonGroup,
  Grid,
  ListItem,
  Stack,
  Typography,
} from "@mui/material"
import CircularProgressWithLabel from "./_components/CircularProgressWithLabel"
import RenderGenres from "../RenderGenres"

interface CardListProps {
  filme: Filme
}

export default function CardList({ filme }: CardListProps) {
  const {
    backdrop_path,
    poster_path,
    title,
    vote_average,
    genres,
    release_date,
  } = filme

  console.log(filme)
  return (
    <ButtonGroup
      // maxWidth="md"
      sx={{
        width: "100%",
        mb: 4,
        backgroundColor: "#1e1e1e",
        borderRadius: 2,
        boxShadow: 3,
        px: 0,
        py: 0,
        color: "#fff",
      }}
    >
      <Box display="flex" gap={3} alignItems="center" flexWrap="wrap">
        {/* Poster */}
        <Box
          sx={{
            maxWidth: 150,
            flexShrink: 0,
          }}
        >
          <PosterMovies
            href={`https://www.youtube.com/results?search_query=Trailer ${title}`}
            image={`https://image.tmdb.org/t/p/w300/${
              poster_path || backdrop_path
            }`}
            alt={`Capa do filme ${title}`}
          />
        </Box>

        {/* Informações */}
        <Grid container spacing={2} alignItems="center" flex={1}>
          <Grid size={12}>
            <Typography variant="h6" fontWeight="bold" color="white">
              {title}
            </Typography>
          </Grid>

          <Grid size={2}>
            <ListItem sx={{ height: "100%", boxSizing: "border-box" }}>
              <CircularProgressWithLabel value={vote_average * 10} />
            </ListItem>
          </Grid>

          <Grid size={10}>
            <Stack spacing={2}>
              <ListItem>Data de lançamento: {release_date}</ListItem>
              <ListItem>
                <RenderGenres genres={genres} />
              </ListItem>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </ButtonGroup>
  )
}
