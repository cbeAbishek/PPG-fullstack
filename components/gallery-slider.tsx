"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  {
    src: "/assets/1.jpeg",
    alt: "Campus Main Building",
    caption: "Our state-of-the-art main building",
  },
  {
    src: "/assets/2.jpeg",
    alt: "Library",
    caption: "Modern library with extensive collection",
  },
  {
    src: "/assets/3.jpeg",
    alt: "Computer Lab",
    caption: "Advanced computer laboratories",
  },
  {
    src: "/assets/4.jpg",
    alt: "Sports Complex",
    caption: "Multi-purpose sports complex",
  },
  {
    src: "/assets/5.jpeg",
    alt: "Auditorium",
    caption: "Spacious auditorium for events",
  },
];

export function GallerySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setDirection(-1);
    setIsAutoPlaying(false);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    setDirection(1);
    setIsAutoPlaying(false);
    const isLastSlide = currentIndex === galleryImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setDirection(slideIndex > currentIndex ? 1 : -1);
    setIsAutoPlaying(false);
    setCurrentIndex(slideIndex);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative">
      <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0"
          >
            <Image
              src={galleryImages[currentIndex].src || "/placeholder.svg"}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute bottom-0 w-full bg-black/50 p-6 backdrop-blur-sm"
            >
              <p className="text-center text-lg font-medium text-white">
                {galleryImages[currentIndex].caption}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next</span>
      </Button>

      <div className="mt-6 flex justify-center gap-3">
        {galleryImages.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`relative h-3 w-12 overflow-hidden rounded-full transition-colors duration-300 ${
              currentIndex === slideIndex ? "bg-[#ff914d]" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          >
            {currentIndex === slideIndex && (
              <motion.div
                className="absolute inset-0 bg-[#ff914d]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 5,
                  ease: "linear",
                  repeat: isAutoPlaying ? Number.POSITIVE_INFINITY : 0,
                }}
                style={{ transformOrigin: "left" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
