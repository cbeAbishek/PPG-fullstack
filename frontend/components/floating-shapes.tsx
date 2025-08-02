"use client";

import { motion } from "framer-motion";

export function FloatingShapes() {
  const shapes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    type: Math.random() > 0.5 ? "circle" : "square",
    size: Math.random() * 60 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute opacity-10 ${
            shape.type === "circle" ? "rounded-full" : "rounded-md"
          } bg-[#ff914d]/30 backdrop-blur-md`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            rotate: [0, Math.random() * 360, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}
