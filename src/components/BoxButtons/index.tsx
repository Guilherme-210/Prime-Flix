"use client"

import Filme from "@/interfaces/Filme"
import { Alert, Button, ButtonGroup, Stack } from "@mui/material"
import { Play } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface BoxButtonsProps {
  searchTrailer: string
  filme: Filme
}

type AlertType = "success" | "warning" | "error" | null

export default function BoxButtons({ searchTrailer, filme }: BoxButtonsProps) {
  const [alertType, setAlertType] = useState<AlertType>(null)

  const showAlert = (type: AlertType) => {
    setAlertType(type)
    setTimeout(() => {
      setAlertType(null)
    }, 3000)
  }


  const filmeSave = () => {
    try {
      const myFilmsList = localStorage.getItem("@primefilxFilmes")
      const savedMovies = JSON.parse(myFilmsList || "[]")

      const hasFilme = savedMovies.some(
        (savedMovie: Filme) => savedMovie.id === filme.id
      )

      if (hasFilme) {
        showAlert("warning")
        return
      }

      savedMovies.push(filme)
      localStorage.setItem("@primefilxFilmes", JSON.stringify(savedMovies))

      showAlert("success")
    } catch (error) {
      console.error("Erro ao salvar filme:", error)
      showAlert("error")
    }
  }


  return (
    <>
      <Stack
        sx={{
          position: "fixed",
          top: 90,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
          width: "fit-content",
          maxWidth: "90%",
        }}
        spacing={2}
      >
        {alertType === "success" && (
          <Alert severity="success">
            <strong>Success:</strong> Filme salvo com sucesso! 🚀
          </Alert>
        )}
        {alertType === "warning" && (
          <Alert severity="warning">
            <strong>Warning:</strong> Esse filme já está na sua lista!
          </Alert>
        )}
        {alertType === "error" && (
          <Alert severity="error">
            <strong>Error:</strong> Erro ao salvar o filme!
          </Alert>
        )}
      </Stack>

      <ButtonGroup
        variant="contained"
        aria-label="Basic button group"
        className="flex mt-6"
      >
        <Button
          onClick={() => filmeSave()}
          variant="contained"
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            px: 4,
            py: 1.4,
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
      </ButtonGroup>
    </>
  )
}
