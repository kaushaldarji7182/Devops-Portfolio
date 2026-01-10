"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
    { name: "ABOUT", href: "#about" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "PROJECTS", href: "#projects" },
    { name: "ARCHITECTURE", href: "#architecture" },
    { name: "SKILLS", href: "#skills" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Scroll Spy
            const sections = navItems.map(item => item.href.substring(1));
            let current = "";

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the section is within the viewport (or close to it)
                    // We use a threshold of 1/3 of the viewport height (approx 300px on typical screens)
                    // or just check if the top is somewhere reasonable.
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = section;
                    }
                }
            }
            // Special case: if at top of page, activeSection could be empty or 'about' if 'about' is first section
            if (window.scrollY < 100) {
                // You might want to unset it or set it to 'hero' if you had one, but 'about' is the first link.
                // If the first link is ABOUT and it's further down, this logic holds.
                // If we want no highlight at very top if hero isn't in nav:
                // current = "";
            }

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        // Trigger once on mount
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-black/80 backdrop-blur-md border-green-500/20 py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="w-full px-6 md:px-12 flex items-center justify-between relative">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-2 group z-50">
                    <Terminal className="w-5 h-5 text-green-500 group-hover:text-blue-500 transition-colors" />
                    <span className="text-xl font-bold tracking-tighter text-white font-mono flex gap-2">
                        KAUSHAL <span className="text-white">DARJI</span>
                    </span>
                </Link>

                {/* Desktop Nav - Centered */}
                <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.substring(1);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative text-sm font-medium transition-colors font-mono tracking-wide py-1",
                                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                                )}
                                onMouseEnter={() => setHoveredPath(item.name)}
                                onMouseLeave={() => setHoveredPath(null)}
                            >
                                {item.name}
                                {(item.name === hoveredPath || isActive) && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                                        layoutId="navbar-underline"
                                        initial={false}
                                        transition={{
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                <div className="hidden md:flex items-center ml-auto z-50">
                    <Link href="#contact">
                        <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-white font-mono text-xs tracking-widest h-8">
                            CONNECT_NODE
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-b border-green-500/20 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm font-medium text-gray-400 hover:text-green-500 transition-colors font-mono"
                                >
                                    {">"} {item.name}
                                </Link>
                            ))}
                            <Link href="#contact" className="w-full" onClick={() => setIsOpen(false)}>
                                <Button variant="outline" className="w-full border-zinc-700 text-white hover:bg-zinc-800 hover:text-white font-mono">
                                    CONNECT_NODE
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
