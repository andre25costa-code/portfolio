import React from 'react';
import { Navbar } from './Navbar';
import { Typography } from '../ui/Typography';
// Footer será adicionado em breve, por enquanto um placeholder simples
const Footer = () => (
    <footer className="border-t border-white/10 bg-black/50 py-12 text-center text-gray-500 text-sm mt-20">

    </footer>
);

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#000000] text-zinc-100 flex flex-col font-sans overflow-x-hidden selection:bg-brand-green selection:text-black">
            <Navbar />

            {/* Background: Escuro Absoluto com Ruído */}
            <div className="fixed inset-0 noise-bg z-0 pointer-events-none" />

            <main className="flex-grow relative z-10">
                {children}
            </main>

            <footer className="py-20 text-center opacity-20 hover:opacity-100 transition-opacity duration-1000">
                <Typography variant="caption" className="text-[10px]">
                    <p>© 2026 - Desenvolvido com React, Tailwind e Paixão por Ensinar.</p>
                </Typography>
            </footer>
        </div>
    );
};