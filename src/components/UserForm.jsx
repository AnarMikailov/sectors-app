import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "./Select";
import { useSectorContext } from "../context/SectorsContext";

const UserForm = () => {
  const {
    selectedCategory,
    handleCategoryChange,
    categoryOptions,
    handleInputChange,
    addUser,
    userInfo,
    setUserInfo,
    selectedSectorOptions,
  } = useSectorContext();
  const [isChecked, setIsChecked] = useState(false);
  const navigateTo = useNavigate();
  const checkCheckboxState = () => {
    setIsChecked(!isChecked);
  };
  const handleSaveClick = () => {
    if (
      userInfo.name.trim() === "" ||
      !selectedCategory ||
      !selectedSectorOptions ||
      !isChecked
    )
      return;
    navigateTo("/users");
    setUserInfo({
      name: "",
      id: "",
      category: "",
      sector_name: "",
    });
    addUser();
  };
  return (
    <>
      <input
        onChange={handleInputChange}
        type="text"
        value={userInfo.name}
        placeholder="Your name"
      />
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
      <input onChange={checkCheckboxState} type="checkbox" />
      <span>Agree to terms</span>
      <button onClick={handleSaveClick}>Save</button>
    </>
  );
};

export default UserForm;
