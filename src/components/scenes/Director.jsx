import { useNavigation } from "../theater/hooks";
import { useContext, useEffect } from "react";
import ActContext from "../theater/ActContext";

const Director = ({ children }) => {
  const { currentAct, play } = useContext(ActContext);
  useNavigation(play);

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
      case 4:
        scrollToScene("scene2");
        break;
      case 6:
        scrollToScene("scene2");
        break;
      case 7:
        scrollToScene("scene3");
        break;
      case 8:
        scrollToScene("scene4");
        break;
      default:
        break;
    }
  }, [currentAct]);

  return <div className="director">{children}</div>;
};

export default Director;
