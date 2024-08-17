import React from "react";
import "../../styles/global.css";
import src from "../../images/shinjie.jpg";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import grluxuryThumbnail from "../../images/grluxury-thumbnail.png";
import artDistrictThumbnail from "../../images/artdistrict-thumbnail.png";
import jspThumbnail from "../../images/jsp-thumbnail.png";
import { Helmet } from "react-helmet";
import { Card } from "..";

const ProjectsPage = () => {
  return (
    <main>
      <Helmet>
        <title>Services | Shin Jie</title>
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
          Welcome to{" "}
          <span className="text-transparent bg-clip-text hover:bg-gradient-to-r rounded-xl transition-all duration-500 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-400 bg-size-200 bg-pos-100 hover:bg-pos-100">
            SJ Build
          </span>
        </h1>
        <h2>
          This is where I apply the knowledge I've gained from my work
          experience, education, courses, and self-experimentation to create
          value for businesses.
        </h2>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold opacity-80 mt-10 mb-4">
            What I offer
          </h2>
          <div className="flex flex-col md:flex-row gap-4 ">
            <Card className="group w-full">
              <h3 className="font-bold">Funnel and Landing Page Development</h3>
              <p className="my-4">
                Best for Coaches, Experts, Service Providers.
              </p>
              <div>
                Engaging landing page powered by automation. Learn more at{" "}
                <a
                  href="https://sjfunnel.click"
                  target="_blank"
                  className=" underline text-indigo-400 font-bold"
                >
                  sjfunnel.click
                </a>
                .
              </div>
            </Card>
            <Card className="group w-full">
              <h3 className="font-bold">Multipage Website Development</h3>
              <p className="my-4">
                Best for Corporates, NGOs, E-Commerce Businesses.
              </p>
              <div>
                Image your company site having quality like these sites{" "}
                <a
                  href="https://www.openai.com/"
                  target="_blank"
                  className=" underline text-indigo-400 font-bold"
                >
                  openai.com
                </a>
                ,{" "}
                <a
                  href="https://www.sonos.com/"
                  target="_blank"
                  className=" underline text-indigo-400 font-bold"
                >
                  sonos.com
                </a>
                ,{" "}
                <a
                  href="https://www.virgin.com/"
                  target="_blank"
                  className=" underline text-indigo-400 font-bold"
                >
                  virgin.com
                </a>
                .
              </div>
            </Card>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold opacity-80 mt-10">
          Recent client work
        </h2>
        <p className="my-4">
          Following are the actual live sites or projects that I have built for
          the other businesses.
        </p>
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
              <a href="https://www.grluxury.sg/" target="_blank">
                <span className="rounded-2xl bg-gradient-to-b from-gray-800 to-[#000000CC] px-4 md:px-8 py-4 cursor-pointer text-[#eee] font-bold uppercase hover:bg-blend-overlay hover:text-white">
                  View live site
                </span>
              </a>
            </div>
            <img
              src={grluxuryThumbnail}
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
              <a href="https://www.artdistrict.sg/" target="_blank">
                <span className="rounded-2xl bg-gradient-to-b from-gray-800 to-[#000000CC] px-4 md:px-8 py-4 cursor-pointer text-[#eee] font-bold uppercase hover:bg-blend-overlay hover:text-white">
                  View live site
                </span>
              </a>
            </div>
            <img
              src={artDistrictThumbnail}
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
        </div>
        <h2 className="text-3xl md:text-4xl font-bold opacity-80 mt-10">
          Get in touch
        </h2>
        <Card className="md:mx-10 my-8 flex flex-col gap-2 bg-gradient-to-b from-slate-50">
          <h1 className="text-3xl font-bold">
            Looking to launch your next <br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
              STUNNNING
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
              HIGHHH
            </span>{" "}
            performance sites? 🚀
          </h1>
          <div>I am your partner in execution, let's make it happen!</div>
          <div>
            Shoot me an email at{" "}
            <span className="text-indigo-400 font-bold">
              shinjie.work@gmail.com
            </span>{" "}
            or you can connect with me on Facebook{" "}
            <a
              className=" underline text-indigo-400 font-bold"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61564132150176"
            >
              SJ Tan
            </a>
            .
          </div>
          <p>
            PS: I check my inbox everyday, I promise you will get a reply in
            less than 24 hours! 😉
          </p>
        </Card>
        <footer className="text-center text-sm opacity-50 my-5">
          © 2020-{new Date().getFullYear()} Tan Shin Jie. Site built with ❤️ by
          yours truly.
        </footer>
      </div>
    </main>
  );
};

export default ProjectsPage;
