"use client";
import { useState, useEffect } from "react";
import {
  Book,
  GraduationCap,
  FileCheck,
  FileText,
  DollarSign,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Moon,
  Sun,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { MainNav } from "@/components/main-nav";
import Footer from "@/components/footer";

// Main component
export default function AdmissionsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    education: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formSuccess, setFormSuccess] = useState(false);

  // Handle form input changes
  interface FormData {
    fullName: string;
    email: string;
    phone: string;
    program: string;
    education: string;
    message: string;
  }

  interface FormErrors {
    fullName?: string;
    email?: string;
    phone?: string;
    program?: string;
    education?: string;
    [key: string]: string | undefined;
  }

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  // Validate form
  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};

    if (!formData.fullName.trim()) errors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.program) errors.program = "Please select a program";
    if (!formData.education)
      errors.education = "Please select your education level";

    return errors;
  };

  // Submit form
  interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = (e: HandleSubmitEvent) => {
    e.preventDefault();
    const errors: FormErrors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setFormSuccess(false);
      return;
    }

    // Form submission logic would go here
    console.log("Form submitted:", formData);
    setFormSuccess(true);

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      program: "",
      education: "",
      message: "",
    });

    // Clear errors
    setFormErrors({});

    // Scroll to top of form
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  // Toggle FAQ expansion
  interface ToggleFaq {
    (index: number): void;
  }

  const toggleFaq: ToggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "admissions",
        "apply",
        "requirements",
        "financial",
        "faqs",
      ];

      const sectionElements = sections.map((id) => {
        const element = document.getElementById(id);
        if (!element) return { id, top: 0, bottom: 0 };

        const rect = element.getBoundingClientRect();
        return {
          id,
          top: rect.top,
          bottom: rect.bottom,
        };
      });

      // Find the current section in view
      const currentSection = sectionElements.find(
        (section) => section.top <= 100 && section.bottom > 100
      );

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Scroll to section
  interface ScrollToSection {
    (id: string): void;
  }

  const scrollToSection: ScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "dark bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Navigation */}
      <MainNav />

      {/* Main content */}
      <main className="flex-grow mt-16">
        {/* Hero section */}
        <section className="relative">
          <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-96 md:h-[500px] flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Shape Your Future in Engineering
                </h1>
                <p className="text-xl text-white mb-8">
                  Join our prestigious engineering programs and build the
                  foundation for a successful career.
                </p>
                <button
                  onClick={() => scrollToSection("apply")}
                  className="bg-white text-orange-500 font-medium py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 flex items-center"
                >
                  Apply Now <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-900"></div>
        </section>

        {/* Admissions */}
        <section
          id="admissions"
          className={`py-16 ${darkMode ? "bg-gray-800" : "bg-orange-50"}`}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-8">
              <GraduationCap size={24} className="text-orange-500 mr-2" />
              <h2 className="text-3xl font-bold">Admissions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className={`p-6 rounded-lg shadow-md ${
                  darkMode ? "bg-gray-700" : "bg-white"
                }`}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                    1
                  </span>
                  Application Process
                </h3>
                <p className="mb-4">
                  Our admission process is designed to identify talented
                  students who demonstrate academic excellence, creativity, and
                  potential for growth.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-green-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Submit online application</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-green-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Upload required documents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-green-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Pay application fee</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-green-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Schedule entrance examination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-green-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Attend interview (if selected)</span>
                  </li>
                </ul>
              </div>

              <div
                className={`p-6 rounded-lg shadow-md ${
                  darkMode ? "bg-gray-700" : "bg-white"
                }`}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                    2
                  </span>
                  Key Dates
                </h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold">Early Decision</p>
                    <p className="text-sm">Application Deadline: November 15</p>
                    <p className="text-sm">
                      Decision Notification: December 15
                    </p>
                  </li>
                  <li>
                    <p className="font-semibold">Regular Decision</p>
                    <p className="text-sm">Application Deadline: January 15</p>
                    <p className="text-sm">Decision Notification: March 30</p>
                  </li>
                  <li>
                    <p className="font-semibold">Transfer Students</p>
                    <p className="text-sm">Application Deadline: March 1</p>
                    <p className="text-sm">Decision Notification: April 15</p>
                  </li>
                  <li>
                    <p className="font-semibold">International Students</p>
                    <p className="text-sm">Application Deadline: December 1</p>
                    <p className="text-sm">
                      Decision Notification: February 15
                    </p>
                  </li>
                </ul>
              </div>

              <div
                className={`p-6 rounded-lg shadow-md ${
                  darkMode ? "bg-gray-700" : "bg-white"
                }`}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                    3
                  </span>
                  Admission Statistics
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Acceptance Rate</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600 mt-2">
                      <div className="bg-orange-500 h-2.5 rounded-full w-3/12"></div>
                    </div>
                    <p className="text-sm mt-1">25% of applicants admitted</p>
                  </div>
                  <div>
                    <p className="font-semibold">Average GPA</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600 mt-2">
                      <div className="bg-orange-500 h-2.5 rounded-full w-9/12"></div>
                    </div>
                    <p className="text-sm mt-1">3.8 out of 4.0</p>
                  </div>
                  <div>
                    <p className="font-semibold">SAT Middle 50%</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600 mt-2">
                      <div className="bg-orange-500 h-2.5 rounded-full w-8/12 ml-1/12"></div>
                    </div>
                    <p className="text-sm mt-1">1350-1490</p>
                  </div>
                  <div>
                    <p className="font-semibold">International Students</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600 mt-2">
                      <div className="bg-orange-500 h-2.5 rounded-full w-2/12"></div>
                    </div>
                    <p className="text-sm mt-1">18% of student body</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => scrollToSection("apply")}
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition duration-300"
              >
                Start Your Application
              </button>
            </div>
          </div>
        </section>

        {/* Apply Now */}
        <section id="apply" className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-8">
              <FileCheck size={24} className="text-orange-500 mr-2" />
              <h2 className="text-3xl font-bold">Apply Now</h2>
            </div>

            <div className="max-w-3xl mx-auto">
              {formSuccess ? (
                <div
                  className={`p-6 rounded-lg shadow-md ${
                    darkMode ? "bg-gray-800 text-white" : "bg-white"
                  } mb-8`}
                >
                  <div className="flex items-center justify-center mb-4">
                    <CheckCircle size={48} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">
                    Application Submitted!
                  </h3>
                  <p className="text-center">
                    Thank you for submitting your application. Our admissions
                    team will review your information and contact you soon
                    regarding the next steps.
                  </p>
                  <div className="mt-6 text-center">
                    <button
                      onClick={() => setFormSuccess(false)}
                      className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg shadow transition duration-300"
                    >
                      Submit Another Application
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className={`p-6 rounded-lg shadow-md ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <div className="mb-8">
                    <p className="text-lg mb-2">
                      Complete the form below to start your application process.
                      Our admissions team will review your information and guide
                      you through the next steps.
                    </p>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="fullName"
                      className="block mb-2 font-medium"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        formErrors.fullName
                          ? "border-red-500"
                          : darkMode
                          ? "border-gray-600 bg-gray-700"
                          : "border-gray-300"
                      }`}
                      placeholder="Enter your full name"
                    />
                    {formErrors.fullName && (
                      <p className="mt-1 text-red-500 text-sm flex items-center">
                        <AlertCircle size={16} className="mr-1" />
                        {formErrors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          formErrors.email
                            ? "border-red-500"
                            : darkMode
                            ? "border-gray-600 bg-gray-700"
                            : "border-gray-300"
                        }`}
                        placeholder="Enter your email"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-red-500 text-sm flex items-center">
                          <AlertCircle size={16} className="mr-1" />
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          formErrors.phone
                            ? "border-red-500"
                            : darkMode
                            ? "border-gray-600 bg-gray-700"
                            : "border-gray-300"
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-red-500 text-sm flex items-center">
                          <AlertCircle size={16} className="mr-1" />
                          {formErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="program" className="block mb-2 font-medium">
                      Preferred Program <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        formErrors.program
                          ? "border-red-500"
                          : darkMode
                          ? "border-gray-600 bg-gray-700"
                          : "border-gray-300"
                      }`}
                    >
                      <option value="">Select a program</option>
                      <option value="cse">
                        Computer Science & Engineering
                      </option>
                      <option value="it">Information Technology</option>
                      <option value="aids">
                        Artificial Intelligence & Data Science
                      </option>
                      <option value="aiml">
                        Artificial Intelligence & Machine Learning
                      </option>
                      <option value="mech">Mechanical Engineering</option>
                      <option value="bme">Biomedical Engineering</option>
                      <option value="ece">
                        Electronics & Communication Engineering
                      </option>
                      <option value="agri">
                        Agricultural Engineering
                        </option>
                    </select>
                    {formErrors.program && (
                      <p className="mt-1 text-red-500 text-sm flex items-center">
                        <AlertCircle size={16} className="mr-1" />
                        {formErrors.program}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="education"
                      className="block mb-2 font-medium"
                    >
                      Highest Education Level{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        formErrors.education
                          ? "border-red-500"
                          : darkMode
                          ? "border-gray-600 bg-gray-700"
                          : "border-gray-300"
                      }`}
                    >
                      <option value="">Select education level</option>
                      <option value="high-school">High School</option>
                      <option value="associates">Associate's Degree</option>
                      <option value="bachelors">Bachelor's Degree</option>
                    </select>
                    {formErrors.education && (
                      <p className="mt-1 text-red-500 text-sm flex items-center">
                        <AlertCircle size={16} className="mr-1" />
                        {formErrors.education}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        darkMode
                          ? "border-gray-600 bg-gray-700"
                          : "border-gray-300"
                      }`}
                      placeholder="Any additional information you'd like to share"
                    ></textarea>
                  </div>
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition duration-300 w-full md:w-auto"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
        {/* Requirements */}
        <section
          id="requirements"
          className={`py-16 ${darkMode ? "bg-gray-900" : "bg-white"}`}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-8">
              <FileText size={24} className="text-orange-500 mr-2" />
              <h2 className="text-3xl font-bold">Application Requirements</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                className={`p-6 rounded-lg shadow-md ${
                  darkMode ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <h3 className="text-xl font-bold mb-4">
                  Undergraduate Requirements
                </h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Completed online application form</li>
                  <li>Official high school transcripts</li>
                  <li>SAT or ACT scores (optional for 2025)</li>
                  <li>Two letters of recommendation</li>
                  <li>Personal essay (500–700 words)</li>
                  <li>
                    English proficiency test scores (for non-native speakers)
                  </li>
                </ul>
              </div>
              <div
                className={`p-6 rounded-lg shadow-md ${
                  darkMode ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <h3 className="text-xl font-bold mb-4">
                  Graduate Requirements
                </h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Completed online application form</li>
                  <li>Official undergraduate transcripts</li>
                  <li>GRE score (varies by program)</li>
                  <li>Three letters of recommendation</li>
                  <li>Statement of purpose</li>
                  <li>Resume/CV highlighting relevant experience</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Aid */}
        <section id="financial" className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-8">
              <DollarSign size={24} className="text-orange-500 mr-2" />
              <h2 className="text-3xl font-bold">
                Financial Aid & Scholarships
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div
                className={`p-6 rounded-lg shadow-md ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <p className="mb-4">
                  We are committed to making quality education accessible and
                  affordable. Over 80% of our students receive some form of
                  financial aid.
                </p>
                <h3 className="font-bold text-xl mb-2">
                  Types of Aid Available:
                </h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Federal and State Grants</li>
                  <li>Institutional Scholarships</li>
                  <li>Federal Work-Study Programs</li>
                  <li>Loans (Federal and Private)</li>
                  <li>Tuition Payment Plans</li>
                </ul>
                <h3 className="font-bold text-xl mb-2">Scholarships</h3>
                <p>
                  Merit-based scholarships are automatically considered upon
                  admission. Need-based scholarships require submission of
                  FAFSA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section
          id="faqs"
          className={`py-16 ${darkMode ? "bg-gray-800" : "bg-orange-50"}`}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-8">
              <HelpCircle size={24} className="text-orange-500 mr-2" />
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {[
                  {
                    question: "What are the deadlines for applications?",
                    answer:
                      "Early Decision: November 15 | Regular Decision: January 15 | Transfer Students: March 1 | International Students: December 1",
                  },
                  {
                    question: "Is the SAT/ACT required?",
                    answer:
                      "For the 2025 academic year, submitting SAT/ACT scores is optional.",
                  },
                  {
                    question: "How can I check my application status?",
                    answer:
                      "You will receive login credentials to our applicant portal after submitting your application.",
                  },
                  {
                    question: "Are there on-campus housing options?",
                    answer:
                      "Yes! Our campus offers modern dormitories and apartment-style housing for both undergraduate and graduate students.",
                  },
                  {
                    question: "Can I visit the campus before applying?",
                    answer:
                      "We offer guided tours every Saturday. You can also schedule individual visits during the week.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className={`rounded-lg shadow-md overflow-hidden ${
                      darkMode ? "bg-gray-700" : "bg-white"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                    >
                      <span className="font-semibold">{faq.question}</span>
                      {expandedFaq === index ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    {expandedFaq === index && (
                      <div className="p-4 pt-0 border-t border-gray-200 dark:border-gray-600">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
