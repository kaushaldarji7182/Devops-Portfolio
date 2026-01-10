"use client";

import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Certifications } from "@/components/sections/certifications";
import { SystemArchitecture } from "@/components/sections/system-architecture";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <SystemArchitecture />
            <Skills />
            <Certifications />
            <Contact />
        </main>
    );
}
