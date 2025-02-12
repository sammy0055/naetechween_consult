import { motion } from 'framer-motion';

export const Footer = () => {
    return (
        <footer className="border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            AI Assistants
                        </h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Customer Assistant</li>
                            <li>Sales Assistant</li>
                            <li>Support Agent</li>
                            <li>Operations Manager</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>About</li>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <div className="flex gap-4">
                            {['Twitter', 'LinkedIn', 'Facebook'].map(
                                (social, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.1 }}
                                        className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center cursor-pointer"
                                    >
                                        {social[0]}
                                    </motion.div>
                                ),
                            )}
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-800 text-center text-gray-400">
                    <p>© 2025 Natechween. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
