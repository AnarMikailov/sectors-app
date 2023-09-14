import React, { useEffect, useState } from "react";
import { useSectorContext } from "./context/SectorsContext";
// import { db } from "./utils/firebase";
// import { collection, getDocs } from "firebase/firestore";
import { mockData } from "./data/mockdata";
import AddUser from "./components/UserForm";
function App() {
  const { a } = useSectorContext();
  // console.log(first);
  const [sectors, setSectors] = useState([]);
  // const sectorCollectionsRef = collection(db, "Sectors");
  useEffect(() => {
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
    getSectors();
  }, []);
  // console.log(sectors[1].headings);
  return (
    <div className="App">
      <AddUser sectors={sectors} />
    </div>
  );
}

export default App;
