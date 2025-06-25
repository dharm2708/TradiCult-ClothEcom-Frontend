import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../styles/scrollBar.css";

const Scrollbar = () => {
  const barRef = useRef();

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      gsap.to(barRef.current, {
        height: `${scrollPercent}%`,
        duration: 2,
        ease: "power4.out",
      });
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="custom-scrollbar">
      <div className="scroll-thumb" ref={barRef}></div>
    </div>
  );
};

export default Scrollbar;
