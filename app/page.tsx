"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
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
import { Button } from "@/components/ui/button";
import { CounterAnimation } from "@/components/counter-animation";
import { DepartmentCard } from "@/components/department-card";
import { EventCard } from "@/components/event-card";
import { GallerySlider } from "@/components/gallery-slider";
import { MainNav } from "@/components/main-nav";
import Footer from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { FloatingShapes } from "@/components/floating-shapes";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { ParallaxSection } from "@/components/parallax-section";
import { AnimatedGradientText } from "@/components/animated-gradient-text";
import { ScrollIndicator } from "@/components/scroll-indicator";
import AdmissionPopup from "@/components/admissionpop";
import { AiChatbot } from "@/components/chatbot";
import { TypingWords } from "@/components/typing-words";
import CollegeNotification from "@/components/announcement-banner-old";
import Preloader from "@/components/preloader";
import devtools from "devtools-detect";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  // Slideshow state
  const bgImages = [
    "/assets/campus.jpg",
    "/assets/1.jpeg",
    "/assets/2.jpeg",
    "/assets/3.jpeg",
    "/assets/4.jpg",
  ];
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  const [bgIndex, setBgIndex] = useState(0);
  const [prevBgIndex, setPrevBgIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const catchyWords = [
    "Build the Future",
    "Innovate Together",
    "Lead with Purpose",
    "Dream. Design. Deliver.",
    "Code to Create",
    "Shape Tomorrow",
    "Ignite Curiosity",
    "Inspire Innovation",
    "Empower Learning",
    "Thrive with Tech",
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [fadeWord, setFadeWord] = useState(true);
  const [typedWord, setTypedWord] = useState("");
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  // // Announcement data state (example)
  // const [announcementData, setAnnouncementData] = useState({
  //   isActive: true,
  //   title: "Important campus event coming soon!",
  //   link: "#",
  //   linkText: "Learn more",
  // });

  // // Example: handle close for announcement banner
  // const handleCloseAnnouncement = () => {
  //   setAnnouncementData((prev) => ({ ...prev, isActive: false }));
  // };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPrevBgIndex(bgIndex);
        setBgIndex((prev) => (prev + 1) % bgImages.length);
        setFade(true);
      }, 500); // fade out duration
    }, 2200); // image display duration
    return () => clearInterval(interval);
  }, [bgIndex, bgImages.length]);

  const charIndexRef = useRef(0);

  useEffect(() => {
    setTypedWord("");
    charIndexRef.current = 0;
    setFadeWord(true);
    if (typingTimeout.current) clearTimeout(typingTimeout.current);
    function typeChar() {
      setTypedWord(catchyWords[wordIndex].slice(0, charIndexRef.current + 1));
      if (charIndexRef.current < catchyWords[wordIndex].length - 1) {
        charIndexRef.current++;
        typingTimeout.current = setTimeout(typeChar, 50);
      }
    }
    typeChar();
    return () => {
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
    };
  }, [wordIndex]);

  // inspect blocking methos implementation
  useEffect(() => {
    if (typeof window === "undefined") return;
    const disableContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    window.addEventListener("contextmenu", disableContextMenu);
    return () => {
      window.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey &&
          e.shiftKey &&
          (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const checkDevTools = () => {
      if (devtools.isOpen) {
        window.close(); // or redirect or blank out screen
      }
    };
    const interval = setInterval(checkDevTools, 1000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <Preloader onLoadingComplete={handleLoadingComplete} />;
  }
  return (
    <div className="flex min-h-screen flex-col">
      <AiChatbot />
      <CollegeNotification />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60"></div>
            </div>
            {/* <span className="hidden bg-gradient-to-r from-[#ff4d4d] to-[#ff4d4d]/70 bg-clip-text font-bold text-transparent sm:inline-block">
              PPG Institute of Technology
            </span> */}
          </Link>
          <MainNav />
        </div>
      </header>
      <AdmissionPopup />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative h-[90vh] w-full overflow-hidden"
        >
          <AnimatedBackground />
          {/* Cross-fade background images */}
          <div className="absolute inset-0 z-0">
            {/* Previous image (fading out) */}
            <div
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
              style={{
                backgroundImage: `url('${bgImages[prevBgIndex]}')`,
                transform: `scale(${1 + scrollY * 0.0005}) translateY(${
                  scrollY * 0.2
                }px)`,
                opacity: Math.max(0, 1 - scrollY * 0.002),
              }}
            ></div>
            {/* Current image (fading in) */}
            <div
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url('${bgImages[bgIndex]}')`,
                transform: `scale(${1 + scrollY * 0.0005}) translateY(${
                  scrollY * 0.2
                }px)`,
                opacity: Math.max(0, 1 - scrollY * 0.002),
              }}
            ></div>
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
          <FloatingShapes />

          {/* Announcement Banner */}
          {/* {announcementData.isActive && (
            <AnnouncementBanner
              title={announcementData.title}
              link={announcementData.link}
              linkText={announcementData.linkText}
              onClose={handleCloseAnnouncement}
              position="top"
            />
          )} */}

          <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <AnimatedGradientText className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl h-20 flex items-center justify-center">
              <TypingWords
                words={[
                  "Build the Future",
                  "Innovate Together",
                  "Lead with Purpose",
                  "Dream. Design. Deliver.",
                  "Code to Create",
                  "Shape Tomorrow",
                  "Ignite Curiosity",
                  "Inspire Innovation",
                  "Empower Learning",
                  "Thrive with Tech",
                ]}
              />
            </AnimatedGradientText>
            <p className="mt-6 max-w-2xl text-lg text-gray-200 opacity-100 animate-fade-in-up duration-1000 delay-300">
              Shaping the future through innovation, knowledge, and leadership
            </p>
            {/* <Button
              className="mt-10 group relative overflow-hidden bg-gradient-to-r from-[#ff914d] to-[#ff914d]/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              size="lg"
            >
              <span className="relative z-10 flex items-center">
                Explore Campus
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 z-0 translate-y-[100%] bg-white/20 transition-transform duration-300 group-hover:translate-y-0"></span>
            </Button> */}
            {/* <LatestNewsBanner
              title="Latest News | New Announcement"
              content="Stay updated with the most recent campus events and announcements."
              // link="/news"
              // linkText="Read more"
            /> */}
            <ScrollIndicator className="absolute bottom-8 left-1/2 -translate-x-1/2" />
          </div>
        </section>

        {/* About Section */}
        <section className="py-24">
          <div className="container">
            <RevealOnScroll>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  About Our Institution
                </h2>
                <div className="mt-2 h-1 w-20 bg-gradient-to-r from-[#ff914d] to-[#ff914d]/50 mx-auto rounded-full"></div>
                <p className="mt-6 text-lg text-muted-foreground">
                  Founded in 1985, our engineering college has been at the
                  forefront of technical education, research, and innovation. We
                  are committed to providing a holistic learning environment
                  that nurtures creativity, critical thinking, and practical
                  skills.
                </p>
              </div>
            </RevealOnScroll>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <RevealOnScroll delay={0.1}>
                <div className="group relative overflow-hidden rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#ff914d]/10 transition-transform duration-500 group-hover:scale-150"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold">Our Mission</h3>
                    <p className="mt-2 text-muted-foreground">
                      To empower students with knowledge and skills for
                      professional excellence
                    </p>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <div className="group relative overflow-hidden rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#ff914d]/10 transition-transform duration-500 group-hover:scale-150"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold">Our Vision</h3>
                    <p className="mt-2 text-muted-foreground">
                      To be a globally recognized institution for engineering
                      education and research
                    </p>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.3}>
                <div className="group relative overflow-hidden rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#ff914d]/10 transition-transform duration-500 group-hover:scale-150"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold">Our Values</h3>
                    <p className="mt-2 text-muted-foreground">
                      Excellence, innovation, integrity, and social
                      responsibility
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section id="/#dep">
          <ParallaxSection className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-muted"></div>
            <div className="container relative z-10">
              <RevealOnScroll>
                <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
                  Our Departments
                </h2>
                <div className="mt-2 h-1 w-20 bg-gradient-to-r from-[#ff914d] to-[#ff914d]/50 mx-auto rounded-full"></div>
                <p className="mt-6 text-center text-lg text-muted-foreground">
                  Explore our diverse range of engineering departments offering
                  cutting-edge programs
                </p>
              </RevealOnScroll>

              <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <RevealOnScroll delay={0.1}>
                  <DepartmentCard
                    title="Computer Science Engineering"
                    icon="Monitor"
                    description="Focusing on software engineering, AI, and system design"
                  />
                </RevealOnScroll>
                <RevealOnScroll delay={0.2}>
                  <DepartmentCard
                    title="Information Technology"
                    icon="Server"
                    description="Specializing in IT systems, data management, and networking"
                  />
                </RevealOnScroll>
                <RevealOnScroll delay={0.3}>
                  <DepartmentCard
                    title="Artificial Intelligence & Data Science"
                    icon="Brain"
                    description="Integrating AI, data analytics, and intelligent systems"
                  />
                </RevealOnScroll>
                <RevealOnScroll delay={0.4}>
                  <DepartmentCard
                    title="AI & Machine Learning"
                    icon="Brain"
                    description="Focusing on machine learning algorithms and applications"
                  />
                </RevealOnScroll>
                <RevealOnScroll delay={0.5}>
                  <DepartmentCard
                    title="Mechanical Engineering"
                    icon="Cog"
                    description="Exploring mechanics, thermodynamics, and manufacturing"
                  />
                </RevealOnScroll>
                <RevealOnScroll delay={0.6}>
                  <DepartmentCard
                    title="Bio-Medical Engineering"
                    icon="Activity"
                    description="Combining engineering principles with medical sciences"
                  />
                </RevealOnScroll>
                <RevealOnScroll delay={0.7}>
                  <DepartmentCard
                    title="Electronics & Communication Engineering"
                    icon="Cpu"
                    description="Designing communication systems and embedded technologies"
                  />
                </RevealOnScroll>
                <RevealOnScroll delay={0.8}>
                  <DepartmentCard
                    title="Agricultural Engineering"
                    icon="Leaf"
                    description="Improving agricultural processes through engineering innovation"
                  />
                </RevealOnScroll>
              </div>
            </div>
          </ParallaxSection>
        </section>

        {/* Stats Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff914d]/90 to-[#ff914d]"></div>
          <div className="absolute inset-0 opacity-10">
            <svg
              className="h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="grid"
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
              <rect x="0" y="0" width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          <div className="container relative z-10">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <RevealOnScroll className="text-center text-white">
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                  <Users className="h-10 w-10" />
                  <div className="absolute -inset-1 rounded-full border border-white/20"></div>
                  <div className="absolute -inset-2 rounded-full border border-white/10"></div>
                </div>
                <h3 className="mt-6 text-5xl font-bold">
                  <CounterAnimation end={5000} duration={2} />+
                </h3>
                <p className="mt-2 text-lg font-light">Students</p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2} className="text-center text-white">
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                  <GraduationCap className="h-10 w-10" />
                  <div className="absolute -inset-1 rounded-full border border-white/20"></div>
                  <div className="absolute -inset-2 rounded-full border border-white/10"></div>
                </div>
                <h3 className="mt-6 text-5xl font-bold">
                  <CounterAnimation end={350} duration={2} />+
                </h3>
                <p className="mt-2 text-lg font-light">Faculty</p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.4} className="text-center text-white">
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                  <BookOpen className="h-10 w-10" />
                  <div className="absolute -inset-1 rounded-full border border-white/20"></div>
                  <div className="absolute -inset-2 rounded-full border border-white/10"></div>
                </div>
                <h3 className="mt-6 text-5xl font-bold">
                  <CounterAnimation end={50} duration={2} />+
                </h3>
                <p className="mt-2 text-lg font-light">Courses</p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.6} className="text-center text-white">
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                  <Calendar className="h-10 w-10" />
                  <div className="absolute -inset-1 rounded-full border border-white/20"></div>
                  <div className="absolute -inset-2 rounded-full border border-white/10"></div>
                </div>
                <h3 className="mt-6 text-5xl font-bold">
                  <CounterAnimation end={95} duration={2} />%
                </h3>
                <p className="mt-2 text-lg font-light">Placement Rate</p>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24">
          <div className="container">
            <RevealOnScroll>
              <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
                Campus Gallery
              </h2>
              <div className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
              <p className="mt-6 text-center text-lg text-muted-foreground">
                Take a visual tour of our state-of-the-art campus facilities
              </p>
            </RevealOnScroll>
            <div className="mt-16">
              <GallerySlider />
            </div>
          </div>
        </section>

        {/* News & Events Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-muted"></div>
          <div className="container relative z-10">
            <RevealOnScroll>
              <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
                News & Events
              </h2>
              <div className="mt-2 h-1 w-20 bg-gradient-to-r from-[#ff914d] to-[#ff914d]/50 mx-auto rounded-full"></div>
              <p className="mt-6 text-center text-lg text-muted-foreground">
                Stay updated with the latest happenings at our campus
              </p>
            </RevealOnScroll>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <RevealOnScroll delay={0.1}>
                <EventCard
                  title="Annual Tech Fest 2023"
                  date="October 15-17, 2023"
                  description="Join us for three days of technical competitions, workshops, and guest lectures"
                  image="/ev1.jpg"
                />
              </RevealOnScroll>
              <RevealOnScroll delay={0.2}>
                <EventCard
                  title="Research Symposium"
                  date="November 5, 2023"
                  description="Showcasing innovative research projects by our faculty and students"
                  image="/ev2.jpg"
                />
              </RevealOnScroll>
              <RevealOnScroll delay={0.3}>
                <EventCard
                  title="Industry Connect Workshop"
                  date="September 28, 2023"
                  description="Bridging the gap between academia and industry with expert sessions"
                  image="/ev3.jpg"
                />
              </RevealOnScroll>
            </div>
            <div className="mt-12 text-center">
              <Button
                variant="outline"
                className="group relative overflow-hidden border-primary/20 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="relative z-10 flex items-center">
                  View All Events
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 z-0 translate-y-[100%] bg-primary/5 transition-transform duration-300 group-hover:translate-y-0"></span>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10"></div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-2xl shadow-primary/5 sm:p-12">
              <RevealOnScroll>
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Ready to Join Our Community?
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Take the first step towards a bright future in engineering.
                    Apply now for the upcoming academic year.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button
                      size="lg"
                      className="group relative overflow-hidden bg-gradient-to-r from-[#ff914d] to-[#ff914d]/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                    >
                      <span className="relative z-10">Apply Now</span>
                      <span className="absolute inset-0 z-0 translate-y-[100%] bg-white/20 transition-transform duration-300 group-hover:translate-y-0"></span>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="group relative overflow-hidden border-primary/20 transition-all duration-300 hover:border-primary/50"
                    >
                      <span className="relative z-10">Request Information</span>
                      <span className="absolute inset-0 z-0 translate-y-[100%] bg-primary/5 transition-transform duration-300 group-hover:translate-y-0"></span>
                    </Button>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
