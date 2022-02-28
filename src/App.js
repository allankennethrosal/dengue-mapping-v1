import { useState } from "react";
import Map from "./components/Map";
import InfoSection from "./components/InfoSection";
import NavbarLogo from "./assets/mapquito-logo.png";
import MapFilters from "./components/MapFilters";
import dengueData from "./data/dengue-cases-misocc.json";
import MapAbout from "./components/MapAbout";

function App() {
  const [muncity, setMuncity] = useState("");
  const [province, setProvince] = useState("");
  const [year, setYear] = useState("All");
  const [muncityCasesCount, setMuncityCasesCount] = useState(0);

  return (
    <>
      <div className="flex flex-col justify-start items-start bg-gray-100 h-screen w-full">
        <div
          className="flex justify-between items-center bg-gray-900 md:px-5 px-3 py-4 w-full"
          style={{ height: 64 }}
        >
          <img src={NavbarLogo} className="w-36" alt="Navbar Logo" />
        </div>
        <div
          className="flex md:flex-row flex-col justify-start items-start w-full"
          style={{ height: "calc(100% - 64px)" }}
        >
          <div className="relative bg-white md:h-full h-1/2 xl:w-3/4 md:w-2/3 w-full overflow-hidden">
            <Map
              muncity={muncity}
              setMuncity={setMuncity}
              setProvince={setProvince}
              dengueData={dengueData.data}
              setMuncityCasesCount={setMuncityCasesCount}
              year={year}
            />
            <MapFilters />
            <MapAbout />
          </div>
          <div className="flex flex-col bg-white md:h-full h-1/2 xl:w-1/4 md:w-1/3 w-full rounded-b-xl rounded-t-none p-3 overflow-y-scroll">
            <InfoSection
              location={{
                muncity,
                province
              }}
              muncityCasesCount={muncityCasesCount}
              year={year}
              setYear={setYear}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
