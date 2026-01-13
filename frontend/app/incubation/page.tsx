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
      name: "Dr. S. Nandhakumar",
      expertise: "Chief Mentor",
      company: "Professor & Principal, PPGIT",
      experience: "Leadership & Innovation",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    },
    {
      name: "Prof. T. B. Dharamaraj",
      expertise: "Coordinator",
      company: "Associate Professor & Head, IT",
      experience: "Technology & Management",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
    {
      name: "Dr. S. Balakrishnan",
      expertise: "Co-coordinator",
      company: "Associate Professor & Head, Mechanical Engg.",
      experience: "Innovation & Development",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop",
    },
    {
      name: "Dr. Chinnarasu K",
      expertise: "Tech Guru",
      company: "Associate Professor, Agricultural Engg.",
      experience: "Agricultural Technology",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    },
    {
      name: "Prof. Selvakumar C",
      expertise: "Tech Guru",
      company: "Assistant Professor, Agricultural Engg.",
      experience: "AgriTech Innovation",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop",
    },
    {
      name: "Prof. Karthika G",
      expertise: "Tech Guru",
      company: "Assistant Professor, ECE",
      experience: "Electronics & Communication",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
    },
  ];

  const galleryImages = [
    "/Idea/opening.jpeg",
    "/Idea/inagural.jpeg",
    "/Idea/eq-1.jpeg",
    "/Idea/eq-2.jpeg",
    "/Idea/eq-3.jpeg",
    "/Idea/eq-4.jpeg",
    "/Idea/eq-5.jpeg",
    "/Idea/eq-6.jpeg",
    "/Idea/eq-7.jpeg",
    "/Idea/eq-8.jpeg",
    "/Idea/eq-9.jpeg",
  ];

  const studentAmbassadors = [
    {
      name: "Aparna",
      year: "II Year",
      department: "ECE",
    },
    {
      name: "Subhaganthan",
      year: "III Year",
      department: "ECE",
    },
    {
      name: "Rahul S G",
      year: "II Year",
      department: "MECH",
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
        {/* <img
          src={mentor.image}
          alt={mentor.name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        /> */}
        <div>
          <h3 className="text-lg font-bold text-gray-800">{mentor.name}</h3>
          <p className="text-[#ff914d] font-medium">{mentor.expertise}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-2">{mentor.company}</p>
      <p className="text-sm text-gray-500">{mentor.experience} experience</p>
      {/* <button className="mt-4 w-full bg-gradient-to-r from-[#ff914d] to-[#ff7b2d] text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
        Connect
      </button> */}
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
            {/* <div className="flex items-center justify-center mb-6">
              <IconOption title="" description="">
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
            </div> */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              AICTE IDEA Lab
              <span className="block text-3xl md:text-4xl font-light mt-2">
                PPG Institute of Technology
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-4 text-white/90 max-w-3xl mx-auto">
              Affiliated to Anna University | Approved by AICTE | ISO 9001:2015
              Certified
            </p>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Fostering experiential learning through hands-on projects,
              prototyping, and real-world problem-solving.
              <span className="block mt-2 text-lg font-light">
                Igniting Minds, Building Futures
              </span>
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Content Sections - All displayed vertically */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-16">
          {/* Overview Section */}
          <div className="space-y-12">
            {/* Mission Section */}
            <div className="text-center max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Vision & Mission
              </h2>
              <div className="bg-gradient-to-r from-orange-50 to-white p-8 rounded-xl mb-6">
                <h3 className="text-2xl font-bold text-[#ff914d] mb-4">
                  Vision
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  To cultivate innovation, creativity, and hands-on learning
                  through STEM education, producing competent, responsible, and
                  industry-ready engineers for national development.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#ff914d]">
                  <h4 className="font-bold text-gray-800 mb-3">Mission 1</h4>
                  <p className="text-gray-600">
                    Establish a sustainable innovation ecosystem aligned with{" "}
                    <strong>Make in India</strong> and{" "}
                    <strong>Digital India</strong>.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#ff914d]">
                  <h4 className="font-bold text-gray-800 mb-3">Mission 2</h4>
                  <p className="text-gray-600">
                    Strengthen academia–industry collaboration for technology
                    development and entrepreneurship incubation.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#ff914d]">
                  <h4 className="font-bold text-gray-800 mb-3">Mission 3</h4>
                  <p className="text-gray-600">
                    Promote experiential learning in critical thinking,
                    problem-solving, and design thinking through project-based
                    pedagogy.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#ff914d]">
                  <h4 className="font-bold text-gray-800 mb-3">Mission 4</h4>
                  <p className="text-gray-600">
                    Provide a multidisciplinary platform to ideate, design,
                    prototype, and validate solutions for societal challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* About College Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    About PPG Institute of Technology
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    <strong>Established in 2008</strong>, PPG Institute of
                    Technology (PPGIT) is affiliated to Anna University,
                    Chennai, and approved by AICTE, New Delhi. Accredited by
                    NAAC with 'A' Grade and ISO 9001:2015 certified, PPGIT
                    offers 8 UG programs and 2 PG programs across various
                    engineering disciplines.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our AICTE IDEA Lab, inaugurated on{" "}
                    <strong>October 22, 2025</strong>, represents our commitment
                    to fostering innovation and entrepreneurship. The lab is led
                    by the Department of Mechanical Engineering and supported by
                    a dedicated faculty team focused on STEM education and
                    hands-on learning.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center bg-orange-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-[#ff914d]">
                        2008
                      </div>
                      <div className="text-sm text-gray-600">Established</div>
                    </div>
                    <div className="text-center bg-orange-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-[#ff914d]">
                        10
                      </div>
                      <div className="text-sm text-gray-600">
                        Programs Offered
                      </div>
                    </div>
                    <div className="text-center bg-orange-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-[#ff914d]">
                        27
                      </div>
                      <div className="text-sm text-gray-600">
                        University Ranks
                      </div>
                    </div>
                    <div className="text-center bg-orange-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-[#ff914d]">
                        A Grade
                      </div>
                      <div className="text-sm text-gray-600">
                        NAAC Accredited
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-white rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">
                      Key Achievements & Recognitions
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <CheckCircle
                          size={14}
                          className="text-green-500 mr-2"
                        />
                        OBE Ranking
                      </div>
                      <div className="flex items-center">
                        <CheckCircle
                          size={14}
                          className="text-green-500 mr-2"
                        />
                        Green Campus
                      </div>
                      <div className="flex items-center">
                        <CheckCircle
                          size={14}
                          className="text-green-500 mr-2"
                        />
                        MSME Host
                      </div>
                      <div className="flex items-center">
                        <CheckCircle
                          size={14}
                          className="text-green-500 mr-2"
                        />
                        National STEM Ranking
                      </div>
                      <div className="flex items-center">
                        <CheckCircle
                          size={14}
                          className="text-green-500 mr-2"
                        />
                        SDG Accord Signatory
                      </div>
                      <div className="flex items-center">
                        <CheckCircle
                          size={14}
                          className="text-green-500 mr-2"
                        />
                        Indian Book of Records
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

          {/* Mentors Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Faculty Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the dedicated faculty team driving innovation and guiding
                students in the AICTE IDEA Lab at PPGIT.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mentors.map((mentor, index) => (
                <MentorCard key={index} mentor={mentor} />
              ))}
            </div>

            {/* Mentorship Program */}
            {/* <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
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
            </div> */}
          </div>

          {/* Gallery Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                IDEA Lab Gallery
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our state-of-the-art facilities and witness innovation in action
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`IDEA Lab ${index + 1}`}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">IDEA Lab Facility</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Ambassadors Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Student Ambassadors
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet our dedicated student leaders driving innovation and collaboration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {studentAmbassadors.map((ambassador, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
                >
                  {/* <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#ff914d] to-[#ff7b2d] rounded-full flex items-center justify-center">
                    <Users className="text-white" size={40} />
                  </div> */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {ambassador.name}
                  </h3>
                  <p className="text-[#ff914d] font-medium mb-1">
                    {ambassador.year}
                  </p>
                  <p className="text-gray-600">
                    Department of {ambassador.department}
                  </p>
                  <div className="mt-4 px-4 py-2 bg-orange-50 rounded-full text-[#ff914d] text-sm font-medium inline-block">
                    Student Ambassador
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Contact AICTE IDEA Lab
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Have questions about our IDEA Lab facilities and programs? Want
                to collaborate or schedule a visit? Get in touch with us today.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <MapPin className="text-[#ff914d]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      PPG Institute of Technology
                      <br />
                      AICTE IDEA Lab, Department of Mechanical Engineering
                      <br />
                      Coimbatore, Tamil Nadu – 641 035
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <Users className="text-[#ff914d]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Lab Coordinator</h4>
                    <p className="text-gray-600">
                      Dr. S. Balakrishnan
                      <br />
                      Associate Professor & Head, Mechanical Engineering
                      <br />
                      Faculty Co-coordinator, PPGIT IDEA Lab
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
                      idealab@ppgit.ac.in
                      <br />
                      info@ppgit.ac.in
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
