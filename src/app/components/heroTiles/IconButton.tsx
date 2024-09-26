"use client";
import { useRef } from "react";
import { useState } from "react";

export default function IconButton({
  children,
  text,
  link,
  color,
  ...props
}: any) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  return (
    <a
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        flex p-2 items-center rounded-lg cursor-pointer
        text-white ${color || "bg-gray-600"}
      `}
      {...props}
      href={link}
      target="_blank"
    >
      {children}
      <div
        //@ts-ignore
        style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
        className="overflow-x-hidden transition-all duration-500 ease-out"
      >
        <span ref={ref} className="px-1.5">
          {text}
        </span>
      </div>
    </a>
  );
}
