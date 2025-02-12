import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'CTO, TechCorp',
        text: 'Our conversions increased by 40% with their AI sales assistants!',
    },
    {
        name: 'Michael Chen',
        role: 'CEO, RetailPro',
        text: 'Customer response times improved dramatically overnight.',
    },
];

export const Testimonials = () => {
    return (
        <section className="py-24 px-6 bg-slate-800/30">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    What Our Clients Say
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="p-8 bg-slate-800 rounded-xl"
                        >
                            <p className="text-xl mb-6">"{testimonial.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-500 rounded-full" />
                                <div>
                                    <h3 className="font-semibold">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-gray-400">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
