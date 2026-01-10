"use client";

import { motion } from "framer-motion";
import { Globe, Shield, Server, Box, Database, Lock, TrendingUp, Activity } from "lucide-react";

const flowSteps = [
    {
        icon: Globe,
        title: "REQUEST",
        description: "User traffic hits ALB/CloudFront",
        color: "text-blue-400",
    },
    {
        icon: Lock,
        title: "SECURITY",
        description: "WAF & IAM Validation",
        color: "text-blue-400",
    },
    {
        icon: Server,
        title: "INGRESS",
        description: "Nginx Ingress Controller",
        color: "text-blue-400",
    },
    {
        icon: Box,
        title: "POD",
        description: "HPA-scaled Microservice",
        color: "text-blue-400",
    },
    {
        icon: Database,
        title: "STATE",
        description: "RDS / ElastiCache",
        color: "text-blue-400",
    },
];

const cards = [
    {
        icon: Shield,
        title: "SECURITY LAYER",
        description: "Implemented Least Privilege IAM roles for service accounts (IRSA) and network policies to isolate namespaces.",
    },
    {
        icon: TrendingUp,
        title: "SCALING LOGIC",
        description: "Horizontal Pod Autoscaler (HPA) integrated with custom Prometheus metrics for proactive scaling.",
    },
    {
        icon: Activity, // Using Activity for Reliability/Health
        title: "RELIABILITY",
        description: "Multi-AZ deployment strategy with automated health checks and Pod Disruption Budgets (PDB).",
    },
];

export function SystemArchitecture() {
    return (
        <section className="relative w-full py-20 overflow-hidden bg-black text-white" id="architecture">
            <div className="container mx-auto px-4 relative z-10">
                {/* System Architecture Section */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="border px-4 py-1 text-sm text-blue-400 border-blue-500/30 rounded-full bg-blue-500/10 mb-6 backdrop-blur-sm"
                    >
                        SYSTEM THINKING
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
                    >
                        STANDARD REQUEST LIFECYCLE
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 max-w-2xl text-lg"
                    >
                        Visualizing the path of a production request through my typical AWS EKS architecture.
                    </motion.p>
                </div>

                {/* Flow Diagram */}
                <div className="relative mb-24">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[28%] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                        {flowSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#0A0A0A] border border-white/5 flex items-center justify-center mb-6 relative z-10 group-hover:border-blue-500/50 transition-colors duration-300 shadow-lg shadow-black/50">
                                    <step.icon className={`w-8 h-8 ${step.color}`} />
                                    <div className="absolute inset-0 bg-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                                </div>
                                <h3 className="font-bold mb-2 tracking-wider text-sm">{step.title}</h3>
                                <p className="text-sm text-white/50 px-2 leading-relaxed">
                                    {step.description.split('\n').map((line, i) => (
                                        <span key={i} className="block">{line}</span>
                                    ))}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Detail Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.6 }}
                            className="p-8 rounded-2xl bg-[#050505] border border-white/5 hover:border-blue-500/30 transition-colors duration-300 group"
                        >
                            <div className="flex items-center mb-4 space-x-3">
                                <card.icon className="w-5 h-5 text-blue-400" />
                                <h3 className="font-bold text-sm tracking-wider uppercase text-blue-100/80">{card.title}</h3>
                            </div>
                            <p className="text-white/60 text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
