"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

const ServiceImage = ({ src, alt = "", className, aspect = "aspect-[4/3]" }) => {
    return (
        <div className={clsx("relative group overflow-hidden", className)}>
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                className={clsx("relative w-full overflow-hidden", aspect)}
            >
                {src ? (
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover transition duration-700 group-hover:blur-[2px]"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-neutral-200 text-neutral-400">
                        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                )}

                {/* Glassmorphism Overlay on Hover */}
                <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Aceternity-style accent border */}
                <div className="absolute inset-0 border border-white/10" />
            </motion.div>

            {/* Floating element decorative */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-neutral-950/5 blur-2xl transition-all duration-500 group-hover:bg-neutral-950/10" />
        </div>
    );
};

export default ServiceImage;
