"use client";
import { useState, useEffect } from 'react';
import { MainNav } from "@/components/main-nav";
import Footer from "@/components/footer";
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  Award, 
  ChevronRight, 
  Star, 
  ArrowRight, 
  Building, 
  Github,
  ExternalLink,
  Moon,
  Sun,
  Sparkles,
  Quote
} from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for charts and statistics
const yearlyData = [
  { year: '2019', offers: 275, avgPackage: 6.2, companies: 48 },
  { year: '2020', offers: 302, avgPackage: 6.8, companies: 52 },
  { year: '2021', offers: 340, avgPackage: 7.5, companies: 65 },
  { year: '2022', offers: 412, avgPackage: 8.4, companies: 78 },
  { year: '2023', offers: 486, avgPackage: 9.2, companies: 92 },
  { year: '2024', offers: 525, avgPackage: 10.5, companies: 105 },
];

const branchWiseData = [
  { branch: 'CSE', placed: 98, offers: 158 },
  { branch: 'ECE', placed: 92, offers: 124 },
  { branch: 'EEE', placed: 88, offers: 112 },
  { branch: 'ME', placed: 85, offers: 105 },
  { branch: 'CE', placed: 82, offers: 98 },
];

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Engineer @ Google",
    year: "2024",
    image: "/st.jpg",
    quote: "The placement cell's continuous support and training sessions helped me secure my dream job at Google.",
    package: "32 LPA"
  },
  {
    id: 2,
    name: "Arjun Patel",
    role: "Data Scientist @ Microsoft",
    year: "2023",
    image: "/st2.jpg",
    quote: "From resume building to mock interviews, our placement team prepared me for every step of the recruitment process.",
    package: "28 LPA"
  },
  {
    id: 3,
    name: "Neha Gupta",
    role: "Product Manager @ Amazon",
    year: "2024",
    image: "/st.jpg",
    quote: "The industry connections our college has built over years gave me access to opportunities I couldn't have found elsewhere.",
    package: "26 LPA"
  },
  {
    id: 4,
    name: "Rahul Verma",
    role: "ML Engineer @ NVIDIA",
    year: "2023",
    image: "/st2.jpg",
    quote: "Technical workshops conducted by the placement cell aligned perfectly with industry requirements and boosted my confidence.",
    package: "30 LPA"
  },
];

const topCompanies = [
  {
    id: 1,
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },
  {
    id: 3,
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },
  {
    id: 5,
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
  },
  {
    id: 6,
    name: "NVIDIA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg"
  },
  {
    id: 9,
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
  },
  {
    id: 10,
    name: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
  },
  { id: 21, name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
  { id: 24, name: "AMD", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg" },
  { id: 28, name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
  { id: 29, name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { id: 31, name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png" }
];

// Placement Page Component
export default function PlacementPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [visibleSection, setVisibleSection] = useState('');
  const [counter, setCounter] = useState({
    offers: 0,
    companies: 0,
    highestPackage: 0,
    avgPackage: 0
  });

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Animated counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => ({
        offers: prev.offers < 525 ? prev.offers + 5 : 525,
        companies: prev.companies < 105 ? prev.companies + 1 : 105,
        highestPackage: prev.highestPackage < 45 ? prev.highestPackage + 0.5 : 45,
        avgPackage: prev.avgPackage < 10.5 ? prev.avgPackage + 0.1 : 10.5
      }));
    }, 30);

    if (counter.offers >= 525 && counter.companies >= 105 && 
        counter.highestPackage >= 45 && counter.avgPackage >= 10.5) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [counter]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id);
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Smooth scroll function
interface ScrollToSection {
    (sectionId: string): void;
}

const scrollToSection: ScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      {/* Header with Nav */}
      <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-md transition-all duration-300">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          <MainNav />
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        
        {/* Quick Navigation */}
        <div className="container mx-auto px-4 overflow-x-auto hide-scrollbar">
          <nav className="flex space-x-2 py-2 md:justify-center">
            {['about', 'statistics', 'companies', 'success-stories'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-4 py-2 whitespace-nowrap text-sm rounded-full transition-all ${
                  visibleSection === section
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'hover:bg-orange-100 dark:hover:bg-gray-800'
                }`}
              >
                {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 opacity-90 dark:opacity-80"></div>
          <div 
            className="absolute inset-0 bg-[url('/api/placeholder/1200/600')] bg-center bg-cover opacity-20 mix-blend-overlay"
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center mb-4 bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm rounded-full px-4 py-1">
                <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
                <span className="text-sm font-medium text-white">Shaping Future Leaders</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Your Career Journey <br/>Starts Here
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Connect with top industry giants and unlock your potential through our prestigious placement programs
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-3 bg-white text-orange-500 font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  For Students
                </button>
                <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300">
                  For Recruiters
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16 md:py-24 opacity-0 transition-opacity duration-1000">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Placement Cell</h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Bridging the gap between academia and industry since 1985
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#ff914d" }}>
                  Empowering Careers, Building Futures
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our placement cell is dedicated to prepare students for successful careers by providing comprehensive 
                  training, industry connections, and guidance. With a track record of excellence spanning over three 
                  decades, we have consistently secured placements with leading organizations across the globe.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-orange-100 dark:bg-gray-800 p-2 rounded-full mr-4">
                      <Users className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Dedicated Team</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        20+ professionals working round the clock for student placements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 dark:bg-gray-800 p-2 rounded-full mr-4">
                      <Building className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Industry Connections</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Partnerships with 500+ companies across multiple sectors
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 dark:bg-gray-800 p-2 rounded-full mr-4">
                      <Award className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Training Programs</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Specialized training modules aligned with industry requirements
                      </p>
                    </div>
                  </div>
                </div>
                <button className="mt-8 inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full shadow-md transition-all duration-300">
                  Learn More About Us <ChevronRight className="ml-2 w-4 h-4" />
                </button>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/placement.jpg" 
                    alt="Placement Cell Team" 
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <p className="text-white text-lg font-medium">Placement Support</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 rounded-lg shadow-lg hidden md:block">
                  <p className="text-sm font-semibold">Est. 1985</p>
                  <p className="text-xs">40 years of excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section id="statistics" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 opacity-0 transition-opacity duration-1000">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Placement Statistics</h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our numbers speak for our commitment to excellence
              </p>
            </div>

            {/* Stats Counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-orange-100 dark:bg-gray-600 rounded-full">
                  <Briefcase className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-3xl font-bold mb-1 text-orange-500">{counter.offers}+</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Job Offers</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-orange-100 dark:bg-gray-600 rounded-full">
                  <Building className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-3xl font-bold mb-1 text-orange-500">{counter.companies}+</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Recruiting Companies</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-orange-100 dark:bg-gray-600 rounded-full">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-3xl font-bold mb-1 text-orange-500">{counter.highestPackage.toFixed(1)}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Highest Package (LPA)</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-orange-100 dark:bg-gray-600 rounded-full">
                  <TrendingUp className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-3xl font-bold mb-1 text-orange-500">{counter.avgPackage.toFixed(1)}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Average Package (LPA)</p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Yearly Placement Trends</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={yearlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="offers" stroke="#ff914d" strokeWidth={2} activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="avgPackage" stroke="#3b82f6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Branch-wise Placements (2024)</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={branchWiseData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="branch" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="placed" name="Students Placed %" fill="#ff914d" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="offers" name="Total Offers" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full shadow-md transition-all duration-300">
                View Detailed Reports <ExternalLink className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Top Recruiting Companies */}
        <section id="companies" className="py-16 md:py-24 opacity-0 transition-opacity duration-1000">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Top Recruiters</h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Global industry leaders who trust our talent
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {topCompanies.map(company => (
                <div 
                  key={company.id}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center"
                >
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`} 
                    className="h-12 object-contain mb-3"
                  />
                  <p className="font-medium text-sm text-center">{company.name}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                ...and 90+ more companies visit our campus every year
              </p>
              <button className="inline-flex items-center px-6 py-3 border border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-gray-800 font-medium rounded-full transition-all duration-300">
                View All Partners <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section id="success-stories" className="py-16 md:py-24 bg-orange-50 dark:bg-gray-800 opacity-0 transition-opacity duration-1000">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Hear from our students who made it big
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map(testimonial => (
                <div 
                  key={testimonial.id}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="relative mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 object-cover rounded-full"
                      />
                      <div className="absolute -right-1 -bottom-1 bg-green-500 text-white p-1 rounded-full">
                        <Star className="w-3 h-3" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-orange-500 font-medium text-sm">{testimonial.role}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">Batch of {testimonial.year}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="absolute text-orange-200 dark:text-gray-600 w-8 h-8 -left-2 -top-2 opacity-50" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm pl-6">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-600">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-400">Package:</span>
                      <span className="font-bold text-green-600 dark:text-green-400">{testimonial.package}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full shadow-md transition-all duration-300">
                Read More Stories <ChevronRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Shape Your Future?
              </h2>
              <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
                Whether you're a student looking to kickstart your career or a recruiter searching for fresh talent, 
                our placement cell is here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-white text-orange-500 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  For Students
                </button>
                <button className="px-8 py-4 bg-orange-600 border border-white text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  For Recruiters
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 z-40"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Add CSS for animations */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}