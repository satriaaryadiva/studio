"use client";

import React from "react";

const Noise = ({ opacity = 0.2, className = "" }) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 no-theme-transition ${className}`}
      style={{ opacity }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/noise.png')`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
    </div>
  );
};

export default Noise;
