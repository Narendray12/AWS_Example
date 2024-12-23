'use client'

import React, { useRef } from 'react';
import { HoverEffect } from "@/components/ui/card-hover-effect";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsGrid() {
    const projectsContainerRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(projectsContainerRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: projectsContainerRef.current,
                start: "top center+=100",
                toggleActions: "play none none reverse"
            }
        });

        if (projectsRef.current) {
            const projectCards = projectsRef.current.querySelectorAll('.group');
            gsap.from(projectCards, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: projectsRef.current,
                    start: "top center+=150",
                    toggleActions: "play none none reverse"
                }
            });
        }
    }, []);

    return (
        <div className="max-w-5xl mx-auto px-8" ref={projectsContainerRef}>
            <div ref={projectsRef}>
                <HoverEffect items={projects} />
            </div>
        </div>
    );
}

export const projects = [
    {
        title: "Math.ai - An AI-Driven Math Solution Platform",
        description: "Developed an AI-driven platform capable of solving a wide range of problems across various disciplines",
        link: "https://math-ai-gilt.vercel.app/"
    },
    {
        title: "GitHub Auto-Archiver for Coding Solutions",
        description:
            "Developed a Chrome extension to automatically save coding solutions to GitHub with problem details as comments.",
        link: "https://github.com/Narendray12/Code-to-github",
    },
    {
        title: "A Gesture-Based Drawing Application",
        description: "Built a gesture-based drawing app using OpenCV, Mediapipe, and NumPy for real-time interaction",
        link: "https://github.com/Narendray12/Air-Canvas"
    },
];