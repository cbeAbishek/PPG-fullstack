"use client";

import { useState, useEffect } from "react";
import {
  Cpu,
  Server,
  Database,
  Code,
  ArrowLeft,
  RefreshCw,
  Zap,
} from "lucide-react";
import { MainNav } from "@/components/main-nav";
import Footer from "@/components/footer";

export default function NotFound() {
  const [isLoading, setIsLoading] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [floatOffset, setFloatOffset] = useState(0);

  // Simulated loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Rotation animation for gears
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 30);
    return () => clearInterval(rotationInterval);
  }, []);

  // Floating animation
  useEffect(() => {
    const floatInterval = setInterval(() => {
      setFloatOffset((prev) => Math.sin(Date.now() / 1000) * 10);
    }, 50);
    return () => clearInterval(floatInterval);
  }, []);

  // Tech icons with rotation
  type TechIconProps = {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    delay: number;
    position: { top?: string; left?: string; right?: string; bottom?: string };
  };

  const TechIcon: React.FC<TechIconProps> = ({
    icon: Icon,
    delay,
    position,
  }) => {
    const offsetStyles = {
      transform: `rotate(${rotation + delay}deg)`,
      top: position.top,
      left: position.left,
      right: position.right,
      bottom: position.bottom,
    };

    return (
      <div
        className="absolute transition-all duration-300"
        style={offsetStyles}
      >
        <Icon
          size={30}
          className="text-gray-600 hover:text-orange-500 hover:scale-125 transition-all duration-300"
        />
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <RefreshCw
            size={60}
            className="mx-auto text-orange-500 animate-spin"
          />
          <p className="mt-4 text-xl text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <MainNav />
      <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background circuit patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(15)].map((_, i) => (
              <div
                key={`line-${i}`}
                className="absolute bg-orange-500"
                style={{
                  height: "1px",
                  width: `${Math.random() * 30 + 5}%`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.25,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            ))}
            {[...Array(10)].map((_, i) => (
              <div
                key={`circle-${i}`}
                className="absolute border border-orange-500 rounded-full"
                style={{
                  width: `${Math.random() * 100 + 20}px`,
                  height: `${Math.random() * 100 + 20}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.3 + 0.1,
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating tech icons */}
        <TechIcon icon={Cpu} delay={0} position={{ top: "30%", left: "15%" }} />
        <TechIcon
          icon={Server}
          delay={45}
          position={{ top: "20%", right: "20%" }}
        />
        <TechIcon
          icon={Database}
          delay={90}
          position={{ bottom: "35%", left: "20%" }}
        />
        <TechIcon
          icon={Code}
          delay={135}
          position={{ bottom: "25%", right: "15%" }}
        />

        {/* Main 404 content */}
        <div className="relative z-10 text-center px-4">
          <div
            className="relative"
            style={{ transform: `translateY(${floatOffset}px)` }}
          >
            <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              404
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div
                className="relative w-20 h-20 mx-auto"
                style={{ transform: `rotate(${rotation / 2}deg)` }}
              >
                <Zap
                  size={80}
                  className="text-orange-500 absolute top-0 left-0 animate-pulse"
                />
              </div>
            </div>
          </div>

          <h1 className="mt-8 text-3xl md:text-4xl font-bold text-gray-100">
            Page Not Found
          </h1>

          <p className="mt-4 text-xl text-gray-400 max-w-lg mx-auto">
            Looks like there was a calculation error in our engineering formula.
            The page you're looking for doesn't exist.
          </p>

          <div className="mt-8">
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium flex items-center space-x-2 mx-auto hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300 group">
              <ArrowLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform duration-300"
              />
              <span>Return to Homepage</span>
            </button>
          </div>
        </div>

        {/* Footer */}
      </div>
      <Footer />
    </>
  );
}
