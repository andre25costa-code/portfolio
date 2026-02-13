import React from 'react';
import { cn } from '../../utils/cn';

interface TypographyProps {
    variant: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
    children: React.ReactNode;
    className?: string;
    gradient?: boolean; // Adiciona o efeito gradiente no texto
}

export const Typography: React.FC<TypographyProps> = ({
    variant,
    children,
    className,
    gradient = false
}) => {
    const styles = {
        h1: "text-4xl md:text-6xl font-bold tracking-tight leading-tight",
        h2: "text-3xl md:text-4xl font-bold tracking-tight",
        h3: "text-xl md:text-2xl font-semibold tracking-normal",
        body: "text-base md:text-lg text-gray-300 leading-relaxed",
        caption: "text-sm text-gray-400 uppercase tracking-widest font-medium",
    };

    const Component = variant === 'body' || variant === 'caption' ? 'p' : variant;

    return (
        <Component
            className={cn(
                styles[variant],
                gradient && "bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-emerald-400",
                className
            )}
        >
            {children}
        </Component>
    );
};