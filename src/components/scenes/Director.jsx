import { useScrollDirection } from "../theater/hooks";
import { useContext, useEffect } from "react";
import ActContext from "../theater/ActContext";

const Director = ({ children }) => {
  useScrollDirection();
  const { currentAct } = useContext(ActContext);

  useEffect(() => {
    const scrollToScene = (sceneId) => {
      const sceneElement = document.getElementById(sceneId);
      if (sceneElement) {
        sceneElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    console.log("Current Act", currentAct);
    switch (currentAct) {
      case 1:
        scrollToScene("scene1");
        break;
      case 3:
        scrollToScene("scene1");
        break;
      // Add more cases as needed
      case 4:
        scrollToScene("scene2");
        break;
      default:
        // Default case if needed
        break;
    }
  }, [currentAct]);

  return <div className="director">{children}</div>;
};

export default Director;
