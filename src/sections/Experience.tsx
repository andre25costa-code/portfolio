import { Typography } from '../components/ui/Typography';
import { ApiFlow } from '../components/ui/ApiFlow';
import { motion } from 'framer-motion';

export const Experience = () => {
    return (
        <section id="Experience" className="relative py-32 px-6 bg-black">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Typography variant="caption" className="text-brand-green mb-4 block">
                                Case: Câmara Municipal de Lagoa da Prata
                            </Typography>
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">
                                ENGENHARIA NO <br />
                                <span className="text-brand-green italic">LEGISLATIVO.</span>
                            </h2>

                            <div className="space-y-6 text-zinc-400 font-light text-lg leading-relaxed">
                                <p>
                                    Como parte do meu trabalho e focando na modernização operacional, desenvolvi sistemas consumindo a
                                    <span className="text-white font-medium"> API Rest do SAPL</span> para automatizar rotinas manuais exaustivas.
                                </p>
                                <p>
                                    O foco foi eliminar o erro humano e acelerar a entrega de dados à população, utilizando
                                    <span className="text-brand-green font-mono"> JavaScript</span> para garantir a integridade dos dados e
                                    <span className="text-brand-purple font-mono"> React</span> para interfaces de monitoramento.
                                </p>
                            </div>

                            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/5">
                                <div>
                                    <div className="text-3xl font-black text-white mb-1">100%</div>
                                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Automação de Dados</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-white mb-1">API REST</div>
                                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Protocolo de Integração</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="relative">
                        {/* O "Coração" Técnico da Seção */}
                        <ApiFlow />

                        {/* Background Light Leak */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-green/10 blur-[120px]" />
                    </div>
                </div>
            </div>
        </section>
    );
};