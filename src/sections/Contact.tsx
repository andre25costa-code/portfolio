import { motion } from 'framer-motion';
import { Typography } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import { Linkedin, Github, ArrowUpRight, Globe } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contato" className="relative py-40 px-6 bg-black overflow-hidden">

            {/* Background: Um último "Light Leak" para profundidade */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-purple/5 blur-[180px] pointer-events-none" />

            <div className="container mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <Typography variant="caption" className="text-zinc-700 tracking-[0.8em] mb-12 block font-mono">
                        END_OF_MANIFESTO
                    </Typography>

                    <h2 className="text-6xl md:text-[140px] font-black text-white tracking-tighter leading-[0.8] mb-16">
                        VAMOS <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-emerald-400 to-brand-purple animate-pulse">
                            CONSTRUIR?
                        </span>
                    </h2>

                    <div className="max-w-2xl mx-auto space-y-12">
                        <p className="text-zinc-500 font-light text-xl leading-relaxed">
                            Minha trajetória é movida pela precisão do código e pela paixão em compartilhar conhecimento.
                            Estou pronto para somar à sua equipe técnica e acadêmica.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Button
                                size="lg"
                                className="w-full md:w-auto px-12 h-20 text-lg bg-white text-black hover:bg-brand-green hover:text-white border-none rounded-full transition-all duration-500 font-bold"
                                onClick={() => window.location.href = 'https://wa.me/5537991196041'}
                            >
                                Iniciar Conversa
                            </Button>

                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/andré-costa-998575356/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-brand-purple hover:border-brand-purple transition-all duration-300">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://github.com/andre25costa-code" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-brand-green hover:border-brand-green transition-all duration-300">
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Minimalista */}
                <div className="mt-48 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2 text-zinc-800 font-mono text-[10px] tracking-widest uppercase">
                        <Globe size={12} />
                        <span>Lagoa da Prata, MG // Brazil</span>
                    </div>

                    <div className="text-zinc-800 font-mono text-[10px] tracking-widest uppercase">
                        Built with React_TS_Vite_Framer
                    </div>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group flex items-center gap-2 text-zinc-800 hover:text-brand-green transition-colors font-mono text-[10px] tracking-widest uppercase"
                    >
                        [ Back to system_start ]
                        <ArrowUpRight size={12} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};