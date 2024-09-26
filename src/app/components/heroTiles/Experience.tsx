"use client";
import { useState } from "react";

export default function Experience() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="overflow-hidden w-full h-full relative flex justify-center items-center p-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full w-full bg-white dark:bg-neutral-700 rounded-xl">
        {isHovered ? (
          <div className="grid grid-cols-3 grid-rows-1 h-full p-4 gap-4">
            <div className="rounded-lg bg-soft-gray dark:bg-soft-dark-gray col-span-1">
              <img src="ada.png" alt="ada logo" className="rounded-lg" />
            </div>
            <div className="rounded-lg bg-soft-gray dark:bg-soft-dark-gray col-span-2 p-4 flex flex-col justify-center">
              <h1 className="font-semibold text-2xl">Ada</h1>
              <p className="text-lg">Software Engineering Intern</p>
              <p className="italic text-neutral-500 dark:text-neutral-300">
                06/2024 - 09/2024
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 grid-rows-1 h-full p-4 gap-4">
            <div className="rounded-lg bg-soft-gray dark:bg-soft-dark-gray col-span-1"></div>
            <div className="rounded-lg bg-soft-gray dark:bg-soft-dark-gray col-span-2"></div>
          </div>
        )}
      </div>
      <div className="absolute rounded-3xl top-0 left-0 w-full h-full flex items-end pb-4 backdrop-blur-sm hover:backdrop-blur-none transition-all duration-300 hover:translate-y-16">
        <h1 className="text-4xl mx-8 mb-2 font-semibold">Latest Experience</h1>
      </div>
    </div>
  );
}
