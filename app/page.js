'use client';

import React, { useState } from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { Link as CustomLink } from "./components/Content";
import { Card } from "./components/Card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [tooltipText, setTooltipText] = useState("Copy to clipboard");

  const copyToClipboard = () => {
    navigator.clipboard.writeText("shinjie.work@gmail.com");
    setTooltipText("Copied shinjie.work@gmail.com");
    setTimeout(() => setTooltipText("Click to copy to clipboard"), 2000);
  };

  return (
    <main>
      <div className="max-w-2xl m-auto [&>*]:mb-5 px-6 pt-5">
        <Card className="bg-gradient-to-r from-cyan-300 to-indigo-500 text-white text-opacity-90 mt-0 py-4 px-4">
          <div className="flex items-center gap-6">
            <Image
              src="/images/shinjie.jpg"
              alt="hero image"
              width={96}
              height={96}
              className="rounded-full w-20 md:w-24"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold">
                Hi! I'm Shin Jie 🚀
              </h1>
              <h2 className="text-sm md:text-base font-medium">
                Software Engineer
              </h2>
            </div>
          </div>
        </Card>
        <div className="flex flex-col md:flex-row gap-4">
          {/* <Link href="/sjbuild" className="group w-full">
            <Card className="border shadow-none group-hover:bg-gradient-to-r text-white rounded-xl transition-all duration-500 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-400 bg-size-200 bg-pos-100 hover:bg-pos-100">
              <div className="flex justify-between items-center group-hover:text-white">
                <h2 className="uppercase font-medium opacity-80  group-hover:opacity-90">
                  Development Services
                </h2>
                <ArrowNarrowRightIcon className="opacity-80 h-4 group-hover:w-9 group-hover:opacity-80" />
              </div>
            </Card>
          </Link> */}
          <Link href="/blog" className="group w-full">
            <Card className="border shadow-none group-hover:bg-gradient-to-r text-white rounded-xl transition-all duration-500 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-400 bg-size-200 bg-pos-100 hover:bg-pos-100">
              <div className="flex justify-between items-center group-hover:text-white">
                <h2 className="uppercase font-medium opacity-80  group-hover:opacity-90">
                  Blog
                </h2>
                <ArrowNarrowRightIcon className="opacity-80 h-4 group-hover:w-9 group-hover:opacity-80" />
              </div>
            </Card>
          </Link>
          <Link href="/scratchpad" className="group w-full">
            <Card className="border shadow-none group-hover:bg-gradient-to-r from-purple-500 to-pink-500">
              <div className="flex justify-between items-center group-hover:text-white">
                <h2 className="uppercase font-medium opacity-30  group-hover:opacity-90">
                  Scratchpad
                </h2>
                <ArrowNarrowRightIcon className="opacity-30 h-4 group-hover:w-9 group-hover:opacity-80" />
              </div>
            </Card>
          </Link>
        </div>
        <Card className="bg-gradient-to-b from-[#FDFDFD] to-[#FDFDFD41] mt-5">
          <div className="flex gap-2 items-center mb-8">
            <div className="w-3 h-3 rounded-full bg-green-500 inline-block animate-pulse" />
            <h2 className="uppercase font-medium opacity-30">Now</h2>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              Building Alternative Assets Ecosystem @
              <CustomLink link={"https://alta.exchange/about-alta"} target="_blank">
                Alta (formerly known as Fundnel)
              </CustomLink>
            </p>
            <p>Living in 📍 Singapore</p>
            <p>
              Recently listening to
              <CustomLink
                link="https://www.youtube.com/watch?v=vR6_ZVKEhJ4"
                target="_blank"
              >
                Ne-Yo Tiny Desk Concert 🎶
              </CustomLink>
            </p>
          </div>
        </Card>
        <Card className="mt-5 bg-[#FDFDFD41] shadow-sm">
          <div className="flex gap-2 items-center mb-8">
            <div className="w-3 h-3 rounded-full bg-gray-500 inline-block animate-pulse" />
            <h2 className="uppercase font-medium opacity-30">Previously</h2>
          </div>
          <div className="flex flex-col gap-5">
            <p>
              Building modern web apps @
              <CustomLink link={"https://aegis-technologies.com.sg/"} target="_blank">
                Aegis Technologies
              </CustomLink>
              ,
              <CustomLink
                link={"https://www.proofpoint.com/us/dathena-is-now-proofpoint"}
                target="_blank"
              >
                Dathena (now ProofPoint)
              </CustomLink>{" "}
            </p>
          </div>
        </Card>
        <Card className="bg-gradient-to-b from-[#FDFDFD] to-[#FDFDFD41]">
          <div className="flex gap-2 items-center mb-8">
            <h2 className="uppercase font-medium opacity-30">
              Little about me
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <ol>
                <li>· Born and raised in Penang, Malaysia 🌴</li>
                <li>· Enjoy comedy and design</li>
                <li>· <a href="https://www.16personalities.com/intp-personality" className="underline" target="_blank">INTP</a> (Last tested Feb 2025)</li>
              </ol>
            </div>
          </div>
        </Card>
        <Card className="bg-gradient-to-b from-[#FDFDFD] to-[#FDFDFD41]">
          <div className="flex gap-2 items-center mb-8">
            <h2 className="uppercase font-medium opacity-30">
              Where to find me
            </h2>
          </div>
          <div className="flex flex-row gap-5">
            <span
              onClick={copyToClipboard}
              className="has-tooltip font-medium hover:text-indigo-500 hover:cursor-pointer inline-block"
            >
              <span className="tooltip text-sm shadow-md rounded-md -mt-10 p-2 bg-indigo-400 text-white">
                {tooltipText}
              </span>
              📩 Email
            </span>
            <CustomLink link="https://www.linkedin.com/in/tanshinjie/" hasTooltip>
              <span className="tooltip text-sm shadow-md rounded-md -mt-10 p-2 bg-indigo-400 text-white">
                Let's connect!
              </span>
              💼 LinkedIn
            </CustomLink>
            <CustomLink link="https://github.com/tanshinjie" hasTooltip>
              <span className="tooltip text-sm shadow-md rounded-md -mt-10 p-2 bg-indigo-400 text-white">
                Programming stuffs
              </span>
              💻 Github
            </CustomLink>
            {/* <CustomLink link="https://dribbble.com/iamshinjie" hasTooltip>
              <span className="tooltip text-sm shadow-md rounded-md -mt-10 p-2 bg-indigo-400 text-white">
                Design stuffs
              </span>
              🏀 Dribbble
            </CustomLink> */}
          </div>
        </Card>
      </div >
    </main >
  );
} 