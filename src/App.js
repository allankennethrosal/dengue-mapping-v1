import { useState } from "react";
import Map from "./components/Map";
import InfoSection from "./components/InfoSection";
import NavbarLogo from "./assets/mapquito-logo.png";
import MapControls from "./components/MapControls";
import dengueData from "./data/dengue-cases-misocc.json";

function App() {
  const [muncity, setMuncity] = useState("");
  const [province, setProvince] = useState("");
  const [year, setYear] = useState("All");
  const [muncityCasesCount, setMuncityCasesCount] = useState(0);

  return (
    <>
      <div className="flex flex-col justify-start items-start bg-gray-100 h-screen w-full">
        <div className="bg-gray-900 md:px-5 px-3 py-4 w-full border-b-2 border-gray-200">
          <img src={NavbarLogo} className="w-36" alt="Navbar Logo" />
        </div>
        <div className="flex-1 flex md:flex-row flex-col justify-start items-start h-full w-full p-3 md:container md:mx-auto">
          <div className="relative bg-white md:h-full h-500 md:w-1/2 w-full rounded-t-xl rounded-b-none md:rounded-l-xl md:rounded-r-none border-2 border-gray-200 overflow-hidden">
            <Map
              muncity={muncity}
              setMuncity={setMuncity}
              setProvince={setProvince}
              dengueData={dengueData.data}
              setMuncityCasesCount={setMuncityCasesCount}
              year={year}
            />
            <MapControls year={year} setYear={setYear} />
          </div>
          <div className="flex flex-col bg-white h-full md:w-1/2 w-full rounded-b-xl rounded-t-none md:rounded-r-xl md:rounded-l-none border-2 border-gray-200 p-3 md:overflow-y-scroll overflow-auto">
            <InfoSection
              location={{
                muncity,
                province
              }}
              muncityCasesCount={muncityCasesCount}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
