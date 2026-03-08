"use client";
import React from "react";
import { motion } from "framer-motion";

const Ripple = ({ className }) => {
    return (
        <div className={className}>
            <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
            >
                {[...Array(8)].map((_, i) => (
                    <motion.circle
                        key={i}
                        cx="100"
                        cy="100"
                        r={20 + i * 10}
                        stroke="currentColor"
                        strokeWidth="0.5"
                        strokeOpacity={0.1 + (7 - i) * 0.05}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                            duration: 2,
                            delay: i * 0.1,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                ))}
                <circle cx="100" cy="100" r="10" fill="currentColor" fillOpacity="0.2" />
            </svg>
        </div>
    );
};

export default Ripple;
