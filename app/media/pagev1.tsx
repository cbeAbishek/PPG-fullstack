"use client";
import React, { useState } from 'react';
import * as ReactNamespace from 'react';
import Image from 'next/image';
import { 
  Search, 
  Bell, 
  MessageCircle, 
  Heart, 
  Share2, 
  Bookmark, 
  Send, 
  Camera, 
  Mic, 
  Users, 
  Calendar, 
  Award, 
  BookOpen, 
  Code, 
  Globe, 
  Clipboard, 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube, 
  Linkedin, 
  ChevronRight,
  ThumbsUp,
} from 'lucide-react';
import {MainNav} from "@/components/main-nav";
import Footer from "@/components/footer";

export default function EngineeringMediaHub() {
  const [activeTab, setActiveTab] = useState('feed');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample college data
  const collegeData = {
    name: "PPG Institute of Technology",
    slogan: "Innovate • Create • Engineer",
    followers: "15.2K",
    posts: 327,
    description: "Leading engineering institution focused on technological innovation and excellence. Our community of learners are building tomorrow's solutions today.",
    established: 1985,
    location: "Silicon Valley, CA",
    website: "www.techenginst.edu"
  };
  
  // Sample feed posts
  const posts = [
    {
      id: 1,
      author: "Dean Dr. Sarah Mitchell",
      authorRole: "Dean of Engineering",
      avatar: "/api/placeholder/40/40",
      timeAgo: "2h",
      content: "Proud to announce our Robotics team has secured 1st place at the National Engineering Championships! 🏆 #RoboticsMasters #TEIPride",
      image: "/api/placeholder/600/400",
      likes: 425,
      comments: 57,
      shares: 83
    },
    {
      id: 2,
      author: "AI Research Lab",
      authorRole: "Research Department",
      avatar: "/api/placeholder/40/40",
      timeAgo: "5h",
      content: "Our latest paper on quantum computing algorithms has been accepted for publication in the IEEE Journal. Congratulations to all contributors! Read the preprint at the link below.",
      image: "/api/placeholder/600/400",
      likes: 312,
      comments: 46,
      shares: 102
    },
    {
      id: 3,
      author: "Student Council",
      authorRole: "Official Student Body",
      avatar: "/api/placeholder/40/40",
      timeAgo: "1d",
      content: "REMINDER: The annual Engineering Expo is next week! Don't miss this opportunity to showcase your projects and connect with industry leaders. Registration closes on Friday. #EngineeringExpo2025",
      likes: 186,
      comments: 24,
      shares: 41
    }
  ];
  
  // Sample events
  const events = [
    {
      id: 1,
      title: "Annual Engineering Expo",
      date: "May 15, 2025",
      location: "Main Campus Hall",
      description: "Showcase your projects and meet industry recruiters",
      attendees: 246
    },
    {
      id: 2,
      title: "AI & Machine Learning Workshop",
      date: "May 10, 2025",
      location: "Tech Lab B",
      description: "Hands-on workshop on latest ML techniques",
      attendees: 128
    },
    {
      id: 3,
      title: "Industry Connect: Tesla Engineering",
      date: "May 20, 2025",
      location: "Virtual Event",
      description: "Career opportunities and tech talks from Tesla engineers",
      attendees: 374
    }
  ];
  
  // Sample faculty profiles
  const facultyProfiles = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      role: "Dean of Engineering",
      expertise: "Quantum Computing",
      image: "/Hod/cse.jpg"
    },
    {
      id: 2,
      name: "Prof. James Wilson",
      role: "Head of Computer Science",
      expertise: "Artificial Intelligence",
      image: "/Hod/it.jpg"
    },
    {
      id: 3,
      name: "Dr. Elena Rodriguez",
      role: "Professor of Robotics",
      expertise: "Autonomous Systems",
      image: "/Hod/ece.jpeg"
    }
  ];
  
  // Research highlights
  const researchHighlights = [
    {
      id: 1,
      title: "Quantum Computing Applications in Healthcare",
      team: "Quantum Research Group",
      citations: 78,
      image: "/re.jpg"
    },
    {
      id: 2,
      title: "Sustainable Energy Solutions for Smart Cities",
      team: "Green Engineering Lab",
      citations: 56,
      image: "/re.jpg"
    },
    {
      id: 3,
      title: "Next-Generation Neural Networks Architecture",
      team: "AI Research Center",
      citations: 124,
      image: "/re.jpg"
    }
  ];
  
  // Social media profiles
  const socialProfiles = [
    { platform: "Instagram", handle: "@techenginst", followers: "24K", icon: <Instagram className="text-pink-500" /> },
    { platform: "Twitter", handle: "@techenginst", followers: "32K", icon: <Twitter className="text-blue-400" /> },
    { platform: "Facebook", handle: "Tech Engineering Institute", followers: "45K", icon: <Facebook className="text-blue-600" /> },
    { platform: "LinkedIn", handle: "Tech Engineering Institute", followers: "67K", icon: <Linkedin className="text-blue-700" /> },
    { platform: "YouTube", handle: "TEI Channel", followers: "19K", icon: <Youtube className="text-red-600" /> }
  ];
  
  // Alumni spotlight
  const alumniSpotlight = [
    {
      id: 1,
      name: "Jennifer Chang",
      graduation: "2020",
      currentRole: "ML Engineer at Google",
      achievement: "Developed key algorithms for Google Assistant",
      image: "/api/placeholder/80/80"
    },
    {
      id: 2,
      name: "Michael Okonkwo",
      graduation: "2018",
      currentRole: "Co-founder of RoboTech Startups",
      achievement: "Raised $5M Series A funding in 2024",
      image: "/api/placeholder/80/80"
    },
    {
      id: 3,
      name: "Priya Sharma",
      graduation: "2021",
      currentRole: "Aerospace Engineer at SpaceX",
      achievement: "Part of the Mars mission propulsion team",
      image: "/api/placeholder/80/80"
    }
  ];

  type NewsCardProps = {
    title: string;
    date: string;
    snippet: string;
    image: string;
  };

  const NewsCard: React.FC<NewsCardProps> = ({ title, date, snippet, image }) => (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden mb-4 hover:shadow-lg transition-shadow duration-300">
      <div className="md:w-1/3">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      </div>
      <div className="p-4 md:w-2/3">
        <h3 className="font-bold text-lg text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <p className="text-gray-700 mb-3">{snippet}</p>
        <button className="text-sm font-medium flex items-center text-orange-500 hover:text-orange-600">
          Read more <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );

  const news = [
    {
      id: 1,
      title: "TEI Launches New Sustainable Energy Research Center",
      date: "April 28, 2025",
      snippet: "The new $12M facility will focus on renewable energy solutions and battery technology research with industry partnerships.",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Computer Science Department Receives $5M Grant",
      date: "April 15, 2025",
      snippet: "The National Science Foundation grant will support advanced research in quantum computing and cybersecurity.",
      image: "/api/placeholder/400/300"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <MainNav />
      </header>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="relative h-32 bg-gradient-to-r from-orange-400 to-orange-600">
                <div className="absolute -bottom-10 left-6">
                  <div className="h-20 w-20 rounded-xl border-4 border-white bg-orange-100 flex items-center justify-center">
                    <img
                        src="/logo.png" // Replace with your logo path
                        alt="Institute Logo"
                        className="h-16 w-16 object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="pt-12 pb-6 px-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">{collegeData.name}</h2>
                    <p className="text-sm text-gray-500">@techenginst</p>
                  </div>
                  <button className="px-4 py-1 bg-orange-500 text-white text-sm font-medium rounded-full hover:bg-orange-600 transition-colors duration-300">
                    Follow
                  </button>
                </div>
                
                <div className="mt-4">
                  <p className="text-gray-700">{collegeData.description}</p>
                </div>
                
                <div className="mt-4 flex space-x-4 text-center">
                  <div>
                    <p className="font-bold text-gray-900">{collegeData.followers}</p>
                    <p className="text-xs text-gray-500">Followers</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{collegeData.posts}</p>
                    <p className="text-xs text-gray-500">Posts</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center mb-2">
                    <Calendar size={16} className="text-gray-500 mr-2" />
                    <span className="text-sm text-gray-700">Est. {collegeData.established}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <MapPin width={16} height={16} className="text-gray-500 mr-2" />
                    <span className="text-sm text-gray-700">{collegeData.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe size={16} className="text-gray-500 mr-2" />
                    <span className="text-sm text-gray-700">{collegeData.website}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-800">Social Media Profiles</h3>
              </div>
              <div className="p-4">
                {socialProfiles.map((profile, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      {profile.icon}
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-800">{profile.platform}</p>
                        <p className="text-xs text-gray-500">{profile.handle}</p>
                      </div>
                    </div>
                    <div className="text-xs font-medium text-gray-500">
                      {profile.followers} followers
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-800">Upcoming Events</h3>
              </div>
              <div className="p-4">
                {events.map(event => (
                  <div key={event.id} className="mb-4 last:mb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-800">{event.title}</h4>
                        <div className="flex items-center mt-1 text-xs text-gray-500">
                          <Calendar size={12} className="mr-1" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center mt-1 text-xs text-gray-500">
                          <MapPin width={12} height={12} className="mr-1" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <button className="px-3 py-1 bg-orange-100 text-orange-500 text-xs font-medium rounded-full hover:bg-orange-200 transition-colors duration-300">
                        RSVP
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">{event.description}</p>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <Users size={12} className="mr-1" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Feed */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="flex border-b border-gray-100">
                <button 
                  className={`flex-1 py-3 font-medium text-sm ${activeTab === 'feed' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('feed')}
                >
                  Feed
                </button>
                <button 
                  className={`flex-1 py-3 font-medium text-sm ${activeTab === 'news' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('news')}
                >
                  News
                </button>
                <button 
                  className={`flex-1 py-3 font-medium text-sm ${activeTab === 'research' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('research')}
                >
                  Research
                </button>
                <button 
                  className={`flex-1 py-3 font-medium text-sm ${activeTab === 'faculty' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('faculty')}
                >
                  Faculty
                </button>
              </div>
              
              {activeTab === 'feed' && (
                <div>
                  {/* Create Post */}
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex">
                      <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                        <BookOpen size={16} className="text-orange-500" />
                      </div>
                      <div className="flex-1">
                        <textarea 
                          className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                          placeholder="Share something with the community..."
                          rows={2}
                        />
                        <div className="flex justify-between items-center mt-3">
                          <div className="flex space-x-2">
                            <button className="p-2 text-gray-500 hover:text-orange-500 rounded-full hover:bg-orange-50">
                              <Camera size={18} />
                            </button>
                            <button className="p-2 text-gray-500 hover:text-orange-500 rounded-full hover:bg-orange-50">
                              <Clipboard size={18} />
                            </button>
                            <button className="p-2 text-gray-500 hover:text-orange-500 rounded-full hover:bg-orange-50">
                              <Users size={18} />
                            </button>
                          </div>
                          <button className="px-4 py-1.5 bg-orange-500 text-white text-sm font-medium rounded-full hover:bg-orange-600 transition-colors duration-300">
                            Post
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Posts */}
                  {posts.map(post => (
                    <div key={post.id} className="p-4 border-b border-gray-100">
                      <div className="flex items-start">
                        <img 
                          src={post.avatar} 
                          alt={post.author} 
                          className="h-10 w-10 rounded-full mr-3"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h4 className="font-medium text-gray-900">{post.author}</h4>
                              <p className="text-xs text-gray-500">{post.authorRole} • {post.timeAgo}</p>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">
                              {/* More options */}
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                              </svg>
                            </button>
                          </div>
                          
                          <div className="mt-2">
                            <p className="text-gray-800">{post.content}</p>
                          </div>
                          
                          {post.image && (
                            <div className="mt-3">
                              <img 
                                src={post.image} 
                                alt="Post" 
                                className="rounded-lg w-full h-auto"
                              />
                            </div>
                          )}
                          
                          <div className="mt-3 flex justify-between items-center">
                            <div className="flex items-center text-gray-500 text-sm">
                              <span className="flex items-center mr-4">
                                <ThumbsUp size={16} className="mr-1" />
                                {post.likes}
                              </span>
                              <span>{post.comments} comments</span>
                            </div>
                            <span className="text-gray-500 text-sm">{post.shares} shares</span>
                          </div>
                          
                          <div className="mt-3 flex border-t border-gray-100 pt-3">
                            <button className="flex-1 flex justify-center items-center py-1 text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-md transition-colors duration-300">
                              <Heart size={16} className="mr-2" />
                              Like
                            </button>
                            <button className="flex-1 flex justify-center items-center py-1 text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-md transition-colors duration-300">
                              <MessageCircle size={16} className="mr-2" />
                              Comment
                            </button>
                            <button className="flex-1 flex justify-center items-center py-1 text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-md transition-colors duration-300">
                              <Share2 size={16} className="mr-2" />
                              Share
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'news' && (
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Latest News & Announcements</h3>
                  {news.map(item => (
                    <NewsCard
                      key={item.id}
                      title={item.title}
                      date={item.date}
                      snippet={item.snippet}
                      image={item.image}
                    />
                  ))}
                </div>
              )}
              
              {activeTab === 'research' && (
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Research Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {researchHighlights.map(research => (
                      <div key={research.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                        <img src={research.image} alt={research.title} className="w-full h-40 object-cover" />
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-800">{research.title}</h4>
                          <p className="text-sm text-gray-500 mb-2">{research.team}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Award size={14} className="mr-1" />
                            <span>{research.citations} citations</span>
                          </div>
                          <button className="mt-3 w-full py-2 bg-orange-500 text-white text-sm font-medium rounded-md hover:bg-orange-600 transition-colors duration-300">
                            View Research
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'faculty' && (
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Faculty Profiles</h3>
                  {facultyProfiles.map(faculty => (
                    <div key={faculty.id} className="flex items-center p-3 border-b border-gray-100 last:border-b-0">
                      <img src={faculty.image} alt={faculty.name} className="h-16 w-16 rounded-full mr-4" />
                      <div>
                        <h4 className="font-medium text-gray-800">{faculty.name}</h4>
                        <p className="text-sm text-gray-500">{faculty.role}</p>
                        <p className="text-xs text-gray-500 mt-1">Expertise: {faculty.expertise}</p>
                      </div>
                      <button className="ml-auto px-3 py-1 bg-orange-100 text-orange-500 text-xs font-medium rounded-full hover:bg-orange-200 transition-colors duration-300">
                        View Profile
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-800">Alumni Spotlight</h3>
                <p className="text-xs text-gray-500 mt-1">Our graduates making an impact in the world</p>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {alumniSpotlight.map(alumni => (
                    <div key={alumni.id} className="bg-gray-50 rounded-lg p-4 text-center">
                      <img src={alumni.image} alt={alumni.name} className="h-16 w-16 rounded-full mx-auto mb-3" />
                      <h4 className="font-medium text-gray-800">{alumni.name}</h4>
                      <p className="text-xs text-gray-500">Class of {alumni.graduation}</p>
                      <p className="text-sm text-gray-700 mt-2">{alumni.currentRole}</p>
                      <p className="text-xs text-gray-500 mt-1">{alumni.achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

interface MapPinProps extends React.SVGProps<SVGSVGElement> {}
function MapPin(props: MapPinProps): ReactNamespace.ReactElement {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}   