import { createContext, useContext, useState } from "react";
import { mockData } from "../data/mockdata";
const SectorContext = createContext();

export const ContextProvider = ({ children }) => {
  const [sectors, setSectors] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSectorOptions, setSelectedSectorOptions] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    id: "",
    category: "",
    sector_name: "",
  });

  const selectedSector = sectors.find(
    (sector) => sector.category === selectedCategory
  );

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setUserInfo((prev) => ({ ...prev, category: event.target.value }));
  };
  const handleSectorChange = (event) => {
    setSelectedSectorOptions(event.target.value);
    // setUserInfo((prev) => ({ ...prev, sector_name: event.target.value }));
    console.log(selectedSectorOptions);
  };
  console.log(userInfo);
  const categoryOptions = sectors.map((sector) => (
    <option key={sector.value}>{sector.category}</option>
  ));

  const headingOptions = selectedSector?.headings.map((heading) => (
    <option key={heading.value} value={heading.value}>
      {heading.label}
    </option>
  ));
  // console.log(selectedSector?.headings);
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

  const inputChangeHandler = (value) => {};
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
      }}
    >
      {children}
    </SectorContext.Provider>
  );
};

export const useSectorContext = () => useContext(SectorContext);
