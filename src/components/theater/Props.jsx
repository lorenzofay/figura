import { useContext } from "react";
import { motion } from "framer-motion";
import FiguraSculpture from "./media/FiguraSculpture.png";
import ActContext from "./ActContext";
import "./props.css";

import EmailIcon from "./media/EmailIcon.svg";
import WhatsAppIcon from "./media/WhatsAppIcon.svg";

const Props = () => {
  const { currentAct } = useContext(ActContext);

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="props">
      <motion.img
        src={FiguraSculpture}
        alt="Logo Sculpture"
        className={`sculpture figura-sculpture ${
          currentAct <= 3 ? "" : "sculpture-position-act-4"
        }`}
      />
      <motion.div
        className="contact-icons"
        initial="hidden"
        animate="visible"
        variants={iconVariants}
      >
        <img
          src={EmailIcon}
          alt="Email icon"
          className="email-icon contact-icon"
        />
        <img
          src={WhatsAppIcon}
          alt="WhatsApp icon"
          className="whatsApp-icon contact-icon"
        />
      </motion.div>
    </div>
  );
};

export default Props;
