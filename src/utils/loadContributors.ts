import { Contributor } from '../types';

export async function loadContributors(): Promise<Contributor[]> {
  try {
    const modules = import.meta.glob<{ default: Contributor }>(
      '/users/*.json',
      { eager: true }
    );

    const contributors: Contributor[] = Object.values(modules)
      .map((module) => module.default)
      .filter(
        (contributor) =>
          contributor &&
          typeof contributor === 'object' &&
          'name' in contributor &&
          'rollno' in contributor &&
          'pokemon' in contributor &&
          'github' in contributor
      )
      .sort((a, b) => a.name.localeCompare(b.name));

    return contributors;
  } catch (error) {
    console.error('Error loading contributors:', error);
    return [];
  }
}
