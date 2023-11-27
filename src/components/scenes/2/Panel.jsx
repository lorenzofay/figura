import { motion } from "framer-motion";
import MarmolPanel from "./marmol-screen.jpg";

const Panel = () => {
  const panelVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.5 },
    },
  };

  return (
    <div className="PanelContainer">
      <motion.img
        src={MarmolPanel}
        alt="Panel made of marmol"
        className="panel"
        variants={panelVariants}
        initial="hidden"
        animate="visible"
      />
    </div>
  );
};

export default Panel;
