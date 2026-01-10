"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function Projects() {
    return (
        <section id="projects" className="py-24 px-4 md:px-10 bg-black text-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-24">
                    <div className="inline-block px-2 py-1 bg-blue-900/10 border border-blue-900/30 text-blue-500 text-[10px] tracking-widest font-mono mb-4">
                        IMPACT
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase">Production Showcase</h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto text-sm md:text-base">
                        Engineering high-availability platforms and automated workflows that power mission-critical applications at scale.
                    </p>
                </div>

                <div className="space-y-32">
                    {/* Project 1 */}
                    <ProjectItem
                        category="CLOUD MIGRATION"
                        title="Cloud Migration and Modernization for E-commerce Platform"
                        metrics={[
                            { value: "95-97%", label: "UPTIME" },
                            { value: "10M", label: "DEPLOY TIME" },
                            { value: "HPA", label: "SCALABILITY" }
                        ]}
                        problem="The existing monolithic deployment caused frequent downtime during releases and could not scale efficiently during traffic spikes. Deployments were manual and time-consuming (~45 minutes)."
                        solution="Containerized application services using Docker. Migrated workloads to AWS EKS. Implemented Kubernetes rolling deployments with readiness and liveness probes. Configured HPA for CPU-based scaling."
                        impact="Achieved 95-97% uptime availability. Reduced deployment time to ~10 minutes (from 45m). Enabled automatic scalability to handle traffic spikes."
                        tags={["AWS EKS", "KUBERNETES", "HPA", "LLM/AIOPS", "CI/CD"]}
                        githubLink="https://github.com/kaushaldarji7182/ThreeTierApp"
                    />

                    {/* Project 2 */}
                    <ProjectItem
                        category="DEVOPS AUTOMATION"
                        title="Automated CI/CD for a Microservices Architecture"
                        metrics={[
                            { value: "4X", label: "FREQUENCY" },
                            { value: "-50%", label: "INCIDENTS" },
                            { value: "AUTO", label: "DISCOVERY" }
                        ]}
                        problem="Manual and inconsistent deployments led to slow releases, higher failure rates, and risky rollbacks in production environments."
                        solution="Built CI/CD pipelines using Jenkins and GitLab CI. Automated Docker image builds, testing, and deployments. Implemented Canary deployments on Kubernetes with automated health checks and rollback."
                        impact="Increased deployment frequency by 4x. Reduced deployment-related production incidents by ~50%. Improved deployment reliability and rollback safety."
                        tags={["JENKINS", "GITLAB CI", "KUBERNETES", "DOCKER", "AWS", "HELM"]}
                        githubLink="https://github.com/kaushaldarji7182/spring-boot-hello-world"
                    />
                </div>
            </div>
        </section>
    )
}

interface ProjectItemProps {
    category: string;
    title: string;
    metrics: { value: string, label: string }[];
    problem: string;
    solution: string;
    impact?: string;
    tags: string[];
    githubLink?: string;
}

function ProjectItem({ category, title, metrics, problem, solution, impact, tags, githubLink }: ProjectItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:text-center"
        >
            <div className="text-blue-500 font-mono text-[10px] tracking-widest uppercase mb-4">{category}</div>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-12 max-w-4xl mx-auto uppercase leading-tight">
                {title}
            </h3>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-3xl mx-auto mb-16">
                {metrics.map((m, i) => (
                    <div key={i} className="bg-[#0d0d0d] border border-zinc-800 py-2 md:py-6 rounded-xl flex flex-col justify-center items-center text-center min-h-[60px] md:min-h-[80px]">
                        <div className="text-xs sm:text-lg md:text-3xl font-bold text-blue-500 mb-1 leading-tight whitespace-nowrap">{m.value}</div>
                        <div className="text-[8px] md:text-[10px] text-zinc-500 uppercase tracking-widest font-mono leading-none">{m.label}</div>
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto text-left space-y-8 font-mono text-sm leading-relaxed">
                <div>
                    <div className="flex items-center gap-2 text-red-500 uppercase text-xs font-bold tracking-widest mb-2">
                        <span className="w-2 h-2 rounded-full bg-red-500" /> Problem
                    </div>
                    <p className="text-zinc-400 pl-4 border-l border-zinc-900">
                        {problem}
                    </p>
                </div>

                <div>
                    <div className="flex items-center gap-2 text-yellow-500 uppercase text-xs font-bold tracking-widest mb-2">
                        <span className="w-2 h-2 rounded-full bg-yellow-500" /> Solution
                    </div>
                    <p className="text-zinc-400 pl-4 border-l border-zinc-900">
                        {solution}
                    </p>
                </div>

                {impact && (
                    <div>
                        <div className="flex items-center gap-2 text-green-500 uppercase text-xs font-bold tracking-widest mb-2">
                            <span className="w-2 h-2 rounded-full bg-green-500" /> Impact
                        </div>
                        <p className="text-zinc-400 pl-4 border-l border-zinc-900">
                            {impact}
                        </p>
                    </div>
                )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-12 mb-12">
                {tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold bg-[#0d0d0d] border border-zinc-800 text-zinc-500 px-3 py-1.5 rounded uppercase hover:border-zinc-600 transition-colors">
                        {tag}
                    </span>
                ))}
            </div>

            {githubLink && (
                <div className="flex justify-center">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="bg-white hover:bg-zinc-200 text-black hover:text-black font-bold text-xs tracking-widest uppercase gap-2 h-10 px-6">
                            View Source GitHub <ExternalLink className="w-3 h-3" />
                        </Button>
                    </a>
                </div>
            )}
        </motion.div>
    )
}
