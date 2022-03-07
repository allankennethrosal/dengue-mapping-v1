import React, { useState } from "react";

const MapFiltersGender = () => {
  const [maleCheck, setMaleCheck] = useState(true);
  const [femaleCheck, setFemaleCheck] = useState(true);

  return (
    <>
      <div className="flex flex-col bg-gray-100 p-3 rounded-lg">
        <label className="pb-2 mb-2 border-b-2 border-gray-300">Sex</label>
        <div className="inline-flex items-center">
          <label className="inline-flex items-center mr-5">
            <input
              type="checkbox"
              checked={maleCheck}
              onChange={() => setMaleCheck(!maleCheck)}
            />
            <span className="ml-2">Male</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={femaleCheck}
              onChange={() => setFemaleCheck(!femaleCheck)}
            />
            <span className="ml-2">Female</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default MapFiltersGender;
