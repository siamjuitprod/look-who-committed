import { Github } from 'lucide-react';
import { Contributor } from '../types';
import { PokemonImage } from './PokemonImage';

interface ContributorCardProps {
  contributor: Contributor;
}

export function ContributorCard({ contributor }: ContributorCardProps) {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
      <div className="mb-4">
        <PokemonImage pokemonName={contributor.pokemon} />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 text-center mb-1">
        {contributor.name}
      </h3>

      <p className="text-sm text-blue-600 font-medium mb-4">
        {contributor.rollno}
      </p>

      <a
        href={contributor.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
      >
        <Github size={18} />
        <span>GitHub</span>
      </a>
    </div>
  );
}
