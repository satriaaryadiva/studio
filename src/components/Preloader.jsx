"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";
import clsx from "clsx";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const { theme } = useTheme();
    const isLight = theme === "light";

    useEffect(() => {
        // Mock loading sequence
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2200); // 2.2 seconds loader duration
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                    className={clsx(
                        "fixed inset-0 z-[100] flex flex-col items-center justify-center font-freight pointer-events-auto",
                        isLight ? "bg-white" : "bg-neutral-950"
                    )}
                >
                    <div className="overflow-hidden">
                        <motion.span
                            initial={{ y: "100%" }}
                            animate={{ y: "0%" }}
                            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                            className={clsx(
                                "block text-6xl md:text-9xl font-black tracking-tighter uppercase",
                                isLight ? "text-[#9E8976]" : "text-white"
                            )}
                        >
                            UPLIFT
                        </motion.span>
                    </div>

                    <div className={clsx(
                        "w-48 md:w-64 h-[2px] mt-8 overflow-hidden rounded-full",
                        isLight ? "bg-black " : "bg-white "
                    )}>
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 1.8, ease: "easeInOut" }}
                            className="w-full h-full bg-[#9E8976] rounded-full"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className={clsx(
                            "absolute bottom-10 text-center text-[10px] md:text-xs font-sans md:text-2xl tracking-[0.2em] font-bold uppercase leading-relaxed max-w-[280px] md:max-w-md mx-auto",
                            isLight ? "text-neutral-500" : "text-[#9e8976]"
                        )}
                    >
                       Build, Scale, and
Systemize Your Brand
with UPLIFT
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
