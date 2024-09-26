"use client";
import { GitHub, Mail, Linkedin } from "react-feather";
import IconButton from "./IconButton";
import { useState } from "react";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="overflow-hidden w-full h-full relative flex flex-col gap-4 justify-center items-center p-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-4">
        <IconButton text="youngwoo206" link="https://github.com/youngwoo206">
          <GitHub size={20} />
        </IconButton>
        <IconButton
          text="y288lee@uwaterloo.ca"
          color="bg-purple-500"
          link="mailto:y288lee@uwaterloo.ca"
        >
          <Mail size={20} />
        </IconButton>
        <IconButton
          text="in/youngwoo"
          color="bg-blue-500"
          link="https://www.linkedin.com/in/youngwoo-lee-123b63198/"
        >
          <Linkedin size={20} />
        </IconButton>
      </div>
      <div className="w-2/3 h-[2px] bg-neutral-500 dark:bg-neutral-300" />
    </div>
  );
}
