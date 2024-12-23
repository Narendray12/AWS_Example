"use client"
import React, { useRef } from 'react';
import Navbar from '@/components/navbar';
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import SkillsGrid from "@/components/skillsGrid"
import ProjectsGrid from "@/components/projectsgrid"
import Footer from '@/components/Footer';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
gsap.registerPlugin(useGSAP,ScrollTrigger);

interface ProfileImageProps {
  image: string;
}

const ProfileImageContainer = ({ image }: ProfileImageProps) => {
  const containerRef = useRef(null);
  useGSAP(() => {
    gsap.from(containerRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    });
  }, []);
  return (
    <div className="relative w-80 " ref={containerRef}>
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-cyan-400/100 to-pink-500/50 rounded-[2rem] blur-xl opacity-75 bg-[length:200%] animate-gradient" />

      <div className="relative rounded-[2rem] overflow-hidden bg-slate-900">
        <img
          src={image}
          alt="Profile"
          className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] object-cover"
        />
      </div>
    </div>
  );
};

const NPXCommand = () => {
  const commandRef = useRef(null);

  useGSAP(() => {
    gsap.from(commandRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      delay: 1.5,
      ease: "power2.out"
    });
  }, []);
  return (
    <div className="pt-4 flex items-center space-x-2" ref={commandRef}>
      <div className="group relative">
        <div className="bg-slate-800 rounded-lg px-4 py-2 font-mono text-sky-300 flex items-center space-x-2 text-lg lg:text-2xl">
          <h3> npx narendradev</h3>
        </div>

        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <div className="bg-slate-700 text-green-300 lg:px-4 lg:py-2 px-2 py-1 rounded-lg text-s font-medium whitespace-nowrap shadow-lg">
            <span>
              Run this in your terminal &lt;3
            </span>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-slate-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);
  const skillsTitleRef = useRef<HTMLHeadingElement>(null);
  const projectsTitleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const heroTimeline = gsap.timeline();
    heroTimeline
      .from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      })
      .from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5")
      .from(".hero-text", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=0.3");

    // Social icons animation
    gsap.from(socialIconsRef.current?.children || [], {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.7)",
      delay: 1
    });

    // Bio section animation
    gsap.from(bioRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: bioRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    });

    // Skills title animation
    gsap.from(skillsTitleRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: skillsTitleRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    });

    // Projects title animation
    gsap.from(projectsTitleRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: projectsTitleRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    });
  })
  return (<div className='min-h-screen relative scroll-smooth select-none bg-slate-900'>
    <nav>
      <Navbar />
    </nav>
    <div className='absolute h-6 w-6 sm:left-20 sm:top-20 
  -translate-y-1/2 text-slate-800/20 select-none'
    >
      <svg className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.50226 5.38707C8.81015 5.10997 8.8351 4.63576 8.55801 4.32787C8.28092 4.01999 7.8067 3.99503 7.49882 4.27213L5.76133 5.83587C5.02499 6.49853 4.41418 7.04822 3.99477 7.54679C3.55374 8.07104 3.24023 8.6343 3.24023 9.3296C3.24023 10.0249 3.55374 10.5882 3.99477 11.1124C4.41418 11.611 5.02498 12.1607 5.76132 12.8233L7.49882 14.3871C7.8067 14.6642 8.28092 14.6392 8.55801 14.3313C8.8351 14.0234 8.81015 13.5492 8.50226 13.2721L6.80579 11.7453C6.01792 11.0362 5.48672 10.5558 5.14262 10.1468C4.81237 9.7542 4.74023 9.52502 4.74023 9.3296C4.74023 9.13417 4.81237 8.90499 5.14262 8.51241C5.48672 8.10338 6.01792 7.62298 6.80579 6.91389L8.50226 5.38707Z" fill="#1C274C" />
        <path d="M15.443 10.4983C15.7201 10.1904 16.1943 10.1654 16.5022 10.4425L18.2397 12.0063C18.976 12.6689 19.5868 13.2186 20.0063 13.7172C20.4473 14.2415 20.7608 14.8047 20.7608 15.5C20.7608 16.1953 20.4473 16.7586 20.0063 17.2828C19.5868 17.7814 18.976 18.3311 18.2397 18.9937L16.5022 20.5575C16.1943 20.8346 15.7201 20.8096 15.443 20.5017C15.1659 20.1938 15.1909 19.7196 15.4988 19.4425L17.1952 17.9157C17.9831 17.2066 18.5143 16.7262 18.8584 16.3172C19.1887 15.9246 19.2608 15.6954 19.2608 15.5C19.2608 15.3046 19.1887 15.0754 18.8584 14.6828C18.5143 14.2738 17.9831 13.7934 17.1952 13.0843L15.4988 11.5575C15.1909 11.2804 15.1659 10.8062 15.443 10.4983Z" fill="#1C274C" />
        <path opacity="0.5" d="M14.1797 4.27511C14.58 4.38151 14.8182 4.79228 14.7118 5.19259L10.725 20.1926C10.6186 20.5929 10.2078 20.8312 9.80753 20.7248C9.40722 20.6184 9.16895 20.2076 9.27535 19.8073L13.2622 4.80729C13.3686 4.40697 13.7793 4.16871 14.1797 4.27511Z" fill="#1C274C" />
      </svg>
    </div>
    <div className='max-w-7xl mx-auto relative' ref={heroRef}>
      <div className='flex flex-row items-center lg:items-right justify-between lg:gap-x-8 lg:ps-40 lg:pt-40 p-10'>
        <div className='space-y-4 w-full lg:w-1/2'>
          <h1 className='text-5xl md:text-6xl lg:text-8xl font-bold text-sky-200 tracking-tight'>
            Narendra
          </h1>
          <div className='space-y-3 font-mono'>
            <p className='text-2xl lg:text-4xl text-purple-300'>
              Full Stack Developer.
            </p>
            <p className='text-base lg:text-2xl sm:text- md:text-xl break-words'>
              <span className='text-green-300'>Covers it all, from </span>
              <span className='text-purple-300'>root </span>
              <span className='text-green-300'>to </span>
              <span className='text-purple-300'>route</span>
              <span className='text-green-300'>.</span>
            </p>
            <div className='flex space-x-4 sm:space-x-6 pt-4' ref={socialIconsRef}>
              <a
                href="https://github.com/Narendray12"
                className='text-2xl sm:text-3xl text-amber-500 hover:text-amber-400 transition-colors'
                aria-label="github"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/Nyadav124"
                className='text-2xl sm:text-3xl text-amber-500 hover:text-amber-400 transition-colors'
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/narendraydv12/"
                className='text-2xl sm:text-3xl text-amber-500 hover:text-amber-400 transition-colors'
                aria-label="linkedin"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto: narendraydv12@gmail.com"
                className='text-2xl sm:text-3xl text-amber-500 hover:text-amber-400 transition-colors'
                aria-label="Email"
              >
                <IoMdMail />
              </a>
            </div >
          <NPXCommand />
          </div>
        </div>
        <div className='hidden ps-5 lg:block w-full lg:w-1/2 lg:mt-0'>
          <ProfileImageContainer image="./profile.jpg" />
        </div>
      </div>
      <div className='flex justify-between items-center w-full flex-col md:flex-row gap-8 relative overflow-hidden' >
        <div className='absolute right-0 top-1/2 -translate-y-1/2 select-none'>
          <span className='text-[50vw] md:text-[20vw]  text-textbg opacity-80 leading-none'>
            NY
          </span>
        </div>
        <div className='md:w-[50%] relative ps-10 pe-10  lg:p-20 lg:mt-20 ' ref={bioRef}>
          <div className='flex flex-col items-center justify-center pb-5'>
              <h1 className='text-green-300 font-mono lg:text-5xl text-xl'>Bio</h1>
          </div>
          <p className='text-xl lg:text-xl text-purple-300 items-center '>
            Hey, I&apos;m Narendra! I&apos;m a final-year computer science student and a passionate full-stack developer. With coding experience since 2021, I&apos;ve been working on projects that blend frontend and backend expertise. I&apos;m currently diving into 3D development, exploring technologies like Three.js, and enjoy contributing to open-source projects to support the developer community.
          </p>
        </div>
      </div>
    </div>
    <div ref={skillsTitleRef}>
    <div className='items-center justify-center w-full flex flex-col' id='skills'>
      <h1 className='text-green-300 font-mono lg:text-6xl text-4xl lg:pt-0 pt-20'>Skills
      </h1>
    </div>
    <SkillsGrid />
    </div>
    <div className='items-center justify-center w-full flex flex-col pt-20 pd-10 relative' id='projects' >
      <h1 className='text-green-300 font-mono lg:text-6xl text-4xl lg:pt-0 z-10 ' ref={projectsTitleRef}>Projects
      </h1>
      <div className='absolute left-5 top-1/2 -translate-y-1/2 select-none'>
        <span className='text-[50vw] md:text-[20vw]  text-textbg opacity-80 leading-none z-40'>
        &#47;&#47;&#47;
        </span>
      </div>
    </div>
    <ProjectsGrid />
    <Footer />
  </div>
  );
};