"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    // Mouse position with motion values for smooth tracking
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Ultra-responsive spring config for the outer ring
    const springConfig = { damping: 40, stiffness: 600, mass: 0.1 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);

        const handleMouseOver = (e) => {
            const target = e.target;
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.getAttribute('role') === 'button' ||
                target.closest('.interactive');

            setIsHovering(isInteractive);
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] mix-blend-difference">
            {/* Outer Ring - Chases slightly with tight spring */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 border border-white rounded-full translate-x-[-50%] translate-y-[-50%]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    scale: isHovering ? 2.2 : isClicked ? 0.8 : 1,
                }}
            />

            {/* Inner Core - Perfectly instant using raw motion values */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-red-400 rounded-full translate-x-[-50%] translate-y-[-50%]"
                style={{
                    x: mouseX,
                    y: mouseY,
                    scale: isHovering ? 4 : isClicked ? 1.5 : 1,
                }}
            />
        </div>
    );
}
