import { Typography, Box } from "@mui/material"
import "./styles.css" 

export default function ScrollingTitle({ title }: { title: string }) {
  return (
    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        width: "100%", // define a largura do container
        height: "3rem",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        className="scrolling-title"
      >
        {title}
      </Typography>
    </Box>
  )
}
