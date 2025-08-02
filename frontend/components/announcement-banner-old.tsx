import { useState, useEffect } from "react";
import { Megaphone, ChevronLeft, ChevronRight, Calendar, MapPin, Clock, ExternalLink } from "lucide-react";

const LeftSideAnnouncementWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [direction, setDirection] = useState("next");
  
  useEffect(() => {
    setMounted(true);
    
    // Auto-rotate announcements every 10 seconds when open
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isOpen) {
      interval = setInterval(() => {
        setDirection("next");
        setActiveIndex((prev) => (prev + 1) % announcements.length);
      }, 10000);
    }
    
    return () => clearInterval(interval);
  }, [isOpen]);

  // Sample announcement data
  const announcements = [
    {
      id: 1,
      title: "Engineering Research Symposium",
      description: "Join us for our annual research symposium featuring presentations from faculty and students.",
      date: "May 15, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Main Auditorium",
      image: "/assets/1.jpeg"
    },
    {
      id: 2,
      title: "Industry Career Fair",
      description: "Connect with top tech companies and engineering firms looking to recruit talented graduates.",
      date: "May 20, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Engineering Complex",
      image: "/assets/1.jpeg"
    }
  ];

  const nextAnnouncement = () => {
    setDirection("next");
    setActiveIndex((prev) => (prev + 1) % announcements.length);
  };
  
  const prevAnnouncement = () => {
    setDirection("prev");
    setActiveIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  return (
    <div className={`fixed left-0 top-1/4 z-50 transition-all duration-500 ease-in-out ${mounted ? "opacity-100" : "opacity-0"}`}>
      <div className="flex">
        {/* Sidebar toggle tab - always visible on the left edge */}
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#ff914d] hover:bg-[#ff8030] rounded-r-lg cursor-pointer flex flex-col items-center justify-center py-6 px-3 shadow-lg transition-all duration-300 transform hover:scale-105"
          aria-expanded={isOpen}
          aria-controls="announcement-panel"
          aria-label="Toggle announcements panel"
        >
          <Megaphone size={24} className="text-white mb-3" />
          <div className="writing-vertical text-white font-bold text-lg tracking-wide">
            Announcements
          </div>
        </div>
        
        {/* Announcement panel */}
        <div 
          id="announcement-panel"
          className={`bg-gradient-to-br from-[#ff914d] to-[#ff7a20] rounded-r-lg shadow-lg transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-w-md w-80" : "w-0"
          }`}
        >
          {isOpen && (
            <div className="p-4 animate-slideIn">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-white flex items-center">
                  <Megaphone size={20} className="mr-2" />
                  Announcements
                </h3>
                <div className="flex gap-2">
                  <button 
                    onClick={prevAnnouncement}
                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all active:scale-95 focus:ring-2 focus:ring-white/50 focus:outline-none"
                    aria-label="Previous announcement"
                  >
                    <ChevronLeft size={16} className="text-white" />
                  </button>
                  <button 
                    onClick={nextAnnouncement}
                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all active:scale-95 focus:ring-2 focus:ring-white/50 focus:outline-none"
                    aria-label="Next announcement"
                  >
                    <ChevronRight size={16} className="text-white" />
                  </button>
                </div>
              </div>
              
              {/* Announcements carousel */}
              <div className="relative h-[20rem] overflow-hidden rounded-lg shadow-md">
                {announcements.map((announcement, index) => (
                  <div 
                    key={announcement.id}
                    className={`absolute top-0 left-0 w-full bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 ease-in-out ${
                      activeIndex === index 
                        ? "opacity-100 transform translate-x-0" 
                        : direction === "next"
                          ? `opacity-0 transform ${index < activeIndex ? "-translate-x-full" : "translate-x-full"} pointer-events-none`
                          : `opacity-0 transform ${index > activeIndex ? "translate-x-full" : "-translate-x-full"} pointer-events-none`
                    }`}
                    aria-hidden={activeIndex !== index}
                  >
                    <img 
                      src={announcement.image} 
                      alt={`${announcement.title} event`} 
                      className="w-full h-24 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="text-base font-bold text-gray-800 mb-2">{announcement.title}</h4>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{announcement.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-600 text-xs">
                          <Calendar size={14} className="mr-2 text-[#ff914d]" />
                          <span>{announcement.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-xs">
                          <Clock size={14} className="mr-2 text-[#ff914d]" />
                          <span>{announcement.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-xs">
                          <MapPin size={14} className="mr-2 text-[#ff914d]" />
                          <span>{announcement.location}</span>
                        </div>
                      </div>
                      <div className="mt-3 pt-2 border-t border-gray-100">
                        <button className="text-[#ff914d] text-sm font-medium flex items-center hover:underline transition-all focus:outline-none focus:text-[#ff7a20]">
                          <span>Learn more</span>
                          <ExternalLink size={14} className="ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination dots */}
              <div className="flex justify-center mt-4 gap-2">
                {announcements.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all transform ${
                      activeIndex === index 
                        ? "bg-white scale-125" 
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                    onClick={() => {
                      setDirection(index > activeIndex ? "next" : "prev");
                      setActiveIndex(index);
                    }}
                    aria-label={`View announcement ${index + 1}`}
                    aria-current={activeIndex === index ? "true" : "false"}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideIn {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        .animate-slideIn {
          animation: slideIn 0.4s ease-out forwards;
        }
        
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
        
        /* Custom scrollbar */
        div::-webkit-scrollbar {
          width: 4px;
        }
        
        div::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        
        div::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        
        div::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default LeftSideAnnouncementWidget;