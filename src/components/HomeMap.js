import React from "react";
import Map from "./home/Map";
import Info from "./home/Info";
import MapFilters from "./home/MapFilters";
import MapAbout from "./home/MapAbout";
import Navbar from "./Navbar";

const HomeMap = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-start bg-gray-100 h-screen w-full">
        <Navbar />
        <div
          className="flex md:flex-row flex-col justify-start items-start w-full"
          style={{ height: "calc(100% - 64px)" }}
        >
          <div className="relative bg-white md:h-full h-1/2 xl:w-3/4 md:w-2/3 w-full overflow-hidden">
            <Map />
            <MapFilters />
            <MapAbout />
          </div>
          <div className="flex flex-col bg-white md:h-full h-1/2 xl:w-1/4 md:w-1/3 w-full rounded-b-xl rounded-t-none p-3 overflow-y-scroll">
            <Info />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMap;
