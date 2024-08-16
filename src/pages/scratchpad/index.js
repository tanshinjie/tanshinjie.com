import React from "react";
import "../../styles/global.css";
import src from "../../images/shinjie.jpg";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import maviThumbnail from "../../images/mavi-thumbnail.png";
import withLoveThumbnail from "../../images/withlove-thumbnail.png";
import telegramThumbnail from "../../images/telegram-roster-bot-thumbnail.png";
import { Helmet } from "react-helmet";

const ProjectsPage = () => {
  return (
    <main>
      <Helmet>
        <title>Scratchpad | Shin Jie</title>
      </Helmet>
      <div className="max-w-5xl m-auto px-6">
        <a
          href="/"
          className="flex p-4 border rounded-3xl w-max items-center gap-2 hover:bg-indigo-400 group hover:text-white my-5"
        >
          <ArrowNarrowLeftIcon className="w-4 opacity-30 group-hover:opacity-80" />
          <img src={src} alt="hero image" className="rounded-full w-12" />
          <p className="opacity-50 group-hover:opacity-80">Shin Jie</p>
        </a>
        <h1 className="text-4xl md:text-5xl font-bold opacity-80 my-10">
          Scratchpad
        </h1>
        <p className="my-4">A space for my rough ideas, experiments, and random thoughts. It's informal and unpolished—a glimpse into my creative process. Dive in if you're curious!        
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-gradient-to-br from-[#7850e6] to-[#5F2EEA] rounded-3xl">
            <div className="w-auto h-auto p-8 md:p-12 pb-0 text-white text-opacity-90">
              <div className="mb-12">
                <h3 className="text-base">MAVI (Mobile App UIUX Design)</h3>
                <h2 className="text-xl md:text-2xl font-extrabold">
                  Mobile app to help promote mental health
                </h2>
              </div>
              <a href="/projects/mavi">
                <span className="rounded-2xl bg-gradient-to-b from-white to-[#FFFFFFCC] px-4 md:px-8 py-4 cursor-pointer text-[#5F2EEA] font-bold uppercase hover:bg-blend-overlay hover:text-white">
                  Read case study
                </span>
              </a>
              <a
                href="https://www.figma.com/proto/s8HCd96KKzSqMz6b2jruso/Mavi-Hi-Fi-Prototype-Demo?node-id=166%3A6156&scaling=scale-down&page-id=0%3A1&starting-point-node-id=166%3A6156&show-proto-sidebar=1"
                target="_blank"
              >
                <span className="px-4 md:px-8 py-4 cursor-pointer font-bold uppercase hover:bg-blend-overlay hover:text-[#ac8eff]">
                  View demo
                </span>
              </a>
            </div>
            <img
              src={maviThumbnail}
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
              <a href="/projects/with-love">
                <span className="rounded-2xl bg-gradient-to-b from-white to-[#FFFFFFCC] px-4 md:px-8 py-4 cursor-pointer text-pink-500 font-bold uppercase hover:bg-blend-overlay hover:text-white">
                  Read case study
                </span>
              </a>
            </div>
            <img
              src={withLoveThumbnail}
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
              <a href="/projects/telegram-roster-bot">
                <span className="rounded-2xl bg-gradient-to-b from-white to-[#FFFFFFCC] px-4 md:px-8 py-4 cursor-pointer text-sky-500 font-bold uppercase hover:bg-blend-overlay hover:text-white">
                  Read blog
                </span>
              </a>
              <a
                href="https://github.com/tanshinjie/telegram-roster-bot"
                target="_blank"
              >
                <span className="px-4 md:px-8 py-4 cursor-pointer font-bold uppercase hover:bg-blend-overlay hover:text-blue-400">
                  View source code
                </span>
              </a>
            </div>
            <img
              src={telegramThumbnail}
              className="mt-8 mx-auto px-6 object-scale-down md:object-fill object-bottom"
            />
          </div>
        </div>
        <footer className="text-center text-sm opacity-50 my-5">
          © 2020-{new Date().getFullYear()} Tan Shin Jie. Site built with ❤️ by
          yours truly.
        </footer>
      </div>
    </main>
  );
};

export default ProjectsPage;
