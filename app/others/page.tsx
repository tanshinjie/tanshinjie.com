import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Others",
  description: "View my other stuffs.",
};

export default function ProjectsPage() {
  return (
    <main>
      <div>Place where I put my other stuffs.</div>
      <div className="max-w-5xl m-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold opacity-80 my-10">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-gradient-to-br from-[#adc8e1] to-[#70a2d1] rounded-3xl">
            <div className="w-auto h-auto p-8 md:p-12 pb-0 text-gray-800 text-opacity-90">
              <div className="mb-12">
                <h3 className="text-base">GR Luxury Singapore</h3>
                <h2 className="text-xl md:text-2xl font-extrabold">
                  Website revamp for Singapore's fine watch dealer, improving
                  user experience
                </h2>
              </div>
              <a
                href="https://www.grluxury.sg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="rounded-2xl bg-gradient-to-b from-gray-800 to-[#000000CC] px-4 md:px-8 py-4 cursor-pointer text-[#eee] font-bold uppercase hover:bg-blend-overlay hover:text-white">
                  View live site
                </span>
              </a>
            </div>
            <Image
              src="/images/grluxury-thumbnail.png"
              alt="GR Luxury Thumbnail"
              width={600}
              height={400}
              className="mt-8 mx-auto px-6 object-scale-down md:object-fill object-bottom"
            />
          </div>
          <div className="bg-gradient-to-br from-[#eee] to-[#ddd] rounded-3xl">
            <div className="w-auto h-auto p-8 md:p-12 pb-0 text-gray-800 text-opacity-90">
              <div className="mb-12">
                <h3 className="text-base">Art District Singapore</h3>
                <h2 className="text-xl md:text-2xl font-extrabold">
                  Singapore's premier art gallery showcasing a stunning
                  collection of fine art pieces
                </h2>
              </div>
              <a
                href="https://www.artdistrict.sg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="rounded-2xl bg-gradient-to-b from-gray-800 to-[#000000CC] px-4 md:px-8 py-4 cursor-pointer text-[#eee] font-bold uppercase hover:bg-blend-overlay hover:text-white">
                  View live site
                </span>
              </a>
            </div>
            <Image
              src="/images/artdistrict-thumbnail.png"
              alt="Art District Thumbnail"
              width={600}
              height={400}
              className="mt-8 mx-auto px-6 object-scale-down md:object-fill object-bottom"
            />
          </div>

          <div className="bg-gradient-to-br from-[#7850e6] to-[#5F2EEA] rounded-3xl">
            <div className="w-auto h-auto p-8 md:p-12 pb-0 text-white text-opacity-90">
              <div className="mb-12">
                <h3 className="text-base">MAVI (Mobile App UIUX Design)</h3>
                <h2 className="text-xl md:text-2xl font-extrabold">
                  Mobile app to help promote mental health
                </h2>
              </div>
              <Link href="/others/mavi">
                <span className="rounded-2xl bg-gradient-to-b from-white to-[#FFFFFFCC] px-4 md:px-8 py-4 cursor-pointer text-[#5F2EEA] font-bold uppercase hover:bg-blend-overlay hover:text-white">
                  Read case study
                </span>
              </Link>
              <a
                href="https://www.figma.com/proto/s8HCd96KKzSqMz6b2jruso/Mavi-Hi-Fi-Prototype-Demo?node-id=166%3A6156&scaling=scale-down&page-id=0%3A1&starting-point-node-id=166%3A6156&show-proto-sidebar=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="px-4 md:px-8 py-4 cursor-pointer font-bold uppercase hover:bg-blend-overlay hover:text-[#ac8eff]">
                  View demo
                </span>
              </a>
            </div>
            <Image
              src="/images/mavi-thumbnail.png"
              alt="MAVI Thumbnail"
              width={600}
              height={400}
              className="mt-8 mx-auto px-6 object-scale-down md:object-fill object-bottom"
            />
          </div>

          <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl">
            <div className="w-auto h-auto p-8 md:p-12 pb-0 text-white text-opacity-90">
              <div className="mb-12">
                <h3 className="text-base">
                  JSP Wellness Bone Alignment (Branding)
                </h3>
                <h2 className="text-xl md:text-2xl font-extrabold">
                  Logo redesign for local bone alignment wellness centre
                </h2>
              </div>
              <Link href="/others/jspwellness">
                <span className="rounded-2xl bg-gradient-to-b from-white to-[#FFFFFFCC] px-4 md:px-8 py-4 cursor-pointer text-neutral-900 font-bold uppercase hover:bg-blend-overlay hover:text-white">
                  Read case study
                </span>
              </Link>
            </div>
            <Image
              src="/images/jsp-thumbnail.png"
              alt="JSP Wellness Thumbnail"
              width={600}
              height={400}
              className="mt-8 mx-auto px-6 object-scale-down md:object-fill object-bottom"
            />
          </div>

          <div className="bg-gradient-to-br from-pink-400 to-pink-500 rounded-3xl">
            <div className="w-auto h-auto p-8 md:p-12 pb-0 text-white text-opacity-90">
              <div className="mb-12">
                <h3 className="text-base">With Love (UIUX & Concept Design)</h3>
                <h2 className="text-xl md:text-2xl font-extrabold">
                  Online chinese wedding ceremony interaction reimagined
                </h2>
              </div>
              <Link href="/others/with-love">
                <span className="rounded-2xl bg-gradient-to-b from-white to-[#FFFFFFCC] px-4 md:px-8 py-4 cursor-pointer text-pink-500 font-bold uppercase hover:bg-blend-overlay hover:text-white">
                  Read case study
                </span>
              </Link>
            </div>
            <Image
              src="/images/withlove-thumbnail.png"
              alt="With Love Thumbnail"
              width={600}
              height={400}
              className="mt-8 mx-auto px-6 object-scale-down md:object-fill object-bottom"
            />
          </div>

          <div className="bg-gradient-to-br from-sky-600 to-blue-800 rounded-3xl">
            <div className="w-auto h-auto p-8 md:p-12 pb-0 text-white text-opacity-90">
              <div className="mb-12">
                <h3 className="text-base">
                  Telegram Roster Bot (Bot Programming)
                </h3>
                <h2 className="text-xl md:text-2xl font-extrabold">
                  Because I can't remember it is whose turn to clean toilet and
                  house this week
                </h2>
              </div>
              <Link href="/others/telegram-roster-bot">
                <span className="rounded-2xl bg-gradient-to-b from-white to-[#FFFFFFCC] px-4 md:px-8 py-4 cursor-pointer text-sky-500 font-bold uppercase hover:bg-blend-overlay hover:text-white">
                  Read blog
                </span>
              </Link>
              <a
                href="https://github.com/tanshinjie/telegram-roster-bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="px-4 md:px-8 py-4 cursor-pointer font-bold uppercase hover:bg-blend-overlay hover:text-blue-400">
                  View source code
                </span>
              </a>
            </div>
            <Image
              src="/images/telegram-roster-bot-thumbnail.png"
              alt="Telegram Roster Bot Thumbnail"
              width={600}
              height={400}
              className="mt-8 mx-auto px-6 object-scale-down md:object-fill object-bottom"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
