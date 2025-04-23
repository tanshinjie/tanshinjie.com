import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Projects",
  description: "View my projects.",
};

export default function Projects() {
  return (
    <div>
      <div className="font-semibold text-2xl mb-8 tracking-tighter">
        My Projects
      </div>
      <br />
      <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-xl flex flex-row overflow-hidden">
          <div className="w-1/3 relative">
            <Image
              src="/images/skool-hide-viewed-post-thumbnail.png"
              alt="Skool Hide Viewed Post Thumbnail"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-2/3 p-4">
            <h3 className="text-sm text-gray-600">Chrome Extension</h3>
            <h2 className="text-base font-bold mb-2">Skool Hide Viewed Post</h2>
            <p className="text-sm text-gray-500 mb-3">
              Increase contrast between read and unread posts on Skool to make
              it easier to see what you've already read.
            </p>
            <a
              href="https://chromewebstore.google.com/detail/skool-hide-viewed-post/jlijcggjbdakecagcapdnokcpmieahel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-xs rounded-md bg-gray-100 border border-gray-300 px-3 py-2 cursor-pointer text-gray-700 font-bold uppercase hover:bg-gray-200">
                Install extension
              </span>
            </a>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl flex flex-row overflow-hidden">
          <div className="w-1/3 relative">
            <Image
              src="/images/skool-group-count-thumbnail.png"
              alt="Skool Group Count Thumbnail"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-2/3 p-4">
            <h3 className="text-sm text-gray-600">Chrome Extension</h3>
            <h2 className="text-base font-bold mb-2">Skool Group Count</h2>
            <p className="text-sm text-gray-500 mb-3">
              1-Click Extension to show the number of groups in each category on
              Skool.com.
            </p>
            <a
              href="https://chromewebstore.google.com/detail/skool-group-count/kpeglkfflpaednnhiihllkjnfheofbag"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-xs rounded-md bg-gray-100 border border-gray-300 px-3 py-2 cursor-pointer text-gray-700 font-bold uppercase hover:bg-gray-200">
                Install extension
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
