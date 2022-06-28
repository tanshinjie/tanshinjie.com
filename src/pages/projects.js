import React from "react";
import "../styles/global.css";
import src from "../images/shinjie.jpg";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import maviThumbnail from "../images/mavi-thumbnail.png";
import jspThumbnail from "../images/jsp-thumbnail.png";
import withLoveThumbnail from "../images/withlove-thumbnail.png";
import { Helmet } from "react-helmet";

const ProjectsPage = () => {
  return (
    <main>
      <Helmet>
        <title>Projects | Shin Jie</title>
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
          Projects
        </h1>

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
            </div>
            <img
              src={maviThumbnail}
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
              <a href="/projects/jspwellness">
                <span className="rounded-2xl bg-gradient-to-b from-white to-[#FFFFFFCC] px-4 md:px-8 py-4 cursor-pointer text-neutral-900 font-bold uppercase hover:bg-blend-overlay hover:text-white">
                  Read case study
                </span>
              </a>
            </div>
            <img
              src={jspThumbnail}
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
        </div>

        <footer className="text-center text-sm opacity-50 my-5">
          © 2020-2021 Tan Shin Jie
        </footer>
      </div>
    </main>
  );
};

export default ProjectsPage;
