import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "./Select";
import { useSectorContext } from "../context/SectorsContext";
import "../components/UserForm.css"; // Import your CSS file for additional styling

const UserForm = ({ notify }) => {
  const navigateTo = useNavigate();
  const {
    selectedCategory,
    handleCategoryChange,
    categoryOptions,
    handleInputChange,
    addUser,
    userInfo,
    setUserInfo,
    selectedSectorOptions,
    isValid,
    setIsValid,
    isChecked,
    setIsChecked,
  } = useSectorContext();

  const checkCheckboxState = () => {
    setIsChecked(!isChecked);
  };

  const handleSaveClick = () => {
    if (
      userInfo.name.trim() === "" ||
      selectedCategory === "Select Category" ||
      !selectedSectorOptions ||
      !isChecked
    ) {
      notify();
    } else {
      addUser();

      navigateTo("/users");
    }
  };

  return (
    <div className="user-form-container">
      <h2>User Form</h2>
      <div className="form">
        <label> Your Name*</label>
        <input
          className={`user-form-input ${
            !isValid && userInfo.name === "" ? "error" : ""
          }`}
          onChange={handleInputChange}
          type="text"
          value={userInfo.name}
        />
        <label>Select a Category*</label>
        <select
          className={`category-select ${
            !isValid && userInfo.category === "" ? "error" : ""
          }`}
          name="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option>Select Category</option>
          {categoryOptions}
        </select>
      </div>
      {selectedCategory && (
        <>
          <Select />
          <div className="checkbox-container">
            <input
              className="checkbox-input"
              onChange={checkCheckboxState}
              type="checkbox"
            />
            <span
              className={`${!isValid && !isChecked ? "error-bottom " : ""}`}
            >
              Agree to terms*
            </span>
          </div>
        </>
      )}
      <button className="submit-button" onClick={handleSaveClick}>
        Save
      </button>
    </div>
  );
};

export default UserForm;
