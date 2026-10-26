import { motion } from 'motion/react';
import React from 'react';

interface SignatureSerifProps {
  text: string;
  strokeWidth?: number;
  strokeColor?: string;
  textColor?: string;
  italic?: boolean;
  delay?: number;
  inView?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const SignatureSerif: React.FC<SignatureSerifProps> = ({
  text,
  strokeWidth = 10,
  strokeColor = '#EAFE79',
  textColor,
  italic = false,
  delay = 0,
  inView = false,
  className = '',
  style = {}
}) => {
  const tubularCurl = {
    hidden: { rotateX: -110, scaleY: 0.15, scaleX: 0.7, opacity: 0 },
    visible: {
      rotateX: [-110, -70, -20, 5, -2, 0],
      scaleY: [0.15, 0.4, 0.8, 1.04, 0.98, 1],
      scaleX: [0.7, 0.85, 0.95, 1.02, 1, 1],
      opacity: [0, 0.4, 0.85, 1, 1, 1],
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        times: [0, 0.2, 0.55, 0.75, 0.88, 1],
        delay: delay
      }
    }
  };

  return (
    <motion.span
      className={`relative inline-block font-serif ${italic ? 'italic' : ''} ${className}`}
      style={{
        transformPerspective: 600,
        transformOrigin: "top center",
        ...style
      }}
      variants={tubularCurl}
      initial="hidden"
      whileInView={inView ? "visible" : undefined}
      animate={!inView ? "visible" : undefined}
      viewport={inView ? { once: true } : undefined}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none select-none"
        style={{
          color: strokeColor,
          WebkitTextStrokeWidth: strokeWidth,
          WebkitTextStrokeColor: strokeColor,
          lineHeight: 'inherit',
          letterSpacing: 'inherit',
          fontSize: 'inherit',
        }}
      >
        {text}
      </span>
      <span
        className="relative z-10"
        style={{
          color: textColor || '#3A3A3A',
          lineHeight: 'inherit',
          letterSpacing: 'inherit',
          fontSize: 'inherit',
        }}
      >
        {text}
      </span>
    </motion.span>
  );
};
