import { Box, Button } from "@mui/material";
import { Play } from "lucide-react";
import Link from "next/link";

interface BoxButtonsProps {
  searchTrailer: string
}

export default function BoxButtons({ searchTrailer }: BoxButtonsProps) {
  return (
    <>
      <Box className="flex gap-4 mt-6">
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            borderRadius: 2,
            backgroundColor: "#2196f3",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#1976d2",
            },
          }}
        >
          Salvar
        </Button>

        <Link
          target="blank"
          href={`https://www.youtube.com/results?search_query=Trailer ${searchTrailer}`}
          passHref
          rel="external"
        >
          <Button
            variant="outlined"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              borderColor: "#2196f3",
              color: "#2196f3",
              fontSize: 12,
              display: "flex",
              gap: 1,
              alignItems: "center",
              "&:hover": {
                backgroundColor: "#2196f3",
                color: "#fff",
              },
            }}
          >
            <Play className="size-4" />
            Trailer
          </Button>
        </Link>
      </Box>
    </>
  )
}