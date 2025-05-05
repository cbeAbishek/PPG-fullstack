"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";

interface DepartmentCardProps {
  title: string;
  icon: string;
  description: string;
}

export function DepartmentCard({
  title,
  icon,
  description,
}: DepartmentCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Dynamically get the icon from Lucide
  const Icon = LucideIcons[icon as keyof typeof LucideIcons] as LucideIcon;

  return (
    <motion.div
      className="group relative flex flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#ff914d]/5 overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#ff914d]/5 transition-transform duration-500 group-hover:scale-150"></div>

      <motion.div
        className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff914d]/10"
        animate={{
          scale: isHovered ? 1.1 : 1,
          backgroundColor: isHovered
            ? "rgba(var(--[#ff914d]), 0.2)"
            : "rgba(var(--[#ff914d]), 0.1)",
        }}
      >
        {Icon && <Icon className="h-8 w-8 text-[#ff914d]" />}
      </motion.div>

      <h3 className="relative z-10 mt-2 text-xl font-bold">{title}</h3>
      <p className="relative z-10 mt-2 text-center text-sm text-muted-foreground">
        {description}
      </p>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff914d]/40"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  );
}
