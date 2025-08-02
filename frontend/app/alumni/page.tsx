"use client";
import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Calendar, 
  Users, 
  Network, 
  GraduationCap, 
  Gift, 
  FileText, 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  Clock, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Search,
  MailCheck,
  Phone
} from 'lucide-react';
import { MainNav } from "@/components/main-nav";
import Footer from "@/components/footer";

// Sample data
const alumniStories = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    gradYear: 2010,
    position: "Senior Research Scientist at NASA",
    story: "My time at Tech Institute taught me to push boundaries. Now I'm working on the Mars exploration project, developing systems that will help us understand the red planet better.",
    image: "/st.jpg"
  },
  {
    id: 2,
    name: "Michael Chang",
    gradYear: 2015,
    position: "Founder & CEO of GreenTech Solutions",
    story: "The entrepreneurship program gave me the tools to start my own sustainable energy company. We've now provided clean energy solutions to over 50,000 homes worldwide.",
    image: "/st2.jpg"
  },
  {
    id: 3,
    name: "Priya Patel",
    gradYear: 2012,
    position: "Lead Software Engineer at Google",
    story: "From coding in the computer labs until dawn to now leading a team of 30 engineers. The rigorous curriculum prepared me for the fast-paced tech industry.",
    image: "/st2.jpg"
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Alumni Gala",
    date: "June 15, 2025",
    time: "6:30 PM - 10:00 PM",
    location: "Grand Ballroom, University Campus",
    description: "Join us for an evening of celebration, networking, and honoring distinguished alumni. This year's theme: 'Innovation That Matters'."
  },
  {
    id: 2,
    title: "Class of 2015 Reunion",
    date: "July 22, 2025",
    time: "12:00 PM - 4:00 PM",
    location: "Engineering Campus, Main Quad",
    description: "Celebrate a decade of achievements with your classmates. Campus tours, faculty meet-ups, and lunch included."
  },
  {
    id: 3,
    title: "Tech Career Fair for Alumni",
    date: "August 5, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "Technology Center, West Wing",
    description: "Connect with top companies looking to hire experienced engineers. Bring your resume and prepare for on-site interviews."
  }
];

const givingOptions = [
  {
    id: 1,
    title: "Scholarship Fund",
    description: "Support promising students who need financial assistance to pursue their engineering dreams.",
    impact: "Your $1,000 gift can cover course materials for one semester for a student in need."
  },
  {
    id: 2,
    title: "Research Initiatives",
    description: "Fund groundbreaking research in areas like renewable energy, AI, and biotechnology.",
    impact: "Research funded by alumni contributions has led to 12 patents in the last year alone."
  },
  {
    id: 3,
    title: "Campus Improvement",
    description: "Help modernize laboratories, classrooms, and student spaces.",
    impact: "Recent renovations have increased student productivity and satisfaction by 40%."
  },
  {
    id: 4,
    title: "Mentorship Program",
    description: "Support programs that connect current students with experienced alumni mentors.",
    impact: "Students with mentors are 65% more likely to secure internships before graduation."
  }
];

export default function AlumniPage() {
  const [activeStory, setActiveStory] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % alumniStories.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  interface SubscribeEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubscribe = (e: SubscribeEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  interface ToggleFAQ {
    (id: number): void;
  }

  const toggleFAQ: ToggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <MainNav />
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-500 to-amber-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Welcome Back, Engineers</h1>
            <p className="text-xl text-white mb-8">Connecting the past, present, and future of Tech Institute</p>
            <button className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center mx-auto">
              Connect Now <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0% 100%)' }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-5xl font-bold text-orange-500 mb-2">35,000+</div>
            <div className="text-gray-600">Global Alumni Network</div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-5xl font-bold text-orange-500 mb-2">120+</div>
            <div className="text-gray-600">Countries Represented</div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-5xl font-bold text-orange-500 mb-2">$14M</div>
            <div className="text-gray-600">Raised Last Year</div>
          </div>
        </div>
      </section>

      {/* Alumni Stories Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-10">
            <FileText className="text-orange-500 mr-3" size={28} />
            <h2 className="text-3xl font-bold">Alumni Stories</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex space-x-4 mb-6">
                  {alumniStories.map((_, index) => (
                    <div 
                      key={index}
                      className={`h-2 rounded-full flex-1 cursor-pointer ${activeStory === index ? 'bg-orange-500' : 'bg-gray-300'}`}
                      onClick={() => setActiveStory(index)}
                    ></div>
                  ))}
                </div>
                
                <img 
                  src={alumniStories[activeStory].image} 
                  alt={alumniStories[activeStory].name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                
                <h3 className="text-xl font-bold mb-1">{alumniStories[activeStory].name}</h3>
                <p className="text-gray-500 mb-1">Class of {alumniStories[activeStory].gradYear}</p>
                <p className="text-orange-500 font-medium mb-4">{alumniStories[activeStory].position}</p>
                <p className="text-gray-700">{alumniStories[activeStory].story}</p>
                
                <button className="mt-6 text-orange-500 font-semibold flex items-center hover:text-orange-600 transition-colors">
                  Read full story <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="bg-orange-500 text-white p-8 rounded-lg shadow-md h-full flex flex-col justify-center">
                <Sparkles className="h-12 w-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Share Your Journey</h3>
                <p className="mb-6">Your experience matters. Inspire the next generation of engineers by sharing your professional journey, challenges you've overcome, and lessons you've learned along the way.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-orange-600 bg-opacity-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Feature in Alumni Magazine</h4>
                    <p className="text-sm">Reach over 35,000 fellow alumni through our quarterly publication</p>
                  </div>
                  <div className="bg-orange-600 bg-opacity-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Speak at Alumni Events</h4>
                    <p className="text-sm">Share your expertise at reunions, webinars, or career panels</p>
                  </div>
                </div>
                
                <button className="bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 self-start flex items-center">
                  Submit Your Story <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Reunions Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-10">
            <Calendar className="text-orange-500 mr-3" size={28} />
            <h2 className="text-3xl font-bold">Events & Reunions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-orange-500 text-white p-4">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <Calendar className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">{event.date}</p>
                      <p className="text-gray-600 text-sm">{event.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <p>{event.location}</p>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{event.description}</p>
                  
                  <div className="flex justify-between">
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
                      Register Now
                    </button>
                    <button className="text-orange-500 flex items-center hover:text-orange-600 transition-colors">
                      Details <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors duration-300">
              View All Events
            </button>
          </div>
        </div>
      </section>

      {/* Alumni Network Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-10">
            <Network className="text-orange-500 mr-3" size={28} />
            <h2 className="text-3xl font-bold">Alumni Network</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6">Connect & Collaborate</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="border border-gray-200 rounded-lg p-5">
                    <div className="bg-orange-100 text-orange-500 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Mentorship Program</h4>
                    <p className="text-gray-600 mb-4">Guide current students and recent graduates as they navigate their early careers.</p>
                    <a href="#" className="text-orange-500 font-medium flex items-center hover:text-orange-600">
                      Become a mentor <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-5">
                    <div className="bg-orange-100 text-orange-500 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Network className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Industry Groups</h4>
                    <p className="text-gray-600 mb-4">Join specialized groups based on your industry to network and share insights.</p>
                    <a href="#" className="text-orange-500 font-medium flex items-center hover:text-orange-600">
                      Browse groups <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-5">
                    <div className="bg-orange-100 text-orange-500 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Career Services</h4>
                    <p className="text-gray-600 mb-4">Access exclusive job boards, resume reviews, and professional development resources.</p>
                    <a href="#" className="text-orange-500 font-medium flex items-center hover:text-orange-600">
                      Explore services <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-5">
                    <div className="bg-orange-100 text-orange-500 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Regional Chapters</h4>
                    <p className="text-gray-600 mb-4">Connect with fellow alumni in your area through our 45+ regional chapters worldwide.</p>
                    <a href="#" className="text-orange-500 font-medium flex items-center hover:text-orange-600">
                      Find your chapter <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-orange-500 text-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4">Alumni Directory</h3>
                <p className="mb-6">Search and connect with over 35,000 Tech Institute alumni across the globe.</p>
                
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search by name, class year, or industry"
                    className="w-full bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 rounded-md py-2 px-4 pr-10"
                  />
                  <Search className="absolute right-3 top-2.5 h-5 w-5" />
                </div>
                
                <button className="w-full bg-white text-orange-500 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                  Access Directory
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
                <p className="text-gray-600 mb-6">Get the latest news, events, and opportunities delivered to your inbox.</p>
                
                {subscribed ? (
                  <div className="bg-green-100 text-green-800 p-4 rounded-md flex items-center mb-4">
                    <MailCheck className="h-5 w-5 mr-2" />
                    <p>Thank you for subscribing!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="mb-6">
                    <div className="mb-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="w-full border border-gray-300 rounded-md py-2 px-4"
                        required
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
                
                <div className="flex justify-between">
                  <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giving Back Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-10">
            <Gift className="text-orange-500 mr-3" size={28} />
            <h2 className="text-3xl font-bold">Give Back</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6">Make an Impact</h3>
                <p className="text-gray-700 mb-6">Your support helps us maintain excellence in engineering education and research. Choose where you'd like to make a difference:</p>
                
                <div className="space-y-6">
                  {givingOptions.map((option) => (
                    <div key={option.id} className="border-b border-gray-200 pb-5">
                      <h4 className="text-lg font-semibold mb-2">{option.title}</h4>
                      <p className="text-gray-600 mb-3">{option.description}</p>
                      <div className="bg-orange-100 text-orange-800 p-3 rounded-md text-sm">
                        <strong>Impact:</strong> {option.impact}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex flex-col md:flex-row md:space-x-4">
                  <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors mb-4 md:mb-0">
                    Make a Gift
                  </button>
                  <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition-colors">
                    Learn About Planned Giving
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-800 text-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-bold mb-6">Donor Recognition</h3>
                <p className="mb-6">Join our community of committed alumni who are making a difference through their generous support.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-orange-400 font-semibold mb-1">President's Circle</h4>
                    <p>Annual gifts of $10,000 or more</p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-orange-400 font-semibold mb-1">Dean's Society</h4>
                    <p>Annual gifts of $5,000 to $9,999</p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-orange-400 font-semibold mb-1">Engineering Leaders</h4>
                    <p>Annual gifts of $1,000 to $4,999</p>
                  </div>
                  <div>
                    <h4 className="text-orange-400 font-semibold mb-1">Century Club</h4>
                    <p>Annual gifts of $100 to $999</p>
                  </div>
                </div>
                
                <button className="flex items-center text-orange-400 hover:text-orange-300 transition-colors font-medium">
                  View donor stories <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
              
              <div className="bg-orange-500 text-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                <p className="mb-6">Last year, alumni donations helped us achieve:</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-orange-600 bg-opacity-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold mb-1">248</div>
                    <div className="text-sm">Scholarships Awarded</div>
                  </div>
                  <div className="bg-orange-600 bg-opacity-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold mb-1">12</div>
                    <div className="text-sm">New Research Labs</div>
                  </div>
                  <div className="bg-orange-600 bg-opacity-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold mb-1">35</div>
                    <div className="text-sm">Industry Partnerships</div>
                  </div>
                  <div className="bg-orange-600 bg-opacity-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold mb-1">$3.2M</div>
                    <div className="text-sm">Research Grants</div>
                  </div>
                </div>
                
                <button className="w-full bg-white text-orange-500 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                  Read Annual Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about alumni benefits, events, and giving opportunities.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-3xl mx-auto">
            <div 
              className="border-b border-gray-200 p-6 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => toggleFAQ(1)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">How do I update my alumni information?</h3>
                {expandedFAQ === 1 ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-orange-500" />}
              </div>
              {expandedFAQ === 1 && (
                <div className="mt-4 text-gray-600">
                  <p>You can update your contact information, professional details, and preferences through our online alumni portal. Simply log in with your credentials and navigate to the "My Profile" section. If you're having trouble accessing your account, please contact our alumni office at alumni@techinstitute.edu or call (555) 123-4567.</p>
                </div>
              )}
            </div>
            
            <div 
              className="border-b border-gray-200 p-6 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => toggleFAQ(2)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">What benefits do alumni receive?</h3>
                {expandedFAQ === 2 ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-orange-500" />}
              </div>
              {expandedFAQ === 2 && (
                <div className="mt-4 text-gray-600">
                  <p>As a Tech Institute alumnus, you enjoy a range of benefits including:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Lifetime email address</li>
                    <li>Access to the online alumni directory</li>
                    <li>Career services and job board access</li>
                    <li>Library privileges and database access</li>
                    <li>Discounted continuing education courses</li>
                    <li>Special rates for campus events and facilities</li>
                    <li>Subscription to our quarterly alumni magazine</li>
                  </ul>
                </div>
              )}
            </div>
            
            <div 
              className="border-b border-gray-200 p-6 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => toggleFAQ(3)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">How can I get involved as an alumni volunteer?</h3>
                {expandedFAQ === 3 ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-orange-500" />}
              </div>
              {expandedFAQ === 3 && (
                <div className="mt-4 text-gray-600">
                  <p>We offer many volunteer opportunities including:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Mentoring current students</li>
                    <li>Serving on an alumni board or committee</li>
                    <li>Organizing regional chapter events</li>
                    <li>Participating in student recruitment</li>
                    <li>Speaking at campus events</li>
                    <li>Helping with fundraising initiatives</li>
                  </ul>
                  <p className="mt-3">Fill out our volunteer interest form in the "Get Involved" section of the alumni portal to indicate your areas of interest.</p>
                </div>
              )}
            </div>
            
            <div 
              className="border-b border-gray-200 p-6 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => toggleFAQ(4)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">How is my donation used?</h3>
                {expandedFAQ === 4 ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-orange-500" />}
              </div>
              {expandedFAQ === 4 && (
                <div className="mt-4 text-gray-600">
                  <p>Your donation directly supports the university's mission in several ways, depending on your designation. You can choose to support:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Student scholarships and financial aid</li>
                    <li>Research initiatives and laboratory equipment</li>
                    <li>Faculty development and recruitment</li>
                    <li>Campus facilities and infrastructure improvements</li>
                    <li>Student organizations and extracurricular activities</li>
                    <li>The university's endowment for long-term stability</li>
                  </ul>
                  <p className="mt-3">Every gift, regardless of size, makes a meaningful impact. We provide detailed annual reports on how donations are used.</p>
                </div>
              )}
            </div>
            
            <div 
              className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => toggleFAQ(5)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">How do I request a transcript?</h3>
                {expandedFAQ === 5 ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-orange-500" />}
              </div>
              {expandedFAQ === 5 && (
                <div className="mt-4 text-gray-600">
                  <p>Official transcripts can be requested through the university registrar's office. You can submit a request:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Online through our secure alumni portal</li>
                    <li>By mail using the transcript request form</li>
                    <li>In person at the registrar's office</li>
                  </ul>
                  <p className="mt-3">Please note there is a $10 fee per official transcript. Processing typically takes 3-5 business days, plus delivery time.</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">Don't see your question? <a href="#" className="text-orange-500 font-medium hover:text-orange-600">Contact the Alumni Office</a></p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
