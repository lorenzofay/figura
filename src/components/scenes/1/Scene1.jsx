import { useContext } from "react";
import { motion } from "framer-motion";
import ActContext from "../../theater/ActContext";
import Logo from "./Logo";
import Slogan from "./Slogan";
import Description from "./Description";
import "./scene1.css";

const Scene1 = () => {
  const { currentAct } = useContext(ActContext);

  // Animation variants for Framer Motion
  const variants = {
    enter: { opacity: 0, x: -100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  return (
    <div className="scene scene1" id="scene1">
      <motion.div
        key="logo"
        variants={variants}
        initial="enter"
        animate={currentAct === 1 ? "center" : "exit"}
        transition={{ duration: 1 }}
      >
        {currentAct === 1 && <Logo />}
      </motion.div>

      <motion.div
        key="slogan"
        variants={variants}
        initial="enter"
        animate={currentAct === 2 ? "center" : "exit"}
        transition={{ duration: 1 }}
      >
        {currentAct === 2 && <Slogan />}
      </motion.div>

      <motion.div
        key="description"
        variants={variants}
        initial="enter"
        animate={currentAct === 3 ? "center" : "exit"}
        transition={{ duration: 1 }}
      >
        {currentAct === 3 && <Description />}
      </motion.div>

      {/* Other static elements can be added here */}
    </div>
  );
};

export default Scene1;
