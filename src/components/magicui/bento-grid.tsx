// src/components/magicui/bento-grid.tsx

import React, { ReactNode } from "react";
import { ArrowRight } from "lucide-react"; // CORRECTED IMPORT
import { motion, HTMLMotionProps } from "framer-motion";

import { cn } from "../../lib/utils";
import Button from "../UI/Button";

interface BentoGridProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends React.ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: BentoCardProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
    }}
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl",
      // Custom styling to match your app's theme
      "bg-card/80 border border-border transform-gpu backdrop-blur-sm",
      "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      className,
    )}
  >
    <div className="absolute inset-0 z-0">{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left transform-gpu text-foreground/70 transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-foreground">
        {name}
      </h3>
      <p className="max-w-lg text-muted-foreground">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <a href={href} className="pointer-events-auto">
        <Button variant="ghost" size="sm">
            {cta}
            <ArrowRight className="ms-2 h-4 w-4" /> {/* CORRECTED COMPONENT */}
        </Button>
      </a>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10" />
  </motion.div>
);

export { BentoCard, BentoGrid };