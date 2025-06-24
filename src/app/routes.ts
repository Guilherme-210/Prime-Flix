// import Error from "./(pages)/Error"

export const routes = {
  home: "/",
  filmes: "/filmes",
  series: "/series",

  filme: (id: string | number) => `/filmes/${id}`,
  serie: (id: string | number) => `/series/${id}`,

  favoritesList: "/favoriteslist",
} as const
