"use client"

import { type ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface RevealOnScrollProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function RevealOnScroll({ children, delay = 0, className = "" }: RevealOnScrollProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
