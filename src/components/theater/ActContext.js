import React from "react";

const ActContext = React.createContext({
  currentAct: 1,
  setCurrentAct: () => {},
});

export default ActContext;
