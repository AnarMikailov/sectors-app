import { createContext, useContext, useState } from "react";
import { mockData } from "../data/mockdata";
const SectorContext = createContext();

export const ContextProvider = ({ children }) => {
  const [sectors, setSectors] = useState([]);
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
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <SectorContext.Provider
      value={{
        sectors,
        getSectors,
      }}
    >
      {children}
    </SectorContext.Provider>
  );
};

export const useSectorContext = () => useContext(SectorContext);
