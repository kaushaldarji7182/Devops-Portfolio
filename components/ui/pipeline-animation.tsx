"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const steps = [
    { id: "code", label: "Code", color: "bg-gray-500" },
    { id: "checkout", label: "Checkout", color: "bg-blue-500" },
    { id: "scan", label: "Scan", color: "bg-yellow-500" },
    { id: "build", label: "Build", color: "bg-purple-500" },
    { id: "test", label: "Test", color: "bg-orange-500" },
    { id: "secure", label: "Secure", color: "bg-red-500" },
    { id: "deploy", label: "Deploy", color: "bg-green-500" },
    { id: "monitor", label: "Monitor", color: "bg-cyan-500" },
];

export function PipelineAnimation() {
    const [activeStep, setActiveStep] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => {
                if (prev >= steps.length - 1) {
                    clearInterval(interval);
                    setIsComplete(true);
                    return prev;
                }
                return prev + 1;
            });
        }, 1500); // Change step every 1.5s
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-[900px] mx-auto mt-8 pt-10 px-4 md:px-12 overflow-hidden">
            <div className="flex items-center justify-between relative w-full">
                {steps.map((step, index) => {
                    const isActive = index <= activeStep;
                    const isCurrent = index === activeStep;
                    const isLast = index === steps.length - 1;
                    const isEven = index % 2 === 0;

                    return (
                        <div key={step.id} className="flex-1 flex items-center">
                            <div className="flex flex-col items-center gap-2 relative z-10 w-4">
                                <motion.div
                                    className={`w-3 h-3 rounded-full border-2 ${isActive ? "border-green-500 bg-green-500" : "border-zinc-700 bg-black"} z-10`}
                                    animate={{
                                        backgroundColor: isActive ? "#22c55e" : "#000000",
                                        borderColor: isActive ? "#22c55e" : "#3f3f46",
                                        scale: 1,
                                        boxShadow: isCurrent && !isComplete ? "0 0 20px rgba(255, 255, 255, 0.5)" : "none"
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        delay: isActive && index !== 0 ? 0.5 : 0
                                    }}
                                />
                                <motion.span
                                    className={`absolute top-6 left-1/2 -translate-x-1/2 text-[8px] sm:text-[10px] uppercase tracking-widest font-mono whitespace-nowrap`}
                                    animate={{
                                        color: isActive ? "#22c55e" : "#52525b"
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        delay: isActive && index !== 0 ? 0.5 : 0
                                    }}
                                >
                                    {/* On mobile, always show label (zigzag). On desktop, kept original logic but user wants same as mobile basically or clean. 
                                        Let's just show label normally. User said "want this same in mobile mode". 
                                        The previous logic hid it if not active/current? No, user wants steady labels.
                                        Wait, the user's screenshot shows ALL labels visible in green or gray. 
                                        The original code had:
                                        {isCurrent && !isComplete ? `${step.label}_` : step.label}
                                        I will keep that text logic.
                                    */}
                                    {isCurrent && !isComplete ? `${step.label}_` : step.label}
                                </motion.span>
                            </div>

                            {!isLast && (
                                <div className="flex-1 h-[2px] bg-zinc-800 relative -mx-[1px]">
                                    <motion.div
                                        className="h-full absolute left-0 top-0 bg-white"
                                        initial={{ width: "0%", backgroundColor: "#ffffff" }}
                                        animate={{
                                            width: activeStep > index ? "100%" : "0%",
                                            backgroundColor: activeStep > index ? "#22c55e" : "#ffffff"
                                        }}
                                        transition={{
                                            width: { duration: 0.5, ease: "linear" },
                                            backgroundColor: { delay: 0.45, duration: 0.1 } // Snap to green just before/at finish
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>

            <div className="mt-16 text-center">
                <p className="text-xs text-zinc-500 font-mono">
                    CI/CD_PIPELINE_STATUS: <span className={`${isComplete ? "text-blue-500" : "text-green-500 animate-pulse"}`}>{isComplete ? "STABLE" : "ACTIVE"}</span>
                </p>
                <div className="mt-2 text-xs font-mono text-zinc-600 h-4 min-h-[1rem]">
                    {activeStep === 0 && "> git push origin main"}
                    {activeStep === 1 && "> git checkout -b feature/deployment"}
                    {activeStep === 2 && "> sonar-scanner -Dsonar.projectKey=portfolio"}
                    {activeStep === 3 && "> docker build -t kaushal/portfolio:latest ."}
                    {activeStep === 4 && "> running unit tests..."}
                    {activeStep === 5 && "> trivy image kaushal/portfolio:latest"}
                    {activeStep === 6 && "> helm upgrade --install portfolio ./chart"}
                    {activeStep === 7 && "> prometheus --config.file=prometheus.yml"}
                </div>
            </div>
        </div>
    );
}
