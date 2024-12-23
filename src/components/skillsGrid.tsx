// app/components/SkillsGrid.tsx
'use client'

import React from 'react';
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaAws, FaMicrosoft } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiExpress, SiMongodb, SiPostgresql, SiGnubash } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BsThreeDots } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface SkillButtonProps {
  icon: IconType;
  name: string;
  borderColor: string;
  showTooltip?: boolean;
}

const SkillButton: React.FC<SkillButtonProps> = ({ icon: Icon, name, borderColor, showTooltip = false }) => {
  return (
    <div className="group relative m-2">
      {showTooltip && (
        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <div className="relative bg-slate-700 text-green-300 lg:px-4 lg:py-2 px-2 py-1 rounded-lg text-l font-medium whitespace-nowrap shadow-lg">
            There&apos;s more trust me.
            <div className="absolute  -bottom-1 left-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-slate-700"></div>
          </div>
        </div>
      )}
      <div 
        className={`absolute -inset-1 rounded-full blur-lg opacity-75 
                    bg-gradient-to-r ${borderColor} 
                    bg-[length:200%] animate-gradient`} 
      />
      <div 
        className="relative flex flex-col items-center justify-center w-28 h-28 
                   bg-slate-900 rounded-full border-2 border-opacity-20 
                   transition-transform duration-300 group-hover:scale-110"
      >
        <Icon className="w-8 h-8 mb-1 text-sky-300 group-hover:text-sky-200" />
        <span className="text-purple-300 text-xs font-mono">{name}</span>
      </div>
    </div>
  );
};

interface SkillData {
  icon: IconType;
  name: string;
  color: string;
}

const skillsData: SkillData[] = [
  // Frontend
  { icon: FaReact, name: 'React', color: 'from-sky-400 to-blue-500' },
  { icon: TbBrandNextjs, name: 'Next.js', color: 'from-sky-400 to-blue-500' },
  // Languages
  { icon: SiJavascript, name: 'JavaScript', color: 'from-yellow-400 to-orange-500' },
  { icon: SiTypescript, name: 'TypeScript', color: 'from-yellow-400 to-orange-500' },
  // Backend
  { icon: FaNodeJs, name: 'Node.js', color: 'from-green-400 to-emerald-500' },
  { icon: SiExpress, name: 'Express', color: 'from-green-400 to-emerald-500' },
  // Databases
  { icon: SiMongodb, name: 'MongoDB', color: 'from-purple-400 to-pink-500' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: 'from-purple-400 to-pink-500' },
  // DevOps
  { icon: FaDocker, name: 'Docker', color: 'from-cyan-400 to-blue-500' },
  { icon: FaGitAlt, name: 'Git', color: 'from-cyan-400 to-blue-500' },
  // Cloud
  { icon: FaAws, name: 'AWS', color: 'from-amber-400 to-orange-500' },
  { icon: FaMicrosoft, name: 'Azure', color: 'from-amber-400 to-orange-500' },
  // Terminal & More
  { icon: SiGnubash, name: 'Bash', color: 'from-green-400 to-emerald-500' },
  { icon: BsThreeDots, name: '& more', color: 'from-green-400 to-emerald-500' }
];

const SkillsGrid: React.FC = () => {
  return (
    <div className="w-full pt-10 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 justify-items-center">
          {skillsData.map((skill, index) => (
            <SkillButton
              key={index}
              icon={skill.icon}
              name={skill.name}
              borderColor={skill.color}
              showTooltip={index === skillsData.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;