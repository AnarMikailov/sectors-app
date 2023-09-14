import React from "react";
import { Link } from "react-router-dom";
import UserItem from "./UserItem";
const UserList = () => {
  return (
    <div>
      <Link to="/">
        <button>+ Add User</button>
      </Link>
      <UserItem />
    </div>
  );
};

export default UserList;
