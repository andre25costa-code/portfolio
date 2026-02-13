import React from 'react';
import { Typography } from '../components/ui/Typography';
import { MethodCard } from '../components/ui/MethodCard';
import { BookOpen, Users, Terminal, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const methods = [
    {
        icon: Terminal,
        title: "Prática como Norte",
        description: "Na Prepara Cursos, aprendi que as aulas devem ser focadas em projetos reais. O aluno não apenas lê o código, ele constrói a solução, fixando conceitos através da execução."
    },
    {
        icon: Users,
        title: "Mentoria Individualizada",
        description: "Cada aluno tem um ritmo. Na minha busca pelo aprendizado, adquiri a habilidade de traduzir conceitos complexos de hardware e software para diferentes níveis de compreensão e fazer analogias para facilitar o aprendizado."
    },
    {
        icon: BookOpen,
        title: "Curadoria de Stacks",
        description: "Busco aprender e ensinar tecnologias que o mercado exige. O foco é preparar o profissional para o primeiro dia de trabalho, não somente para a prova."
    }
];

export const Teaching = () => {
    return (
        <section id="Teaching" className="relative py-32 px-6 bg-[#000000]">

            {/* Background Decorativo - Roxo Profundo */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" />

            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Header da Seção */}
                    <div className="lg:col-span-4 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-12 h-[2px] bg-brand-purple mb-6" />
                            <Typography variant="caption" className="text-brand-purple tracking-[0.4em] font-bold">
                                PEDAGOGICAL CORE
                            </Typography>
                            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight mt-4">
                                VOCAÇÃO PARA <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-pink-500">FORMAR.</span>
                            </h2>
                            <p className="text-zinc-500 font-light text-lg mt-8 leading-relaxed">
                                Minha passagem pela <span className="text-white">Prepara Cursos Profissionalizantes</span> consolidou minha paixão pelo ensino.
                                Acredito que um bom professor de TI deve ser, acima de tudo, um mentor de carreiras.
                            </p>

                            <div className="flex items-center gap-4 mt-10 p-4 border border-brand-purple/20 rounded-xl bg-brand-purple/5">
                                <Award className="text-brand-purple" size={32} />
                                <div className="text-xs font-mono text-zinc-400">
                                    <span className="text-white block font-bold">Instrutor de Informática</span>
                                    Prepara Cursos Profissionalizantes
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Cards de Metodologia */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {methods.map((method, idx) => (
                            <MethodCard
                                key={idx}
                                index={idx}
                                icon={method.icon}
                                title={method.title}
                                description={method.description}
                            />
                        ))}

                        {/* Card de Fechamento (Destaque) */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="md:col-span-2 p-8 bg-brand-green/10 border border-brand-green/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 group"
                        >
                            <div className="space-y-2 text-center md:text-left">
                                <h4 className="text-xl font-bold text-brand-green uppercase tracking-widest">Tecnologias Modernas</h4>
                                <p className="text-zinc-400 font-light">Foco em React, JavaScript, TypeScript, Node.js e metodologias ágeis aplicadas ao ensino.</p>
                            </div>
                            <div className="h-px w-full md:w-20 bg-brand-green/30" />
                            <div className="text-3xl font-black text-white font-mono group-hover:text-brand-green transition-colors">2026_READY</div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};