import React from 'react';
import { Typography } from '../components/ui/Typography';
import { JourneyCard } from '../components/ui/JourneyCard';
import { motion } from 'framer-motion';

export const Journey = () => {
    return (
        <section id="Journey" className="relative py-32 px-6 overflow-hidden bg-black">

            {/* Glow Roxo de fundo para ambiência */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 blur-[150px] pointer-events-none" />

            <div className="container mx-auto">
                <div className="max-w-4xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <Typography variant="caption" className="text-brand-purple mb-4 block font-mono tracking-[0.3em]">
                            [PATH]: ~/education/history
                        </Typography>
                        <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-10">
                            ARQUITETURA DE <br />
                            {/* O efeito colorido roxo -> verde restaurado */}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-purple-500 to-brand-green">
                                CONHECIMENTO.
                            </span>
                        </h2>
                        <div className="h-[2px] w-24 bg-gradient-to-r from-brand-purple to-brand-green" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Coluna da Esquerda: Graduação (Foco total) */}
                    <div className="lg:col-span-7">
                        <JourneyCard
                            source={['Universidade', 'UniAmérica/Descomplica']}
                            title="Bacharel em Sistemas de Informação"
                            description="Formação focada em governança de TI, arquitetura de sistemas escaláveis e gestão estratégica de dados. Atualmente absorvendo fundamentos acadêmicos que sustentam a prática técnica avançada."
                            status="ongoing"
                            progress={35} // Simulação do 2º período
                            tags={['SI', 'Theory', 'BSc', 'Engineering']}
                        />
                    </div>

                    {/* Coluna da Direita: Cursos Técnicos (Árvore de arquivos) */}
                    <div className="lg:col-span-5 space-y-8">
                        <JourneyCard
                            source={['Udemy', 'Cod3r', 'Fullstack']}
                            title="Desenvolvimento Web Completo"
                            description="Desenvolvimento ponta a ponta. Do design UI ao deploy, passando por bases de dados e lógica de servidor."
                            status="completed"
                            progress={100}
                            tags={['React', 'Node.js', 'PostgreSQL']}
                        />

                        <JourneyCard
                            source={['Udemy', 'Cod3r', 'Core']}
                            title="Expressões Regulares"
                            description="Aprofundamento em filtragem de dados e automação via Regex para processamentos de alta performance."
                            status="completed"
                            progress={100}
                            tags={['Regex', 'Automation', 'Parsing']}
                        />
                    </div>
                </div>

                {/* Manifesto Didático (Final da Seção) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 border-t border-white/5 pt-20 flex flex-col md:flex-row items-center justify-between gap-12"
                >
                    <div className="max-w-xl">
                        <h4 className="text-2xl font-bold text-white mb-4">Filosofia de Aprendizado</h4>
                        <p className="text-zinc-500 font-light leading-relaxed italic">
                            "Minha jornada é guiada pela união entre a teoria acadêmica e a urgência prática para se fixar o conhecimento. Não busco apenas aprender a tecnologia; busco aprender a ensiná-la."
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full border border-brand-green/30 flex items-center justify-center text-brand-green animate-bounce">
                            ↓
                        </div>
                        <span className="text-[10px] font-mono text-zinc-700 uppercase vertical-text">Case: Câmara Municipal</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};