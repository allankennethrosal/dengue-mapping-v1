import React, { useState, createContext } from "react";

export const MapFilterContext = createContext();

export const MapFilterProvider = props => {
  const [ageCheckChildren, setAgeCheckChildren] = useState(true);
  const [ageCheckYouth, setAgeCheckYouth] = useState(true);
  const [ageCheckAdults, setAgeCheckAdults] = useState(true);
  const [ageCheckSeniors, setAgeCheckSeniors] = useState(true);
  const [maleCheck, setMaleCheck] = useState(true);
  const [femaleCheck, setFemaleCheck] = useState(true);

  return (
    <MapFilterContext.Provider
      value={{
        ageCheckChildren,
        setAgeCheckChildren,
        ageCheckYouth,
        setAgeCheckYouth,
        ageCheckAdults,
        setAgeCheckAdults,
        ageCheckSeniors,
        setAgeCheckSeniors,
        maleCheck,
        setMaleCheck,
        femaleCheck,
        setFemaleCheck
      }}
    >
      {props.children}
    </MapFilterContext.Provider>
  );
};
