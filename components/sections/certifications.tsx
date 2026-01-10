"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";

export function Certifications() {
    return (
        <section className="py-20 px-4 md:px-10 bg-black border-t border-zinc-900">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-12"
                >
                    <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-900/50 text-blue-500">
                        <BadgeCheck className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-white uppercase tracking-tight">Professional Certs</h2>
                </motion.div>

                <div className="space-y-8 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-zinc-800 -z-10" />

                    <CertificationItem
                        title="CERTIFIED KUBERNETES ADMINISTRATOR (CKA)"
                        issuer="The Linux Foundation"
                        date="2025"
                        color="text-blue-500"
                        href="https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/5a4f9b4b-d1fc-4daf-9540-857bac8ab1b2-kaushal-darji-11af6b6d-02b0-4342-acca-830cd47e0503-certificate.pdf"
                    />
                    <CertificationItem
                        title="AWS CERTIFIED CLOUD PRACTITIONER"
                        issuer="AWS"
                        date="2025"
                        color="text-orange-500"
                        href="https://cp.certmetrics.com/amazon/en/public/verify/credential/913f73965ad540a0a318559a1ce8e2b4"
                    />
                    <CertificationItem
                        title="GITHUB ACTIONS"
                        issuer="Microsoft"
                        date="2026" // Per user request
                        color="text-white"
                        href="https://learn.microsoft.com/api/credentials/share/en-in/KaushalPrafulDarjiUSTIN-1010/61CE381539CBE2F5?sharingId=C47D8F448C43278A"
                    />
                </div>
            </div>
        </section>
    )
}

function CertificationItem({ title, issuer, date, color, href }: { title: string, issuer: string, date: string, color: string, href: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
        >
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-6 group cursor-pointer"
            >
                <div className="relative mt-1">
                    <div className="w-4 h-4 rounded-full bg-black border border-zinc-600 group-hover:border-green-500 group-hover:scale-110 transition-all z-10" />
                </div>
                <div className="flex-1 pb-8 border-b border-zinc-900 group-last:border-0">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className={`font-bold ${color} group-hover:opacity-80 transition-opacity flex items-center gap-2`}>
                                <span>{title}</span>
                                <ExternalLink className="w-3 h-3 text-zinc-500 shrink-0" />
                            </h3>
                            <p className="text-zinc-500 text-sm flex items-center gap-2 mt-1">
                                {issuer}
                            </p>
                        </div>
                        <span className="font-mono text-zinc-600 text-sm">{date}</span>
                    </div>
                </div>
            </a>
        </motion.div>
    )
}
