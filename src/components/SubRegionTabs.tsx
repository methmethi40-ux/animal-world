import React from "react";
import "./SubRegionTabs.css";

interface Props {
  subregions: string[];
  selectedSubregion: string;
  setSelectedSubregion: (s: string) => void;
}

const SubRegionTabs: React.FC<Props> = ({
  subregions,
  selectedSubregion,
  setSelectedSubregion,
}) => {
  return (
    <div className="subregion-tabs">
      {subregions.map((s) => (
        <button
          key={s}
          onClick={() => setSelectedSubregion(s)}
          className={`subregion-tab ${selectedSubregion === s ? "active" : ""}`}
        >
          {s}
        </button>
      ))}
    </div>
  );
};

export default SubRegionTabs;
