"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PipelineAnimation } from "@/components/ui/pipeline-animation";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="min-h-screen pt-16 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Grid/Matrix effect could go here */}

            <div className="text-center z-10 px-8 md:px-12 w-full max-w-[900px] mx-auto">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-center bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    DEVOPS ENGINEER
                </motion.h1>

                <motion.p
                    className="text-zinc-400 font-mono text-[10px] sm:text-xs md:text-base mb-12 tracking-wider whitespace-nowrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    AWS • KUBERNETES • CI/CD • AUTOMATION
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Link href="#projects">
                        <Button className="bg-white hover:bg-zinc-200 text-black hover:text-black font-semibold min-w-[200px] h-12 text-sm tracking-widest uppercase rounded-sm">
                            View Production Work
                        </Button>
                    </Link>
                </motion.div>
            </div>

            <motion.div
                className="w-full mt-8 md:mt-12 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                <PipelineAnimation />


            </motion.div>
        </section>
    );
}
