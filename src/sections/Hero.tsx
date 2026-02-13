import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Typography } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import avatarImg from '../assets/avatar.png';

export const Hero = () => {
    const { scrollY } = useScroll();
    const textY = useTransform(scrollY, [0, 500], [0, -30]);

    const fullText = "Desenvolvedor autodidata, arquiteto de soluções na Câmara Municipal e mentor de talentos. Construindo o futuro da web com o rigor de quem entende o bit e o pixel.";
    const [displayedText, setDisplayedText] = useState("");
    const [isCursorVisible, setIsCursorVisible] = useState(true);

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setDisplayedText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 25);

        const cursorInterval = setInterval(() => {
            setIsCursorVisible(prev => !prev);
        }, 500);

        return () => {
            clearInterval(typingInterval);
            clearInterval(cursorInterval);
        };
    }, []);

    return (
        <section id="Hero" className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden bg-black px-6 pt-[115px] md:pt-[130px]">

            {/* === Z-LAYER 0: AURA ROXA DEDICADA (Correção do Roxo Inexistente) === */}
            {/* Um "spotlight" roxo forte posicionado atrás da área do avatar */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[20%] right-[5%] w-[600px] h-[600px] bg-brand-purple rounded-full blur-[250px] opacity-50 mix-blend-screen animate-pulse-slow" />
                {/* Um toque de verde mais abaixo para contraste */}
                <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-brand-green rounded-full blur-[200px] opacity-30 mix-blend-screen" />
            </div>


            {/* === Z-LAYER 1: AVATAR ESTÁVEL (Protocolo Anti-Pique-Duro) === */}
            <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-end">
                {/* Container com dimensões fixas baseadas na viewport. Não depende do carregamento da imagem. */}
                <div className="relative w-[55vw] h-[75vh] max-w-[900px] max-h-[800px] mr-[-5%] mt-10">

                    {/* A SOLUÇÃO: Usar background-image em vez de tag <img> */}
                    <div
                        className="w-full h-full bg-center bg-cover mask-blob transition-all duration-1000"
                        style={{
                            // A imagem é carregada aqui, sem afetar o layout da div
                            backgroundImage: `url(${avatarImg})`,
                            // Máscara dupla para forma disforme + bordas esfumaçadas
                            maskImage: 'radial-gradient(circle at center, black 35%, transparent 80%)',
                            WebkitMaskImage: 'radial-gradient(circle at center, black 35%, transparent 80%)',
                            // Filtros Cyberpunk
                            filter: 'grayscale(0.8) contrast(1.3) brightness(0.7)',
                        }}
                    >
                        {/* Ruído interno */}
                        <div className="absolute inset-0 noise-bg opacity-40 mix-blend-overlay" />
                    </div>
                </div>
            </div>


            {/* === Z-LAYER 2: FRONT CONTENT (Mantido) === */}
            <motion.div
                style={{ y: textY }}
                className="container mx-auto relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
                <div className="lg:col-span-8 space-y-10">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="h-[1px] w-12 bg-brand-green/50" />
                            <Typography variant="caption" className="text-brand-green font-bold tracking-[0.5em] text-[10px]">
                                TECHNICAL ARCHITECT & MENTOR
                            </Typography>
                        </div>

                        <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-8">
                            DA <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400 text-glow">LÓGICA</span> <br />
                            AO LEGADO.
                        </h1>

                        {/* Terminal CMD Box */}
                        <div className="max-w-xl glass-v2 border-l-2 border-brand-green rounded-r-xl overflow-hidden transition-all duration-500 shadow-[0_0_40px_-10px_rgba(19,115,69,0.3)]">
                            <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                <div className="w-2 h-2 rounded-full bg-brand-green/50" />
                                <span className="text-[10px] font-mono text-zinc-500 ml-2 uppercase tracking-widest">root@costa: ~/manifesto</span>
                            </div>

                            <div className="p-6 min-h-[140px] md:min-h-[120px]">
                                <p className="text-lg md:text-xl text-zinc-300 font-mono leading-relaxed">
                                    <span className="text-brand-green mr-2">{">"}</span>
                                    {displayedText}
                                    <span className={`${isCursorVisible ? 'opacity-100' : 'opacity-0'} inline-block w-2 h-5 bg-brand-green ml-1 align-middle`} />
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="flex flex-wrap gap-8"
                    >
                        <Button size="lg" className="bg-white text-black hover:bg-brand-green hover:text-white border-none px-10 tracking-tighter font-bold uppercase transition-all duration-500"
                            onClick={() => window.location.href = '#Experience'}
                        >
                            Ver Projetos
                        </Button>
                        <button className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-colors tracking-widest uppercase text-xs font-bold"
                            onClick={() => window.location.href = '#Journey'}
                        >
                            <span className="h-[1px] w-8 bg-zinc-800 group-hover:bg-brand-green transition-all" />
                            Minha Jornada
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Decorative Lines & Binary */}
            <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-brand-green/20 to-transparent z-20" />
            <div className="absolute right-10 bottom-10 flex flex-col items-end gap-1 opacity-40 font-mono text-[9px] text-brand-purple tracking-tighter z-20">
                <span>01001100 01000001 01000111</span>
                <span>LAGOA_DA_PRATA_MG // SYSTEM_READY</span>
            </div>
        </section>
    );
};