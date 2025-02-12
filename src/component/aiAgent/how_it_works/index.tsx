import { motion } from 'framer-motion';
import {
    ArrowsPointingInIcon,
    PuzzlePieceIcon,
    ClockIcon,
} from '@heroicons/react/24/outline';

const steps = [
    {
        icon: ArrowsPointingInIcon,
        title: 'Discovery Call',
        description: 'Understand your business needs',
    },
    {
        icon: PuzzlePieceIcon,
        title: 'AI Setup & Customization',
        description: 'Integrate with your internal system and data',
    },
    {
        icon: ClockIcon,
        title: 'Seamless Integration',
        description: 'Deploy across your communication channels',
    },
];

export const HowItWorks = () => {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    How Our Process Works
                </motion.h2>

                <div className="flex flex-col md:flex-row gap-12 justify-center">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="flex-1 p-8 bg-slate-800 rounded-xl text-center"
                        >
                            <div className="inline-block p-6 mb-6 bg-slate-700 rounded-full">
                                <step.icon className="w-8 h-8 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">
                                {step.title}
                            </h3>
                            <p className="text-gray-300">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
