import { motion } from 'framer-motion';
import { useState } from 'react';
import ChatModal from '../chatModel';

export const Booking = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold mb-8"
                >
                    Ready to Supercharge Your Business with AI?
                </motion.h2>

                <div className="flex justify-center gap-6">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="bg-indigo-600 px-8 py-4 rounded-lg font-semibold"
                    >
                        <a href="https://calendly.com/ronicksamuel/naetechween-client-consultation">
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
            </div>
            <ChatModal
                isOpen={isChatOpen}
                onClose={() => setIsChatOpen(false)}
            />
        </section>
    );
};
