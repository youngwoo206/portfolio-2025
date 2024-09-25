"use client";
import { TypeAnimation } from "react-type-animation";

export default function Name() {
  const sequence = [
    "software developer",
    3000,
    "engineering @ University of Waterloo",
    3000,
    "React, Flask, Spring Boot, AWS",
    3000,
    "full stack web dev | AI | cloud computing",
    3000,
    "lifelong raptors fan",
    3000,
  ];

  return (
    <div className="w-full mx-12 flex flex-col gap-3">
      <h1 className="text-5xl font-semibold">Youngwoo Lee</h1>
      <div className="min-h-[2rem]">
        <TypeAnimation
          sequence={sequence}
          wrapper="span"
          speed={40}
          style={{ fontSize: "1.2rem", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
}
