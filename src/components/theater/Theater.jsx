import React, { useState, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./theater.css";
import ActContext from "./ActContext";
import Director from "../scenes/Director";
import Props from "./Props";

const FirstScene = React.lazy(() => import("../scenes/1/Scene1"));
const SecondScene = React.lazy(() => import("../scenes/2/Scene2"));
const ThirdScene = React.lazy(() => import("../scenes/3/Scene3"));
const FourthScene = React.lazy(() => import("../scenes/4/Scene4"));

export const Theater = () => {
  const [currentAct, setCurrentAct] = useState(1);
  const [play, setPlay] = useState(true);
  return (
    <div className="theater">
      <ActContext.Provider value={{ currentAct, setCurrentAct, play, setPlay }}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Props />
            <Director>
              <FirstScene />
              <SecondScene />
              <ThirdScene />
              <FourthScene />
            </Director>
          </Suspense>
        </Router>
      </ActContext.Provider>
    </div>
  );
};
