"use client";
import React, { useState } from 'react';
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  Github,
  ExternalLink,
  Copy,
  Share2,
  Send,
  Bell,
  AtSign,
  MessageCircle,
  Users,
  Calendar,
  BookOpen,
  Map,
  Globe,
  Mail,
  Phone,
  ChevronRight,
  ThumbsUp,
  CheckCircle,
  Award
} from 'lucide-react';
import {MainNav} from "@/components/main-nav";
import Footer from "@/components/footer";

export default function EngineeringCollegeFollowUs() {
  const [copiedLink, setCopiedLink] = useState<keyof typeof socialMedia | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<keyof typeof socialMedia>('youtube');
  const [subscribed, setSubscribed] = useState(false);
  
  // College data
  const collegeData = {
    name: "PPG Institute of Technology",
    slogan: "Innovate • Create • Engineer",
    address: "123 Innovation Drive, Silicon Valley, CA 94088",
    phone: "+1 (555) 123-4567",
    email: "admissions@techenginst.edu",
    website: "www.techenginst.edu",
    established: 1985,
    accreditation: "ABET Accredited",
    students: "12,500+",
    facultyCount: "950+"
  };
  
  // Social media data
  const socialMedia = {
    youtube: {
      title: "PPG Institute of Technology",
      handle: "@ppgcollegeinstitutions3773",
      followers: "54.3K",
      posts: "413 videos",
      link: "youtube.com/@ppgcollegeinstitutions3773",
      color: "bg-red-600",  
      buttonColor: "bg-red-600 hover:bg-red-700",
      icon: <Youtube size={24} />,
      embedUrl: "https://www.youtube.com/embed/TIJC7kgQ0C0",
      action: "Subscribe",
      description: "Watch our latest tech innovations, campus tours, and lectures from industry experts. New videos every week featuring cutting-edge research and student projects."
    },
    instagram: {
      title: "PPG Institute of Technology",
      handle: "@ppgi_tech",
      followers: "76.2K",
      posts: "1,245 posts",
      link: "instagram.com/techenginst",
      color: "bg-pink-600",
      buttonColor: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      icon: <Instagram size={24} />,
      embedUrl: "/api/placeholder/600/400",
      action: "Follow",
      description: "Get an inside look at campus life, student achievements, and behind-the-scenes of our research labs. Daily content featuring our vibrant engineering community."
    },
    twitter: {
      title: "PPG Institute of Technology",
      handle: "@ppg_it",
      followers: "98.7K",
      posts: "8,905 tweets",
      link: "twitter.com/TEIengineering",
      color: "bg-blue-400",
      buttonColor: "bg-blue-400 hover:bg-blue-500",
      icon: <Twitter size={24} />,
      embedUrl: "/api/placeholder/600/400",
      action: "Follow",
      description: "Stay updated with the latest engineering news, campus events, and industry insights. Join the conversation with our students, faculty, and alumni network."
    },
    facebook: {
      title: "PPG Institute of Technology",
      handle: "PPG Institute of Technology",
      followers: "128.4K",
      posts: "Daily updates",
      link: "facebook.com/TechEngineeringInstitute",
      color: "bg-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      icon: <Facebook size={24} />,
      embedUrl: "/api/placeholder/600/400",
      action: "Like",
      description: "Connect with our community of students, faculty, and alumni. Get the latest updates about campus events, admissions, and academic achievements."
    },
    linkedin: {
      title: "PPG Institute of Technology",
      handle: "PPG Institute of Technology",
      followers: "205.9K",
      posts: "Professional updates",
      link: "linkedin.com/school/tech-engineering-institute",
      color: "bg-blue-700",
      buttonColor: "bg-blue-700 hover:bg-blue-800",
      icon: <Linkedin size={24} />,
      embedUrl: "/api/placeholder/600/400",
      action: "Connect",
      description: "Build your professional network with our faculty, alumni, and industry partners. Discover job opportunities, internships, and professional development resources."
    },
  };

  // Awards and recognitions
  const awards = [
    {
      year: "2024",
      title: "Top 20 Engineering Schools Nationwide",
      organization: "US News & World Report"
    },
    {
      year: "2024",
      title: "Excellence in Research & Innovation",
      organization: "National Science Foundation"
    },
    {
      year: "2023",
      title: "Best Campus Sustainability Initiatives",
      organization: "Green Campus Alliance"
    }
  ];

  // Upcoming events
  const events = [
    {
      date: "May 15, 2025",
      title: "Spring Engineering Expo",
      location: "Main Campus Hall"
    },
    {
      date: "May 21, 2025",
      title: "Industry Connect: Tesla Engineering",
      location: "Virtual Event"
    },
    {
      date: "June 5, 2025",
      title: "Summer Orientation",
      location: "Campus Commons"
    }
  ];

  // Department social accounts
  const departments = [
    {
      name: "Computer Science",
      handle: "@CyberZen",
      icon: <Twitter size={16} className="text-blue-400" />
    },
    {
      name: "Electrical Engineering",
      handle: "@TEI_ElecEng",
      icon: <Instagram size={16} className="text-pink-500" />
    },
    {
      name: "Mechanical Engineering",
      handle: "@TEI_MechEng",
      icon: <Facebook size={16} className="text-blue-600" />
    },
    {
      name: "Civil Engineering",
      handle: "@TEI_CivilEng",
      icon: <Linkedin size={16} className="text-blue-700" />
    }
  ];

  // Latest YouTube videos
  const latestVideos = [
    {
      title: "FOUNDERS DAY CELEBRATE ON PPG GROUP OF INSTITUTION",
      views: "0.2K views",
      date: "september 2024",
      thumbnail: "/assets/3.jpeg"
    },
    {
      title: "FOUNDERS DAY CELEBRATE ON PPG GROUP OF INSTITUTION",
      views: "0.2K views",
      date: "september 2024",
      thumbnail: "/assets/3.jpeg"
    },
    {
      title: "FOUNDERS DAY CELEBRATE ON PPG GROUP OF INSTITUTION",
      views: "0.2K views",
      date: "september 2024",
      thumbnail: "/assets/3.jpeg"
    },
  ];

interface SocialMediaPlatform {
    title: string;
    handle: string;
    followers: string;
    posts: string;
    link: string;
    color: string;
    buttonColor: string;
    icon: React.ReactNode;
    embedUrl: string;
    action: string;
    description: string;
}

interface Award {
    year: string;
    title: string;
    organization: string;
}

interface Event {
    date: string;
    title: string;
    location: string;
}

interface Department {
    name: string;
    handle: string;
    icon: React.ReactNode;
}

interface Video {
    title: string;
    views: string;
    date: string;
    thumbnail: string;
}

const handleCopyLink = (platform: keyof typeof socialMedia) => {
    navigator.clipboard.writeText(socialMedia[platform].link);
    setCopiedLink(platform);
    setTimeout(() => setCopiedLink(null), 2000);
};

  interface PlatformCardProps {
    platform: keyof typeof socialMedia;
    isActive: boolean;
  }

  const PlatformCard: React.FC<PlatformCardProps> = ({ platform, isActive }) => (
    <div 
      className={`p-3 rounded-lg ${
        isActive 
          ? 'bg-orange-50 border-2 border-orange-500' 
          : 'bg-white border border-gray-200 hover:border-orange-300'
      } cursor-pointer transition-all duration-300 flex items-center`}
      onClick={() => setSelectedPlatform(platform)}
    >
      <div className={`w-10 h-10 rounded-full ${socialMedia[platform].color} flex items-center justify-center text-white mr-3`}>
        {socialMedia[platform].icon}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{socialMedia[platform].title}</h3>
        <p className="text-xs text-gray-500">{socialMedia[platform].handle}</p>
      </div>
      {isActive && (
        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav />
      {/* Header */}
      <div className="bg-gradient-to-r mt-16 from-orange-400 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-3">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mr-3">
                  <BookOpen size={24} className="text-orange-500" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  {collegeData.name}
                </h1>
              </div>
              <p className="text-lg md:text-xl mb-2 text-orange-100">{collegeData.slogan}</p>
              <p className="text-orange-50 text-sm md:text-base max-w-2xl">
                Connect with our vibrant engineering community across all social media platforms. 
                Stay updated with the latest news, events, and innovations.
              </p>
            </div>
            <div className="flex space-x-3">
              <button className="bg-white text-orange-500 hover:bg-orange-50 px-4 py-2 rounded-lg font-medium text-sm flex items-center transition-colors duration-300">
                <Bell size={18} className="mr-2" />
                Get Notifications
              </button>
              <button className="bg-orange-700 hover:bg-orange-800 text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center transition-colors duration-300">
                <Mail size={18} className="mr-2" />
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h2>
              <div className="grid grid-cols-1 gap-3">
                {Object.keys(socialMedia).map(platform => (
                  <PlatformCard 
                    key={platform} 
                    platform={platform as keyof typeof socialMedia}
                    isActive={selectedPlatform === platform}
                  />
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Department Accounts</h2>
              <div className="space-y-3">
                {departments.map((dept, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      {dept.icon}
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-800">{dept.name}</p>
                        <p className="text-xs text-gray-500">{dept.handle}</p>
                      </div>
                    </div>
                    <button className="text-orange-500 hover:text-orange-600">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                ))}
                <button className="mt-2 w-full py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center">
                  View All Departments
                  <ChevronRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Awards & Recognition</h2>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="flex">
                    <div className="mr-3">
                      <Award size={18} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{award.title}</p>
                      <p className="text-xs text-gray-500">{award.organization}, {award.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Center and Right Columns */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="p-5 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full ${socialMedia[selectedPlatform].color} flex items-center justify-center text-white mr-3`}>
                      {socialMedia[selectedPlatform].icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">{socialMedia[selectedPlatform].title}</h2>
                      <p className="text-sm text-gray-500">{socialMedia[selectedPlatform].handle}</p>
                    </div>
                  </div>
                  <button 
                    className={`px-5 py-2 ${socialMedia[selectedPlatform].buttonColor} text-white font-medium rounded-lg text-sm transition-colors duration-300 flex items-center`}
                    onClick={() => selectedPlatform === 'youtube' && setSubscribed(!subscribed)}
                  >
                    {subscribed && selectedPlatform === 'youtube' ? (
                      <>
                        <CheckCircle size={16} className="mr-2" />
                        Subscribed!
                      </>
                    ) : (
                      <>
                        {selectedPlatform === 'youtube' ? <Bell size={16} className="mr-2" /> : <AtSign size={16} className="mr-2" />}
                        {socialMedia[selectedPlatform].action}
                      </>
                    )}
                  </button>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Users size={16} className="mr-2" />
                    {socialMedia[selectedPlatform].followers} followers • {socialMedia[selectedPlatform].posts}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {socialMedia[selectedPlatform].description}
                  </p>
                </div>
                <div className="flex items-center mt-4 space-x-3">
                  <button
                    className="flex items-center px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-600 transition-colors duration-300"
                    onClick={() => handleCopyLink(selectedPlatform)}
                  >
                    {copiedLink === selectedPlatform ? (
                      <>
                        <CheckCircle size={16} className="mr-2 text-green-500" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={16} className="mr-2" />
                        Copy Link
                      </>
                    )}
                  </button>
                  <button className="flex items-center px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-600 transition-colors duration-300">
                    <Share2 size={16} className="mr-2" />
                    Share
                  </button>
                  <button className="flex items-center px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-600 transition-colors duration-300">
                    <Send size={16} className="mr-2" />
                    Send
                  </button>
                </div>
              </div>
              
              <div className="p-5">
                {selectedPlatform === 'youtube' ? (
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-black">
                    <iframe 
                      className="w-full h-96"
                      src={socialMedia.youtube.embedUrl}
                      title="YouTube video player" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src={socialMedia[selectedPlatform].embedUrl}
                      alt={`${selectedPlatform} feed`}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
            
            {selectedPlatform === 'youtube' && (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <div className="p-5 border-b border-gray-100">
                  <h2 className="text-lg font-bold text-gray-800">Latest Videos</h2>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {latestVideos.map((video, index) => (
                      <div key={index} className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-gray-50">
                        <div className="relative">
                          <img 
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-36 object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                              <div className="w-0 h-0 border-t-6 border-t-transparent border-b-6 border-b-transparent border-l-10 border-l-red-600 ml-1"></div>
                            </div>
                          </div>
                        </div>
                        <div className="p-3">
                          <h3 className="font-medium text-gray-800 text-sm line-clamp-2">{video.title}</h3>
                          <p className="text-xs text-gray-500 mt-1">{video.views} • {video.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <button className="px-4 py-2 text-orange-500 font-medium text-sm hover:text-orange-600 flex items-center mx-auto">
                      View All Videos
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-5">
                <h2 className="text-lg font-bold text-gray-800 mb-4">College Information</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Map size={18} className="text-orange-500 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Address</p>
                      <p className="text-sm text-gray-600">{collegeData.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone size={18} className="text-orange-500 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Phone</p>
                      <p className="text-sm text-gray-600">{collegeData.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail size={18} className="text-orange-500 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Email</p>
                      <p className="text-sm text-gray-600">{collegeData.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Globe size={18} className="text-orange-500 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Website</p>
                      <p className="text-sm text-gray-600">{collegeData.website}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={18} className="text-orange-500 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Established</p>
                      <p className="text-sm text-gray-600">{collegeData.established}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Award size={18} className="text-orange-500 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Accreditation</p>
                      <p className="text-sm text-gray-600">{collegeData.accreditation}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users size={18} className="text-orange-500 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Students</p>
                      <p className="text-sm text-gray-600">{collegeData.students}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-5">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Upcoming Events</h2>
                <div className="space-y-4">
                  {events.map((event, index) => (
                    <div key={index} className="flex">
                      <div className="mr-3 bg-orange-100 text-orange-500 rounded-lg p-2 h-min">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{event.title}</p>
                        <p className="text-xs text-gray-500">{event.date} • {event.location}</p>
                      </div>
                    </div>
                  ))}
                  <button className="mt-2 w-full py-2 bg-orange-50 text-orange-500 rounded-lg text-sm font-medium hover:bg-orange-100 transition-colors duration-300">
                    View All Events
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="mt-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8 flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8 md:w-2/3">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Subscribe to Our Newsletter</h2>
              <p className="text-orange-100 mb-4">
                Stay updated with the latest news, events, and innovations from PPG Institute of Technology. 
                We'll send you weekly updates and special announcements.
              </p>
              <div className="flex flex-col sm:flex-row">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="rounded-lg px-4 py-3 sm:rounded-r-none flex-1 border-0 focus:ring-2 focus:ring-orange-300"
                />
                <button className="mt-2 sm:mt-0 bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-lg sm:rounded-l-none transition-colors duration-300">
                  Subscribe Now
                </button>
              </div>
              <p className="text-xs text-orange-100 mt-2">
                By subscribing, you agree to receive emails from TEI. You can unsubscribe at any time.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center">
                  <Mail size={40} className="text-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Connect Section */}
        <div className="flex items-center justify-center mt-10">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {Object.keys(socialMedia).map(platform => (
              <div 
          key={platform}
          className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center hover:shadow-xl hover:scale-[1.02] hover:brightness-105 transition-all duration-300 ease-in-out cursor-pointer"
              >
          <div className={`w-12 h-12 rounded-full ${socialMedia[platform as keyof typeof socialMedia].color} flex items-center justify-center text-white mb-3`}>
            {socialMedia[platform as keyof typeof socialMedia].icon}
          </div>
          <p className="text-sm font-medium text-gray-800 text-center">{platform.charAt(0).toUpperCase() + platform.slice(1)}</p>
          <p className="text-xs text-gray-500 text-center">{socialMedia[platform as keyof typeof socialMedia].followers}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
        {/* Footer */}
        <Footer />
    </div>
  );
}