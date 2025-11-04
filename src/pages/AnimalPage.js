import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import animals from "../data/animals";

export default function AnimalPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const animal = animals.find(a => a.id === parseInt(id));

  if (!animal) return <p>Animal not found!</p>;

  return (
    <div className="animal-page">
      <button className="close-btn" onClick={() => navigate(-1)}>Close</button>
      <h1>{animal.name}</h1>
      <h3>{animal.scientific}</h3>
      <img src={animal.image} alt={animal.name} />
      <video controls src={animal.video} width="600"></video>
      <audio controls src={animal.audio}></audio>
      <p>{animal.description}</p>
      <h4>Fun Facts:</h4>
      <ul>
        {animal.funFacts.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <p><b>Status:</b> {animal.status}</p>
      <p><b>Region:</b> {animal.region} / {animal.subregion}</p>
      <p><b>Diet:</b> {animal.diet}</p>
    </div>
  );
}
