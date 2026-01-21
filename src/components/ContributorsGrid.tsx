import { Contributor } from '../types';
import { ContributorCard } from './ContributorCard';

interface ContributorsGridProps {
  contributors: Contributor[];
}

export function ContributorsGrid({ contributors }: ContributorsGridProps) {
  if (contributors.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">
          No contributors yet. Be the first to add yourself!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {contributors.map((contributor) => (
        <ContributorCard
          key={contributor.rollno}
          contributor={contributor}
        />
      ))}
    </div>
  );
}
