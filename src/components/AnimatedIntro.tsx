// src/components/AnimatedIntro.tsx
import React from "react";
import "./AnimatedIntro.css";

const AnimatedIntro: React.FC = () => {
  return (
    <div className="butterfly-container">
      <div className="butterfly">
        <div className="wing left"></div>
        <div className="wing right"></div>
        <div className="body"></div>
      </div>
    </div>
  );
};

export default AnimatedIntro;
