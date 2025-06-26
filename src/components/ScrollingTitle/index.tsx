import { Typography, Box } from "@mui/material"
import "./styles.css" 

export default function ScrollingTitle({ title }: { title: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        width: "100%", 
        height: "3rem",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        className="scrolling-title inline-block text-xl sm:text-2xl md:text-3xl font-bold text-white"        
      >
        {title}
      </Typography>
    </Box>
  )
}
