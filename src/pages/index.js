import * as React from "react";
import "../styles/global.css";
import src from "../images/shinjie.jpg";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { Helmet } from "react-helmet";
import { Link } from "../components/Content";

const Card = (props) => {
  const className = props.className ?? "";
  return (
    <div className={`shadow-md p-6 xl:p-8 rounded-2xl ${className}`}>
      {props.children}
    </div>
  );
};

const IndexPage = () => {
  const [tooltipText, setTooltipText] = React.useState("Copy to clipboard");

  const copyToClipboard = () => {
    console.log("hello");
    navigator.clipboard.writeText("shinjie.work@gmail.com");
    setTooltipText("Copied shinjie.work@gmail.com");
    setTimeout(() => setTooltipText("Click to copy to clipboard"), 2000);
  };

  return (
    <main>
      <Helmet>
        <title>Shin Jie - Frontend Engineer</title>
      </Helmet>
      <div className="max-w-xl m-auto [&>*]:mb-5 px-6 pt-5">
        <Card className="bg-gradient-to-r from-cyan-300 to-indigo-500 text-white text-opacity-90 mt-0 py-4 px-4">
          <div className="flex items-center gap-6">
            <img
              src={src}
              alt="hero image"
              className="rounded-full w-20 md:w-24"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold">
                Hi! I'm Shin Jie 🚀
              </h1>
              <h2 className="text-sm md:text-base font-medium">
                Frontend Engineer &lt;👨‍💻 /&gt;
              </h2>
            </div>
          </div>
        </Card>
        <a href="/projects" className="group">
          <Card className="border shadow-none group-hover:bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="flex justify-between items-center group-hover:text-white">
              <h2 className="uppercase font-medium opacity-30  group-hover:opacity-90">
                Explore my projects
              </h2>
              <ArrowNarrowRightIcon className="opacity-30 h-4 group-hover:w-9 group-hover:opacity-80" />
            </div>
          </Card>
        </a>
        <Card className="bg-gradient-to-b from-[#FDFDFD] to-[#FDFDFD41] mt-5">
          <div className="flex gap-2 items-center mb-8">
            <div className="w-3 h-3 rounded-full bg-green-500 inline-block animate-pulse" />
            <h2 className="uppercase font-medium opacity-30">Now</h2>
          </div>
          <div className="flex flex-col gap-5">
            <p>
              UIUX Development @{" "}
              <Link link={"https://aegis-technologies.com.sg/"} target="_blank">
                Aegis Technologies
              </Link>
            </p>
            <p>Living in 📍 Singapore</p>
            <p>
              Listening to
              <Link link="https://www.youtube.com/watch?v=ciZcbvG8uro" target="_blank">
                John Mayer's Sob Rock album 🎸
              </Link>
            </p>
          </div>
        </Card>
        <Card className="bg-gradient-to-b from-[#FDFDFD] to-[#FDFDFD41]">
          <div className="flex gap-2 items-center mb-8">
            <h2 className="uppercase font-medium opacity-30">More about me</h2>
          </div>
          <div className="flex flex-col gap-5">
            <p>
              Born and raised in Penang 🌴 up until 4 years ago when I left home
              to pursue my undergraduate studies in SUTD. Not knowing what
              design and technology are about, everything seems like a surprise
              to me 😲. While the journey is certainly fun and challenging, I
              think what's more important for me is having the chance to pick up
              valuable skills like programming 💻, working in teams🔥, and
              design thinking 💭.
            </p>
            <p>
              As much as I wanted to label myself as a designer or engineer, I
              felt like a misfit either way because I don't draw the best
              graphics or make the coolest robots. Nonetheless, I certainly look
              forward to use what I learnt from my design education to create
              useful, beautiful and delightful products.
            </p>
          </div>
        </Card>
        <Card className="bg-gradient-to-b from-[#FDFDFD] to-[#FDFDFD41]">
          <div className="flex gap-2 items-center mb-8">
            <h2 className="uppercase font-medium opacity-30">
              Where to find me
            </h2>
          </div>
          <div className="flex flex-row gap-5 justify-between">
            <span
              onClick={copyToClipboard}
              className="has-tooltip font-medium hover:text-indigo-500 hover:cursor-pointer inline-block"
            >
              <span className="tooltip text-sm shadow-md rounded-md -mt-10 p-2 bg-indigo-400 text-white">
                {tooltipText}
              </span>
              📩 Email
            </span>
            <Link link="https://www.linkedin.com/in/tanshinjie/" hasTooltip>
              <span className="tooltip text-sm shadow-md rounded-md -mt-10 p-2 bg-indigo-400 text-white">
                Let's connect!
              </span>
              💼 LinkedIn
            </Link>
            <Link link="https://github.com/tanshinjie" hasTooltip>
              <span className="tooltip text-sm shadow-md rounded-md -mt-10 p-2 bg-indigo-400 text-white">
                Programming stuffs
              </span>
              💻 Github
            </Link>
            <Link link="https://dribbble.com/iamshinjie" hasTooltip>
              <span className="tooltip text-sm shadow-md rounded-md -mt-10 p-2 bg-indigo-400 text-white">
                Design stuffs
              </span>
              🏀 Dribbble
            </Link>
          </div>
        </Card>
      </div>
      <footer className="text-center text-sm opacity-50 my-5">
        © 2020-2021 Tan Shin Jie
      </footer>
    </main>
  );
};

export default IndexPage;
