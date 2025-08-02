"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BotMessageSquare, X, Send, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "👋 Hi there! I'm your Engineering College assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isOpen])

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!message.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prevMessages) => [...prevMessages, userMessage])
    setMessage("")
    setIsTyping(true)

    // Simulate bot response with common college-related queries
    setTimeout(() => {
      let botResponse =
        "I'm not sure how to help with that. Can you try asking something about admissions, courses, or campus facilities?"
      const lowerCaseMessage = message.toLowerCase()
      if (lowerCaseMessage.includes("admission") || lowerCaseMessage.includes("apply")) {
        botResponse = "Admissions for 2024-25 are now open! You can apply online through our portal at /admissions/apply or visit the admissions office on campus. Would you like me to guide you through the application process?"
      } else if (lowerCaseMessage.includes("deadline") || lowerCaseMessage.includes("last date")) {
        botResponse = "The application deadline for the Fall 2024 semester is July 31, 2024. For Spring 2025 admissions, applications will be accepted until November 30, 2024. I recommend applying early as some programs fill up quickly!"
      } else if (lowerCaseMessage.includes("admission criteria") || lowerCaseMessage.includes("eligibility")) {
        botResponse = "Our admission criteria include academic performance in qualifying exams (minimum 60%), entrance test scores, and for some programs, a personal interview. Specific requirements vary by program. Would you like details for a particular course?"
      } else if (lowerCaseMessage.includes("document") || lowerCaseMessage.includes("certificate")) {
        botResponse = "Required documents include academic transcripts, ID proof, entrance exam scores, passport-sized photographs, and domicile certificate (if applicable). International students need additional documents like passport and visa details. All documents can be uploaded to our online portal."
      } else if (lowerCaseMessage.includes("entrance exam") || lowerCaseMessage.includes("test")) {
        botResponse = "We accept national entrance exams like JEE, GATE, CAT depending on the program. Some departments also conduct their own entrance tests. The next college-specific entrance exam is scheduled for June 15, 2024. Registration closes on May 30."
      }
      if (lowerCaseMessage.includes("course") || lowerCaseMessage.includes("program")) {
        botResponse = "We offer various undergraduate and postgraduate engineering programs including Computer Science, Electronics, Mechanical, and Civil Engineering. Each program is designed with industry-relevant curriculum. Which program are you interested in learning more about?"
      } else if (lowerCaseMessage.includes("curriculum") || lowerCaseMessage.includes("syllabus")) {
        botResponse = "Our curriculum is regularly updated in consultation with industry experts. It includes core subjects, electives, practical labs, industrial visits, and project work. You can view detailed syllabi for all programs on our academic portal at /academics/syllabi."
      } else if (lowerCaseMessage.includes("semester") || lowerCaseMessage.includes("academic calendar")) {
        botResponse = "The Fall semester runs from August to December, and the Spring semester from January to May. Our academic calendar with exact dates for classes, exams, and holidays is available at /academics/calendar. The upcoming semester begins on August 10, 2024."
      } else if (lowerCaseMessage.includes("online") || lowerCaseMessage.includes("distance learning")) {
        botResponse = "Yes, we offer several programs through distance and online modes. These include MBA, MCA, and select engineering courses. Our online programs feature virtual labs, recorded lectures, and interactive sessions. Would you like information about a specific online program?"
      } else if (lowerCaseMessage.includes("credit") || lowerCaseMessage.includes("grade")) {
        botResponse = "We follow a credit-based grading system. Most undergraduate programs require 160-180 credits for graduation. Our grading scale runs from A+ to F, with a minimum CGPA of 5.0 required to graduate. Detailed evaluation criteria are available in our academic handbook."
      }
      if (lowerCaseMessage.includes("hostel") || lowerCaseMessage.includes("accommodation")) {
        botResponse = "Our campus has separate hostel facilities for male and female students. Each room is furnished and includes Wi-Fi, laundry services, and 24/7 security. Hostel fees vary depending on room type (shared or single occupancy)."
      } else if (lowerCaseMessage.includes("library") || lowerCaseMessage.includes("book")) {
        botResponse = "Our central library houses over 100,000 books, journals, and digital resources. It's open from 8 AM to 11 PM on weekdays and 9 AM to 6 PM on weekends. Students can borrow up to 5 books for 14 days. We also provide access to several online databases and e-journals."
      } else if (lowerCaseMessage.includes("lab") || lowerCaseMessage.includes("workshop")) {
        botResponse = "We have state-of-the-art laboratories for all disciplines, including advanced computing labs, electronics workshops, material testing labs, and biotech research facilities. Many labs are accessible 24/7 with faculty approval. Virtual lab tours are available on our website."
      } else if (lowerCaseMessage.includes("sport") || lowerCaseMessage.includes("gym")) {
        botResponse = "Our sports complex includes cricket and football grounds, basketball and tennis courts, an Olympic-sized swimming pool, and a fully equipped gymnasium. We also have indoor facilities for badminton, table tennis, and chess. Various sports tournaments are organized throughout the academic year."
      } else if (lowerCaseMessage.includes("cafeteria") || lowerCaseMessage.includes("food")) {
        botResponse = "The campus has 5 cafeterias offering diverse cuisines at student-friendly prices. The main cafeteria operates from 7 AM to 10 PM, while others have varying timings. We also have a convenience store and several coffee shops across campus. All dining facilities follow strict hygiene standards."
      }
      if (lowerCaseMessage.includes("fee") || lowerCaseMessage.includes("tuition")) {
        botResponse = "Tuition fees vary by program. For the 2024-25 academic year, undergraduate programs range from ₹1.2-1.5 lakhs per year. We offer various scholarships and financial aid options. Would you like details about a specific program's fees?"
      } else if (lowerCaseMessage.includes("scholarship") || lowerCaseMessage.includes("financial aid")) {
        botResponse = "We offer merit-based scholarships covering 25-100% of tuition fees, need-based financial aid, and sports scholarships. Additional scholarships are available for women in STEM and first-generation college students. Applications for financial assistance open on June 1, 2024."
      } else if (lowerCaseMessage.includes("payment") || lowerCaseMessage.includes("installment")) {
        botResponse = "Fees can be paid online through our portal or via bank transfer. We offer semesterly and quarterly payment plans. For the upcoming academic year, the first installment is due by August 5, 2024. Late payments incur a 5% penalty."
      } else if (lowerCaseMessage.includes("refund") || lowerCaseMessage.includes("withdraw")) {
        botResponse = "Our refund policy provides 100% refund if withdrawal is requested before classes begin, 80% within the first week, and 50% within the first month. No refunds are issued after 30 days of semester commencement. The detailed policy is available at /admissions/refund-policy."
      } else if (lowerCaseMessage.includes("loan") || lowerCaseMessage.includes("education loan")) {
        botResponse = "We have tie-ups with several banks offering education loans at preferential interest rates. Our financial aid office can provide assistance with loan applications and required documentation. Typically, loans cover tuition fees and a portion of living expenses."
      }
      if (lowerCaseMessage.includes("placement") || lowerCaseMessage.includes("job")) {
        botResponse = "Our placement record is excellent! Last year, we achieved 95% placement with companies like Google, Microsoft, and TCS. The average package was ₹8.5 LPA, with the highest being ₹42 LPA. Our dedicated placement cell conducts regular training sessions and campus interviews."
      } else if (lowerCaseMessage.includes("internship") || lowerCaseMessage.includes("training")) {
        botResponse = "We facilitate internships for all students after their third year. Last year, over 500 companies offered internships with stipends ranging from ₹15,000-40,000 per month. Many internships convert to pre-placement offers. The internship drive for this academic year begins in October 2024."
      } else if (lowerCaseMessage.includes("company") || lowerCaseMessage.includes("recruiter")) {
        botResponse = "Our regular recruiters include tech giants (Google, Microsoft, Amazon), consulting firms (McKinsey, BCG), core engineering companies (L&T, Tata Steel), and startups. In total, more than 300 companies visited our campus last year for recruitment across various sectors."
      } else if (lowerCaseMessage.includes("career counseling") || lowerCaseMessage.includes("guidance")) {
        botResponse = "Our Career Development Center offers one-on-one counseling, resume building workshops, mock interviews, and personality development sessions. We also have an alumni mentorship program where students can connect with graduates working in their fields of interest."
      } else if (lowerCaseMessage.includes("alumni") || lowerCaseMessage.includes("graduate")) {
        botResponse = "Our alumni network spans across 45+ countries with notable graduates in leadership positions at Fortune 500 companies, research institutions, and entrepreneurial ventures. We organize regular alumni meets and maintain an active alumni portal for networking opportunities."
      }
      if (lowerCaseMessage.includes("faculty") || lowerCaseMessage.includes("professor")) {
        botResponse = "We have over 350 highly qualified faculty members, many with PhDs from prestigious institutions and industry experience. Our faculty regularly publishes research papers and engages in industry collaborations. Would you like to know about a specific department's faculty?"
      } else if (lowerCaseMessage.includes("research") || lowerCaseMessage.includes("project")) {
        botResponse = "Our institution is known for cutting-edge research in areas like AI, renewable energy, biomedical engineering, and sustainable architecture. We have secured research grants worth ₹25 crores in the last academic year. Students can join ongoing projects or propose their own research ideas."
      } else if (lowerCaseMessage.includes("publication") || lowerCaseMessage.includes("paper")) {
        botResponse = "Our faculty and students have published over 500 research papers in high-impact journals last year. We have our own research journal and host an annual international conference. The library provides access to all major research databases to support scholarly activities."
      } else if (lowerCaseMessage.includes("collaboration") || lowerCaseMessage.includes("partnership")) {
        botResponse = "We collaborate with 50+ universities worldwide for student exchange, joint research, and dual degree programs. Our industry partnerships include research collaborations, sponsored laboratories, and consultancy projects with leading companies across sectors."
      } else if (lowerCaseMessage.includes("patent") || lowerCaseMessage.includes("innovation")) {
        botResponse = "Our faculty and students have filed 75+ patents in the last five years. The Innovation and Entrepreneurship Cell provides support for patent filing, prototype development, and commercialization of innovations. We've successfully incubated 25 startups founded by our students and faculty."
      }
      if (lowerCaseMessage.includes("club") || lowerCaseMessage.includes("society")) {
        botResponse = "We have 40+ student clubs covering technical interests, cultural activities, sports, and social service. Popular ones include the Robotics Club, Literary Society, Photography Club, and Social Outreach Initiative. Club activities run throughout the year with major events during our annual fest."
      } else if (lowerCaseMessage.includes("event") || lowerCaseMessage.includes("fest")) {
        botResponse = "Our annual technical fest 'Innovision' happens in February, while the cultural fest 'Rhythms' is held in October. Department-specific symposiums, workshops, and conferences are organized year-round. The upcoming major event is the Freshers' Welcome on August 25, 2024."
      } else if (lowerCaseMessage.includes("volunteer") || lowerCaseMessage.includes("social service")) {
        botResponse = "Our NSS wing and various social service clubs organize regular activities like blood donation camps, teaching underprivileged children, environmental campaigns, and rural development programs. These activities contribute to students' holistic development and count towards activity credits."
      } else if (lowerCaseMessage.includes("competition") || lowerCaseMessage.includes("hackathon")) {
        botResponse = "Students regularly participate in national and international competitions across disciplines. Last year, our teams won top positions in Smart India Hackathon, ROBOCON, and ACM-ICPC. We also host several inter-college and intra-college competitions throughout the academic year."
      } else if (lowerCaseMessage.includes("counseling") || lowerCaseMessage.includes("mental health")) {
        botResponse = "We have a Student Wellness Center with professional counselors available for confidential consultations. Regular workshops on stress management, time management, and emotional wellbeing are conducted. You can book appointments online or walk in during center hours (9 AM - 6 PM weekdays)."
      }
      if (lowerCaseMessage.includes("international") || lowerCaseMessage.includes("foreign student")) {
        botResponse = "We welcome international students from 30+ countries. Our International Relations Office assists with admission procedures, visa processing, accommodation arrangements, and cultural integration. Currently, about 8% of our student population comprises international students."
      } else if (lowerCaseMessage.includes("visa") || lowerCaseMessage.includes("immigration")) {
        botResponse = "Our International Office provides assistance with student visa applications and extensions. Upon admission, we'll issue an official acceptance letter required for visa processing. The office also conducts orientation sessions on Indian immigration regulations for international students."
      } else if (lowerCaseMessage.includes("exchange") || lowerCaseMessage.includes("semester abroad")) {
        botResponse = "We have semester exchange programs with universities in USA, Germany, Singapore, Australia, and Japan. These typically last 3-6 months with credit transfer arrangements. Applications for the Spring 2025 exchange program will open in September 2024."
      } else if (lowerCaseMessage.includes("english") || lowerCaseMessage.includes("language requirement")) {
        botResponse = "International applicants from non-English speaking countries need to submit TOEFL (minimum 80) or IELTS (minimum 6.5) scores. We also offer a pre-semester English proficiency course for admitted students who need additional language support."
      } else if (lowerCaseMessage.includes("culture") || lowerCaseMessage.includes("adjustment")) {
        botResponse = "We organize orientation programs and cultural integration workshops for international students. The International Students' Association arranges cultural events, city tours, and buddy programs to help new international students adjust to campus life and Indian culture."
      }
      if (lowerCaseMessage.includes("contact") || lowerCaseMessage.includes("email")) {
        botResponse = "You can reach our admissions office at admissions@collegename.edu or call +91-XX-XXXXXXXX (Mon-Fri, 9 AM - 5 PM). For department-specific queries, please visit our directory at /contact/departments. Our postal address is [College Name, Full Address with PIN code]."
      } else if (lowerCaseMessage.includes("visit") || lowerCaseMessage.includes("campus tour")) {
        botResponse = "We welcome campus visits! Guided tours are conducted every Saturday at 10 AM and 2 PM. Please register at least 48 hours in advance through our website. Virtual campus tours are also available online. Would you like me to help you schedule a visit?"
      } else if (lowerCaseMessage.includes("location") || lowerCaseMessage.includes("direction")) {
        botResponse = "Our main campus is located at [Exact Address]. We're 15 km from the airport and 5 km from the central railway station. Campus shuttle services are available from these locations. You can find detailed directions and an interactive map on our website's 'How to Reach Us' page."
      } else if (lowerCaseMessage.includes("parking") || lowerCaseMessage.includes("vehicle")) {
        botResponse = "Visitor parking is available near the main gate. Please inform the security personnel of your purpose of visit. For extended stays, visitor parking permits can be obtained from the administrative office. Electric vehicle charging stations are also available on campus."
      } else if (lowerCaseMessage.includes("virtual tour") || lowerCaseMessage.includes("online tour")) {
        botResponse = "You can take a 360° virtual tour of our campus at /virtual-tour. The tour covers academic buildings, hostels, sports facilities, and recreation areas. We also have departmental virtual tours that showcase labs and specialized facilities. Would you like the link to a specific area?"
      }
      if (lowerCaseMessage.includes("wifi") || lowerCaseMessage.includes("internet")) {
        botResponse = "Our entire campus is Wi-Fi enabled with high-speed internet (1 Gbps). Students receive personal login credentials upon admission. Guest Wi-Fi is available for visitors with a daily pass. Technical support for connectivity issues is available 24/7 through our IT helpdesk."
      } else if (lowerCaseMessage.includes("holiday") || lowerCaseMessage.includes("vacation")) {
        botResponse = "Our academic calendar includes a summer break (May-July), winter break (December 20-January 5), and breaks during major festivals. The complete holiday list for the upcoming academic year is available on our website under Academic Calendar."
      } else if (lowerCaseMessage.includes("ragging") || lowerCaseMessage.includes("harassment")) {
        botResponse = "We have a strict anti-ragging policy with zero tolerance for harassment. An Anti-Ragging Committee and squad actively monitor campus activities. Students can report incidents confidentially through our helpline (XXXXXXXX) or email (antiragging@collegename.edu)."
      } else if (lowerCaseMessage.includes("dress code") || lowerCaseMessage.includes("uniform")) {
        botResponse = "We don't have a mandatory uniform for regular classes. However, formal attire is required during presentations, seminars, and official functions. For laboratory sessions, appropriate lab coats and safety equipment are mandatory as specified by respective departments."
      } else if (lowerCaseMessage.includes("covid") || lowerCaseMessage.includes("pandemic")) {
        botResponse = "We follow all government guidelines regarding health protocols. Currently, the campus is fully operational with standard hygiene practices in place. Our health center is equipped to handle any medical situation, and we have isolation facilities if needed. All students are encouraged to be fully vaccinated."
      }

      const botMessageObj: Message = {
        id: Date.now().toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prevMessages) => [...prevMessages, botMessageObj])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <>
      {/* Chat toggle button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-12 w-12 rounded-full bg-orange-500 p-3 text-white shadow-lg hover:bg-orange-600"
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? <X className="h-8 w-8" /> : <BotMessageSquare className="h-8 w-8" />}
        </Button>
      </motion.div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 flex w-96 max-w-[calc(100vw-2rem)] flex-col rounded-2xl bg-white shadow-xl dark:bg-gray-800"
          >
            {/* Chat  flex-col rounded-2xl bg-white shadow-xl dark:bg-gray-800"
          >
            {/* Chat header */}
            <div className="flex items-center justify-between rounded-t-2xl bg-orange-500 p-4 text-white">
              <div className="flex items-center">
                <Bot className="mr-2 h-6 w-6" />
                <div>
                  <h3 className="font-bold">College Assistant</h3>
                  <p className="text-xs text-orange-100">Online | Typically replies instantly</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full text-white hover:bg-orange-600"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Chat messages */}
            <div className="flex flex-1 flex-col overflow-y-auto p-4 chat-window" style={{ maxHeight: "350px" }}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-4 max-w-[80%] rounded-2xl p-3 ${
                    msg.sender === "user"
                      ? "ml-auto bg-orange-500 text-white"
                      : "mr-auto bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className="mt-1 text-right text-xs opacity-70">
                    {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              ))}

              {isTyping && (
                <div className="mr-auto mb-4 flex max-w-[80%] items-center rounded-2xl bg-gray-100 p-3 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                  <div className="flex space-x-1">
                    <motion.div
                      className="h-2 w-2 rounded-full bg-gray-500"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                    />
                    <motion.div
                      className="h-2 w-2 rounded-full bg-gray-500"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.5, delay: 0.1, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                    />
                    <motion.div
                      className="h-2 w-2 rounded-full bg-gray-500"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.5, delay: 0.2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                    />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Chat input */}
            <form onSubmit={handleSendMessage} className="border-t p-3 dark:border-gray-700">
              <div className="flex items-center rounded-full border bg-gray-50 px-4 py-2 dark:border-gray-600 dark:bg-gray-700">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent text-sm focus:outline-none dark:text-white"
                />
                <Button
                  type="submit"
                  disabled={!message.trim()}
                  size="icon"
                  className="ml-2 h-8 w-8 rounded-full bg-orange-500 p-0 text-white hover:bg-orange-600 disabled:bg-orange-300"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
                Ask about admissions, courses, facilities, or anything else!
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
