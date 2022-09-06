import React, { useEffect, useRef } from "react";
import "./Transition.css";
function Transition({ timeline }) {
  const black = useRef(null);

  useEffect(() => {
    timeline.to(black.current, {
      duration: 2,
      x: 2600,
      // ease: Power4.easeOut,
    });
  });

  return (
    <div>
      {/* main div transition */}
      <div>
        <div className="transition-effect-black" ref={black}>
          <div className="transition-effect-red"></div>
          <div className="transition-effect-blue"></div>
          <div className="transition-effect-green"></div>
          <div className="transition-effect-yellow"></div>
        </div>
      </div>
    </div>
  );
}
export default Transition;
