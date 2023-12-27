import { useContext } from "react";
import { motion } from "framer-motion";
import ActContext from "../../theater/ActContext";
import "./scene4.css";
import HandSculpture from "./HandSculpture.png";
import Clientes from "./Clientes";

const Scene4 = () => {
  const { currentAct } = useContext(ActContext);

  const variants = {
    enter: { opacity: 0, x: -100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  return (
    <div id="scene4">
      {currentAct >= 6 && (
        <motion.img
          src={HandSculpture}
          alt="Hand Sculpture"
          className={`sculpture-hand ${
            currentAct <= 7 ? "" : "sculpture-position-act-8"
          } ${currentAct <= 8 ? "" : "sculpture-position-act-9"}
          }`}
        />
      )}
      <motion.div
        key="clientes"
        variants={variants}
        initial="enter"
        animate={currentAct === 8 ? "center" : "exit"}
        transition={{ duration: 1 }}
      >
        {(currentAct === 6 || currentAct === 7 || currentAct === 8) && (
          <Clientes />
        )}
      </motion.div>
    </div>
  );
};

export default Scene4;
