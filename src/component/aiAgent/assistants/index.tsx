import { motion } from 'framer-motion';
import {
    CurrencyDollarIcon,
    LifebuoyIcon,
    CpuChipIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';
const agents = [
    {
        icon: UserGroupIcon,
        title: 'Customer Assistant',
        description: 'Handles inquiries, FAQs, and service requests',
    },
    {
        icon: CurrencyDollarIcon,
        title: 'Sales Assistant',
        description:
            'Engages leads, qualifies prospects, and boosts conversions',
    },
    {
        icon: LifebuoyIcon,
        title: 'Support Agent',
        description: 'Resolves customer issues, automates troubleshooting',
    },
    {
        icon: CpuChipIcon,
        title: 'Operations Manager',
        description: 'Automates workflows, optimizes task management',
    },
];

export const AssistantSection = () => {
    return (
        <section className="py-24 px-6 bg-slate-800/30">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    AI Agents Tailored to Your Business
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {agents.map((agent, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="p-8 bg-slate-800 rounded-xl border border-slate-700 hover:border-indigo-400 transition-all"
                        >
                            <agent.icon className="w-12 h-12 text-indigo-400 mb-6" />
                            <h3 className="text-xl font-semibold mb-4">
                                {agent.title}
                            </h3>
                            <p className="text-gray-300">{agent.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
