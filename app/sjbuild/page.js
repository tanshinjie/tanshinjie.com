'use client';

import React from "react";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Image from "next/image";
import { Card } from "../components/Card";

export default function SJBuildPage() {
  return (
    <main>
      <div className="max-w-5xl m-auto px-6">
        <Link
          href="/"
          className="flex p-4 border rounded-3xl w-max items-center gap-2 hover:bg-indigo-400 group hover:text-white my-5"
        >
          <ArrowNarrowLeftIcon className="w-4 opacity-30 group-hover:opacity-80" />
          <Image
            src="/images/shinjie.jpg"
            alt="hero image"
            width={48}
            height={48}
            className="rounded-full w-12"
          />
          <p className="opacity-50 group-hover:opacity-80">Shin Jie</p>
        </Link>
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
            <Card className="group w-full bg-gradient-to-tl from-slate-600 to-slate-800 text-white">
              <h3 className="font-bold text-xl text-blue-400">
                Multipage Website Development
              </h3>
              <p className="my-4">
                Best for <span className="font-bold">Corporates, NGOs, E-Commerce Businesses</span>.
              </p>
              <div>
                Customise your site to your needs, no cookie cutter solutions.
                Build using the same technology as{" "}
                <a
                  href="https://www.openai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  openai.com
                </a>
                ,{" "}
                <a
                  href="https://www.sonos.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  sonos.com
                </a>
                ,{" "}
                <a
                  href="https://www.virgin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  virgin.com
                </a>
                .{" "}
                <a
                  className="underline text-indigo-400 font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:shinjie.work@gmail.com"
                >
                  Email me
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
              <a href="https://www.grluxury.sg/" target="_blank" rel="noopener noreferrer">
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
              <a href="https://www.artdistrict.sg/" target="_blank" rel="noopener noreferrer">
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
            </span>
          </div>
        </Card>
      </div>
    </main>
  );
} 