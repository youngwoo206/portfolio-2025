"use client";
import { AnimatedList } from "@/components/magicui/animated-list";
import {
  FaReact,
  FaPython,
  FaAws,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaFlask,
} from "react-icons/fa";
import { SiTypescript, SiSpringboot, SiPostgresql } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import { DiGoogleCloudPlatform } from "react-icons/di";

export default function Skills() {
  const skills = [
    <Skill icon={<FaReact />} skill="React.js" />,
    <Skill icon={<SiTypescript />} skill="TypeScript" />,
    <Skill icon={<FaPython />} skill="Python" />,
    <Skill icon={<FaAws />} skill="AWS" />,
    <Skill icon={<FaFlask />} skill="Flask" />,
    <Skill icon={<FaJava />} skill="Java" />,
    <Skill icon={<SiSpringboot />} skill="Spring" />,
    <Skill icon={<SiPostgresql />} skill="PostgreSQL" />,
    <Skill icon={<FaHtml5 />} skill="HTML" />,
    <Skill icon={<FaCss3Alt />} skill="CSS" />,
    <Skill icon={<CgCPlusPlus />} skill="C++" />,
    <Skill icon={<DiGoogleCloudPlatform />} skill="GCP" />,
  ];

  return (
    <div className="h-[100%] py-6 w-full">
      <h1 className="text-2xl mx-8 font-semibold">Skills</h1>
      <div className="h-28 my-4 mx-6 p-2 rounded-xl bg-white dark:bg-neutral-600 overflow-hidden flex flex-col items-center">
        <AnimatedList delay={1500}>{skills}</AnimatedList>
      </div>
    </div>
  );
}

function Skill({ icon, skill }: { icon: React.ReactNode; skill: string }) {
  return (
    <div className="bg-soft-gray dark:bg-soft-dark-gray w-36 px-4 drop-shadow-sm rounded-md flex items-center gap-3">
      {icon}
      <p className="font-semibold">{skill}</p>
    </div>
  );
}
