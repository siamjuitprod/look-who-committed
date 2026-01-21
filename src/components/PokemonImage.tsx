import { useState, useEffect } from 'react';

interface PokemonImageProps {
  pokemonName: string;
}

export function PokemonImage({ pokemonName }: PokemonImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
        );

        if (!response.ok) {
          throw new Error('Pokemon not found');
        }

        const data = await response.json();
        setImageUrl(data.sprites.front_default);
        setHasError(false);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemon();
  }, [pokemonName]);

  if (isLoading) {
    return (
      <div className="w-32 h-32 bg-slate-200 rounded-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-slate-400 border-t-slate-600"></div>
      </div>
    );
  }

  if (hasError || !imageUrl) {
    return (
      <div className="w-32 h-32 bg-slate-200 rounded-full flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl">?</div>
          <div className="text-xs text-slate-600 mt-1">Not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center overflow-hidden">
      <img
        src={imageUrl}
        alt={pokemonName}
        className="w-full h-full object-contain p-4"
      />
    </div>
  );
}
