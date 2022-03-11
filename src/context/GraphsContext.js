import React, { useState, createContext } from "react";

export const GraphsContext = createContext();

export const MapFilterProvider = props => {
  const [selectedMuncity, setSelectedMuncity] = useState("");

  return (
    <GraphsContext.Provider
      value={{
        selectedMuncity,
        setSelectedMuncity
      }}
    >
      {props.children}
    </GraphsContext.Provider>
  );
};
