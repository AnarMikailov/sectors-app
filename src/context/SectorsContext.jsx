import { createContext, useContext, useState } from "react";
import { mockData } from "../data/mockdata";
import { db } from "../utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
const SectorContext = createContext();

export const ContextProvider = ({ children }) => {
  // const sectorCollectionsRef = collection(db, "Sectors");
  const userCollectionsRef = collection(db, "users");
  const [sectors, setSectors] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSectorOptions, setSelectedSectorOptions] = useState("");
  const [editedCategory, setEditedCategory] = useState("");
  const [editedSectorOptions, setEditedSectorOptions] = useState("");

  const [userInfo, setUserInfo] = useState({
    name: "",
    id: "",
    category: "",
    sector_name: "",
  });
  const [editedUserInfo, setEditedUserInfo] = useState({
    name: "",
    // id: "",
    category: "",
    sector_name: "",
  });

  const [userList, setUserList] = useState([]);

  //=========================================================
  // Fetching all categories and sectors from databse
  //=========================================================
  const getSectors = async () => {
    // const data = await getDocs(sectorCollectionsRef);
    // const fetchedSectros = [
    //   ...data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
    // ];
    // setSectors(fetchedSectros[0].sectors);
    // console.log(fetchedSectros[0].sectors);
    // console.log(mockData);
    // console.log(sectors);
    setSectors(mockData);
    // console.log(
    //   sectors.headings.map((heading) => console.log(heading.sector_name))
    // );
    // console.log(sectors)
  };

  //=========================================
  // Taking data from Form and adding it to userInfo State.And then we will send userInfo to database
  //=========================================================================================
  const selectedSector = sectors.find(
    (sector) => sector.category === selectedCategory
  );

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setUserInfo((prev) => ({
      ...prev,
      category: event.target.value,
    }));
  };
  const handleSectorChange = (event) => {
    setSelectedSectorOptions(event.target.value);
    setUserInfo((prev) => ({
      ...prev,
      sector_name: event.target.value,
      id: Math.random(),
    }));
  };
  const handleInputChange = (event) => {
    setUserInfo((prev) => ({
      ...prev,
      name: event.target.value,
    }));
  };
  const categoryOptions = sectors.map((sector) => (
    <option key={sector.value}>{sector.category}</option>
  ));

  const headingOptions = selectedSector?.headings.map((heading) => (
    <option key={heading.value} id={heading.value}>
      {heading.label}
    </option>
  ));

  //===============================================
  //Sending userInfo to Database
  //===============================================
  const addUser = async () => {
    await addDoc(userCollectionsRef, userInfo);
    fecthUsers();
  };
  //=====================================
  //Taking currentUsers from databse
  //=====================================
  const fecthUsers = async () => {
    const users = await getDocs(userCollectionsRef);
    const fetchedUsers = [
      ...users.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
    ];
    setUserList(fetchedUsers);
  };

  //================================
  // Updating User(Edit user)
  //================================

  const handleEditCategoryChange = (event) => {
    setEditedCategory(event.target.value);
    setEditedUserInfo((prev) => ({
      ...prev,
      category: event.target.value,
    }));
  };
  const handleEditSectorChange = (event) => {
    setEditedSectorOptions(event.target.value);
    setEditedUserInfo((prev) => ({
      ...prev,
      sector_name: event.target.value,
      // id: userInfo.id,
    }));
  };
  const handleEditInputChange = (event) => {
    setEditedUserInfo((prev) => ({
      ...prev,
      name: event.target.value,
    }));
  };

  const handleEditUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await updateDoc(userDoc, editedUserInfo);
    fecthUsers();
  };

  //===================================
  //Deleting Users
  //===================================
  const handleDeleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    fecthUsers();
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <SectorContext.Provider
      value={{
        sectors,
        getSectors,
        selectedSector,
        selectedCategory,
        handleCategoryChange,
        categoryOptions,
        headingOptions,
        handleSectorChange,
        selectedSectorOptions,
        handleInputChange,
        userInfo,
        setUserInfo,
        addUser,
        userList,
        handleEditUser,
        handleDeleteUser,
        handleEditCategoryChange,
        handleEditSectorChange,
        handleEditInputChange,
        editedUserInfo,
        editedCategory,
        editedSectorOptions,
      }}
    >
      {children}
    </SectorContext.Provider>
  );
};

export const useSectorContext = () => useContext(SectorContext);
