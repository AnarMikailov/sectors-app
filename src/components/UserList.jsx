import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserItem from "./UserItem";
import { useSectorContext } from "../context/SectorsContext";

const UserList = () => {
  const { userList } = useSectorContext();
  const [editingItemId, setEditingItemId] = useState(null);

  // Function to toggle editing for a specific item
  const toggleEditing = (itemId) => {
    setEditingItemId((prevId) => (prevId === itemId ? null : itemId));
  };

  return (
    <div>
      <Link to="/">
        <button>+ Add User</button>
      </Link>
      {userList.map((user) => (
        <UserItem
          name={user.name}
          category={user.category}
          sector_name={user.sector_name}
          key={user.id}
          id={user.id}
          isEditing={user.id === editingItemId} // Check if this item is being edited
          toggleEditing={() => toggleEditing(user.id)} // Pass the toggleEditing function
        />
      ))}
    </div>
  );
};

export default UserList;
