import { useContext, useEffect, useRef } from "react";
import ActContext from "./ActContext";

export const useScrollDirection = () => {
  const { currentAct, setCurrentAct } = useContext(ActContext);
  const debounceTimer = useRef(null);
  const touchStart = useRef(0);
  const MAX_ACTS = 9;

  const debounce = (func, delay) => {
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(func, delay);
  };

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    const handleScroll = (deltaY) => {
      if (deltaY > 0) {
        setCurrentAct((current) => Math.min(current + 1, MAX_ACTS));
      } else if (deltaY < 0 && currentAct > 1) {
        setCurrentAct((current) => current - 1);
      }
    };

    const handleWheel = (e) => {
      if (e.deltaMode === 0) {
        // Smooth scrolling, likely a trackpad
        debounce(() => handleScroll(e.deltaY), 50);
      } else {
        // Normal mouse wheel event
        debounce(() => handleScroll(e.deltaY), 150);
      }
    };

    const handleKeyPress = (e) => {
      if (e.key === "ArrowUp" && currentAct > 1) {
        setCurrentAct((current) => current - 1);
      } else if (e.key === "ArrowDown") {
        setCurrentAct((current) => Math.min(current + 1, MAX_ACTS));
      }
    };

    const handleTouchMove = (e) => {
      const touchEnd = e.changedTouches[0].clientY;
      if (touchStart.current > touchEnd + 5) {
        setCurrentAct((current) => Math.min(current + 1, MAX_ACTS));
      } else if (touchStart.current < touchEnd - 5 && currentAct > 1) {
        setCurrentAct((current) => current - 1);
      }
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("touchmove", handleTouchMove);
      clearTimeout(debounceTimer.current);
    };
  }, [currentAct, setCurrentAct]);
};
