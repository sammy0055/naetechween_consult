import { motion } from 'framer-motion';
import {
    BuildingStorefrontIcon,
    CreditCardIcon,
    ChartBarIcon,
} from '@heroicons/react/24/outline';
const integrations = [BuildingStorefrontIcon, CreditCardIcon, ChartBarIcon];

export const IntegrationSection = () => {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    Works with Your Favorite Tools
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-12">
                    {integrations.map((Icon, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.1 }}
                            className="p-6 bg-slate-800 rounded-xl"
                        >
                            <Icon className="w-16 h-16 text-gray-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
