"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Send, Terminal, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg("");

        try {
            console.log("Submitting form with state:", formState);
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setShowPopup(true);
            setFormState({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error("Submission Error:", error);
            setErrorMsg("Failed to send message. Please try again or email directly.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section id="contact" className="py-20 px-4 md:px-10 bg-black border-t border-zinc-900 relative overflow-hidden">
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row gap-20">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-xs font-mono text-blue-500 mb-2 tracking-widest uppercase bg-blue-500/10 inline-block px-2 py-1 rounded">Get In Touch</div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">LET'S BUILD SOMETHING SCALABLE</h2>
                            <p className="text-zinc-400 mb-10 text-lg">
                                Whether you're looking for cloud architecture advice or need a reliable engineer to scale your production environment, I'm just a message away.
                            </p>

                            <div className="flex gap-4">
                                <SocialButton
                                    icon={<Mail />}
                                    href="mailto:kaushaldarji7182@gmail.com"
                                    label="Email"
                                    onClick={(e) => {
                                        // If screen width is larger than mobile (768px), open Gmail Web
                                        if (window.innerWidth > 768) {
                                            e.preventDefault();
                                            window.open('https://mail.google.com/mail/?view=cm&fs=1&to=kaushaldarji7182@gmail.com', '_blank');
                                        }
                                        // Otherwise, let default mailto behavior happen (opens default mail app)
                                    }}
                                />
                                <SocialButton icon={<Github />} href="https://github.com/kaushaldarji7182" label="GitHub" />
                                <SocialButton icon={<Linkedin />} href="https://www.linkedin.com/in/kaushaldarji7182" label="LinkedIn" />
                                <SocialButton icon={<Twitter />} href="https://twitter.com/KAUSHAL2118" label="Twitter" />
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-zinc-900/20 border border-zinc-800 p-4 md:p-8 rounded-2xl backdrop-blur-sm"
                        >
                            <h3 className="text-xl font-bold text-white mb-1">DROP A MESSAGE</h3>
                            <p className="text-zinc-500 text-xs italic mb-8">"High availability starts with a simple conversation. Fill out the form below or reach out directly!"</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs text-zinc-400 font-mono">Name *</label>
                                        <input
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            disabled={isLoading}
                                            className="w-full bg-black border border-zinc-800 rounded px-3 py-2 text-white focus:border-blue-500 focus:outline-none transition-colors disabled:opacity-50"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs text-zinc-400 font-mono">Email *</label>
                                        <input
                                            name="email"
                                            type="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                            disabled={isLoading}
                                            className="w-full bg-black border border-zinc-800 rounded px-3 py-2 text-white focus:border-blue-500 focus:outline-none transition-colors disabled:opacity-50"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs text-zinc-400 font-mono">Subject *</label>
                                    <input
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        required
                                        disabled={isLoading}
                                        className="w-full bg-black border border-zinc-800 rounded px-3 py-2 text-white focus:border-blue-500 focus:outline-none transition-colors disabled:opacity-50"
                                        placeholder="Infrastructure Project"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs text-zinc-400 font-mono">Message *</label>
                                    <textarea
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        disabled={isLoading}
                                        className="w-full bg-black border border-zinc-800 rounded px-3 py-2 text-white focus:border-blue-500 focus:outline-none transition-colors min-h-[120px] disabled:opacity-50"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                {errorMsg && (
                                    <div className="text-red-500 text-xs font-mono bg-red-500/10 p-2 rounded">
                                        {errorMsg}
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2 h-12 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" /> Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>

                <div className="mt-20 pt-10 border-t border-zinc-900 flex flex-col md:flex-row gap-4 justify-between items-center text-xs text-zinc-600 font-mono text-center md:text-left">
                    <div>
                        © 2026 KAUSHAL DARJI. All rights reserved.
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        SYSTEM_ONLINE
                    </div>
                </div>
            </div >

            {/* Success Popup */}
            {
                showPopup && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-zinc-900 border border-zinc-700 p-8 rounded-2xl max-w-md w-full text-center relative shadow-2xl shadow-blue-500/10"
                        >
                            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Send className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                            <p className="text-zinc-400 mb-8">
                                ✅ I will get back to you soon.
                            </p>
                            <Button
                                onClick={() => setShowPopup(false)}
                                className="bg-zinc-800 hover:bg-zinc-700 text-white w-full"
                            >
                                Close
                            </Button>
                        </motion.div>
                    </div>
                )
            }
        </section >
    )
}

function SocialButton({ icon, href, label, onClick }: { icon: React.ReactNode, href: string, label: string, onClick?: (e: React.MouseEvent) => void }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClick}
            className="w-10 h-10 flex items-center justify-center rounded border border-zinc-800 text-zinc-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all"
            aria-label={label}
        >
            {icon}
        </a>
    )
}
