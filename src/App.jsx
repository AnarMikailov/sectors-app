import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
function App() {
  const [sectors, setSectors] = useState([]);
  const sectorCollectionsRef = collection(db, "Sectors");
  useEffect(() => {
    const getSectors = async () => {
      const data = await getDocs(sectorCollectionsRef);
      setSectors(...data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(sectors.sectors);
    };
    getSectors();
  }, []);

  return <div className="App"></div>;
}

export default App;
