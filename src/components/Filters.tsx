import React from "react";

type Props = {
  types: string[];
  regions: string[];
  subregions: string[];
  diets: string[];
  filterType: string;
  filterRegion: string;
  filterSubregion: string;
  filterDiet: string;
  setFilterType: (val: string) => void;
  setFilterRegion: (val: string) => void;
  setFilterSubregion: (val: string) => void;
  setFilterDiet: (val: string) => void;
};

const Filters: React.FC<Props> = ({
  types,
  regions,
  subregions,
  diets,
  filterType,
  filterRegion,
  filterSubregion,
  filterDiet,
  setFilterType,
  setFilterRegion,
  setFilterSubregion,
  setFilterDiet,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Select
        label="Type"
        options={["All", ...types]}
        value={filterType}
        onChange={setFilterType}
      />
      <Select
        label="Region"
        options={["All", ...regions]}
        value={filterRegion}
        onChange={setFilterRegion}
      />
      {subregions.length > 0 && (
        <Select
          label="Subregion"
          options={["All", ...subregions]}
          value={filterSubregion}
          onChange={setFilterSubregion}
        />
      )}
      <Select
        label="Diet"
        options={["All", ...diets]}
        value={filterDiet}
        onChange={setFilterDiet}
      />
    </div>
  );
};

const Select: React.FC<{
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}> = ({ label, options, value, onChange }) => (
  <div className="flex flex-col">
    <label className="text-gray-300">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-2 py-1 rounded bg-slate-700 text-white border border-slate-600 focus:ring-2 focus:ring-blue-500"
    >
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);

export default Filters;
