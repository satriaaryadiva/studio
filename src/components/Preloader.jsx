"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

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
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-neutral-950 font-freight pointer-events-auto"
                >
                    <div className="overflow-hidden">
                        <motion.span
                            initial={{ y: "100%" }}
                            animate={{ y: "0%" }}
                            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                            className="block text-white text-6xl md:text-9xl font-black tracking-tighter uppercase"
                        >
                            UPLIFT
                        </motion.span>
                    </div>

                    <div className="w-48 md:w-64 h-[2px] bg-white/10 mt-8 overflow-hidden rounded-full">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 1.8, ease: "easeInOut" }}
                            className="w-full h-full bg-yellow-600 rounded-full"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="absolute bottom-12 text-2xl text-[#9e8976] uppercase   font-bold"
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
