import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-slate-200 flex items-center justify-center">
      <div className="attribution space-x-4 text-lg font-semibold">
        <span className="text-gray-400">Challenge by</span>
        <Link
          href="https://www.frontendmentor.io?ref=challenge"
          className="underline  text-slate-600 italic"
        >
          Frontend Mentor
        </Link>
        <span className="text-gray-400">And Coded by </span>
        <Link href="#" className="underline text-slate-600 italic">
          Bogale Demas
        </Link>
        .
      </div>
    </footer>
  );
};

export default Footer;
