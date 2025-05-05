"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ChevronDown, ChevronUp, Users, Briefcase, Award } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {MainNav} from "@/components/main-nav";
import Footer from "@/components/footer";

const jobOpenings = [
  {
    title: "Professor",
    department: "Computer Science",
    eligibility: "Ph.D. with 10+ years of teaching experience",
  },
  {
    title: "Assistant Professor",
    department: "Electronics",
    eligibility: "M.Tech with 3+ years of experience",
  },
  {
    title: "Lab Assistant",
    department: "Mechanical",
    eligibility: "Diploma with lab management skills",
  },
];

const staffList = [
  {
    name: "Dr. Asha Menon",
    designation: "Professor",
    department: "Computer Science",
    photo: "/st.jpg",
  },
  {
    name: "Mr. Rajiv Kumar",
    designation: "Lab Assistant",
    department: "Mechanical",
    photo: "/st.jpg",
  },
  {
    name: "Ms. Nisha Patel",
    designation: "Assistant Professor",
    department: "Electronics",
    photo: "/st.jpg",
  },
];

export default function CareersPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

interface JobOpening {
    title: string;
    department: string;
    eligibility: string;
}

interface Staff {
    name: string;
    designation: string;
    department: string;
    photo: string;
}

const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
};

  const filteredStaff = staffList.filter((staff) =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 to-orange-500 text-white text-center py-20 px-4 mt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Join Our Team – Empower the Next Generation of Engineers
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Be part of a dynamic institution where innovation meets education.
        </p>
        <Button className="bg-white text-orange-500 font-semibold px-6 py-2 rounded-full shadow-lg">
          Explore Careers
        </Button>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#ff914d] mb-4">About Us</h2>
          <p className="mb-6">
            Our mission is to cultivate a vibrant learning environment that fosters creativity,
            critical thinking, and engineering excellence. Our campus promotes inclusivity,
            innovation, and lifelong learning.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex flex-col items-center w-48">
              <Users className="h-10 w-10 text-[#ff914d] mb-2" />
              <span>Inclusive Culture</span>
            </div>
            <div className="flex flex-col items-center w-48">
              <Briefcase className="h-10 w-10 text-[#ff914d] mb-2" />
              <span>Career Development</span>
            </div>
            <div className="flex flex-col items-center w-48">
              <Award className="h-10 w-10 text-[#ff914d] mb-2" />
              <span>Academic Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#ff914d] mb-12">Why Join Us</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Attractive Benefits",
                icon: <Briefcase className="h-8 w-8 text-[#ff914d]" />,
                description: "Health insurance, pension plans, and generous leave policies."
              },
              {
                title: "Professional Growth",
                icon: <Award className="h-8 w-8 text-[#ff914d]" />,
                description: "Workshops, conferences, and research grants."
              },
              {
                title: "Supportive Community",
                icon: <Users className="h-8 w-8 text-[#ff914d]" />,
                description: "Collaborative work culture with mentoring and peer support."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-md text-center"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#ff914d] mb-8">Current Openings</h2>
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              className="border rounded-xl shadow-sm mb-4 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
              >
                <span className="font-semibold">{job.title} - {job.department}</span>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIndex === index && (
                <div className="p-4">
                  <p className="mb-2">Eligibility: {job.eligibility}</p>
                  <Button className="bg-[#ff914d] text-white">Apply Now</Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Staff Directory Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#ff914d] mb-8">Staff Directory</h2>
          <div className="flex justify-center mb-6">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-3.5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by name or department"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {filteredStaff.map((staff, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl shadow-md text-center"
              >
                <img
                  src={staff.photo}
                  alt={staff.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="font-semibold text-lg">{staff.name}</h4>
                <p className="text-sm text-gray-600">{staff.designation}</p>
                <p className="text-sm text-gray-500">{staff.department}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
