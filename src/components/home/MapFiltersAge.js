import React, { useContext } from "react";
import { MapFilterContext } from "../../context/MapFilterContext";
import { MapContext } from "../../context/MapContext";

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
  const { refreshMap } = useContext(MapContext);

  const handleAgeCheckChange = (checkAgeValue, setCheckAgeValue) => {
    setCheckAgeValue(!checkAgeValue);
    refreshMap();
  };

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
            onChange={() =>
              handleAgeCheckChange(ageCheckChildren, setAgeCheckChildren)
            }
          />
          <span className="ml-2">Children (00-14 years)</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={ageCheckYouth}
            onChange={() =>
              handleAgeCheckChange(ageCheckYouth, setAgeCheckYouth)
            }
          />
          <span className="ml-2">Youth (15-24 years)</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={ageCheckAdults}
            onChange={() =>
              handleAgeCheckChange(ageCheckAdults, setAgeCheckAdults)
            }
          />
          <span className="ml-2">Adults (25-64 years)</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={ageCheckSeniors}
            onChange={() =>
              handleAgeCheckChange(ageCheckSeniors, setAgeCheckSeniors)
            }
          />
          <span className="ml-2">Seniors (65 years and over)</span>
        </label>
      </div>
    </>
  );
};

export default MapFiltersAge;
