import React from "react";
import "./RegionTabs.css";

interface Props {
  selectedRegion: string;
  setSelectedRegion: (r: string) => void;
  regions: string[];
}

const RegionTabs: React.FC<Props> = ({
  selectedRegion,
  setSelectedRegion,
  regions,
}) => {
  return (
    <div className="region-tabs">
      {regions.map((r) => (
        <button
          key={r}
          onClick={() => setSelectedRegion(r)}
          className={`region-tab ${selectedRegion === r ? "active" : ""}`}
        >
          {r}
        </button>
      ))}
    </div>
  );
};

export default RegionTabs;
