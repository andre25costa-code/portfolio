import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { CheckCircle2, ChevronRight } from 'lucide-react';

interface JourneyCardProps {
    title: string;
    source: string[]; // Alterado para array para fazer o efeito de árvore/path
    description: string;
    status: 'completed' | 'ongoing';
    progress?: number; // 0 a 100 para o efeito de loading
    tags: string[];
}

export const JourneyCard: React.FC<JourneyCardProps> = ({
    title, source, description, status, progress = 100, tags
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-v2 relative p-8 group border-l-2 border-white/5 hover:border-brand-green transition-all duration-700"
        >
            <div className="relative z-10 space-y-6">

                {/* Source: File Tree Style */}
                <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-500 tracking-wider">
                    {source.map((item, index) => (
                        <React.Fragment key={item}>
                            <span className={cn(index === source.length - 1 && "text-brand-purple")}>{item}</span>
                            {index < source.length - 1 && <ChevronRight size={10} className="text-zinc-700" />}
                        </React.Fragment>
                    ))}
                </div>

                {/* Title & Status */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-3xl font-black text-white tracking-tighter group-hover:text-brand-green transition-colors duration-500">
                        {title}
                    </h3>

                    <div className="flex items-center gap-3">
                        {status === 'completed' ? (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="flex items-center gap-2 text-brand-green text-[9px] font-mono font-bold"
                            >
                                <CheckCircle2 size={12} />
                                <span>DOWNLOAD_COMPLETE</span>
                            </motion.div>
                        ) : (
                            <div className="flex items-center gap-2 text-brand-purple text-[9px] font-mono font-bold">
                                <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
                                <span>INITIALIZING_DATA_STREAM...</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Progress/Loading Bar (A alma da animação) */}
                <div className="w-full h-[2px] bg-white/5 relative overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${progress}%` }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className={cn(
                            "absolute h-full top-0 left-0",
                            status === 'completed' ? "bg-brand-green shadow-[0_0_10px_rgba(19,115,69,0.5)]" : "bg-brand-purple shadow-[0_0_10px_rgba(59,0,88,0.5)]"
                        )}
                    />
                </div>

                <p className="text-zinc-400 font-light leading-relaxed text-sm">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                    {tags.map(tag => (
                        <span key={tag} className="text-[9px] font-mono border border-white/5 text-zinc-600 px-2 py-1 rounded group-hover:border-brand-green/20 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};