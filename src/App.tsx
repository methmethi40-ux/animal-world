<<<<<<< HEAD
import React from "react";
import HomePage from "./pages/HomePage";
import "./styles/main.css";

const App: React.FC = () => {
  return <HomePage />;
=======
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import animals1 from "./animals_json/animals1.json";
import { NormalizedAnimal } from "./types";
import AnimalCard from "./components/AnimalCard";
import AnimalDetails from "./components/AnimalDetails";
import AnimalDetailsPage from "./components/AnimalDetailsPage";
<Route
  path="/animals/:id"
  element={<AnimalDetailsPage animals={animals1} />}
/>;

const App: React.FC = () => {
  const [animals, setAnimals] = useState<NormalizedAnimal[]>([]);

  useEffect(() => {
    setAnimals(animals1 as NormalizedAnimal[]);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Animal World</h1>
      <Routes>
        <Route
          path="/"
          element={
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {animals.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} />
              ))}
            </div>
          }
        />
        <Route
          path="/animals/:id"
          element={<AnimalDetailsPage animals={animals} />}
        />
      </Routes>
    </div>
  );
>>>>>>> c2a226bf24d2685796d29d935940a6aa565000b4
};

export default App;
