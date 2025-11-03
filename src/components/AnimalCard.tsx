import React from "react";
import { NormalizedAnimal } from "../types";
import { useNavigate } from "react-router-dom";

interface Props {
  animal: NormalizedAnimal;
}

const AnimalCard: React.FC<Props> = ({ animal }) => {
  const navigate = useNavigate();

  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img
        src={animal.image}
        alt={animal.name}
        className="w-full h-48 object-cover mb-2"
      />
      <h2 className="text-xl font-semibold">{animal.name}</h2>
      <p className="italic">{animal.scientific}</p>
      <button
        onClick={() => navigate(`/animals/${animal.id}`)}
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        More Info
      </button>
    </div>
  );
};

export default AnimalCard;
