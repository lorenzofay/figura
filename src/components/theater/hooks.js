import { useContext, useEffect, useRef } from "react";
import ActContext from "./ActContext";

export const useScrollDirection = () => {
  const { currentAct, setCurrentAct } = useContext(ActContext);
  const scrollEventTimestamp = useRef(0);
  const touchStartY = useRef(0);
  const MAX_ACTS = 9;
  const SCROLL_DETECTION_THRESHOLD = 150; // Time in milliseconds

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    const updateAct = (increment) => {
      setCurrentAct((current) =>
        Math.max(1, Math.min(current + increment, MAX_ACTS))
      );
    };

    const handleScrollEvent = (increment) => {
      const now = Date.now();
      if (now - scrollEventTimestamp.current > SCROLL_DETECTION_THRESHOLD) {
        updateAct(increment);
      }
      scrollEventTimestamp.current = now;
    };

    const handleWheel = (e) => {
      e.preventDefault();
      handleScrollEvent(Math.sign(e.deltaY));
    };

    const handleKeyPress = (e) => {
      if (e.key === "ArrowUp") {
        updateAct(-1);
      } else if (e.key === "ArrowDown") {
        updateAct(1);
      }
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const direction = touchStartY.current > touchEndY ? 1 : -1;
      handleScrollEvent(direction);
    };

    const handleTouchEnd = (e) => {
      e.preventDefault();
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };

    const handleMouseDown = (e) => {
      e.preventDefault();
      const direction = e.button === 0 ? 1 : e.button === 2 ? -1 : 0;
      if (direction !== 0) {
        updateAct(direction);
      }
    };

    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [currentAct, setCurrentAct]);

  return null;
};
