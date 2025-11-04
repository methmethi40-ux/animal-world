import React, { useState } from "react";
import animalsData from "../data/animals";
import AnimalCard from "../components/AnimalCard";

export default function HomePage() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [dietFilter, setDietFilter] = useState("");

  const regions = [...new Set(animalsData.map(a => a.region))];
  const diets = [...new Set(animalsData.map(a => a.diet))];

  const filteredAnimals = animalsData.filter(a => {
    const matchesRegion = regionFilter ? a.region === regionFilter : true;
    const matchesDiet = dietFilter ? a.diet === dietFilter : true;
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase());
    return matchesRegion && matchesDiet && matchesSearch;
  });

  return (
    <div className="homepage">
      <h1>Animal World</h1>
      <input
        type="text"
        className="search"
        placeholder="Search animals..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="sections">
        <h2>Regions</h2>
        <div className="tags">
          <span
            className={`tag ${regionFilter === "" ? "active" : ""}`}
            onClick={() => setRegionFilter("")}
          >
            All
          </span>
          {regions.map(region => (
            <span
              key={region}
              className={`tag ${regionFilter === region ? "active" : ""}`}
              onClick={() => setRegionFilter(region)}
            >
              {region}
            </span>
          ))}
        </div>

        <h2>Diets</h2>
        <div className="tags">
          <span
            className={`tag ${dietFilter === "" ? "active" : ""}`}
            onClick={() => setDietFilter("")}
          >
            All
          </span>
          {diets.map(diet => (
            <span
              key={diet}
              className={`tag ${dietFilter === diet ? "active" : ""}`}
              onClick={() => setDietFilter(diet)}
            >
              {diet}
            </span>
          ))}
        </div>
      </div>

      <div className="cards">
        {filteredAnimals.map(animal => (
          <AnimalCard
            key={animal.id}
            animal={animal}
            onClick={() => setSelectedAnimal(animal)}
          />
        ))}
      </div>

      {selectedAnimal && (
        <div className="popup" onClick={() => setSelectedAnimal(null)}>
          <div
            className="popup-content"
            onClick={e => e.stopPropagation()} // prevent closing on inside click
          >
            <button
              className="close-btn"
              onClick={() => setSelectedAnimal(null)}
            >
              Close
            </button>

            <div className="popup-media">
              <img
                src={selectedAnimal.image}
                alt={selectedAnimal.name}
                className="popup-img"
              />
            </div>

            <h2>{selectedAnimal.name}</h2>
            <p>{selectedAnimal.description}</p>

            <h3>Fun Facts</h3>
            <ul>
              {selectedAnimal.funFacts.map((fact, i) => (
                <li key={i}>{fact}</li>
              ))}
            </ul>

            <a href={`/animal/${selectedAnimal.id}`}>
              <button className="more-info">More Info</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
