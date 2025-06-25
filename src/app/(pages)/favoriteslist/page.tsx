"use client";

import CardList from "@/components/CardList";
import Filme from "@/interfaces/Filme";
import { useEffect, useState } from "react";
import { Heart, Film } from "lucide-react";

export default function FavoritesList() {
  const [savedMovies, setSavedMovies] = useState<Filme[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const myFilmsList = localStorage.getItem("@primefilxFilmes");
      const parsedList = JSON.parse(myFilmsList || "[]");
      setSavedMovies(parsedList);
    } catch (error) {
      console.error("Erro ao carregar filmes:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Carregando seus filmes favoritos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-red-500 fill-current" />
            <h1 className="text-4xl font-bold text-white">Meus Filmes Favoritos</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Seus filmes salvos para assistir depois
          </p>
        </div>

        {/* Content */}
        {savedMovies.length === 0 ? (
          <div className="text-center py-20">
            <Film className="w-16 h-16 text-gray-500 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">
              Nenhum filme salvo ainda
            </h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Você ainda não salvou nenhum filme. Explore nossa biblioteca e adicione 
              seus favoritos para criar sua lista personalizada!
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">
                {savedMovies.length} {savedMovies.length === 1 ? 'filme salvo' : 'filmes salvos'}
              </h2>
            </div>
            
            <div className="grid gap-6">
              {savedMovies.map((filme) => (
                <div key={filme.id} className="transform hover:-translate-y-1 transition-transform duration-200">
                  <CardList filme={filme} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}