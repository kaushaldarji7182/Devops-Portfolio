"use client";

import { motion } from "framer-motion";
import {
    Cloud,
    ShipWheel, // For Kubernetes/Helm feel
    Zap,
    Terminal,
    Cpu,
    Database,
    CheckCircle2
} from "lucide-react";

interface SkillCardProps {
    title: string;
    icon: React.ReactNode;
    mainTech: string;
    techDetails: string;
    color: string;
    delay: number;
}

const SkillCard = ({ title, icon, mainTech, techDetails, color, delay }: SkillCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="w-full relative group"
        >
            <div className="bg-black/40 border border-zinc-800 rounded-lg overflow-hidden backdrop-blur-sm hover:border-zinc-700 transition-colors w-full h-full flex flex-col">
                {/* Window Header */}
                <div className="bg-zinc-900/50 px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono font-bold uppercase tracking-wider">
                        {title}
                        <span className={{
                            blue: "text-blue-500",
                            cyan: "text-cyan-500",
                            yellow: "text-yellow-500",
                            green: "text-green-500",
                            red: "text-red-500",
                            orange: "text-orange-500",
                        }[color] || "text-zinc-500"}>{icon}</span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-center">
                    <div className="flex items-start gap-3 mb-2">
                        <span className="text-zinc-500 mt-1">›</span>
                        <div>
                            <h3 className="text-xl font-bold text-zinc-100 font-mono mb-2">{mainTech}</h3>
                            <p className="text-zinc-400 text-sm font-mono leading-relaxed">
                                {techDetails}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Status */}
                <div className="px-4 py-2 border-t border-zinc-800/50 bg-zinc-900/20">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 animate-pulse" />
                        <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono">
                            System_Ready
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export function Skills() {
    const skills = [
        {
            title: "Cloud",
            icon: <Cloud size={16} />,
            mainTech: "AWS",
            techDetails: "EKS, EC2, ALB, IAM, CloudWatch",
            color: "blue",
        },
        {
            title: "DevOps",
            icon: <ShipWheel size={16} />,
            mainTech: "Kubernetes",
            techDetails: "Docker, Helm, ArgoCD, HPA, Ingress",
            color: "cyan",
        },
        {
            title: "CI/CD & IaC",
            icon: <Zap size={16} />,
            mainTech: "Jenkins",
            techDetails: "GitHub Actions, Terraform",
            color: "yellow",
        },
        {
            title: "Automation",
            icon: <Terminal size={16} />,
            mainTech: "Python",
            techDetails: "Shell, AWS Lambda",
            color: "green",
        },
        {
            title: "AIOps (Basic)",
            icon: <Cpu size={16} />,
            mainTech: "Log Analysis",
            techDetails: "Incident Triage (LangChain, OpenAI API)",
            color: "red",
        },
        {
            title: "Database",
            icon: <Database size={16} />,
            mainTech: "MySQL",
            techDetails: "Production-grade relational database",
            color: "orange",
        },
    ];

    return (
        <section id="skills" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <span className="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-widest">
                            Expertise
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                    >
                        TECHNICAL ARSENAL
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        Specialized in building resilient, scalable, and automated production systems
                        with a focus on reliability and security.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={skill.title}
                            {...skill}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
