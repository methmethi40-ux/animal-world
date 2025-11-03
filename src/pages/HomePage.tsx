import React, { useState } from "react";
import animalsData from "../animals_json/animals1.json";
import AnimalCard from "../components/AnimalCard";
import AnimalDetails from "../components/AnimalDetails";
import { NormalizedAnimal } from "../types";

const HomePage: React.FC = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<NormalizedAnimal | null>(
    null
  );
  const [search, setSearch] = useState("");

  const filtered = animalsData.filter(
    (a) =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search animals..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((a) => (
          <AnimalCard
            key={a.id}
            animal={a}
            onClick={() => setSelectedAnimal(a)}
          />
        ))}
      </div>

      {selectedAnimal && (
        <AnimalDetails
          animal={selectedAnimal}
          onClose={() => setSelectedAnimal(null)}
        />
      )}
    </div>
  );
};

export default HomePage;
