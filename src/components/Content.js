import React from "react";
import "../styles/global.css";

export const Heading1 = (props) => (
  <h3 className="font-bold opacity-80 my-8 text-3xl md:text-4xl text-center">
    {props.children}
  </h3>
);

export const Heading2 = (props) => (
  <h3 className="font-bold opacity-80 text-2xl my-8">{props.children}</h3>
);

export const Body = (props) => (
  <p className="text-black text-opacity-80 font-medium leading-8 my-4">
    {props.children}
  </p>
);

export const List = (props) => (
  <div className="text-black text-opacity-80 font-medium leading-8 my-4">
    {props.children}
  </div>
);

export const Image = (props) => (
  <img src={props.src} alt="Placeholder" className="my-4" />
);
