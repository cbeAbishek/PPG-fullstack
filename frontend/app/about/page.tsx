"use client";

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, BookOpen, Target, Users, Building, Award, Globe, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { MainNav } from "@/components/main-nav";
import Footer from "@/components/footer";

export default function AboutUs() {
  const [activeSection, setActiveSection] = useState('story');
  const sectionRefs: SectionRefs = {
    story: useRef<HTMLElement>(null),
    mission: useRef<HTMLElement>(null),
    leadership: useRef<HTMLElement>(null),
    infrastructure: useRef<HTMLElement>(null),
  };

  interface SectionRefs {
    story: React.RefObject<HTMLElement | null>;
    mission: React.RefObject<HTMLElement | null>;
    leadership: React.RefObject<HTMLElement | null>;
    infrastructure: React.RefObject<HTMLElement | null>;
  }

  type SectionId = keyof SectionRefs;

  const scrollToSection = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    sectionRefs[sectionId].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section in sectionRefs) {
        const sectionKey = section as keyof SectionRefs;
        const element = sectionRefs[sectionKey].current;
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionKey);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-8  flex justify-between items-center">
          <MainNav />
          <button className="md:hidden">
            <ChevronDown size={24} />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-400" style={{ backgroundColor: '#ff914d' }}>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About PPG</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">Discover our journey of academic excellence, innovation, and commitment to shaping future engineers who lead with integrity and purpose.</p>
          <button 
            onClick={() => scrollToSection('story')}
            className="bg-white text-orange-500 px-6 py-3 rounded-full font-medium inline-flex items-center hover:bg-gray-100 transition duration-300"
          >
            Learn More <ChevronDown className="ml-2" size={18} />
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar">
            <button 
              onClick={() => scrollToSection('story')}
              className={`px-6 py-4 text-sm md:text-base whitespace-nowrap font-medium transition duration-300 border-b-2 ${activeSection === 'story' ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-600 hover:text-orange-500'}`}
            >
              <BookOpen className="inline-block mr-2" size={18} />
              Our Story
            </button>
            <button 
              onClick={() => scrollToSection('mission')}
              className={`px-6 py-4 text-sm md:text-base whitespace-nowrap font-medium transition duration-300 border-b-2 ${activeSection === 'mission' ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-600 hover:text-orange-500'}`}
            >
              <Target className="inline-block mr-2" size={18} />
              Mission & Vision
            </button>
            <button 
              onClick={() => scrollToSection('leadership')}
              className={`px-6 py-4 text-sm md:text-base whitespace-nowrap font-medium transition duration-300 border-b-2 ${activeSection === 'leadership' ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-600 hover:text-orange-500'}`}
            >
              <Users className="inline-block mr-2" size={18} />
              Leadership
            </button>
            <button 
              onClick={() => scrollToSection('infrastructure')}
              className={`px-6 py-4 text-sm md:text-base whitespace-nowrap font-medium transition duration-300 border-b-2 ${activeSection === 'infrastructure' ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-600 hover:text-orange-500'}`}
            >
              <Building className="inline-block mr-2" size={18} />
              Infrastructure
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Our Story Section */}
        <section ref={sectionRefs.story} id="story" className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-500 opacity-20 rounded-lg"></div>
                <img 
                  src="/ourstory.webp" 
                  alt="College History" 
                  className="w-full h-auto rounded-lg shadow-lg relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500 opacity-20 rounded-lg"></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <div className="w-20 h-1 bg-orange-500 mb-6"></div>
              <p className="text-gray-600 mb-4">Excellence Engineering College was founded in 1985 with a bold vision to transform engineering education. What began as a small institution with just three departments has now grown into one of the country's premier engineering institutions.</p>
              <p className="text-gray-600 mb-4">Through decades of innovation and dedication to academic excellence, we have established ourselves as pioneers in technical education, research, and industry collaboration. Our commitment to quality education and holistic development has produced over 25,000 alumni who are making significant contributions across the globe.</p>
              <p className="text-gray-600 mb-6">Our journey reflects our adaptability to evolving technological landscapes while maintaining our core values of integrity, innovation, and inclusivity. As we look to the future, we continue to build on our rich legacy while embracing new challenges in engineering education.</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-full mr-4">
                    <Award className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Excellence</h3>
                    <p className="text-sm text-gray-600">Pursuit of highest standards in all endeavors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-full mr-4">
                    <Globe className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Global Outlook</h3>
                    <p className="text-sm text-gray-600">International collaborations and perspectives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
              <div className="text-4xl font-bold text-orange-500 mb-2">40+</div>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
              <div className="text-4xl font-bold text-orange-500 mb-2">25k+</div>
              <p className="text-gray-600">Alumni Worldwide</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
              <div className="text-4xl font-bold text-orange-500 mb-2">12</div>
              <p className="text-gray-600">Academic Departments</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
              <div className="text-4xl font-bold text-orange-500 mb-2">200+</div>
              <p className="text-gray-600">Industry Partners</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section ref={sectionRefs.mission} id="mission" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Mission & Vision</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">Guided by our core values and forward-thinking approach, we are committed to nurturing engineers who will shape a better tomorrow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Target className="text-orange-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">To provide world-class engineering education that balances theory with practice, fosters innovation, and cultivates ethical leadership to address global challenges.</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="text-orange-500 mt-1 mr-2" size={18} />
                  <span className="text-gray-600">Deliver cutting-edge technical education that adapts to industry needs</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-orange-500 mt-1 mr-2" size={18} />
                  <span className="text-gray-600">Conduct research that addresses real-world engineering problems</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-orange-500 mt-1 mr-2" size={18} />
                  <span className="text-gray-600">Foster innovation through interdisciplinary collaboration</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-orange-500 mt-1 mr-2" size={18} />
                  <span className="text-gray-600">Promote ethical engineering practices and social responsibility</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="text-orange-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">To be a globally recognized institution that pioneers engineering education, creates knowledge through breakthrough research, and produces graduates who lead technological innovation with integrity and social consciousness.</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="text-orange-500 mt-1 mr-2" size={18} />
                  <span className="text-gray-600">Become a top-tier global engineering institution by 2030</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-orange-500 mt-1 mr-2" size={18} />
                  <span className="text-gray-600">Establish centers of excellence in emerging technologies</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-orange-500 mt-1 mr-2" size={18} />
                  <span className="text-gray-600">Create an ecosystem that nurtures innovation and entrepreneurship</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-orange-500 mt-1 mr-2" size={18} />
                  <span className="text-gray-600">Lead sustainable engineering practices to address global challenges</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-orange-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-orange-500" size={24} />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Excellence</h4>
                <p className="text-sm text-gray-600">Pursuing the highest standards in all our endeavors</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-orange-500" size={24} />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Integrity</h4>
                <p className="text-sm text-gray-600">Upholding ethical standards and accountability</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-orange-500" size={24} />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Innovation</h4>
                <p className="text-sm text-gray-600">Encouraging creative solutions to engineering challenges</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-orange-500" size={24} />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Inclusivity</h4>
                <p className="text-sm text-gray-600">Embracing diversity and fostering a collaborative environment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section ref={sectionRefs.leadership} id="leadership" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Leadership</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">Meet the visionaries and experts who guide our institution towards excellence and innovation in engineering education.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Principal */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-64 bg-gray-200">
                <img 
                  src="/Hod/sir.jpg" 
                  alt="Dr. L.P Thangavelu" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. L.P Thangavelu</h3>
                <p className="text-orange-500 font-medium mb-3">Founder Chairman</p>
                <p className="text-gray-600 mb-4">Ph.D. in Computer Science with over 25 years of experience in academia and research. Specializes in AI and machine learning applications in engineering.</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-orange-500">
                    <Mail size={18} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500">
                    <Globe size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Vice Principal */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-64 bg-gray-200">
                <img 
                  src="/Hod/shanthi.jpg" 
                  alt="Mrs. Shanti Thangavelu" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Mrs. Shanti Thangavelu</h3>
                <p className="text-orange-500 font-medium mb-3">Correspondent</p>
                <p className="text-gray-600 mb-4">Ph.D. in Electrical Engineering with expertise in renewable energy systems. Led multiple national research projects and industry collaborations.</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-orange-500">
                    <Mail size={18} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500">
                    <Globe size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Director of Research */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-64 bg-gray-200">
                <img 
                  src="/Hod/akashy.jpg" 
                  alt="Mr. Akshay Thangavelu" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Mr. Akshay Thangavelu</h3>
                <p className="text-orange-500 font-medium mb-3">Vise Chairman</p>
                <p className="text-gray-600 mb-4">Ph.D. in Mechanical Engineering with a focus on sustainable manufacturing. Published over 100 research papers in international journals.</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-orange-500">
                    <Mail size={18} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500">
                    <Globe size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center hover:bg-orange-600 transition duration-300">
              View All Faculty Members <ChevronRight className="ml-2" size={18} />
            </button>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section ref={sectionRefs.infrastructure} id="infrastructure" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Infrastructure</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">Explore our state-of-the-art facilities designed to provide an optimal learning environment for future engineers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <img 
                src="/assets/7.webp" 
                alt="Campus Overview" 
                className="w-full h-auto rounded-lg shadow-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Modern Campus</h3>
              <p className="text-gray-600 mb-4">Our sprawling 50-acre campus features contemporary architecture, eco-friendly buildings, and landscaped gardens that create an inspiring atmosphere for learning and innovation.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="text-orange-500 mt-1 mr-2" size={18} />
                  <span className="text-gray-600">Smart classrooms equipped with advanced teaching aids</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-orange-500 mt-1 mr-2" size={18} />
                  <span className="text-gray-600">Renewable energy systems powering 40% of campus operations</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-orange-500 mt-1 mr-2" size={18} />
                  <span className="text-gray-600">Accessibility features throughout all buildings</span>
                </li>
              </ul>
            </div>
            
            <div>
              <img 
                src="/assets/4.jpg" 
                alt="Laboratories" 
                className="w-full h-auto rounded-lg shadow-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Advanced Laboratories</h3>
              <p className="text-gray-600 mb-4">Our specialized laboratories provide hands-on experience with industry-standard equipment and cutting-edge technology across all engineering disciplines.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="text-orange-500 mt-1 mr-2" size={18} />
                  <span className="text-gray-600">25+ specialized research labs with industry-grade equipment</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-orange-500 mt-1 mr-2" size={18} />
                  <span className="text-gray-600">Innovation hub for startups and prototyping</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-orange-500 mt-1 mr-2" size={18} />
                  <span className="text-gray-600">Regular upgrades to match industry standards</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Building className="text-orange-500" size={24} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Central Library</h4>
              <p className="text-gray-600">Three-floor digital library with over 100,000 volumes, online journals, and collaborative study spaces.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-orange-500" size={24} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Sports Complex</h4>
              <p className="text-gray-600">Indoor and outdoor sports facilities including Olympic-size swimming pool, gymnasium, and multiple playing fields.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-orange-500" size={24} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Auditorium & Conference Center</h4>
              <p className="text-gray-600">1500-seat auditorium with advanced acoustics and multiple conference rooms for events and technical symposiums.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center hover:bg-orange-600 transition duration-300">
              Virtual Campus Tour <ChevronRight className="ml-2" size={18} />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
