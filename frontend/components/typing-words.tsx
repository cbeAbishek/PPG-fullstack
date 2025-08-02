"use client";
import React, { useEffect, useRef, useState } from "react";

interface TypingWordsProps {
  words: string[];
  className?: string;
  typingSpeed?: number; // ms per character
  pauseTime?: number; // ms to pause after word is typed
  fadeDuration?: number; // ms for fade in/out
  cursorColor?: string;
  showCursor?: boolean;
}

export const TypingWords: React.FC<TypingWordsProps> = ({
  words,
  className = "",
  typingSpeed = 70,
  pauseTime = 1200,
  fadeDuration = 400,
  cursorColor = "#ffffff",
  showCursor = true
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Cursor animation state
  const [cursorVisible, setCursorVisible] = useState(true);
  
  // Clear any existing timeouts
  const clearTimeouts = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Handle cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  // Main typing effect
  useEffect(() => {
    // Safety check for empty words array
    if (!words.length) return;
    
    // Get current word to work with
    const currentWord = words[currentIndex % words.length];
    
    // Clear any existing timeouts
    clearTimeouts();
    
    if (isTyping) {
      // We're in typing mode
      if (displayText === currentWord) {
        // Finished typing current word, pause before deleting
        timeoutRef.current = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
      } else {
        // Still typing the current word
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, typingSpeed);
      }
    } else {
      // We're in deleting mode
      if (displayText === "") {
        // Finished deleting, move to next word
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsTyping(true);
      } else {
        // Still deleting
        timeoutRef.current = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, typingSpeed / 2); // Delete faster than typing
      }
    }
    
    // Cleanup on unmount or when dependencies change
    return clearTimeouts;
  }, [displayText, isTyping, currentIndex, words, pauseTime, typingSpeed]);

  return (
    <span className="inline-flex items-center">
      <span className={className}>
        {displayText}
      </span>
      {showCursor && (
        <span
          className={`inline-block w-2 h-8 ml-1 rounded-sm transition-opacity duration-200`}
          style={{
            backgroundColor: cursorColor,
            opacity: cursorVisible ? 0.9 : 0.3
          }}
        />
      )}
    </span>
  );
};

export default TypingWords;