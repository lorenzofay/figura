import { useContext, useEffect, useState } from "react";
import ActContext from "../../theater/ActContext";

import { motion } from "framer-motion";

import PlanetVideo from "./planet.mp4";
import BrandingVideo from "./branding.mp4";
import DesarrolloWeb from "./DesarrolloWeb";
import Branding from "./Branding";

const Monitor = () => {
  // Animation variants for Framer Motion
  const variants = {
    enter: { opacity: 0, x: -100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  const { currentAct } = useContext(ActContext);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [PlanetVideo, BrandingVideo];

  useEffect(() => {
    if (currentAct === 4 || currentAct === 5) {
      setCurrentVideoIndex(0);
    }
    if (currentAct === 6) {
      setCurrentVideoIndex(1);
    }
  }, [currentAct]);

  return (
    <div className="monitor-wrapper">
      <motion.video
        key={videos[currentVideoIndex]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        width="100%"
        height="100%"
        autoPlay
        muted
        loop
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
      </motion.video>
      <motion.div
        key="desarrollo"
        variants={variants}
        initial="enter"
        animate={currentAct === 4 || currentAct === 5 ? "center" : "exit"}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {(currentAct === 4 || currentAct === 5) && <DesarrolloWeb />}
      </motion.div>
      <motion.div
        key="branding"
        variants={variants}
        initial="enter"
        animate={currentAct === 6 ? "center" : "exit"}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {currentAct === 6 && <Branding />}
      </motion.div>
    </div>
  );
};

export default Monitor;
