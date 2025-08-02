"use client";
import Image from "next/image";
import {
    ArrowRight,
    BookOpen,
    Calendar,
    ChevronRight,
    Facebook,
    GraduationCap,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
    Users,
  } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-900 text-gray-300">
        <div className="absolute inset-0 opacity-5">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="footer-grid"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 8 0 L 0 0 0 8"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect
              x="0"
              y="0"
              width="100"
              height="100"
              fill="url(#footer-grid)"
            />
          </svg>
        </div>
        <div className="container relative z-10 py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-10 overflow-hidden rounded-lg">
                  <Image
                    src="/logo.png"
                    alt="College Logo"
                    width={30}
                    height={30}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60"></div>
                </div>
                <h3 className="text-xl font-bold text-white">
                  PPG Institute of Technology
                </h3>
              </div>
              <p className="mt-4">
                Shaping the future through innovation, knowledge, and leadership
              </p>
              <div className="mt-6 flex space-x-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="/about"
                    className="group flex items-center transition-colors hover:text-white"
                  >
                    <ChevronRight className="mr-2 h-4 w-4 text-[#ff914d]/70 transition-transform group-hover:translate-x-1" />
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/academics"
                    className="group flex items-center transition-colors hover:text-white"
                  >
                    <ChevronRight className="mr-2 h-4 w-4 text-[#ff914d]/70 transition-transform group-hover:translate-x-1" />
                    Academics
                  </a>
                </li>
                <li>
                  <a
                    href="/admissions"
                    className="group flex items-center transition-colors hover:text-white"
                  >
                    <ChevronRight className="mr-2 h-4 w-4 text-[#ff914d]/70 transition-transform group-hover:translate-x-1" />
                    Admissions
                  </a>
                </li>
                <li>
                  <a
                    href="/placements"
                    className="group flex items-center transition-colors hover:text-white"
                  >
                    <ChevronRight className="mr-2 h-4 w-4 text-[#ff914d]/70 transition-transform group-hover:translate-x-1" />
                    Placements
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Departments</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#dep"
                    className="group flex items-center transition-colors hover:text-white"
                  >
                    <ChevronRight className="mr-2 h-4 w-4 text-[#ff914d]/70 transition-transform group-hover:translate-x-1" />
                    Computer Science
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center transition-colors hover:text-white"
                  >
                    <ChevronRight className="mr-2 h-4 w-4 text-[#ff914d]/70 transition-transform group-hover:translate-x-1" />
                    Electronics & Communication
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center transition-colors hover:text-white"
                  >
                    <ChevronRight className="mr-2 h-4 w-4 text-[#ff914d]/70 transition-transform group-hover:translate-x-1" />
                    Information Technology
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center transition-colors hover:text-white"
                  >
                    <ChevronRight className="mr-2 h-4 w-4 text-[#ff914d]/70 transition-transform group-hover:translate-x-1" />
                    Mechanical Engineering
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center transition-colors hover:text-white"
                  >
                    <ChevronRight className="mr-2 h-4 w-4 text-[#ff914d]/70 transition-transform group-hover:translate-x-1" />
                    Electrical Engineering
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Contact Us</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 shrink-0 text-[#ff914d]/70" />
                  <span>
                    RATHNAGIRI ROAD, SARAVANAMPATTI, COIMBATORE, Tamil Nadu,
                    641035
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-[#ff914d]/70" />
                  <span>+91 90477 77277 , +91 90477 77977</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-[#ff914d]/70" />
                  <span>ppgit@ppg.edu.in</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 py-8">
          <div className="container text-center text-sm">
            <p>
              © {new Date().getFullYear()} PPG Institute of Technology All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
  )
}
