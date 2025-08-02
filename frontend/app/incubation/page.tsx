"use client";
import React, { useState } from "react";
import {
  Lightbulb,
  Rocket,
  Users,
  Calendar,
  FileText,
  Award,
  TrendingUp,
  Target,
  Star,
  ChevronRight,
  Play,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  CheckCircle,
  Clock,
  DollarSign,
  Briefcase,
  BookOpen,
  Globe,
  Zap,
} from "lucide-react";
import { MainNav } from "@/components/main-nav";
import Footer from "@/components/footer";

const IncubationPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);

  const startups = [
    {
      id: 1,
      name: "TechFlow AI",
      category: "Artificial Intelligence",
      stage: "Series A",
      funding: "$2.5M",
      description: "AI-powered workflow automation for enterprises",
      founded: "2022",
      team: 12,
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "GreenTech Solutions",
      category: "CleanTech",
      stage: "Seed",
      funding: "$800K",
      description: "Sustainable energy solutions for rural communities",
      founded: "2023",
      team: 8,
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "MedConnect",
      category: "HealthTech",
      stage: "Pre-Series A",
      funding: "$1.2M",
      description:
        "Telemedicine platform connecting rural patients with specialists",
      founded: "2022",
      team: 15,
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    },
  ];

  const mentors = [
    {
      name: "Dr. Rajesh Kumar",
      expertise: "Technology & Innovation",
      company: "Former CTO, Tech Mahindra",
      experience: "20+ years",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    },
    {
      name: "Priya Sharma",
      expertise: "Business Strategy",
      company: "Founder, StartupBoost",
      experience: "15+ years",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
    },
    {
      name: "Arun Patel",
      expertise: "Product Development",
      company: "VP Product, Flipkart",
      experience: "12+ years",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
  ];

  const events = [
    {
      title: "Startup Pitch Day",
      date: "June 15, 2024",
      time: "10:00 AM - 4:00 PM",
      type: "Competition",
      description:
        "Present your startup idea to industry experts and investors",
    },
    {
      title: "AI & Machine Learning Workshop",
      date: "June 22, 2024",
      time: "2:00 PM - 6:00 PM",
      type: "Workshop",
      description: "Hands-on workshop on implementing AI solutions in startups",
    },
    {
      title: "Funding Masterclass",
      date: "June 28, 2024",
      time: "11:00 AM - 3:00 PM",
      type: "Masterclass",
      description: "Learn the art of raising funds from seasoned entrepreneurs",
    },
  ];

  const resources = [
    {
      category: "Legal & Compliance",
      items: [
        "Company Registration Guide",
        "IP Protection Handbook",
        "Tax Planning for Startups",
        "Legal Templates",
      ],
    },
    {
      category: "Funding & Investment",
      items: [
        "Pitch Deck Templates",
        "Financial Modeling Tools",
        "Investor Database",
        "Grant Application Guide",
      ],
    },
    {
      category: "Technology & Development",
      items: [
        "Cloud Credits Program",
        "Development Tools Access",
        "API Documentation",
        "Tech Stack Guidelines",
      ],
    },
    {
      category: "Marketing & Sales",
      items: [
        "Digital Marketing Toolkit",
        "Brand Guidelines Template",
        "Sales Strategy Framework",
        "Customer Research Tools",
      ],
    },
  ];

  type TabButtonProps = {
    id: string;
    label: string;
    icon: React.ElementType;
    isActive: boolean;
  };

  const TabButton = ({ id, label, icon: Icon, isActive }: TabButtonProps) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
        isActive
          ? "bg-[#ff914d] text-white shadow-lg shadow-[#ff914d]/30"
          : "text-gray-600 hover:text-[#ff914d] hover:bg-orange-50"
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );

  type StatCardProps = {
    icon: React.ElementType;
    value: React.ReactNode;
    label: string;
    trend?: string;
  };

  const StatCard = ({ icon: Icon, value, label, trend }: StatCardProps) => (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-gradient-to-br from-[#ff914d] to-[#ff7b2d] rounded-lg">
          <Icon className="text-white" size={24} />
        </div>
        {trend && (
          <div className="flex items-center text-green-600 text-sm font-medium">
            <TrendingUp size={16} className="mr-1" />
            {trend}
          </div>
        )}
      </div>
      <div className="text-2xl font-bold text-gray-800 mb-1">{value}</div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  );

  type Startup = {
    id: number;
    name: string;
    category: string;
    stage: string;
    funding: string;
    description: string;
    founded: string;
    team: number;
    image: string;
  };

  const StartupCard = ({ startup }: { startup: Startup }) => (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={() => setSelectedStartup(startup)}
    >
      <div className="h-48 bg-gradient-to-br from-[#ff914d] to-[#ff7b2d] relative overflow-hidden">
        <img
          src={startup.image}
          alt={startup.name}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-[#ff914d]">
          {startup.stage}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800">{startup.name}</h3>
          <span className="text-[#ff914d] font-semibold">
            {startup.funding}
          </span>
        </div>
        <p className="text-gray-600 mb-3">{startup.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Founded: {startup.founded}</span>
          <span>Team: {startup.team} members</span>
        </div>
        <div className="mt-4 px-3 py-1 bg-orange-50 rounded-full text-[#ff914d] text-sm font-medium inline-block">
          {startup.category}
        </div>
      </div>
    </div>
  );

  type Mentor = {
    name: string;
    expertise: string;
    company: string;
    experience: string;
    image: string;
  };

  const MentorCard = ({ mentor }: { mentor: Mentor }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-4">
        <img
          src={mentor.image}
          alt={mentor.name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-bold text-gray-800">{mentor.name}</h3>
          <p className="text-[#ff914d] font-medium">{mentor.expertise}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-2">{mentor.company}</p>
      <p className="text-sm text-gray-500">{mentor.experience} experience</p>
      <button className="mt-4 w-full bg-gradient-to-r from-[#ff914d] to-[#ff7b2d] text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
        Connect
      </button>
    </div>
  );

  type Event = {
    title: string;
    date: string;
    time: string;
    type: string;
    description: string;
  };

  const EventCard = ({ event }: { event: Event }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            {event.title}
          </h3>
          <div className="flex items-center text-gray-600 mb-1">
            <Calendar size={16} className="mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock size={16} className="mr-2" />
            <span>{event.time}</span>
          </div>
        </div>
        <span className="px-3 py-1 bg-gradient-to-r from-[#ff914d] to-[#ff7b2d] text-white text-sm rounded-full">
          {event.type}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{event.description}</p>
      <button className="w-full bg-orange-50 text-[#ff914d] py-2 px-4 rounded-lg font-medium hover:bg-orange-100 transition-colors">
        Register Now
      </button>
    </div>
  );

  // IconOption component for hero section visuals
  type IconOptionProps = {
    title: string;
    description: string;
    children: React.ReactNode;
  };

  const IconOption = ({ title, description, children }: IconOptionProps) => (
    <div className="flex flex-col items-center mx-4">
      {children}
      <div className="mt-2 text-center">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-white/80">{description}</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <MainNav />
      {/* Hero Section */}
      <div className="relative mt-16 bg-gradient-to-br from-[#ff914d] via-[#ff7b2d] to-[#ff6b1d] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <IconOption
                title=""
                description=""
              >
                <div className="relative">
                  <div
                    className="w-20 h-20 bg-gradient-to-br from-[#ff914d] via-[#ff7b2d] to-[#ff6b1d] flex items-center justify-center shadow-2xl shadow-white/90"
                    style={{
                      borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
                      animation: "morph 2s ease-in-out infinite",
                    }}
                  >
                    <Rocket size={28} className="text-white" />
                  </div>
                  <style jsx>{`
                    @keyframes morph {
                      0% {
                        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
                      }
                      50% {
                        border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
                      }
                      100% {
                        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
                      }
                    }
                  `}</style>
                </div>
              </IconOption>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              PPG Innovation Hub
              <span className="block text-3xl md:text-4xl font-light mt-2">
                Engineering Excellence Incubator
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Transforming groundbreaking ideas into successful ventures through
              comprehensive support, mentorship, and state-of-the-art
              facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#ff914d] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#ff914d] transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={Rocket}
            value="150+"
            label="Startups Incubated"
            trend="+25%"
          />
          <StatCard
            icon={DollarSign}
            value="₹50Cr+"
            label="Total Funding Raised"
            trend="+40%"
          />
          <StatCard
            icon={Users}
            value="200+"
            label="Active Entrepreneurs"
            trend="+15%"
          />
          <StatCard icon={Award} value="85%" label="Success Rate" trend="+5%" />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <TabButton
            id="overview"
            label="Overview"
            icon={Lightbulb}
            isActive={activeTab === "overview"}
          />
          <TabButton
            id="startups"
            label="Startups"
            icon={Rocket}
            isActive={activeTab === "startups"}
          />
          <TabButton
            id="apply"
            label="Apply"
            icon={FileText}
            isActive={activeTab === "apply"}
          />
          <TabButton
            id="mentors"
            label="Mentors"
            icon={Users}
            isActive={activeTab === "mentors"}
          />
          <TabButton
            id="events"
            label="Events"
            icon={Calendar}
            isActive={activeTab === "events"}
          />
          <TabButton
            id="resources"
            label="Resources"
            icon={BookOpen}
            isActive={activeTab === "resources"}
          />
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-500">
          {activeTab === "overview" && (
            <div className="space-y-12">
              {/* Mission Section */}
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  To foster innovation and entrepreneurship among engineering
                  students and faculty by providing comprehensive support,
                  world-class facilities, and access to industry expertise.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Target,
                    title: "Strategic Guidance",
                    description:
                      "Expert mentorship and strategic planning to help startups navigate challenges and scale effectively.",
                  },
                  {
                    icon: Briefcase,
                    title: "Funding Support",
                    description:
                      "Access to angel investors, VCs, and government grants to fuel your startup's growth journey.",
                  },
                  {
                    icon: Globe,
                    title: "Network Access",
                    description:
                      "Connect with alumni network, industry partners, and fellow entrepreneurs for collaboration.",
                  },
                  {
                    icon: BookOpen,
                    title: "Learning Resources",
                    description:
                      "Comprehensive library of startup resources, templates, and educational materials.",
                  },
                  {
                    icon: Award,
                    title: "Recognition Programs",
                    description:
                      "Showcase your achievements through our startup awards and recognition programs.",
                  },
                  {
                    icon: Rocket,
                    title: "Launch Support",
                    description:
                      "End-to-end support from ideation to market launch with dedicated acceleration programs.",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-[#ff914d] to-[#ff7b2d] rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* About College Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                      About Our Institution
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Established in 1985, our engineering college has been at
                      the forefront of technical education and innovation. With
                      over 5,000 students across various engineering
                      disciplines, we have consistently ranked among the top
                      engineering institutions in the country.
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Our incubation center, launched in 2018, has become a
                      beacon of entrepreneurial excellence, supporting over 150
                      startups and helping them raise more than ₹50 crores in
                      funding.
                    </p>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#ff914d]">
                          35+
                        </div>
                        <div className="text-sm text-gray-600">
                          Years of Excellence
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#ff914d]">
                          5000+
                        </div>
                        <div className="text-sm text-gray-600">Students</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#ff914d]">
                          300+
                        </div>
                        <div className="text-sm text-gray-600">
                          Faculty Members
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src="/ourstory.webp"
                      alt="College Campus"
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ff914d]/20 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "startups" && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Our Success Stories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Meet the innovative startups that have grown from ideas to
                  successful businesses in our incubator.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {startups.map((startup) => (
                  <StartupCard key={startup.id} startup={startup} />
                ))}
              </div>

              <div className="bg-gradient-to-r from-[#ff914d] to-[#ff7b2d] rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Join Our Success Stories?
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Transform your innovative idea into a thriving business with
                  our comprehensive incubation program.
                </p>
                <button className="bg-white text-[#ff914d] px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300">
                  Apply Now
                </button>
              </div>
            </div>
          )}

          {activeTab === "apply" && (
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Apply for Incubation
                </h2>
                <p className="text-xl text-gray-600">
                  Ready to turn your idea into reality? Join our incubation
                  program and get comprehensive support.
                </p>
              </div>

              {/* Application Process */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Application Process
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: "Submit Application",
                      description:
                        "Complete our online application form with your startup details and business plan.",
                    },
                    {
                      step: 2,
                      title: "Initial Review",
                      description:
                        "Our expert panel reviews your application and provides initial feedback within 7 days.",
                    },
                    {
                      step: 3,
                      title: "Pitch Presentation",
                      description:
                        "Selected candidates present their ideas to our selection committee.",
                    },
                    {
                      step: 4,
                      title: "Final Selection",
                      description:
                        "Successful startups are welcomed into our 6-month incubation program.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#ff914d] to-[#ff7b2d] rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligibility Criteria */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Eligibility Criteria
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Current students or recent graduates (within 2 years)",
                    "Innovative and scalable business idea",
                    "Commitment to full-time participation",
                    "Technology-focused or engineering solution",
                    "Team of 2-5 members recommended",
                    "Willingness to relocate to incubation facility",
                  ].map((criteria, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0"
                        size={20}
                      />
                      <span className="text-gray-700">{criteria}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Quick Application Form
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Startup Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff914d] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff914d] focus:border-transparent">
                      <option>Select Industry</option>
                      <option>FinTech</option>
                      <option>HealthTech</option>
                      <option>EdTech</option>
                      <option>AI/ML</option>
                      <option>IoT</option>
                      <option>CleanTech</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Founder Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff914d] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff914d] focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Brief Description
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff914d] focus:border-transparent"
                      placeholder="Describe your startup idea in a few sentences..."
                    ></textarea>
                  </div>
                </div>
                <button className="mt-6 w-full bg-gradient-to-r from-[#ff914d] to-[#ff7b2d] text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300">
                  Submit Application
                </button>
              </div>
            </div>
          )}

          {activeTab === "mentors" && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Expert Mentors
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Learn from industry veterans and successful entrepreneurs who
                  guide our startups to success.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mentors.map((mentor, index) => (
                  <MentorCard key={index} mentor={mentor} />
                ))}
              </div>

              {/* Mentorship Program */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Mentorship Program
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">
                      What You Get:
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "One-on-one sessions with industry experts",
                        "Strategic business planning guidance",
                        "Product development mentorship",
                        "Funding and investment advice",
                        "Market entry strategies",
                        "Network introductions",
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <Star
                            className="text-[#ff914d] flex-shrink-0"
                            size={16}
                          />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">
                      Mentor Categories:
                    </h4>
                    <div className="space-y-3">
                      {[
                        { category: "Technology", count: 25 },
                        { category: "Business Strategy", count: 18 },
                        { category: "Marketing & Sales", count: 15 },
                        { category: "Finance & Legal", count: 12 },
                        { category: "Product Design", count: 10 },
                      ].map((cat, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-gray-50 rounded-lg p-3"
                        >
                          <span className="font-medium text-gray-800">
                            {cat.category}
                          </span>
                          <span className="text-[#ff914d] font-bold">
                            {cat.count}+ Mentors
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "events" && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Events & Workshops
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Join our upcoming events and workshops designed to empower
                  startups with knowledge, networking opportunities, and
                  practical skills.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
              {/* Event Categories */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Event Categories
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      category: "Startup Pitching",
                      description:
                        "Learn how to effectively present your startup to investors and stakeholders.",
                      count: 5,
                    },
                    {
                      category: "Technology Workshops",
                      description:
                        "Hands-on sessions covering the latest technologies relevant to startups.",
                      count: 8,
                    },
                    {
                      category: "Business Strategy",
                      description:
                        "Workshops focused on business planning, scaling, and market entry strategies.",
                      count: 6,
                    },
                    {
                      category: "Funding & Investment",
                      description:
                        "Educational sessions on fundraising, investor relations, and financial planning.",
                      count: 4,
                    },
                  ].map((cat, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-[#ff914d] transition-colors duration-300"
                    >
                      <div className="p-3 bg-gradient-to-br from-[#ff914d] to-[#ff7b2d] rounded-lg flex-shrink-0">
                        <Target className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">
                          {cat.category}
                        </h4>
                        <p className="text-gray-600 text-sm mt-1">
                          {cat.description}
                        </p>
                        <span className="inline-block mt-2 px-3 py-1 bg-orange-50 text-[#ff914d] text-sm font-medium rounded-full">
                          {cat.count} Events
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeTab === "resources" && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Resources & Tools
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Access a wide range of resources and tools to support your
                  startup journey at every stage.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.map((resourceGroup, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {resourceGroup.category}
                    </h3>
                    <ul className="space-y-3">
                      {resourceGroup.items.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle
                            className="text-green-500 flex-shrink-0"
                            size={16}
                          />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {/* Featured Resources */}
              <div className="bg-gradient-to-r from-[#ff914d] to-[#ff7b2d] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Featured Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Startup Toolkit",
                      description:
                        "Essential templates, checklists, and guides for launching your startup.",
                      linkText: "Download Now",
                    },
                    {
                      title: "Investor Pitch Guide",
                      description:
                        "Step-by-step guide to creating a compelling pitch deck and presentation.",
                      linkText: "Access Guide",
                    },
                    {
                      title: "Tech Development Kit",
                      description:
                        "Free software tools, API access, and development resources for startups.",
                      linkText: "Get Started",
                    },
                  ].map((resource, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                    >
                      <h4 className="font-bold text-lg mb-2 text-white">
                        {resource.title}
                      </h4>
                      <p className="text-white/90 mb-4 text-sm">
                        {resource.description}
                      </p>
                      <button className="mt-2 text-white font-medium inline-flex items-center">
                        {resource.linkText}
                        <ChevronRight size={16} className="ml-1" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              {/* Resource Request Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Request Specific Resources
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Resource Type
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff914d] focus:border-transparent">
                      <option>Select Resource Type</option>
                      <option>Legal Templates</option>
                      <option>Financial Tools</option>
                      <option>Marketing Assets</option>
                      <option>Tech Infrastructure</option>
                      <option>Mentorship</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Requirement
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff914d] focus:border-transparent"
                      placeholder="Describe the specific resources you need..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#ff914d] to-[#ff7b2d] text-white py-3 px-6 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Contact Our Incubation Center
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Have questions about our incubation program? Want to schedule a
                meeting with our team or mentors? Get in touch with us today.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <MapPin className="text-[#ff914d]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      Engineering Excellence Incubation Hub
                      <br />
                      123 Innovation Drive, Tech Park
                      <br />
                      Mumbai, India - 400072
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <Phone className="text-[#ff914d]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Phone</h4>
                    <p className="text-gray-600">
                      +91 22 1234 5678
                      <br />
                      +91 22 8765 4321
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <Mail className="text-[#ff914d]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Email</h4>
                    <p className="text-gray-600">
                      incubation@engineeringhub.edu
                      <br />
                      support@engineeringhub.edu
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1566.2473172383943!2d77.01732051972918!3d11.089830870433355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f824457e39fd%3A0xb57b669dd4a9a19e!2sPPG%20Institute%20of%20Technology!5e1!3m2!1sen!2sin!4v1747934420881!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default IncubationPage;
