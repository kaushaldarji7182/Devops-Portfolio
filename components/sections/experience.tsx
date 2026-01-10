"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Experience() {
    return (
        <section id="experience" className="py-20 px-4 md:px-10 bg-black text-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block px-2 py-1 bg-blue-900/10 border border-blue-900/30 text-blue-500 text-[10px] tracking-widest font-mono mb-4">
                        CAREER PATH
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">PROFESSIONAL JOURNEY</h2>
                    <p className="text-zinc-500 font-mono text-sm max-w-xl mx-auto">
                        A timeline of my professional contributions and technical growth in high-stakes production environments.
                    </p>
                </div>

                <div className="space-y-12">
                    <JobCard
                        role="DEVOPS ENGINEER"
                        company="UST Global"
                        period="Jan 2025 – Present"
                        location="Pune, India"
                        isCurrent={true}
                        bullets={[
                            "Owned and operated CI/CD, observability, and automation for an enterprise DevOps platform on AWS EKS.",
                            "Improved deployment efficiency by 30% through automated pipeline optimizations.",
                            "Designed and tuned Kubernetes autoscaling (HPA with EC2 node groups) improving cluster reliability by 20%.",
                            "Implemented LLM-assisted automation for log analysis and incident triage, reducing MTTR by 30%."
                        ]}
                        tags={["AWS EKS", "KUBERNETES", "HPA", "LLM/AIOPS", "CI/CD"]}
                    />

                    <JobCard
                        role="SOFTWARE DEVELOPER (INTERN)"
                        company="EMEASUREMATICS PVT LTD"
                        period="Oct 2024 – Dec 2024"
                        location="Mumbai, India"
                        isCurrent={false}
                        bullets={[
                            "Developed a Spring Boot banking application handling 10K+ secure monthly transactions.",
                            "Automated database testing and validation using reusable SQL procedures, reducing QA effort by 60%.",
                            "Improved backend performance by 40% through query optimizations and email alert systems."
                        ]}
                        tags={["SPRING BOOT", "MYSQL", "SQL AUTOMATION", "BACKEND OPTIMIZATION"]}
                    />
                </div>
            </div>
        </section>
    )
}

interface JobCardProps {
    role: string;
    company: string;
    period: string;
    location: string;
    isCurrent: boolean;
    bullets: string[];
    tags: string[];
}

function JobCard({ role, company, period, location, isCurrent, bullets, tags }: JobCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4 md:gap-8 relative group"
        >
            {/* Timeline Line */}
            <div className="hidden md:flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${isCurrent ? 'border-blue-500 bg-blue-500/10 text-blue-500' : 'border-zinc-800 bg-black text-zinc-500'}`}>
                    <Briefcase className="w-4 h-4" />
                </div>
                <div className="w-px h-full bg-zinc-800 mt-2 group-last:hidden" />
            </div>

            <div className="flex-1 bg-[#0d0d0d] border border-zinc-800 rounded-xl p-6 md:p-8 hover:border-zinc-700 transition-colors relative">
                <div className="absolute top-6 right-6 font-mono text-xs text-blue-500 hidden md:block">
                    {period}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{role}</h3>
                <div className="text-blue-400 font-mono text-sm mb-6 uppercase tracking-wider">{company}</div>

                <div className="flex flex-wrap gap-4 text-xs text-zinc-500 font-mono mb-6">
                    <span className="flex items-center gap-1">📍 {location}</span>
                    <span className="flex items-center gap-1">📅 {period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                    {bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 text-zinc-400 text-sm leading-relaxed">
                            <span className="text-blue-500 mt-1">›</span>
                            {bullet}
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold border border-zinc-800 bg-zinc-900/50 text-zinc-400 px-3 py-1 rounded uppercase">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
