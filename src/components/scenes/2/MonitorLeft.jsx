import { useContext, useEffect, useState } from "react";
import ActContext from "../../theater/ActContext";

import { motion } from "framer-motion";

import Gradient from "./gradient.mp4";
import IdentityVideo from "./digital-identity-background.mp4";
import MarketingDigital from "./MarketingDigital";
import IdentidadVirtual from "./IdentidadVirtual";

const Monitor = () => {
  // Animation variants for Framer Motion
  const variants = {
    enter: { opacity: 0, x: -100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  const { currentAct } = useContext(ActContext);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [Gradient, IdentityVideo];

  useEffect(() => {
    if (currentAct === 4) {
      setCurrentVideoIndex(0);
    }
    if (currentAct === 5) {
      setCurrentVideoIndex(1);
    }
  }, [currentAct]);

  return (
    <div className="monitor-wrapper">
      <motion.video
        key={videos[currentVideoIndex]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        width="100%"
        height="100%"
        autoPlay
        muted
        loop
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
      </motion.video>
      <motion.div
        key="marketing"
        variants={variants}
        initial="enter"
        animate={currentAct === 4 ? "center" : "exit"}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {currentAct === 4 && <MarketingDigital />}
      </motion.div>
      <motion.div
        key="identidad"
        variants={variants}
        initial="enter"
        animate={currentAct === 5 || currentAct === 6 ? "center" : "exit"}
        transition={{ duration: 0.5 }}
      >
        {(currentAct === 5 || currentAct === 6) && <IdentidadVirtual />}
      </motion.div>
    </div>
  );
};

export default Monitor;
