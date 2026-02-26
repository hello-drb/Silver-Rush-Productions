import { motion, useScroll, useTransform, useSpring, MotionValue } from 'motion/react';
import FrontierPattern from './FrontierPattern';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const springX = useSpring(mousePos.x, { damping: 30, stiffness: 100 }) as any;
  const springY = useSpring(mousePos.y, { damping: 30, stiffness: 100 }) as any;

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <motion.div 
        style={{ x: springX, y: springY, scale: 1.05 }}
        className="absolute inset-0 z-0"
      >
        <FrontierPattern />
      </motion.div>
      
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-20">
        {/* Logo Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          style={{ 
            x: useTransform(springX, (v: number) => v * -1.5), 
            y: useTransform(springY, (v: number) => v * -1.5) 
          }}
          transition={{ 
            duration: 2.5, 
            ease: [0.16, 1, 0.3, 1],
            delay: 0.5 
          }}
          className="relative mb-8 md:mb-12"
        >
          <div className="w-40 h-40 md:w-64 md:h-64 flex items-center justify-center">
            <div className="relative w-full h-full">
              <motion.img
                src="https://res.cloudinary.com/diduw1fmf/image/upload/v1772089691/sr_clear_fin0va.png"
                alt="Silver Rush Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/5 to-transparent blur-3xl pointer-events-none"
              />
            </div>
          </div>
        </motion.div>

        {/* Title Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ 
            x: useTransform(springX, (v: number) => v * -0.5), 
            y: useTransform(springY, (v: number) => v * -0.5) 
          }}
          transition={{ duration: 2, delay: 1.5 }}
          className="text-center px-4"
        >
          <motion.h1
            initial={{ letterSpacing: '0.2em', opacity: 0 }}
            animate={{ letterSpacing: '0.5em', opacity: 1 }}
            transition={{ duration: 4, ease: "easeOut", delay: 1.5 }}
            className="font-display text-xl sm:text-2xl md:text-4xl text-[#e8ecf2] mb-4 md:mb-6"
          >
            SILVER RUSH PRODUCTIONS
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 3 }}
            className="flex flex-col items-center gap-2 md:gap-3"
          >
            <p className="font-sans text-[10px] md:text-sm text-[#c0c5d0]/80 uppercase tracking-[0.3em] md:tracking-[0.4em]">
              Drew Bordeaux — Creative Director & Founder
            </p>
            <div className="h-[1px] w-8 md:w-12 bg-amber-500/30 my-1 md:my-2" />
            <p className="font-serif italic text-xs md:text-sm text-[#c0c5d0]/50 tracking-widest px-2">
              Visual Branding // Cinematic Storytelling // Frontier Tech
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Now in flex flow to prevent overlap */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 2 }}
        className="relative z-10 pb-8 md:pb-12 flex flex-col items-center gap-2 md:gap-4 pointer-events-none"
      >
        <span className="font-sans text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-[#c0c5d0]/20">Explore Ventures</span>
        <div className="w-[1px] h-8 md:h-16 bg-gradient-to-b from-amber-500/20 to-transparent" />
      </motion.div>
    </section>
  );
}
