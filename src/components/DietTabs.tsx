import React from "react";
import "./DietTabs.css";

interface Props {
  selectedDiet: string;
  setSelectedDiet: (d: string) => void;
  diets: string[];
}

const DietTabs: React.FC<Props> = ({
  selectedDiet,
  setSelectedDiet,
  diets,
}) => {
  return (
    <div className="diet-tabs">
      {diets.map((d) => (
        <button
          key={d}
          onClick={() => setSelectedDiet(d)}
          className={`diet-tab ${selectedDiet === d ? "active" : ""}`}
        >
          {d}
        </button>
      ))}
    </div>
  );
};

export default DietTabs;
