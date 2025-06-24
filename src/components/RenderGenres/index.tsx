import { Box } from "@mui/material";

interface RenderGenresProps {
  genres: { id: number; name: string }[]
}

export default function RenderGenres({ genres }: RenderGenresProps) {
  return (
    <>
      <Box className="flex gap-4 mt-6">
        {genres.map((gender, key) => (
          <span
            key={gender.id || key}
            className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-sm hover:bg-blue-500 transition duration-200"
          >
            {gender.name}
          </span>
        ))}
      </Box>
    </>
  )
}