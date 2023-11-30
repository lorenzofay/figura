import { useContext, useEffect, useState } from "react";
import ActContext from "../../theater/ActContext";

import { motion } from "framer-motion";

import PlanetVideo from "./planet.mp4";
import IdentityVideo from "./digital-identity-background.mp4";

const Monitor = () => {
  const { currentAct } = useContext(ActContext);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [PlanetVideo, IdentityVideo];

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
        <h3>HOLEEEEE</h3>
        <source src={videos[currentVideoIndex]} type="video/mp4" />
      </motion.video>
    </div>
  );
};

export default Monitor;
