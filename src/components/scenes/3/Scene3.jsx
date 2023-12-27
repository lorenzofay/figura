import { useContext } from "react";
import { motion } from "framer-motion";
import ActContext from "../../theater/ActContext";
import "./scene3.css";
import Nosotros from "./Nosotros";
import HuellaSculpture from "./HuellaSculpture.png";

const Scene3 = () => {
  const { currentAct } = useContext(ActContext);

  const variants = {
    enter: { opacity: 0, x: -100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };
  return (
    <div id="scene3">
      {(currentAct === 6 || currentAct === 7 || currentAct === 8) && (
        <motion.img
          src={HuellaSculpture}
          alt="Huella Sculpture"
          className={`sculpture-huella sculpture-position-act-7`}
        />
      )}
      <motion.div
        key="nosotros"
        variants={variants}
        initial="enter"
        animate={currentAct === 7 ? "center" : "exit"}
        transition={{ duration: 1 }}
      >
        {(currentAct === 7 || currentAct === 8) && <Nosotros />}
      </motion.div>
    </div>
  );
};

export default Scene3;
