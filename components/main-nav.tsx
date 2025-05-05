"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  ArrowRight,
  X,
  ChevronDown,
  GraduationCap,
  BookOpen,
  Users,
  Calendar,
  Building,
  Briefcase,
  BookMarked,
  School,
  Landmark,
  Award,
  GraduationCapIcon as GraduationCap2,
  Building2,
  Handshake,
  PersonStanding,
  HelpCircle,
  MonitorSmartphone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    title: "About",
    submenu: [
      {
        title: "Our Story",
        href: "/about",
        icon: <School className="h-4 w-4" />,
      },
      {
        title: "Mission & Vision",
        href: "/about",
        icon: <Award className="h-4 w-4" />,
      },
      {
        title: "Leadership",
        href: "/about",
        icon: <GraduationCap className="h-4 w-4" />,
      },
      {
        title: "Infrastructure",
        href: "/about",
        icon: <Building2 className="h-4 w-4" />,
      },
      {
        title: "Media",
        href: "/media",
        icon: <MonitorSmartphone className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Academics",
    submenu: [
      {
        title: "Departments",
        href: "/academics",
        icon: <BookOpen className="h-4 w-4" />,
      },
      {
        title: "Programs",
        href: "/academics",
        icon: <BookMarked className="h-4 w-4" />,
      },
      {
        title: "Faculty",
        href: "/academics",
        icon: <Users className="h-4 w-4" />,
      },
      {
        title: "Research",
        href: "/academics",
        icon: <GraduationCap2 className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Admissions",
    submenu: [
      {
        title: "Apply Now",
        href: "/admissions",
        icon: <Calendar className="h-4 w-4" />,
      },
      {
        title: "Requirements",
        href: "/admissions",
        icon: <BookOpen className="h-4 w-4" />,
      },
      {
        title: "Financial Aid",
        href: "/admissions",
        icon: <Landmark className="h-4 w-4" />,
      },
      {
        title: "FAQs",
        href: "/admissions",
        icon: <HelpCircle className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Campus",
    submenu: [
      {
        title: "Facilities",
        href: "/campus",
        icon: <Building className="h-4 w-4" />,
      },
      {
        title: "Hostel",
        href: "/campus",
        icon: <Building2 className="h-4 w-4" />,
      },
      {
        title: "Student Life",
        href: "/campus",
        icon: <Users className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Placements",
    submenu: [
      {
        title: "Success Stories",
        href: "/placements",
        icon: <Award className="h-4 w-4" />,
      },
      {
        title: "Companies",
        href: "/placements",
        icon: <Building className="h-4 w-4" />,
      },
      {
        title: "Statistics",
        href: "/placements",
        icon: <BookMarked className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Careers",
    submenu: [
      {
        title: "Current Openings",
        href: "/careers",
        icon: <Briefcase className="h-4 w-4" />,
      },
      {
        title: "Why Join Us",
        href: "/careers/why-join-us",
        icon: <Handshake className="h-4 w-4" />,
      },
      {
        title: "Staff Directory",
        href: "/careers/staff-directory",
        icon: <PersonStanding className="h-4 w-4" />,
      },
    ],
  },
];

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (title: string) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg">
              <Image
                src="/logo.png"
                alt="College Logo"
                width={40}
                height={40}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60"></div>
            </div>
            <span className="hidden bg-gradient-to-r from-[#ff4d4d] to-[#ff4d4d]/70 bg-clip-text font-bold text-transparent sm:inline-block">
              PPG Institute of Technology
            </span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.title} className="relative">
                  {item.submenu ? (
                    <div>
                      <button
                        className="group flex items-center text-gray-700 transition-colors hover:text-orange-500"
                        onClick={() => toggleSubmenu(item.title)}
                        onMouseEnter={() => toggleSubmenu(item.title)}
                        onMouseLeave={() => setActiveSubmenu(null)}
                      >
                        {item.title}
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                            activeSubmenu === item.title ? "rotate-180" : ""
                          }`}
                        />
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                      </button>

                      <AnimatePresence>
                        {activeSubmenu === item.title && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-md bg-white py-2 shadow-lg ring-1 ring-black/5"
                            onMouseEnter={() => setActiveSubmenu(item.title)}
                            onMouseLeave={() => setActiveSubmenu(null)}
                          >
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.title}
                                href={subitem.href}
                                className="flex items-center px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-orange-50 hover:text-orange-500"
                              >
                                <span className="mr-2 text-orange-500">
                                  {subitem.icon}
                                </span>
                                {subitem.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className="group relative text-gray-700 transition-colors hover:text-orange-500"
                    >
                      {item.title}
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <Link href="/admin">
            <button className="flex items-center gap-2 rounded-full bg-[#ff914d] px-5 py-2 text-white font-semibold shadow-md hover:bg-[#ff7a26] transition duration-200">
              Apply Now
              <ArrowRight size={18} />
            </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-orange-500 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md rounded-b-xl border-t border-gray-100"
          >
            <div className="space-y-1 px-4 pb-4 pt-2">
              {navItems.map((item) => (
                <div key={item.title}>
                  {item.submenu ? (
                    <div>
                      <button
                        className="flex w-full items-center justify-between rounded-md px-4 py-2 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-[#ff914d] transition"
                        onClick={() => toggleSubmenu(item.title)}
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                            activeSubmenu === item.title
                              ? "rotate-180 text-[#ff914d]"
                              : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeSubmenu === item.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-2 mt-1 space-y-1 border-l-2 border-[#ff914d]/20 pl-4"
                          >
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.title}
                                href={subitem.href}
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-orange-50 hover:text-[#ff914d] transition"
                              >
                                <span className="text-[#ff914d]">
                                  {subitem.icon}
                                </span>
                                {subitem.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className="block rounded-md px-4 py-2 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-[#ff914d] transition"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
