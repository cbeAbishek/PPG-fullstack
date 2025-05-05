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
        botResponse =
          "Admissions for 2024-25 are now open! You can apply online through our portal at /admissions/apply or visit the admissions office on campus. Would you like me to guide you through the application process?"
      } else if (lowerCaseMessage.includes("course") || lowerCaseMessage.includes("program")) {
        botResponse =
          "We offer various undergraduate and postgraduate engineering programs including Computer Science, Electronics, Mechanical, and Civil Engineering. Each program is designed with industry-relevant curriculum. Which program are you interested in learning more about?"
      } else if (lowerCaseMessage.includes("hostel") || lowerCaseMessage.includes("accommodation")) {
        botResponse =
          "Our campus has separate hostel facilities for male and female students. Each room is furnished and includes Wi-Fi, laundry services, and 24/7 security. Hostel fees vary depending on room type (shared or single occupancy)."
      } else if (lowerCaseMessage.includes("fee") || lowerCaseMessage.includes("tuition")) {
        botResponse =
          "Tuition fees vary by program. For the 2024-25 academic year, undergraduate programs range from ₹1.2-1.5 lakhs per year. We offer various scholarships and financial aid options. Would you like details about a specific program's fees?"
      } else if (lowerCaseMessage.includes("placement") || lowerCaseMessage.includes("job")) {
        botResponse =
          "Our placement record is excellent! Last year, we achieved 95% placement with companies like Google, Microsoft, and TCS. The average package was ₹8.5 LPA, with the highest being ₹42 LPA. Our dedicated placement cell conducts regular training sessions and campus interviews."
      } else if (lowerCaseMessage.includes("faculty") || lowerCaseMessage.includes("professor")) {
        botResponse =
          "We have over 350 highly qualified faculty members, many with PhDs from prestigious institutions and industry experience. Our faculty regularly publishes research papers and engages in industry collaborations. Would you like to know about a specific department's faculty?"
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
