import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Others",
  description: "View my other stuffs.",
};

export default function ProjectsPage() {
  return (
    <div>
      <h2 className="font-semibold text-2xl mb-8 tracking-tighter">
        Places where I put my other stuffs.
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
            <h3 className="text-sm text-gray-600">Art District Singapore</h3>
            <h2 className="text-base font-bold mb-2">
              Singapore's premier art gallery showcasing a stunning collection
              of fine art pieces
            </h2>
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
            <h3 className="text-sm text-gray-600">
              MAVI (Mobile App UIUX Design)
            </h3>
            <h2 className="text-base font-bold mb-2">
              Mobile app to help promote mental health
            </h2>
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
            <h3 className="text-sm text-gray-600">
              JSP Wellness Bone Alignment
            </h3>
            <h2 className="text-base font-bold mb-2">
              Logo redesign for local bone alignment wellness centre
            </h2>
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
            <h3 className="text-sm text-gray-600">
              With Love (UIUX & Concept Design)
            </h3>
            <h2 className="text-base font-bold mb-2">
              Online chinese wedding ceremony interaction reimagined
            </h2>
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
            <h3 className="text-sm text-gray-600">Telegram Roster Bot</h3>
            <h2 className="text-base font-bold mb-2">
              Because I can't remember it is whose turn to clean toilet and
              house this week
            </h2>
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
