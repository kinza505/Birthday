import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { Cake, Sparkles, GraduationCap, MailOpen } from 'lucide-react';

// Image path
import sirImage from "../assets/sirnadeem.png";

const BirthdayCard = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setShowConfetti(true);
  };

  return (
    // overflow-x-hidden lagaya hai taake side scroll na aaye
    <div className="min-h-screen bg-[#f1f5f9] flex items-center justify-center p-4 md:p-6 font-sans overflow-x-hidden w-full">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={150}
          gravity={0.12}
          colors={['#1D2334', '#D4AF37', '#94a3b8', '#ffffff', '#cbd5e1']}
        />
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        // Card width responsive: 100% on mobile, max-w-lg on laptop
        className="w-full max-w-[95%] sm:max-w-md md:max-w-lg bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_20px_60px_rgba(29,35,52,0.25)] overflow-hidden border border-slate-200"
      >
        {/* Navy Blue Gradient Header */}
        <div className="bg-gradient-to-br from-[#1D2334] via-[#2d3748] to-[#1D2334] p-6 md:p-10 text-center relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-[-30px] left-[-30px] w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-full blur-2xl"></div>

          {/* Image Section - Responsive size */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative inline-block mb-4"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#D4AF37] p-1 bg-white overflow-hidden mx-auto shadow-2xl relative z-10">
              <img
                src={sirImage}
                alt="Sir Nadeem"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Icon Tag */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-white p-1.5 md:p-2 rounded-full shadow-lg border-2 border-[#1D2334] z-20 text-[#1D2334]"
            >
              <Cake size={20} className="md:w-6 md:h-6" strokeWidth={2.5} />
            </motion.div>
          </motion.div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
            Happy Birthday <br />
            <span className="text-[#D4AF37]">Sir Nadeem!</span>
          </h1>

          <div className="h-1 w-16 md:w-24 bg-[#D4AF37] mx-auto mt-4 rounded-full opacity-60"></div>
          <p className="text-slate-300 mt-3 font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase text-[10px] md:text-xs flex items-center justify-center gap-2">
            <GraduationCap size={14} className="text-[#D4AF37]" /> Mentor • Leader • Inspiration
          </p>
        </div>

        {/* Card Body */}
        <div className="p-6 md:p-10 text-center bg-white">
          {!isOpen ? (
            <div className="space-y-6">
              <p className="text-slate-500 font-medium italic text-sm md:text-base">Click to unveil a special tribute</p>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#2d3748" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpen}
                className="bg-[#1D2334] text-white border-b-4 border-[#D4AF37] px-8 md:px-12 py-3 md:py-4 rounded-xl font-black text-base md:text-lg shadow-xl transition-all flex items-center justify-center mx-auto gap-3 uppercase tracking-wider"
              >
                <MailOpen size={18} /> Open Letter
              </motion.button>
            </div>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6 md:space-y-8"
              >
                <div className="text-justify space-y-5"> <p className="text-2xl font-bold text-[#1D2334] border-l-4 border-[#D4AF37] pl-4 text-left"> Respected Sir Nadeem, </p> <p className="text-slate-700 leading-relaxed text-lg font-medium"> Wishing you a very <span className="text-[#1D2334] font-bold"> Happy Birthday!</span> Thank you for your kindness, guidance, and continuous support. Working under your leadership is truly inspiring, and we sincerely appreciate the positive energy and encouragement you bring to the workplace every day. </p> <p className="text-slate-700 leading-relaxed text-lg font-medium italic border-b border-slate-100"> “A good leader inspires people to grow with confidence and positivity.” </p> <p className="text-slate-700 leading-relaxed text-lg font-medium"> May you always be blessed with happiness, success, good health, and many more achievements in life. </p> </div>

                {/* Signature Section */}
                <div className="pt-6 md:pt-8 border-t border-slate-100">
                  <p className="text-slate-400 text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-black">With Deep Respect,</p>
                  <motion.p
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-3xl font-serif font-black text-[#1D2334] mt-2 italic"
                  >
                    Kinza Bilal
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Footer Icons - Hidden on very small screens or made smaller */}
        <div className="bg-slate-50 p-4 md:p-5 border-t border-slate-100 flex justify-center gap-4 md:gap-8 text-[#1D2334]/40">
          <motion.div animate={{ rotate: [0, 20, -20, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <Sparkles size={20} className="md:w-6 md:h-6" />
          </motion.div>
          <span className="opacity-30">✦</span>
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <Cake size={20} className="md:w-6 md:h-6" />
          </motion.div>
          <span className="opacity-30">✦</span>
          <motion.div animate={{ rotate: [0, -20, 20, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <GraduationCap size={20} className="md:w-6 md:h-6" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BirthdayCard;