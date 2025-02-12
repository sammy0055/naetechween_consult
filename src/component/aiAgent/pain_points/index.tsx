import { motion } from 'framer-motion';


const painPoints = [
    {
        problem: 'Slow customer response times',
        solution: 'Instant AI-powered replies',
    },
    {
        problem: 'Missed sales opportunities',
        solution: 'Automated lead nurturing',
    },
    {
        problem: 'Overloaded support teams',
        solution: 'AI-driven issue resolution',
    },
    {
        problem: 'Inefficient operations',
        solution: 'Smart AI process automation',
    },
];

export const PainPoints = () => {
    return (
        <section className="py-24 px-6 bg-slate-800/30">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    Your Business, Powered by AI
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {painPoints.map((point, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-6 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-indigo-400 transition-all"
                        >
                            <div className="flex gap-4 items-start mb-4">
                                <div className="text-red-400">❌</div>
                                <div className="text-indigo-400">✅</div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">
                                {point.problem}
                            </h3>
                            <p className="text-gray-300">{point.solution}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
