"use client";
import React from "react";
import Image from "next/image";
import {
  BookOpen,
  GraduationCap,
  Users,
  FlaskConical,
  Info,
  Code,
  Database,
  Cpu,
  Radio,
  Hammer,
  Lightbulb,
  BookMarked,
  Award,
  Medal,
  Microscope,
  ShieldCheck,
  HeartPulse,
  Leaf,
  Server,
  Brain,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { MainNav } from "@/components/main-nav";
import Footer from "@/components/footer";

const AcademicsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <MainNav />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 mt-20">
        {/* Departments Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <BookOpen className="w-8 h-8 mr-3 text-gray-700" />
            <h2 className="text-2xl font-bold text-gray-800">Departments</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Department Cards */}
            <DepartmentCard
              icon={<Code className="w-6 h-6 text-[#ed502d]" />}
              title="Computer Science and Engineering"
              description="Exploring the frontiers of computing, algorithms, and software development."
            />

            <DepartmentCard
              icon={<Server className="w-6 h-6 text-[#ed502d]" />}
              title="Information Technology"
              description="Focusing on the design, implementation, and management of information systems and networks."
            />

            <DepartmentCard
              icon={<ShieldCheck className="w-6 h-6 text-[#ed502d]" />}
              title="Artificial Intelligence and Data Science"
              description="Harnessing data and intelligent systems to drive innovation and decision-making."
            />

            <DepartmentCard
              icon={<Brain className="w-6 h-6 text-[#ed502d]" />}
              title="Artificial Intelligence and Machine Learning"
              description="Developing intelligent algorithms and systems capable of learning and adaptation."
            />

            <DepartmentCard
              icon={<Hammer className="w-6 h-6 text-[#ed502d]" />}
              title="Mechanical Engineering"
              description="Engineering principles applied to design, analyze, and manufacture mechanical systems."
            />

            <DepartmentCard
              icon={<HeartPulse className="w-6 h-6 text-[#ed502d]" />}
              title="Biomedical Engineering"
              description="Combining engineering and biology to improve healthcare diagnostics and treatments."
            />

            <DepartmentCard
              icon={<Radio className="w-6 h-6 text-[#ed502d]" />}
              title="Electronics and Communication Engineering"
              description="Designing and developing electronic systems for communication and control."
            />

            <DepartmentCard
              icon={<Leaf className="w-6 h-6 text-[#ed502d]" />}
              title="Agricultural Engineering"
              description="Applying engineering principles to agricultural production and processing."
            />
          </div>
        </section>

        {/* Programs Section */}
        <section className="w-full px-4 py-12 md:py-20 bg-white text-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#ff914d] mb-4">
                BE & B.Tech Programs
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore cutting-edge undergraduate engineering courses that
                combine innovation, technical skills, and industry relevance.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-[#ff914d] w-8 h-8 mr-3" />
                  <h3 className="text-xl font-semibold">Accredited Programs</h3>
                </div>
                <p className="text-gray-600">
                  All our BE & B.Tech programs are accredited by top governing
                  bodies, ensuring quality and recognition.
                </p>
              </div>

              <div className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <BookOpen className="text-[#ff914d] w-8 h-8 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Industry-Aligned Curriculum
                  </h3>
                </div>
                <p className="text-gray-600">
                  The curriculum is co-developed with industry experts to keep
                  pace with technological advancements.
                </p>
              </div>

              <div className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <Trophy className="text-[#ff914d] w-8 h-8 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Placement & Internships
                  </h3>
                </div>
                <p className="text-gray-600">
                  Students receive robust support for placements and internships
                  in top-tier tech companies and startups.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="/apply"
                className="inline-flex items-center gap-2 bg-[#ff914d] text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 transition"
              >
                Apply Now <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Users className="w-8 h-8 mr-3 text-gray-700" />
            <h2 className="text-2xl font-bold text-gray-800">Faculty</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Faculty Cards */}
            <FacultyCard
              name="Dr. Jane Smith"
              position="Head of Department"
              department="Computer Science and Engineering"
              image="/Hod/cse.jpg"
            />
            <FacultyCard
              name="Dr. John Davis"
              position="Head of Department"
              department="Information Technology"
              image="/Hod/it.jpg"
            />
            <FacultyCard
              name="Dr. Emily Johnson"
              position="Head of Department"
              department="Artificial Intelligence and Data Science"
              image="/Hod/aids.jpg"
            />
            <FacultyCard
              name="Dr. Michael Chen"
              position="Head of Department"
              department="Biomedical Engineering"
              image="/Hod/bme.jpg"
            />
            <FacultyCard
              name="Dr. Michael Chen"
              position="Head of Department"
              department="Agricultural Engineering"
              image="/Hod/agri.jpg"
            />
            <FacultyCard
              name="Dr. Michael Chen"
              position="Head of Department"
              department="Electronics and Communication Engineering"
              image="/Hod/ece.jpeg"
            />
          </div>
        </section>

        {/* Research Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <FlaskConical className="w-8 h-8 mr-3 text-gray-700" />
            <h2 className="text-2xl font-bold text-gray-800">Research</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Research Areas */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <div className="flex items-center mb-3">
                  <Microscope className="w-5 h-5 mr-2 text-orange-600" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Research Areas
                  </h3>
                </div>
                <ul className="space-y-2">
                  <ResearchItem
                    title="Artificial Intelligence and Machine Learning"
                    description="Developing advanced algorithms and models for next-generation AI applications."
                  />
                  <ResearchItem
                    title="Renewable Energy Systems"
                    description="Exploring sustainable energy solutions and grid integration technologies."
                  />
                  <ResearchItem
                    title="Advanced Materials"
                    description="Investigating novel materials with unique properties for engineering applications."
                  />
                  <ResearchItem
                    title="Robotics and Automation"
                    description="Creating intelligent robotic systems for industrial and service applications."
                  />
                </ul>
              </div>
            </div>

            {/* Research Projects */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <div className="flex items-center mb-3">
                  <BookMarked className="w-5 h-5 mr-2 text-orange-600" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Recent Projects
                  </h3>
                </div>
                <div className="space-y-4">
                  <ResearchProject
                    title="Smart Urban Infrastructure"
                    duration="2023-2025"
                    funding="National Science Foundation"
                    description="Developing intelligent infrastructure systems for smart cities."
                  />
                  <ResearchProject
                    title="Quantum Computing Applications"
                    duration="2022-2024"
                    funding="Department of Technology"
                    description="Exploring practical applications of quantum computing in solving engineering problems."
                  />
                  <ResearchProject
                    title="Sustainable Manufacturing"
                    duration="2023-2026"
                    funding="Industrial Consortium"
                    description="Creating eco-friendly manufacturing processes and technologies."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section - Using Theme Color */}
        {/* <section className="mb-12">
          <div className="flex items-center mb-6">
            <Info className="w-8 h-8 mr-3 text-[#ff914d]" />
            <h2 className="text-2xl font-bold text-[#ff914d]">About Us</h2>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden border-t-4 border-[#ff914d]">
            <div className="px-6 py-4">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To foster innovation and excellence in engineering education, research, and practice, preparing students to tackle global challenges through technological advancement and sustainable solutions.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  To be a globally recognized institution known for academic excellence, innovative research, and producing leaders who drive technological innovation and sustainable development.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Our History</h3>
                <p className="text-gray-600">
                  Founded in 1965, our college has grown from a small technical institute to a comprehensive engineering college with state-of-the-art facilities. For over five decades, we have been at the forefront of engineering education, constantly evolving to meet the changing demands of industry and society.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                <StatCard number="12,000+" label="Students" icon={<Users className="w-6 h-6 text-[#ed502d]" />} />
                <StatCard number="500+" label="Faculty Members" icon={<GraduationCap className="w-6 h-6 text-[#ed502d]" />} />
                <StatCard number="200+" label="Research Projects" icon={<FlaskConical className="w-6 h-6 text-[#ed502d]" />} />
                <StatCard number="50+" label="Industry Partners" icon={<Award className="w-6 h-6 text-[#ed502d]" />} />
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

// Helper Components
const DepartmentCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="p-6">
      <div className="flex items-center mb-3">
        <div className="bg-gray-100 p-2 rounded-full mr-3">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-orange-600 hover:text-black font-medium flex items-center">
        Learn more
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
);

const ProgramCard: React.FC<{ title: string; items: string[] }> = ({
  title,
  items,
}) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-green-500 mr-2 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const FacultyCard: React.FC<{
  name: string;
  position: string;
  department: string;
  image: string;
}> = ({ name, position, department, image }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="relative h-[300px] w-full rounded-md overflow-hidden bg-gray-200">
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="object-cover"
        priority
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-[#ff914d] font-medium">{position}</p>
      <p className="text-gray-500 text-sm">{department}</p>
      <button className="mt-3 text-sm text-orange-600 hover:text-black font-medium flex items-center">
        View Profile
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
);

const ResearchItem: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <li className="bg-gray-50 p-3 rounded-md">
    <h4 className="font-medium text-gray-800">{title}</h4>
    <p className="text-sm text-gray-600 mt-1">{description}</p>
  </li>
);

const ResearchProject: React.FC<{
  title: string;
  duration: string;
  funding: string;
  description: string;
}> = ({ title, duration, funding, description }) => (
  <div className="border-l-4 border-orange-500 pl-4">
    <h4 className="font-medium text-gray-800">{title}</h4>
    <div className="flex flex-wrap text-sm text-gray-500 mt-1 mb-2">
      <span className="mr-4">{duration}</span>
      <span>Funded by: {funding}</span>
    </div>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const StatCard: React.FC<{
  number: string;
  label: string;
  icon: React.ReactNode;
}> = ({ number, label, icon }) => (
  <div className="bg-gray-50 rounded-lg p-4 text-center">
    <div className="flex justify-center mb-2">{icon}</div>
    <p className="text-2xl font-bold text-gray-800">{number}</p>
    <p className="text-gray-500 text-sm">{label}</p>
  </div>
);

export default AcademicsPage;
