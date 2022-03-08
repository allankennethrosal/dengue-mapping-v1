import React, { useContext } from "react";
import { MapFilterContext } from "../../context/MapFilterContext";

const MapFiltersAge = () => {
  const {
    ageCheckChildren,
    setAgeCheckChildren,
    ageCheckYouth,
    setAgeCheckYouth,
    ageCheckAdults,
    setAgeCheckAdults,
    ageCheckSeniors,
    setAgeCheckSeniors
  } = useContext(MapFilterContext);

  return (
    <>
      <div className="flex flex-col bg-gray-100 p-3 rounded-lg">
        <label className="pb-2 mb-2 border-b-2 border-gray-300">
          Age Group
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={ageCheckChildren}
            onChange={() => setAgeCheckChildren(!ageCheckChildren)}
          />
          <span className="ml-2">Children (00-14 years)</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={ageCheckYouth}
            onChange={() => setAgeCheckYouth(!ageCheckYouth)}
          />
          <span className="ml-2">Youth (15-24 years)</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={ageCheckAdults}
            onChange={() => setAgeCheckAdults(!ageCheckAdults)}
          />
          <span className="ml-2">Adults (25-64 years)</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={ageCheckSeniors}
            onChange={() => setAgeCheckSeniors(!ageCheckSeniors)}
          />
          <span className="ml-2">Seniors (65 years and over)</span>
        </label>
      </div>
    </>
  );
};

export default MapFiltersAge;
