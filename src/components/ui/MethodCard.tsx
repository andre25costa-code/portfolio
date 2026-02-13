import React from 'react';
import { motion } from 'framer-motion';

interface MethodCardProps {
    // ElementType é a forma mais segura de referenciar um componente que será renderizado
    icon: React.ElementType;
    title: string;
    description: string;
    index: number;
}

export const MethodCard: React.FC<MethodCardProps> = ({ icon: Icon, title, description, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="glass-v2 p-8 relative group overflow-hidden border border-white/5"
        >
            {/* Ícone decorativo ao fundo */}
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 group-hover:text-brand-green transition-all duration-700 transform group-hover:-rotate-12 pointer-events-none">
                <Icon size={120} strokeWidth={1} />
            </div>

            <div className="relative z-10">
                <div className="text-brand-purple font-mono text-[10px] mb-4 tracking-[0.2em]">
                    0{index + 1} // PEDAGOGICAL_PILLAR
                </div>

                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-brand-green/10 rounded-lg text-brand-green">
                        <Icon size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                        {title}
                    </h3>
                </div>

                <p className="text-zinc-500 font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};