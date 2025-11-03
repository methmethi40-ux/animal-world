import React from "react";
import { useParams } from "react-router-dom";
import { NormalizedAnimal } from "../types";
import AnimalDetails from "./AnimalDetails";

interface Props {
  animals: NormalizedAnimal[];
}

const AnimalDetailsPage: React.FC<Props> = ({ animals }) => {
  const { id } = useParams<{ id: string }>();
  const animal = animals.find((a) => a.id.toString() === id);

  if (!animal) return <p className="p-4 text-red-500">Animal not found</p>;

  return <AnimalDetails animal={animal} />;
};

export default AnimalDetailsPage;
