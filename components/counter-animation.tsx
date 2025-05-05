"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface CounterAnimationProps {
  end: number
  duration?: number
  startOnView?: boolean
}

export function CounterAnimation({ end, duration = 2, startOnView = true }: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if ((startOnView && isInView && !hasAnimated) || (!startOnView && !hasAnimated)) {
      animateCounter()
      setHasAnimated(true)
    }
  }, [isInView, end, duration, startOnView, hasAnimated])

  const animateCounter = () => {
    const startTime = Date.now()
    const endTime = startTime + duration * 1000

    const updateCounter = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / (endTime - startTime), 1)
      const currentCount = Math.floor(progress * end)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(updateCounter)
  }

  return <span ref={ref}>{count}</span>
}
