export interface Animal {
  id: number;
  name: string;
  scientific: string;
  type: string;
  region: string;
  subregion?: string;
  diet: string;
  image: string;
  video?: string;
  sound?: string;
  description?: string;
  funFacts?: string[];
  status?: string;
}

export type NormalizedAnimal = Animal;
