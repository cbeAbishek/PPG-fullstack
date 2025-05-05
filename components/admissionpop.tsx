// components/CollegeAdModal.js
import { useState, useEffect } from 'react';
import { X, User, Phone } from 'lucide-react';

export default function CollegeAdModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 10000); // slight delay for animation
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-500 ease-out ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Modal Content */}
      <div
        className={`relative bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto transition-all duration-500 ease-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none z-10"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Banner Image */}
        <img
          src="/popup.jpg"
          alt="College Campus"
          className="w-full h-40 object-cover rounded-t-xl"
        />

        {/* Modal Body */}
        <div className="p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#ff914d]">
              🎓 Admissions 2025 Now Open!
            </h2>
            <p className="text-gray-600 mt-1 text-sm">
              Kickstart your future at our top-ranked institution.
            </p>
          </div>

          {/* Form */}
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">
                Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff914d]"
                  placeholder="Enter your name"
                />
                <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff914d]"
                  placeholder="Enter your phone number"
                />
                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#ff914d] hover:bg-[#e67e3c] text-white font-bold py-2 px-4 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff914d] focus:ring-opacity-50"
            >
              Apply Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
