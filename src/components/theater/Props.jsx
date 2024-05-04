import { useContext } from "react";
import { motion } from "framer-motion";
import FiguraSculpture from "./media/FiguraSculpture.png";
import ActContext from "./ActContext";
import "./props.css";
import EmailIcon from "./media/EmailIcon.svg";
import WhatsAppIcon from "./media/WhatsAppIcon.svg";
import EmailPopUp from "../popUp/EmailPopUp";

const Props = () => {
  const { currentAct, setPlay } = useContext(ActContext);

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="props">
      <motion.div
        className="contact-icons"
        initial="hidden"
        animate="visible"
        variants={iconVariants}
      >
        <EmailPopUp
          img={EmailIcon}
          alt={"E-mail icon"}
          className={"contact-icon"}
          setPlay={setPlay}
        />
        <a
          href="https://wa.me/5493489673751"
          target="_blank"
          rel="noopener noreferer noreferrer"
          title="Ir al chat"
        >
          <img
            src={WhatsAppIcon}
            alt="WhatsApp icon"
            className="whatsApp-icon contact-icon"
          />
        </a>
      </motion.div>
      <motion.img
        src={FiguraSculpture}
        alt="Logo Sculpture"
        className={`sculpture-figura ${
          currentAct <= 3 ? "" : "sculpture-position-act-4"
        }`}
      />
    </div>
  );
};

export default Props;
