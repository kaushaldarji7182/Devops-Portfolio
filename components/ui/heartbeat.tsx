"use client";

import { motion } from "framer-motion";

export function Heartbeat() {
    return (
        <div className="absolute top-24 left-10 md:left-20 z-0 opacity-50 pointer-events-none">
            <svg
                width="200"
                height="100"
                viewBox="0 0 200 100"
                className="overflow-visible"
            >
                <motion.path
                    d="M 0 50 H 50 L 60 20 L 70 80 L 80 50 L 90 20 L 100 50 H 200"
                    fill="transparent"
                    strokeWidth="2"
                    className="stroke-green-500/50"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: [0, 1, 0],
                        opacity: [0, 1, 0],
                        x: [0, -50]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        times: [0, 0.5, 1]
                    }}
                />
            </svg>
            <div className="text-[10px] font-mono text-green-500/50 mt-1 tracking-widest pl-2">
                SYS_HEARTBEAT_MONITOR
            </div>
        </div>
    );
}
