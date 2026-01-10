"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Zap, Activity, Database, GitBranch, Cloud } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-10 bg-black text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left: Code Snippet / Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex-1 w-full"
          >
            <div className="bg-[#0a0a0a] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl shadow-blue-900/10 group hover:border-zinc-700 transition-all duration-300">
              {/* Terminal Header */}
              <div className="bg-[#111] px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-zinc-500 text-xs font-mono">devops_philosophy.sh</div>
                <div className="w-10"></div> {/* Spacer for balance */}
              </div>

              {/* Terminal Content */}
              <div className="p-6 md:p-8 font-mono text-sm md:text-[15px] leading-relaxed overflow-x-auto">
                <div className="space-y-6">
                  <div>
                    <span className="text-blue-500 font-bold"># Kaushal Darji - Principal Mindset</span>
                  </div>

                  <div>
                    <span className="text-green-500 italic">"Reliability is not an afterthought; it's a feature."</span>
                  </div>

                  <div className="text-zinc-300">
                    As a DevOps Engineer, I bridge the gap between development and operations by building <span className="text-white font-bold bg-zinc-800/50 px-1 rounded">bridges of automation</span>. My focus is on operating production-grade Kubernetes platforms on <span className="text-white font-bold bg-zinc-800/50 px-1 rounded">AWS EKS</span> with a focus on observability and cost-efficiency.
                  </div>

                  <div className="text-zinc-300">
                    I believe in the <span className="text-cyan-400 font-semibold">Least Privilege Principle</span> and <span className="text-cyan-400 font-semibold">GitOps</span> workflows to ensure infrastructure is immutable and reproducible.
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-green-500">➜</span>
                    <span className="text-blue-400">~/philosophy</span>
                    <span className="animate-pulse w-2 h-4 bg-zinc-500 block"></span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="inline-block px-3 py-1 bg-blue-950/30 border border-blue-800/50 rounded-full text-blue-400 text-[10px] md:text-xs tracking-[0.2em] font-mono font-medium mb-6">
              ABOUT ME
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tight">
              THE ENGINEER BEHIND
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-600 mb-8 tracking-tight">
              THE INFRASTRUCTURE
            </h2>

            <p className="text-zinc-400 text-base md:text-lg mb-12 leading-relaxed max-w-xl">
              I specialize in building and operating cloud-native systems that support real production workloads. From tuning Kubernetes autoscaling to improving CI/CD reliability, I enjoy solving complex system problems with a practical, production-first mindset.
            </p>

            <div className="text-xs font-mono text-blue-500 tracking-[0.2em] uppercase mb-8 flex items-center gap-4">
              <span>Core Focus Areas</span>
              <div className="h-px bg-blue-900/50 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-10">
              <FocusItem
                icon={<Cloud className="w-5 h-5 text-blue-400" />}
                title="PRODUCTION OWNERSHIP"
                desc="Operating highly available Kubernetes clusters across multi-AZ AWS environments."
              />
              <FocusItem
                icon={<Zap className="w-5 h-5 text-blue-400" />}
                title="AUTOMATION FIRST"
                desc="Reducing manual effort through Python, Shell scripting, and AWS Lambda."
              />
              <FocusItem
                icon={<Activity className="w-5 h-5 text-blue-400" />}
                title="SCALABILITY & PERFORMANCE"
                desc="Hands-on experience with HPA, cluster autoscaling, and node-level scaling on AWS."
              />
              <FocusItem
                icon={<Database className="w-5 h-5 text-blue-400" />}
                title="SYSTEMS THINKING"
                desc="Analyzing request lifecycles end-to-end to identify bottlenecks and improve reliability."
              />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FocusItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-4 group">
      <div className="mt-1 p-2 rounded-lg bg-blue-950/10 border border-blue-900/20 group-hover:bg-blue-900/20 group-hover:border-blue-500/30 transition-colors duration-300 h-fit">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-bold text-white mb-2 tracking-wide">{title}</h3>
        <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-mono group-hover:text-zinc-400 transition-colors">{desc}</p>
      </div>
    </div>
  )
}
