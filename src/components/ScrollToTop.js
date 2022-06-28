import React, { useState, useEffect } from "react";
import "../styles/global.css";
import { ArrowUpIcon } from "@heroicons/react/solid";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHideFrom = 400;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [listenToScroll]);

  return (
    isVisible && (
      <div
        className={`p-4 rounded-full shadow-md border bg-white bottom-0 right-0 m-9 hover:bg-slate-50 hover:shadow-lg hover:cursor-pointer fixed
      }`}
        onClick={scrollToTop}
      >
        <ArrowUpIcon className="w-4" />
      </div>
    )
  );
};

export default ScrollToTop;
