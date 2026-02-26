import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';
import { Division } from '../data/divisions';
import { useState, CSSProperties, useRef, MouseEvent } from 'react';

interface DivisionCardProps {
  division: Division;
  index: number;
  key?: string | number;
}

export default function DivisionCard({ division, index }: DivisionCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);

  // Magnetic / Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [5, -5]), { damping: 20, stiffness: 150 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-5, 5]), { damping: 20, stiffness: 150 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={cardRef}
      href={division.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.21, 0.45, 0.32, 0.9] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group block cursor-pointer interactive"
      style={{
        '--accent-color': division.accentColor,
      } as CSSProperties}
    >
      <div className="flex flex-col gap-5">
        {/* Cinematic Card Container */}
        <motion.div
          className="relative aspect-video overflow-hidden rounded-sm bg-[#141a2e] border border-white/5"
          style={{
            perspective: '1000px',
            rotateX,
            rotateY,
          }}
        >
          {/* Background Placeholder / Video Container */}
          <div className="absolute inset-0 z-0 bg-[#0d0d0d]">
            {/* Static Placeholder (Visible when not hovered) */}
            <img 
              src={division.thumbnailUrl || (division.gifUrl ? division.gifUrl.replace('.gif', '.jpg') : `https://picsum.photos/seed/${division.id}/1280/720`)}
              alt={division.name}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover transition-opacity duration-700 ${division.gifUrl && isHovered ? 'opacity-0' : 'opacity-100'}`}
            />
            
            {/* GIF Layer (Visible on hover) */}
            {division.gifUrl && (
              <img 
                key={isHovered ? 'active' : 'idle'}
                src={isHovered ? division.gifUrl : undefined}
                alt={`${division.name} animation`}
                referrerPolicy="no-referrer"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              />
            )}

            {/* Subtle Overlay for non-GIF cards to maintain depth - only on hover */}
            {!division.gifUrl && isHovered && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                className="absolute inset-0 transition-opacity duration-1000"
              >
                <div 
                  className="w-full h-full"
                  style={{
                    background: `radial-gradient(circle at center, ${division.accentColor}22 0%, transparent 80%)`
                  }}
                />
              </motion.div>
            )}
          </div>

          {/* Metallic Shimmer Effect */}
          <motion.div
            animate={isHovered ? { x: ['-100%', '200%'] } : { x: '-100%' }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
          />

          {/* Border Glow */}
          <div 
            className="absolute inset-0 z-30 border border-white/5 group-hover:border-white/20 transition-colors duration-700 pointer-events-none"
          />

          {/* Click Interaction Overlay */}
          <motion.div
            whileTap={{ scale: 0.98 }}
            className="absolute inset-0 z-40"
          />
        </motion.div>

        {/* Content Below Card */}
        <div className="flex flex-col items-start px-1">
          <motion.div
            animate={isHovered ? { x: 4 } : { x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-1.5"
          >
            <div className="flex items-baseline gap-4">
              <h3 className="font-display text-base md:text-lg text-[#e8ecf2] tracking-[0.2em] uppercase">
                {division.name}
              </h3>
              <span className="font-serif italic text-[10px] text-[#c0c5d0]/30 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-2 group-hover:translate-x-0">
                Enter Studio
              </span>
            </div>
            <p className="font-sans text-[10px] text-[#c0c5d0]/40 uppercase tracking-[0.3em]">
              {division.tagline}
            </p>
          </motion.div>

          {/* Subtle Accent Line */}
          <motion.div
            initial={{ width: '20px' }}
            animate={isHovered ? { width: '40px' } : { width: '20px' }}
            transition={{ duration: 0.6, ease: "circOut" }}
            className="h-[1px] mt-4"
            style={{ backgroundColor: division.accentColor, opacity: 0.3 }}
          />
        </div>
      </div>
    </motion.a>
  );
}
