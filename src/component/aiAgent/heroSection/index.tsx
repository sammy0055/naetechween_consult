import { motion } from 'framer-motion';
import ChatModal from '../chatModel';
import { useState } from 'react';

export const HeroSection = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    return (
        <section className="relative px-6 py-24 overflow-hidden max-sm:text-center">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2"
                >
                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                        AI-Powered Assistants to Scale Your Business
                    </h1>
                    <p className="text-xl text-gray-300 mb-8">
                        Transform the way you engage customers, automate sales,
                        and streamline operations with intelligent AI agents
                        tailored to your needs. Built to drive business
                        growth—24/7, across all your communication channels.
                    </p>
                    <div className="flex gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="bg-indigo-600 px-8 py-4 rounded-lg font-semibold"
                        >
                            <a
                                href="https://calendly.com/naetechween/naetechween-client-consultation"
                                target="_blank"
                            >
                                Book a Free Consultation
                            </a>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="border border-indigo-400 px-8 py-4 rounded-lg font-semibold"
                            onClick={() => setIsChatOpen(true)}
                        >
                            Try a Demo
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="md:w-1/2 relative max-sm:hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur-3xl rounded-full" />
                    <AnimatedChatInterface />
                </motion.div>
            </div>
            <ChatModal
                isOpen={isChatOpen}
                onClose={() => setIsChatOpen(false)}
            />
        </section>
    );
};

const AnimatedChatInterface = () => (
    <div className="relative p-8 bg-slate-800 rounded-2xl shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-2xl" />
        <div className="space-y-4 relative z-10">
            <motion.div
                animate={{ x: [-10, 0, -10] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-3/4 bg-slate-700 p-4 rounded-lg"
            />
            <motion.div
                animate={{ x: [10, 0, 10] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                className="ml-auto w-2/3 bg-indigo-600 p-4 rounded-lg"
            />
            <motion.div
                animate={{ x: [-10, 0, -10] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                className="w-1/2 bg-slate-700 p-4 rounded-lg"
            />
        </div>
    </div>
);
