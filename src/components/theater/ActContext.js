import React from "react";

const ActContext = React.createContext({
  currentAct: 1,
  setCurrentAct: () => {},
  play: true,
  setPlay: () => {},
});

export default ActContext;
