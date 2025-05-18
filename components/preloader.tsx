// Preloader.jsx
import { useState, useEffect } from "react";
import {
  Cpu,
  Cog,
  Heart,
  Activity,
  Leaf,
  Laptop,
  Wifi,
  Database,
  PenTool,
  Thermometer,
  Droplet,
  Layers,
  GitBranch,
} from "lucide-react";

interface PreloaderProps {
  onLoadingComplete?: () => void;
}

const Preloader = ({ onLoadingComplete }: PreloaderProps) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentDept, setCurrentDept] = useState(0);
  const [rotation, setRotation] = useState(0);

  const departments = [
    { name: "Computer Science", icon: Laptop, color: "orange" },
    { name: "Mechanical", icon: Cog, color: "blue" },
    { name: "Biomedical", icon: Heart, color: "red" },
    { name: "Electronics", icon: Activity, color: "purple" },
    { name: "Agricultural", icon: Leaf, color: "green" },
  ];

  // Simulated loading effect with progress
  useEffect(() => {
    const incrementProgress = () => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          setTimeout(() => {
            if (onLoadingComplete) onLoadingComplete();
          }, 500); // Small delay after reaching 100%
          return 100;
        }
        return prev + Math.random() * 15;
      });
    };

    const progressInterval = setInterval(incrementProgress, 300);
    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  // Department cycling
  useEffect(() => {
    const deptInterval = setInterval(() => {
      setCurrentDept((prev) => (prev + 1) % departments.length);
    }, 1500);
    return () => clearInterval(deptInterval);
  }, []);

  // Rotation animation for gears
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 30);
    return () => clearInterval(rotationInterval);
  }, []);

  const CurrentDeptIcon = departments[currentDept].icon;
  const iconColor = `text-${departments[currentDept].color}-500`;

  return (
    <div className="h-screen w-full flex items-center justify-center bg-white">
      <div className="text-center w-full max-w-md px-6">
        {/* Engineering college logo */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 flex items-center justify-center relative overflow-hidden">
                  {/* Animated patterns inside logo */}
                  <div className="absolute inset-0">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={`circuit-${i}`}
                        className="absolute bg-white opacity-20"
                        style={{
                          height: "2px",
                          width: `${Math.random() * 20 + 10}px`, // Add 'px'
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          transform: `rotate(${Math.random() * 360}deg)`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Core elements */}
                  <div
                    className="relative"
                    style={{ transform: `rotate(${rotation / 3}deg)` }}
                  >
                    <Cog
                      size={24}
                      className="absolute text-white opacity-80"
                      style={{ top: -20, left: -6 }}
                    />
                    <Laptop size={28} className="text-white" />
                    <GitBranch
                      size={16}
                      className="absolute text-white opacity-80"
                      style={{ bottom: -16, right: -10 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Orbiting elements */}
            <div
              className="absolute top-0 left-0 w-full h-full animate-spin"
              style={{ animationDuration: "12s" }}
            >
              <div className="absolute" style={{ top: "0%", left: "50%" }}>
                <Cpu size={16} className="text-orange-500" />
              </div>
            </div>

            <div
              className="absolute top-0 left-0 w-full h-full animate-spin"
              style={{
                animationDuration: "15s",
                animationDirection: "reverse",
              }}
            >
              <div className="absolute" style={{ top: "50%", right: "0%" }}>
                <Thermometer size={16} className="text-blue-500" />
              </div>
            </div>

            <div
              className="absolute top-0 left-0 w-full h-full animate-spin"
              style={{ animationDuration: "20s" }}
            >
              <div className="absolute" style={{ bottom: "10%", right: "30%" }}>
                <Heart size={16} className="text-red-500" />
              </div>
            </div>

            <div
              className="absolute top-0 left-0 w-full h-full animate-spin"
              style={{
                animationDuration: "18s",
                animationDirection: "reverse",
              }}
            >
              <div className="absolute" style={{ bottom: "30%", left: "10%" }}>
                <Wifi size={16} className="text-purple-500" />
              </div>
            </div>

            <div
              className="absolute top-0 left-0 w-full h-full animate-spin"
              style={{ animationDuration: "25s" }}
            >
              <div className="absolute" style={{ top: "20%", left: "10%" }}>
                <Leaf size={16} className="text-green-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Department cycling */}
        <div className="mb-6 h-20">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <CurrentDeptIcon size={32} className={`${iconColor}`} />
            <h2 className="text-xl font-bold text-gray-800">
              {departments[currentDept].name} Engineering
            </h2>
          </div>
          <p className="text-gray-500">Loading department resources...</p>
          <p className="text-gray-500">
            This is a Demo site infomation will not correct
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300"
            style={{ width: `${Math.min(loadingProgress, 100)}%` }}
          ></div>
        </div>
        <p className="mt-2 text-gray-600">
          {Math.min(Math.floor(loadingProgress), 100)}%
        </p>

        {/* Engineering disciplines background */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 opacity-60">
          {[
            Cog,
            Heart,
            Activity,
            Leaf,
            Laptop,
            Wifi,
            Database,
            PenTool,
            Thermometer,
            Droplet,
            Layers,
          ].map((Icon, idx) => (
            <div
              key={idx}
              className="p-2 animate-pulse"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <Icon size={20} className="text-gray-800" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
