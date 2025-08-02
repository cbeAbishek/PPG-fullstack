import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
} from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/YourEngineeringCollege",
    color: "#3b5998",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/YourEnggCollege",
    color: "#1da1f2",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/YourEngineeringCollege",
    color: "#e1306c",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/school/YourEngineeringCollege",
    color: "#0077b5",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/c/YourEngineeringCollege",
    color: "#ff0000",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/yourengineeringcollege",
    color: "#333",
  },
];

const CollegeMediaFollowUs = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 py-12 sm:px-12 md:px-20">
      {/* Header Section */}
      <header className="max-w-4xl w-full text-center mb-12">
        <h1
          className="text-4xl sm:text-5xl font-extrabold mb-4"
          style={{ color: "#ff914d" }}
        >
          Your Engineering College
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Empowering innovation and excellence in engineering education and
          research.
        </p>
      </header>

      {/* Social Media Section */}
      <section className="max-w-4xl w-full mb-16">
        <h2
          className="text-3xl font-semibold mb-8 text-center"
          style={{ color: "#ff914d" }}
        >
          Follow Us On Social Media
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center items-center">
          {socialLinks.map(({ name, icon: Icon, url, color }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Icon color={color} size={48} />
              <span className="text-sm font-medium text-gray-800">{name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* YouTube Video Embed */}
      <section className="max-w-4xl w-full mb-16">
        <h2
          className="text-3xl font-semibold mb-6 text-center"
          style={{ color: "#ff914d" }}
        >
          Watch Our Campus Highlights
        </h2>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg mx-auto max-w-3xl">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </section>

      {/* Additional College Details */}
      <section className="max-w-4xl w-full grid gap-10 md:grid-cols-2">
        <div
          className="p-6 rounded-lg shadow-lg"
          style={{ borderTop: "4px solid #ff914d" }}
        >
          <h3
            className="text-2xl font-semibold mb-4"
            style={{ color: "#ff914d" }}
          >
            About Our College
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Established in 1990, Your Engineering College is dedicated to
            providing top-tier education in engineering and technology. Our
            campus fosters innovation, creativity, and leadership, preparing
            students to meet the challenges of the future.
          </p>
        </div>

        <div
          className="p-6 rounded-lg shadow-lg"
          style={{ borderTop: "4px solid #ff914d" }}
        >
          <h3
            className="text-2xl font-semibold mb-4"
            style={{ color: "#ff914d" }}
          >
            Contact & Address
          </h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@yourengineeringcollege.edu"
              className="text-[#ff914d] underline"
            >
              info@yourengineeringcollege.edu
            </a>
          </p>
          <p className="text-gray-700 leading-relaxed">
            123 College Ave,
            <br />
            Tech City, State 45678,
            <br />
            USA
          </p>
        </div>
      </section>
    </div>
  );
};

export default CollegeMediaFollowUs;
