import React, { useContext } from "react";
import { MapFilterContext } from "../../context/MapFilterContext";
import { MapContext } from "../../context/MapContext";

const MapFiltersGender = () => {
  const { maleCheck, setMaleCheck, femaleCheck, setFemaleCheck } = useContext(
    MapFilterContext
  );
  const { refreshMap } = useContext(MapContext);
  const handleGenderCheckChange = (genderCheck, setGenderCheck) => {
    setGenderCheck(!genderCheck);
    refreshMap();
  };

  return (
    <>
      <div className="flex flex-col bg-gray-100 p-3 rounded-lg">
        <label className="pb-2 mb-2 border-b-2 border-gray-300">Sex</label>
        <div className="inline-flex items-center">
          <label className="inline-flex items-center mr-5">
            <input
              type="checkbox"
              checked={maleCheck}
              onChange={() => handleGenderCheckChange(maleCheck, setMaleCheck)}
            />
            <span className="ml-2">Male</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={femaleCheck}
              onChange={() =>
                handleGenderCheckChange(femaleCheck, setFemaleCheck)
              }
            />
            <span className="ml-2">Female</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default MapFiltersGender;
