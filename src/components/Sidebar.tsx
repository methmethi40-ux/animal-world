import React from "react";
import { Animal } from "../types";
import "./Sidebar.css";

interface SidebarProps {
  regions: string[];
  subregions: { [region: string]: string[] };
  diets: string[];
  types: string[];
  selectedRegion: string;
  selectedSubregion: string;
  selectedDiet: string;
  selectedType: string;
  onSelectRegion: (region: string) => void;
  onSelectSubregion: (subregion: string) => void;
  onSelectDiet: (diet: string) => void;
  onSelectType: (type: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  regions,
  subregions,
  diets,
  types,
  selectedRegion,
  selectedSubregion,
  selectedDiet,
  selectedType,
  onSelectRegion,
  onSelectSubregion,
  onSelectDiet,
  onSelectType,
}) => {
  return (
    <div className="sidebar">
      <div className="filter-group">
        <h3>Regions</h3>
        {regions.map((region) => (
          <div key={region}>
            <button
              className={selectedRegion === region ? "active" : ""}
              onClick={() => onSelectRegion(region)}
            >
              {region}
            </button>
            {selectedRegion === region &&
              subregions[region]?.map((sub) => (
                <button
                  key={sub}
                  className={
                    selectedSubregion === sub ? "active subregion" : "subregion"
                  }
                  onClick={() => onSelectSubregion(sub)}
                >
                  {sub}
                </button>
              ))}
          </div>
        ))}
      </div>

      <div className="filter-group">
        <h3>Diet</h3>
        {diets.map((diet) => (
          <button
            key={diet}
            className={selectedDiet === diet ? "active" : ""}
            onClick={() => onSelectDiet(diet)}
          >
            {diet}
          </button>
        ))}
      </div>

      <div className="filter-group">
        <h3>Type</h3>
        {types.map((t) => (
          <button
            key={t}
            className={selectedType === t ? "active" : ""}
            onClick={() => onSelectType(t)}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
