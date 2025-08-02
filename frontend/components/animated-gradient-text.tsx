"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedGradientText({
  children,
  className = "",
}: AnimatedGradientTextProps) {
  return (
    <motion.h1
      className={`bg-gradient-to-r from-white via-[#ff914d]/80 to-white bg-clip-text text-transparent ${className}`}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 10,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
      style={{
        backgroundSize: "200% auto",
      }}
    >
      {children}
    </motion.h1>
  );
}
