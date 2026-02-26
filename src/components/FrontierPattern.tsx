import { motion } from 'motion/react';

export default function FrontierPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.05] z-0">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Topographic-like lines */}
        <path 
          d="M -100 200 Q 200 100 500 300 T 1200 100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1" 
          className="opacity-20"
        />
        <path 
          d="M -100 400 Q 300 200 600 500 T 1300 200" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1" 
          className="opacity-10"
        />
      </svg>
      <motion.div
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent"
      />
    </div>
  );
}
