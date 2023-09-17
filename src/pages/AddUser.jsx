import React from "react";
import UserForm from "../components/UserForm";
import "../pages/AddUser.css";
import toast, { Toaster } from "react-hot-toast";
import { useSectorContext } from "../context/SectorsContext";
const AddUser = () => {
  const { isValid, setIsValid } = useSectorContext();
  const notify = () => {
    toast.error("Please fill  all required fields!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setIsValid(false);
  };
  return (
    <>
      <Toaster />
      <div>
        <UserForm notify={notify} />
      </div>
    </>
  );
};

export default AddUser;
