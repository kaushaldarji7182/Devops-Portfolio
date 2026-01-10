"use client";

import { motion } from "framer-motion";
import { Globe, ShieldCheck, Server, Database, Box } from "lucide-react";

export function System() {
  return (
    <section id="system" className="py-24 px-4 md:px-10 bg-black text-white">
      <div className="max-w-6xl mx-auto">
         <div className="text-center mb-20">
            <div className="inline-block px-2 py-1 bg-blue-900/10 border border-blue-900/30 text-blue-500 text-[10px] tracking-widest font-mono mb-4">
                SYSTEM THINKING
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">STANDARD REQUEST LIFECYCLE</h2>
            <p className="text-zinc-500 max-w-xl mx-auto text-sm md:text-base">
                Visualizing the path of a production request through my typical AWS EKS architecture.
            </p>
         </div>

         {/* Lifecycle Visualization */}
         <div className="relative mb-24">
             {/* Connecting Line */}
             <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900 to-transparent hidden md:block -z-10" />
             
             <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
                 <SystemNode icon={<Globe />} label="REQUEST" sub="User traffic hits ALB/CloudFront" />
                 <SystemNode icon={<ShieldCheck />} label="SECURITY" sub="WAF & IAM Validation" delay={0.1} />
                 <SystemNode icon={<Server />} label="INGRESS" sub="Nginx Ingress Controller" delay={0.2} />
                 <SystemNode icon={<Box />} label="POD" sub="HPA-scaled Microservice" delay={0.3} />
                 <SystemNode icon={<Database />} label="STATE" sub="RDS / ElastiCache" delay={0.4} />
             </div>
         </div>

         {/* Feature Cards */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <FeatureCard 
                title="SECURITY LAYER"
                icon={<ShieldCheck className="w-4 h-4 text-blue-500" />}
                desc="Implemented Least Privilege IAM roles for service accounts (IRSA) and network policies to isolate namespaces."
             />
             <FeatureCard 
                title="SCALING LOGIC"
                icon={<ZapIcon className="w-4 h-4 text-blue-500" />}
                desc="Horizontal Pod Autoscaler (HPA) integrated with custom Prometheus metrics for proactive scaling."
             />
             <FeatureCard 
                title="RELIABILITY"
                icon={<Server className="w-4 h-4 text-blue-500" />}
                desc="Multi-AZ deployment strategy with automated health checks and Pod Disruption Budgets (PDB)."
             />
         </div>

      </div>
    </section>
  )
}

function SystemNode({ icon, label, sub, delay = 0 }: { icon: any, label: string, sub: string, delay?: number }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
        >
            <div className="w-16 h-16 rounded-2xl bg-[#0d0d0d] border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all">
                <div className="text-blue-500 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
            </div>
            <h3 className="text-white font-bold text-sm mb-2 tracking-wide">{label}</h3>
            <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider max-w-[120px]">{sub}</p>
        </motion.div>
    )
}

function FeatureCard({ title, icon, desc }: { title: string, icon: any, desc: string }) {
    return (
        <div className="bg-[#0d0d0d] border border-zinc-800 p-6 rounded-xl hover:border-zinc-600 transition-colors">
            <div className="flex items-center gap-2 mb-4 font-mono text-xs text-blue-300 uppercase tracking-widest">
                {icon} {title}
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed font-mono">
                {desc}
            </p>
        </div>
    )
}

function ZapIcon(props: any) {
    return (
        <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
    )
}
