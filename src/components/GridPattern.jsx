"use client";

import { useId, useRef, useState } from "react";
import { motion } from "framer-motion";


const GridPattern = ({ yOffset = 0, interactive = false, ...props }) => {
  let id = useId();
  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={id}
          width="40"
          height="40"
          x="50%"
          y={yOffset}
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 40V.5H40"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.3"
          />
          <circle cx="0" cy="0" r="1" fill="currentColor" fillOpacity="0.4" />
        </pattern>
        <radialGradient id={`${id}-gradient`} cy="0" cx="50%" r="100%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id={`${id}-mask`}>
          <rect width="100%" height="100%" fill={`url(#${id}-gradient)`} />
        </mask>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id})`}
        mask={`url(#${id}-mask)`}
      />
      {/* Subtle animated glows */}
      <motion.circle
        cx="20%"
        cy="30%"
        r="300"
        fill="rgba(0,0,0,0.02)"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="blur-3xl"
      />
      <motion.circle
        cx="80%"
        cy="70%"
        r="400"
        fill="rgba(0,0,0,0.02)"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="blur-3xl"
      />
    </svg>
  );
};

export default GridPattern;
