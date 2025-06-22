export interface Filme {
  adult: boolean
  backdrop_path: string | null
  genres: { id: number; name: string }[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string | null
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  status: string
}

export default Filme
