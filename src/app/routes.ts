export const routes = {
  home: "/",
  filmes: "/filmes",
  filme: (id: string | number) => `/filmes/${id}`,
  series: "/series",
  serie: (id: string | number) => `/series/${id}`,
} as const
