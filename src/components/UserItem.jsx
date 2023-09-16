import React, { useState } from "react";
import { useSectorContext } from "../context/SectorsContext";
import { Link } from "react-router-dom";

const UserItem = ({
  name,
  sector_name,
  category,
  id,
  isEditing,
  toggleEditing,
}) => {
  const {
    categoryOptions,
    handleEditUser,
    handleEditCategoryChange,
    handleEditSectorChange,
    handleEditInputChange,
    editedUserInfo,
    editedCategory,
    editedSectorOptions,
    editedheadingOptions,
    setEditedUserInfo,
    handleDeleteUser,
  } = useSectorContext();

  const handleEditClick = () => {
    console.log(name, sector_name, category);
    setEditedUserInfo({
      name: name,
      category: category,
      sector_name: sector_name,
    });
    toggleEditing(id);
  };

  const handleSaveClick = (id) => {
    if (
      editedUserInfo.name.trim() === "" ||
      editedUserInfo.category === "Select Category" ||
      editedUserInfo.sector_name === "Select Heading"
    ) {
      // Display an error message or perform some action to inform the user that fields are empty or not properly selected
      return;
    }

    handleEditUser(id);
    toggleEditing(id);
  };

  return (
    <>
      {isEditing ? (
        <div>
          <label>Name:</label>
          <input
            onChange={handleEditInputChange}
            type="text"
            required
            placeholder="Your name"
            value={editedUserInfo.name}
          />
          <div>
            <label>Select a Category:</label>
            <select
              name="category"
              value={editedUserInfo.category}
              onChange={handleEditCategoryChange}
            >
              <option>Select Category</option>
              {categoryOptions}
            </select>
          </div>
          <div>
            <label>Select a Heading:</label>
            <select
              value={editedUserInfo.sector_name}
              onChange={handleEditSectorChange}
              name="sector_name"
            >
              <option>Select Heading</option>
              {editedheadingOptions}
            </select>
          </div>
          <button onClick={toggleEditing}>Cancel</button>
          <button onClick={() => handleSaveClick(id)}>Save Changes</button>
        </div>
      ) : (
        <div>
          <h3>Name</h3> <p>{name}</p>
          <h3>Category</h3> <p>{category}</p>
          <h3>Sector</h3> <p>{sector_name}</p>
          <button type="button" onClick={() => handleDeleteUser(id)}>
            Delete
          </button>
          <button type="button" onClick={handleEditClick}>
            Edit
          </button>
        </div>
      )}
    </>
  );
};

export default UserItem;
