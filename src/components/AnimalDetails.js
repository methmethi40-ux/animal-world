import React from "react";

function AnimalDetails({ animal, onClose }) {
  return (
    <div className="details-overlay">
      <div className="details-card">
        <button className="close-btn" onClick={onClose}>✕</button>

        <img src={animal.image} alt={animal.name} className="details-img" />
        <h2>{animal.name}</h2>
        <p className="scientific">{animal.scientific}</p>

        <p><strong>Type:</strong> {animal.type}</p>
        <p><strong>Region:</strong> {animal.region}</p>
        <p><strong>Diet:</strong> {animal.diet}</p>

        <p className="desc">{animal.description}</p>

        {animal.video && (
          <video className="animal-video" controls>
            <source src={animal.video} type="video/mp4" />
          </video>
        )}

        <div className="fun-facts">
          <h3>Fun Facts</h3>
          <ul>
            {animal.funFacts.map((fact, i) => (
              <li key={i}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AnimalDetails;
