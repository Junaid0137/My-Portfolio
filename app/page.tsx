'use client';
import About from "@/components/About";
import { AnimatedPinDemo } from "@/components/AnimatedPinDemo";
import Contact from "@/components/Contact";
import { ExpandableCardDemo } from "@/components/ExpandableCardDemo";
import { FloatingDockDemo } from "@/components/FloatingDockDemo";
import Header from "@/components/Header";
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo";
import Pro from "@/components/Pro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-[#323437] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#B3BAFF] z-0">
      <header>
        <title>Junaid</title>
      </header>
      <Header />
      <section id="pro" className="snap-start">
        <Pro />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
}
