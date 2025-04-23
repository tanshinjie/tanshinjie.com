import React from "react";
import { Link } from "next-view-transitions";

import Image from "next/image";

export const metadata = {
  title: "Others",
  description: "View my other stuffs.",
};

export default function ProjectsPage() {
  return (
    <div>
      <h2 className="font-semibold text-2xl mb-8 tracking-tighter">
        Places where I put my other stuffs
      </h2>
      <br />
      <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-xl flex flex-row overflow-hidden">
          <div className="w-1/3 relative">
            <Image
              src="/images/artdistrict-thumbnail.png"
              alt="Art District Thumbnail"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-2/3 p-4">
            <h3 className="text-sm text-gray-600">Website Development</h3>
            <h2 className="text-base font-bold mb-2">Art District Singapore</h2>
            <p className="text-sm text-gray-500 mb-3">
              Singapore's premier art gallery showcasing a stunning collection
              of fine art pieces
            </p>
            <a
              href="https://www.artdistrict.sg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-xs rounded-md bg-gray-100 border border-gray-300 px-3 py-2 cursor-pointer text-gray-700 font-bold uppercase hover:bg-gray-200">
                View live site
              </span>
            </a>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl flex flex-row overflow-hidden">
          <div className="w-1/3 relative">
            <Image
              src="/images/mavi-thumbnail.png"
              alt="MAVI Thumbnail"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-2/3 p-4">
            <h3 className="text-sm text-gray-600">Mobile App UIUX Design</h3>
            <h2 className="text-base font-bold mb-2">MAVI</h2>
            <p className="text-sm text-gray-500 mb-3">
              Mobile app to help promote mental health
            </p>
            <div className="flex space-x-2">
              <Link href="/others/mavi">
                <span className="text-xs rounded-md bg-gray-100 border border-gray-300 px-3 py-2 cursor-pointer text-gray-700 font-bold uppercase hover:bg-gray-200">
                  Read case study
                </span>
              </Link>
              <a
                href="https://www.figma.com/proto/s8HCd96KKzSqMz6b2jruso/Mavi-Hi-Fi-Prototype-Demo?node-id=166%3A6156&scaling=scale-down&page-id=0%3A1&starting-point-node-id=166%3A6156&show-proto-sidebar=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-xs px-3 py-2 cursor-pointer text-gray-600 font-bold uppercase hover:text-black">
                  Figma Prototype
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl flex flex-row overflow-hidden">
          <div className="w-1/3 relative">
            <Image
              src="/images/jsp-thumbnail.png"
              alt="JSP Wellness Thumbnail"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-2/3 p-4">
            <h3 className="text-sm text-gray-600">Logo Design</h3>
            <h2 className="text-base font-bold mb-2">JSP Wellness</h2>
            <p className="text-sm text-gray-500 mb-3">
              Logo redesign for local bone alignment wellness centre
            </p>
            <Link href="/others/jspwellness">
              <span className="text-xs rounded-md bg-gray-100 border border-gray-300 px-3 py-2 cursor-pointer text-gray-700 font-bold uppercase hover:bg-gray-200">
                Read case study
              </span>
            </Link>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl flex flex-row overflow-hidden">
          <div className="w-1/3 relative">
            <Image
              src="/images/withlove-thumbnail.png"
              alt="With Love Thumbnail"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-2/3 p-4">
            <h3 className="text-sm text-gray-600">UIUX & Concept Design</h3>
            <h2 className="text-base font-bold mb-2">With Love</h2>
            <p className="text-sm text-gray-500 mb-3">
              Online chinese wedding ceremony interaction reimagined
            </p>
            <Link href="/others/with-love">
              <span className="text-xs rounded-md bg-gray-100 border border-gray-300 px-3 py-2 cursor-pointer text-gray-700 font-bold uppercase hover:bg-gray-200">
                Read case study
              </span>
            </Link>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl flex flex-row overflow-hidden">
          <div className="w-1/3 relative">
            <Image
              src="/images/telegram-roster-bot-thumbnail.png"
              alt="Telegram Roster Bot Thumbnail"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-2/3 p-4">
            <h3 className="text-sm text-gray-600">Bot Programming</h3>
            <h2 className="text-base font-bold mb-2">Telegram Roster Bot</h2>
            <p className="text-sm text-gray-500 mb-3">
              Because I can't remember it is whose turn to clean toilet and
              house this week
            </p>
            <div className="flex space-x-2">
              <Link href="/others/telegram-roster-bot">
                <span className="text-xs rounded-md bg-gray-100 border border-gray-300 px-3 py-2 cursor-pointer text-gray-700 font-bold uppercase hover:bg-gray-200">
                  Read blog
                </span>
              </Link>
              <a
                href="https://github.com/tanshinjie/telegram-roster-bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-xs px-3 py-2 cursor-pointer text-gray-600 font-bold uppercase hover:text-black">
                  Source
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
