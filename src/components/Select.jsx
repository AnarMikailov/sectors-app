import React from "react";
import { useSectorContext } from "../context/SectorsContext";

const Select = () => {
  const { headingOptions, handleSectorChange, selectedSectorOptions } =
    useSectorContext();
  return (
    <div>
      <label>Select a Heading:</label>
      <select
        value={selectedSectorOptions}
        onChange={handleSectorChange}
        name="sector_name"
      >
        <option>Select Heading</option>
        {headingOptions}
      </select>
    </div>
  );
};

export default Select;
