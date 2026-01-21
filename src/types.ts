export interface Contributor {
  name: string;
  rollno: string;
  pokemon: string;
  github: string;
}

export interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
}
