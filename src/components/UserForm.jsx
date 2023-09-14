import React, { useState } from "react";
import Select from "./Select";

const UserForm = ({ sectors }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const selectedSector = sectors.find(
    (sector) => sector.category === selectedCategory
  );

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const categoryOptions = sectors.map((sector) => (
    <option key={sector.value}>{sector.category}</option>
  ));

  return (
    <>
      <input type="text" required placeholder="Your name" />
      <div>
        <label>Select a Category:</label>
        <select
          name="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option>Select Category</option>
          {categoryOptions}
        </select>
      </div>
      {selectedCategory && <Select headings={selectedSector.headings} />}
      <input type="checkbox" required name="Agree to terms" id="" />
      <span>Agree to terms</span>
      <button type="submit">Save</button>
    </>
  );
};

export default UserForm;
