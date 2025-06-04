"use client";

import { useEffect } from "react";
import { logResumeView, logResumeDownload } from "../lib/firebase";

export default function ResumePage() {
  useEffect(() => {
    logResumeView();
  }, []);

  const handleDownload = () => {
    logResumeDownload();
    const resumeUrl = "/resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="max-w-2xl py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-4">Hey there! 👋</h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        The internet has brought you here, and my resume is just one click away.
        No sketchy downloads, no viruses, just a PDF of my work adventures.
        Promise! 🤝
      </p>
      <a
        onClick={handleDownload}
        className="group inline-flex items-center text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors cursor-pointer"
      >
        <span className="mr-2">Get my resume</span>
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  );
}
