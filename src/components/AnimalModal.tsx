import React from "react";
import { NormalizedAnimal } from "../types";
import AnimalDetails from "./AnimalDetails";

interface Props {
  animal: NormalizedAnimal;
  onClose: () => void;
}

const AnimalModal: React.FC<Props> = ({ animal, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <AnimalDetails animal={animal} />
      </div>
    </div>
  );
};

export default AnimalModal;
