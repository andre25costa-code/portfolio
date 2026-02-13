import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Cpu, LayoutDashboard } from 'lucide-react';

export const ApiFlow = () => {
    return (
        <div className="relative w-full py-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 px-10 glass-v2 rounded-3xl overflow-hidden">

            {/* Background Decorative */}
            <div className="absolute inset-0 bg-brand-green/5 opacity-20 pointer-events-none" />

            {/* Node 1: SAPL API */}
            <div className="flex flex-col items-center gap-4 z-10">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-500">
                    <Database size={32} />
                </div>
                <span className="text-[10px] font-mono text-zinc-400">SAPL_SOURCE</span>
            </div>

            {/* Line 1 */}
            <div className="h-12 md:h-px md:w-full max-w-[100px] bg-zinc-800 relative">
                <motion.div
                    animate={{ left: ["0%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-green rounded-full shadow-[0_0_10px_#137345]"
                />
            </div>

            {/* Node 2: Your Logic (The "Brain") */}
            <div className="flex flex-col items-center gap-4 z-10">
                <div className="w-20 h-20 rounded-full bg-brand-green/10 border border-brand-green/50 flex items-center justify-center text-brand-green animate-pulse">
                    <Cpu size={40} />
                </div>
                <span className="text-[10px] font-mono text-brand-green font-bold uppercase tracking-widest">JS_AUTOMATION</span>
            </div>

            {/* Line 2 */}
            <div className="h-12 md:h-px md:w-full max-w-[100px] bg-zinc-800 relative">
                <motion.div
                    animate={{ left: ["0%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-purple rounded-full shadow-[0_0_10px_#3b0058]"
                />
            </div>

            {/* Node 3: Result/UI */}
            <div className="flex flex-col items-center gap-4 z-10">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-500">
                    <LayoutDashboard size={32} />
                </div>
                <span className="text-[10px] font-mono text-zinc-400">EFFICIENCY_UI</span>
            </div>

        </div>
    );
};