import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Code2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

const navLinks = [
    { name: 'Sobre', href: '#Hero' },
    { name: 'Jornada', href: '#Journey' },
    { name: 'Projetos', href: '#Experience' },
    { name: 'Metodologia', href: '#Teaching' },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Efeito para detectar scroll e mudar a transparência da navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                    isScrolled
                        ? "bg-brand-dark/80 backdrop-blur-md border-white/10 py-4"
                        : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">

                    {/* Logo / Marca */}
                    <a href="#Hero" className="flex items-center gap-2 group">
                        <div className="p-2 bg-brand-green/20 rounded-lg group-hover:bg-brand-green/30 transition-colors">
                            <Code2 className="text-brand-green" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-white">
                            Andre_Costa<span className="text-brand-green">.Dev</span>
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all group-hover:w-full" />
                            </a>
                        ))}

                        <div className="h-6 w-px bg-white/10 mx-2" />

                        <div className="flex gap-4">
                            <a href="https://github.com/andre25costa-code" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/andré-costa-998575356/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>

                        <Button size="sm" variant="outline" onClick={() => window.location.href = '#contato'}>
                            Fale Comigo
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl pt-24 px-6 md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col gap-6 items-center text-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-medium text-white hover:text-brand-green"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="w-16 h-1 bg-white/10 rounded-full my-4" />
                            <Button className="w-full max-w-xs" onClick={() => setIsMobileMenuOpen(false)}>
                                Entrar em Contato
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};