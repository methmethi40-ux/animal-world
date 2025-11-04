import React from "react";

export default function AnimalCard({ animal, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={animal.image} alt={animal.name} />
      <div className="card-info">
        <h3>{animal.name}</h3>
        <p>{animal.scientific}</p>
      </div>
    </div>
  );
}
