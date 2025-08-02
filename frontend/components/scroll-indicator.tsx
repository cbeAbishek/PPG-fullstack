"use client"

import { motion } from "framer-motion"

interface ScrollIndicatorProps {
  className?: string
}

export function ScrollIndicator({ className = "" }: ScrollIndicatorProps) {
  return (
    <motion.div
      className={`flex flex-col items-center align ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <span className="text-xs font-light text-black/70">Scroll Down</span>
      <motion.div
        className="mt-2 h-10 w-6 rounded-full border border-black/30 p-1"
        initial={{ y: 0 }}
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <motion.div
          className="h-2 w-2 rounded-full bg-black"
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  )
}
