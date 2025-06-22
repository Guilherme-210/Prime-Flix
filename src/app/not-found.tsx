"use client"

import Link from "next/link"
import { Button } from "@mui/material"
import { routes } from "./routes"
// import Image from "next/image"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[#0d0d0d] text-white px-4">
      <h1 className="text-4xl font-bold mb-2">404 - Página não encontrada</h1>
      <p className="text-lg text-gray-400 mb-6">
        Opa! A página que você procura não existe ou foi removida.
      </p>

      <Link href={routes.home}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            borderRadius: 2,
            backgroundColor: "#2196f3",
            "&:hover": {
              backgroundColor: "#1976d2",
            },
          }}
        >
          Voltar para Home
        </Button>
      </Link>
    </div>
  )
}
