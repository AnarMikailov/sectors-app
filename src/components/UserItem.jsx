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
    headingOptions,
    selectedCategory,
  } = useSectorContext();

  const handleEditClick = () => {
    toggleEditing(id);
  };
  // Check if the name field, category, and checkbox are filled/selected
  const handleSaveClick = (id) => {
    if (
      editedUserInfo.name.trim() === "" ||
      !editedCategory ||
      !editedSectorOptions
    )
      return;
    // addUser()
    handleEditUser(id);
    toggleEditing(id);
  };
  // const filteredHeadingOptions = selectedCategory
  //   ? headingOptions.filter((heading) => heading.props.id === selectedCategory)
  //   : editedCategory;
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
            value={editedUserInfo.name} // Populate with user's current name
          />
          <div>
            <label>Select a Category:</label>
            <select
              name="category"
              value={editedCategory}
              onChange={handleEditCategoryChange}
            >
              <option>Select Category</option>
              {categoryOptions}
            </select>
          </div>
          <div>
            <label>Select a Heading:</label>
            <select
              value={editedSectorOptions}
              onChange={handleEditSectorChange}
              name="sector_name"
            >
              <option>Select Heading</option>
              {headingOptions.map((option) => (
                <option key={option.props.value} value={option.props.value}>
                  {option.props.children}
                </option>
              ))}
            </select>
          </div>
          <button onClick={toggleEditing}>Cancel</button>
          <button
            onClick={() => {
              handleSaveClick(id);
            }}
          >
            Save Changes
          </button>
        </div>
      ) : (
        <div>
          <h3>Name</h3> <p>{name}</p>
          <h3>Category</h3> <p>{category}</p>
          <h3>Sector</h3> <p>{sector_name}</p>
          <button
            type="button"
            // onClick={() => handleDeleteUser(id)}
          >
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
