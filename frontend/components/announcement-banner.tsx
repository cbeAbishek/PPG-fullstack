"use client";
import React from "react";
import { motion } from "framer-motion";
import { Bell, ExternalLink } from "lucide-react";

type LatestNewsBannerProps = {
  title?: string;
  content?: string;
  link?: string;
  linkText?: string;
};

export const LatestNewsBanner = ({
  title = "Latest News",
  content = "Stay updated with the most recent campus events and announcements.",
  link,
  linkText = "Read more",
}: LatestNewsBannerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-[300px] rounded-xl bg-white/70 p-4 shadow-md sm:max-w-[800px]"
    >
      <div className="flex items-start gap-4">
        {/* Icon on Left */}
        <div className="rounded-full bg-[#fff0e6] hidden md:block p-3 shrink-0">
          <Bell className="h-6 w-6 text-[#ff914d]" />
        </div>

        {/* Text Content on Right */}
        <div className="flex-1">
          <h3 className="mb-1 text-lg font-bold text-black sm:text-xl">
            {title}
          </h3>
          <p className="mb-3 text-sm text-gray-900 sm:text-base">{content}</p>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-[#ff914d] transition-all hover:underline"
            >
              {linkText}
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
