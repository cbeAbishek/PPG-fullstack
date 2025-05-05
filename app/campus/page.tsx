"use client";
import React, { useRef } from "react";
import { MainNav } from "@/components/main-nav";
import Footer from "@/components/footer";
import {
  Beaker,
  BookOpen,
  Wifi,
  Trophy,
  Home,
  Utensils,
  Shield,
  Coffee,
  Users,
  Calendar,
  Lightbulb,
  Rocket,
  ChevronDown
} from "lucide-react";

const Campus = () => {
  // Refs for scroll-to-section functionality
  const heroRef = useRef<HTMLDivElement | null>(null);
  const facilitiesRef = useRef<HTMLDivElement | null>(null);
  const hostelRef = useRef<HTMLDivElement | null>(null);
  const studentLifeRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll to a section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation - assuming MainNav accepts items prop */}
      <MainNav/>

      {/* Main content with snap scrolling */}
      <div className="flex-grow h-screen overflow-y-auto snap-mandatory snap-y mt-20">
        {/* Hero Section */}
        <div
          ref={heroRef}
          className="h-screen snap-start flex flex-col items-center justify-center relative bg-gradient-to-r from-orange-500 to-orange-700 text-white p-8"
        >
          <div className="max-w-5xl mx-auto text-center transform transition-transform hover:scale-105 duration-300">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">Tech Innovators Institute</h1>
            <p className="text-xl md:text-2xl mb-8 animate-fadeIn animation-delay-200">Shaping Tomorrow's Engineers Today</p>
            <button className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors animate-fadeIn animation-delay-400">
              Explore Our Campus
            </button>
          </div>
          
          {/* Scroll indicator */}
          <div 
            className="absolute bottom-8 animate-bounce cursor-pointer"
            onClick={() => scrollToSection(facilitiesRef)}
          >
            <ChevronDown size={32} />
          </div>
        </div>

        {/* Facilities Section */}
        <div
          ref={facilitiesRef}
          className="min-h-screen snap-start bg-white py-20 px-8"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">World-Class Facilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Lab */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                <div className="flex justify-center mb-4">
                  <Beaker className="text-orange-600" size={48} />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Advanced Labs</h3>
                <p className="text-gray-600 text-center">
                  State-of-the-art laboratories equipped with the latest technology for hands-on learning and research.
                </p>
              </div>
              
              {/* Library */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                <div className="flex justify-center mb-4">
                  <BookOpen className="text-orange-600" size={48} />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Digital Library</h3>
                <p className="text-gray-600 text-center">
                  Extensive collection of books, journals, and digital resources accessible 24/7 for academic excellence.
                </p>
              </div>
              
              {/* Wi-Fi */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                <div className="flex justify-center mb-4">
                  <Wifi className="text-orange-600" size={48} />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Campus-wide Wi-Fi</h3>
                <p className="text-gray-600 text-center">
                  High-speed internet connectivity throughout the campus for seamless learning and communication.
                </p>
              </div>
              
              {/* Sports */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                <div className="flex justify-center mb-4">
                  <Trophy className="text-orange-600" size={48} />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Sports Complex</h3>
                <p className="text-gray-600 text-center">
                  Multi-sport facilities including indoor and outdoor courts, swimming pool, and fitness center.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hostel Section */}
        <div
          ref={hostelRef}
          className="min-h-screen snap-start bg-gray-50 py-20 px-8"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Comfortable Living</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Rooms */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                <div className="flex justify-center mb-4">
                  <Home className="text-orange-600" size={48} />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Modern Rooms</h3>
                <p className="text-gray-600 text-center">
                  Spacious, well-ventilated rooms with comfortable furniture and study areas for optimal living.
                </p>
              </div>
              
              {/* Food */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                <div className="flex justify-center mb-4">
                  <Utensils className="text-orange-600" size={48} />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Quality Dining</h3>
                <p className="text-gray-600 text-center">
                  Nutritious and varied menu options prepared in a hygienic kitchen by professional staff.
                </p>
              </div>
              
              {/* Security */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                <div className="flex justify-center mb-4">
                  <Shield className="text-orange-600" size={48} />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">24/7 Security</h3>
                <p className="text-gray-600 text-center">
                  Round-the-clock security with CCTV surveillance and controlled access for student safety.
                </p>
              </div>
              
              {/* Amenities */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                <div className="flex justify-center mb-4">
                  <Coffee className="text-orange-600" size={48} />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Recreation Areas</h3>
                <p className="text-gray-600 text-center">
                  Common rooms with entertainment options, study spaces, and laundry facilities for convenience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Student Life Section */}
        <div
          ref={studentLifeRef}
          className="min-h-screen snap-start bg-white py-20 px-8"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Vibrant Student Life</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Clubs */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                <div className="flex justify-center mb-4">
                  <Users className="text-orange-600" size={48} />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Student Clubs</h3>
                <p className="text-gray-600 text-center">
                  Over 30 student-led clubs and societies covering a wide range of interests and activities.
                </p>
              </div>
              
              {/* Events */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                <div className="flex justify-center mb-4">
                  <Calendar className="text-orange-600" size={48} />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Annual Fests</h3>
                <p className="text-gray-600 text-center">
                  Exciting cultural, technical, and sports festivals that showcase talent and build leadership.
                </p>
              </div>
              
              {/* Innovation */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                <div className="flex justify-center mb-4">
                  <Lightbulb className="text-orange-600" size={48} />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Innovation Hub</h3>
                <p className="text-gray-600 text-center">
                  Dedicated spaces for creativity, problem-solving, and turning innovative ideas into reality.
                </p>
              </div>
              
              {/* Startups */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                <div className="flex justify-center mb-4">
                  <Rocket className="text-orange-600" size={48} />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Startup Culture</h3>
                <p className="text-gray-600 text-center">
                  Mentorship, funding, and resources to help students launch their own startups and ventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default Campus;
