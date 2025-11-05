export interface Animal {
  id: number;
  name: string;
  scientific: string;
  type: string;
  region: string;
<<<<<<< HEAD
  subregion: string;
  diet: string;
  image: string;
  description: string;
  funFacts: string[];
  status: string;
}
=======
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
>>>>>>> c2a226bf24d2685796d29d935940a6aa565000b4
