import { useContext, useEffect, useRef } from "react";
import ActContext from "./ActContext";

export const useNavigation = (play) => {
  const { currentAct, setCurrentAct } = useContext(ActContext);
  const scrollEventTimestamp = useRef(0);
  const touchStartY = useRef(0);
  const MAX_ACTS = 9;
  const SCROLL_DETECTION_THRESHOLD = 150; // Time in milliseconds

  useEffect(() => {
    if (!play) {
      return;
    }

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
      e.preventDefault();
      const touchEndY = e.changedTouches[0].clientY;
      const direction = touchStartY.current > touchEndY ? 1 : -1;
      handleScrollEvent(direction);
    };

    const handleTouchEnd = (e) => {
      if (e.cancelable) {
        e.preventDefault();
      }
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

    // Add event listeners
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [play, currentAct, setCurrentAct]);
};
