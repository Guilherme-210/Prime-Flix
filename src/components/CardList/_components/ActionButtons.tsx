import { List, Play, Star, X } from "lucide-react"
import { Button, ButtonGroup } from "@mui/material"
import Link from "next/link"

interface ActionButtonsProps {
  title: string
}

export default function ActionButtons({ title }: ActionButtonsProps) {
  return (
    <>
      <ButtonGroup>
        <Button className="gap-1">
          <Star className="size-4" />
          Avalie
        </Button>

        <Button className="gap-1">
          <List className="size-4" />
          Salvar
        </Button>

        <Link
          target="blank"
          href={`https://www.youtube.com/results?search_query=Trailer ${title}`}
          passHref
          rel="external"
        >
          <Button className="gap-1">
            <Play className="size-4" />
            Trailer
          </Button>
        </Link>

        <Button className="gap-1">
          <X className="size-4" />
          Remover
        </Button>
      </ButtonGroup>
    </>
  )
}
