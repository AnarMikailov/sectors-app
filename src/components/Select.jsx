import React from "react";

const Select = ({ headings }) => {
  const headingOptions = headings.map((heading) => (
    <option key={heading.value} value={heading.value}>
      {heading.label}
    </option>
  ));

  return (
    <div>
      <label>Select a Heading:</label>
      <select name="sector_name">
        <option>Select Heading</option>
        {headingOptions}
      </select>
    </div>
  );
};

export default Select;
