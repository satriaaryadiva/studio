"use client";
import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";



const PageIntro = ({
  eyebrow,
  title,
  children,
  centered = false,
  image,
  imagePosition = "right"
}) => {
  return (
    <Container
      className={clsx("mt-24 sm:mt-32 lg:mt-40", centered && "text-center")}
    >
      <FadeIn>
        <div className={clsx(
          "flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-center",
          !image && "block",
          imagePosition === "left" && "lg:flex-row-reverse"
        )}>
          <div className={clsx(imagePosition === "left" && "lg:order-2")}>
            <h1>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="block font-display text-base font-semibold text-neutral-950"
              >
                {eyebrow}
              </motion.span>
              <span className="sr-only"> - </span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className={clsx(
                  "mt-6 block font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl",
                  centered && "mx-auto",
                  !image && "max-w-5xl"
                )}
              >
                {title}
              </motion.span>
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className={clsx(
                "mt-6 text-xl text-neutral-600",
                centered && "mx-auto",
                !image && "max-w-3xl"
              )}
            >
              {children}
            </motion.div>
          </div>

          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={clsx(
                "relative aspect-[16/9] overflow-hidden  bg-neutral-100 shadow-2xl lg:aspect-square",
                imagePosition === "left" && "lg:order-1"
              )}
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </motion.div>
          )}
        </div>
      </FadeIn>
    </Container>
  );
};

export default PageIntro;
