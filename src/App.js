import { useState } from "react";
import Map from "./components/Map";
import InfoSection from "./components/InfoSection";
import NavbarLogo from "./assets/mapquito-logo.png";
import dengueData from "./data/dengue-cases-misocc.json";

function App() {
  const [muncity, setMuncity] = useState("");
  const [province, setProvince] = useState("");
  const [year, setYear] = useState("All");
  const [muncityCasesCount, setMuncityCasesCount] = useState(0);

  return (
    <>
      <div className="flex flex-col justify-start items-start bg-gray-100 h-screen w-full">
        <div className="bg-gray-900 md:px-5 px-3 py-4 w-full">
          <img src={NavbarLogo} className="w-36" alt="Navbar Logo" />
        </div>
        <div className="flex-1 flex md:flex-row flex-col justify-start items-start h-full w-full">
          <div className="relative bg-white md:h-full h-500 xl:w-3/4 lg:w-2/3 md:w-2/3 w-full overflow-hidden">
            <Map
              muncity={muncity}
              setMuncity={setMuncity}
              setProvince={setProvince}
              dengueData={dengueData.data}
              setMuncityCasesCount={setMuncityCasesCount}
              year={year}
            />
          </div>
          <div className="flex flex-col bg-white h-full xl:w-1/4 lg:w-1/3 md:w-1/3 w-full rounded-b-xl rounded-t-none p-3 md:overflow-y-scroll overflow-auto">
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
