import { useContext, useEffect, useState } from "react";
import ActContext from "../../theater/ActContext";

import { motion } from "framer-motion";

import Gradient from "./gradient.mp4";
import BrandingVideo from "./branding.mp4";

const Monitor = () => {
  const { currentAct } = useContext(ActContext);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [Gradient, BrandingVideo];

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
        transition={{ duration: 1 }}
        width="100%"
        height="100%"
        autoPlay
        muted
        loop
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
      </motion.video>
    </div>
  );
};

export default Monitor;
