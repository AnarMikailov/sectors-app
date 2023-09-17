import React from "react";
import UserList from "../components/UserList";
import toast, { Toaster } from "react-hot-toast";
const Users = () => {
  return (
    <>
      <Toaster />
      <UserList />
    </>
  );
};

export default Users;
