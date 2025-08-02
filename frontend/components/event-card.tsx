"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
}

export function EventCard({ title, date, description, image }: EventCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#ff914d]/5"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
          className="h-full w-full"
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-2 flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-2 h-4 w-4 text-[#ff914d]" />
          {date}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{description}</p>
        <Button
          className="mt-4 group/btn relative overflow-hidden bg-[#ff914d]/10 text-[#ff914d] hover:bg-[#ff914d]/20"
          variant="outline"
          size="sm"
        >
          <span className="relative z-10">Learn More</span>
          <motion.span
            className="absolute inset-0 bg-[#ff914d]/5"
            initial={{ x: "-100%" }}
            animate={{ x: isHovered ? "0%" : "-100%" }}
            transition={{ duration: 0.3 }}
          />
        </Button>
      </div>
    </motion.div>
  );
}
