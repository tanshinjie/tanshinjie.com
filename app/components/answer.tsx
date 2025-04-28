"use client";

import React from "react";

export function Answer({ children }) {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className="mt-2 mb-4">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="px-3 py-1 text-sm font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
      >
        {isVisible ? "Hide Answer" : "Show Answer"}
      </button>

      {isVisible && (
        <div className="mt-2 pl-3 border-l-2 border-neutral-300 dark:border-neutral-700">
          {children}
        </div>
      )}
    </div>
  );
}
