import React from "react";
import { NormalizedAnimal } from "../types";
import { useNavigate } from "react-router-dom";

interface Props {
  animal: NormalizedAnimal;
}

const AnimalDetails: React.FC<Props> = ({ animal }) => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <button
        className="mb-4 px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
        onClick={() => navigate("/")}
      >
        Back
      </button>
      <img
        src={animal.image}
        alt={animal.name}
        className="w-full max-w-xl mb-4"
      />
      <h2 className="text-2xl font-bold">{animal.name}</h2>
      <h4 className="italic">{animal.scientific}</h4>
      <p>Type: {animal.type}</p>
      <p>Region: {animal.region}</p>
      {animal.subregion && <p>Subregion: {animal.subregion}</p>}
      <p>Diet: {animal.diet}</p>
      {animal.description && <p>{animal.description}</p>}
      {animal.funFacts && (
        <ul className="list-disc ml-5">
          {animal.funFacts.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AnimalDetails;
