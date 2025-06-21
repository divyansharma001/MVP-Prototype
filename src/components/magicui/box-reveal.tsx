// src/components/magicui/box-reveal.tsx

import { motion, useInView } from "framer-motion";
import { cn } from "../../lib/utils"; // Adjusted import
import { ReactNode, useRef } from "react";

interface BoxRevealProps {
  children: ReactNode;
  className?: string;
  boxColor?: string;
  duration?: number;
}

export const BoxReveal = ({
  children,
  className,
  boxColor,
  duration = 0.5,
}: BoxRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration, delay: 0.25 }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          backgroundColor: boxColor || "#6366f1", // Using your project's indigo
        }}
      />
    </div>
  );
};