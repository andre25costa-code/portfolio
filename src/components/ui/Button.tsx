import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', icon, children, ...props }, ref) => {

        // Configurações de Estilo Base
        const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "bg-brand-green text-white hover:bg-brand-green/90 focus:ring-brand-green shadow-lg shadow-brand-green/20",
            secondary: "bg-brand-purple text-white hover:bg-brand-purple/90 focus:ring-brand-purple shadow-lg shadow-brand-purple/20",
            outline: "border border-brand-green/50 text-brand-green hover:bg-brand-green/10",
            ghost: "text-gray-400 hover:text-white hover:bg-white/5",
        };

        const sizes = {
            sm: "h-9 px-4 text-xs",
            md: "h-11 px-6 text-sm",
            lg: "h-14 px-8 text-base",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {icon && <span className="mr-2">{icon}</span>}
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";