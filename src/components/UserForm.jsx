import React, { useState } from "react";
import Select from "./Select";
import { useSectorContext } from "../context/SectorsContext";
import { Link } from "react-router-dom";

const UserForm = () => {
  const { selectedCategory, handleCategoryChange, categoryOptions } =
    useSectorContext();
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
      {selectedCategory && <Select />}
      <input type="checkbox" required />
      <span>Agree to terms</span>
      <Link to="/users">
        <button>Save</button>
      </Link>
    </>
  );
};

export default UserForm;
