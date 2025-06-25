"use client"

interface RenderGenresProps {
  genres: { id: number; name: string }[]
}

export default function RenderGenres({ genres }: RenderGenresProps) {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full">
      {genres.map((genre, index) => (
        <div key={genre.id || index} className="flex-shrink-0 snap-center">
          <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium px-3 py-1.5 rounded-full whitespace-nowrap shadow-sm hover:shadow-md transition-shadow duration-200">
            {genre.name}
          </span>
        </div>
      ))}
    </div>
  )
}
