import { useContext, useEffect, useRef } from "react";
import ActContext from "./ActContext";

export const useScrollDirection = () => {
  const { currentAct, setCurrentAct } = useContext(ActContext);
  const debounceTimer = useRef(null);

  useEffect(() => {
    // Disable scrolling on mount
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    const handleWheel = (e) => {
      clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(() => {
        if (e.deltaY > 0) {
          // Scrolling down
          setCurrentAct((current) => current + 1);
        } else if (e.deltaY < 0 && currentAct > 1) {
          // Scrolling up
          setCurrentAct((current) => current - 1);
        }
      }, 150);
    };

    const handleKeyPress = (e) => {
      if (e.key === "ArrowUp" && currentAct > 1) {
        setCurrentAct((current) => current - 1);
      } else if (e.key === "ArrowDown") {
        setCurrentAct((current) => current + 1);
      }
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      // Re-enable scrolling on cleanup
      document.body.style.overflow = originalStyle;

      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyPress);
      clearTimeout(debounceTimer.current);
    };
  }, [currentAct, setCurrentAct]);

  // No return needed as act is managed via context
};
