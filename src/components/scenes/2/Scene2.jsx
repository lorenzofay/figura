import { useContext } from "react";
import ActContext from "../../theater/ActContext";

import "./Scene2.css";
import Panel from "./Panel";

const Scene2 = () => {
  const { currentAct } = useContext(ActContext);
  return <div id="scene2">{currentAct === 4 && <Panel />}</div>;
};

export default Scene2;
