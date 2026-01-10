"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
    return (
        <section id="education" className="py-20 px-4 md:px-10 bg-black">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-12"
                >
                    <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-900/50 text-blue-500">
                        <GraduationCap className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-white uppercase tracking-tight">Education</h2>
                </motion.div>

                <div className="bg-zinc-900/20 border border-zinc-800 p-8 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-5">
                        <GraduationCap className="w-48 h-48" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">BACHELOR OF ENGINEERING IN IT</h3>
                    <p className="text-blue-400 mb-6">University of Mumbai</p>

                    <div className="flex gap-10 mb-8 font-mono text-sm">
                        <div>
                            <div className="text-zinc-500 text-xs uppercase mb-1">Period</div>
                            <div className="text-white">2020 - 2024</div>
                        </div>
                        <div>
                            <div className="text-zinc-500 text-xs uppercase mb-1">Grade</div>
                            <div className="text-green-500">CGPA: 9.09</div>
                        </div>
                    </div>

                    <p className="text-zinc-400 text-sm max-w-xl italic">
                        Focus on distributed systems, network security, and database management systems. Graduated with distinction and a strong foundation in computer science fundamentals.
                    </p>
                </div>
            </div>
        </section>
    )
}
