import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="relative z-10 py-12 px-6 border-t border-white/5 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <img 
            src="https://res.cloudinary.com/diduw1fmf/image/upload/v1772089691/sr_clear_fin0va.png" 
            alt="Silver Rush" 
            className="w-8 h-8 object-contain opacity-80"
            referrerPolicy="no-referrer"
          />
          <p className="font-sans text-[10px] text-[#c0c5d0]/40 uppercase tracking-[0.2em]">
            © 2026 Silver Rush Productions LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
