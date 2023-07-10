import "./App.css";

import { Theater } from "./components/theater/Theater";
import { FirstScene } from "./components/firstScene/FirstScene";
import { SecondScene } from "./components/secondScene/SecondScene";
import { ThirdScene } from "./components/thirdScene/ThirdScene";
import { FourthScene } from "./components/fourthScene/FourthScene";

export const App = () => {
  return (
    <Theater>
      <FirstScene />
      <SecondScene />
      <ThirdScene />
      <FourthScene />
    </Theater>
  );
};

