import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Coffee, CupSoda, CakeSlice, Utensils, ChevronUp, ChevronRight, ChevronLeft, Volume2, VolumeX, Sparkles } from "lucide-react";
import { menuData, MenuCategory } from "./data";

const iconMap: Record<string, React.ReactNode> = {
  Coffee: <Coffee size={20} />,
  CupSoda: <CupSoda size={20} />,
  CakeSlice: <CakeSlice size={20} />,
  Utensils: <Utensils size={20} />,
};

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio
  useEffect(() => {
    // Jazz/Lofi relaxing background music
    audioRef.current = new Audio("https://cdn.pixabay.com/audio/2022/11/22/audio_febc508520.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  const handleEnterMenu = () => {
    setShowSplash(false);
    if (audioRef.current) {
      audioRef.current.play().then(() => setIsMusicPlaying(true)).catch(e => console.log("Auto-play blocked:", e));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-center overflow-hidden px-4"
          >
            {/* Elegant Background Image with Ken Burns */}
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 15, ease: "linear" }}
              className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-[#111] z-10" />

            {/* Glowing Backdrop for Logo */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#D4AF37]/20 rounded-full blur-[80px] z-10 pointer-events-none"
            />
            
            {/* Floating Gold Particles */}
            <div className="absolute inset-0 z-20 pointer-events-none">
               {Array.from({ length: 15 }).map((_, i) => (
                 <motion.div
                    key={i}
                    className="absolute bg-[#D4AF37] rounded-full opacity-40 shadow-[0_0_10px_#D4AF37]"
                    style={{
                       width: Math.random() * 4 + 2 + 'px',
                       height: Math.random() * 4 + 2 + 'px',
                       top: Math.random() * 100 + '%',
                       left: Math.random() * 100 + '%',
                    }}
                    animate={{
                       y: [0, -100, 0],
                       opacity: [0, 0.8, 0],
                    }}
                    transition={{
                       duration: Math.random() * 4 + 4,
                       repeat: Infinity,
                       ease: "easeInOut",
                       delay: Math.random() * 2
                    }}
                 />
               ))}
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="relative z-30 mb-8"
            >
              <div className="relative w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                <Utensils size={64} className="text-[#D4AF37] relative z-10" />
                <motion.div 
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-[#D4AF37]/40 z-0"
                />
              </div>
              <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-[#D4AF37] font-['Cairo'] drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] mb-4">
                جوليا
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 font-light font-['Cairo'] mb-12 italic">
                حيث يلتقي المذاق بالأصالة...
              </p>
            </motion.div>
            
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.6)" }}
              transition={{ delay: 1, duration: 0.8 }}
              onClick={handleEnterMenu}
              className="relative z-30 px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA8B2C] text-black font-bold rounded-full text-xl shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                عرض المنيو
              </span>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`min-h-screen bg-[#111] text-gray-100 font-['Cairo'] pb-24 ${showSplash ? "h-screen overflow-hidden" : ""}`}>
        
        {/* Floating Music Toggle */}
        {!showSplash && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={toggleMusic}
            className="fixed top-4 left-4 z-50 p-3 rounded-full bg-[#222]/80 backdrop-blur border border-[#D4AF37]/30 text-[#D4AF37] shadow-lg hover:bg-[#333] transition-colors"
            title="تشغيل/إيقاف الموسيقى"
          >
            {isMusicPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
          </motion.button>
        )}

        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.div
              key="main-menu"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero Section */}
              <div className="relative h-[40vh] sm:h-[50vh] w-full overflow-hidden">
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute inset-0 z-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070')",
                  }}
                />
                <div className="absolute inset-0 bg-black/60 z-10 hover:bg-black/50 transition-colors duration-500" />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                  <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-2 text-[#D4AF37]">
                    مطعم وكافيه جوليا
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-300 max-w-md font-light">
                    اختر طلبك من القائمة
                  </p>
                </div>
              </div>

              {/* Categories Grid */}
              <main className="max-w-4xl mx-auto p-4 sm:p-6 mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {menuData.map((category, index) => (
                    <motion.button
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setSelectedCategory(category);
                      }}
                      className="relative h-48 sm:h-64 rounded-3xl overflow-hidden group w-full text-right"
                    >
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${category.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      
                      <div className="absolute bottom-6 right-6 left-6 flex items-end justify-between">
                        <div>
                          <div className="text-[#D4AF37] mb-2 bg-black/50 w-fit p-2 rounded-full backdrop-blur-sm">
                            {category.icon && iconMap[category.icon]}
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                            {category.title}
                          </h2>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-black flex items-center justify-center opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                           <ChevronLeft size={20} />
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </main>
            </motion.div>
          ) : (
            <motion.div
              key="category-details"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              {/* Category Header with Image */}
              {/* Back Button (Fixed & Animated) */}
              <motion.button
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
                transition={{ 
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 0.5, ease: "easeOut" },
                  opacity: { duration: 0.5 }
                }}
                onClick={() => setSelectedCategory(null)}
                className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-[#D4AF37]/90 text-black backdrop-blur-md px-5 py-2.5 rounded-full hover:bg-[#D4AF37] transition-colors shadow-[0_0_20px_rgba(212,175,55,0.4)] border border-[#AA8B2C] group"
              >
                <ChevronRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                <span className="font-bold">العودة للقائمة</span>
              </motion.button>

              <div className="relative h-[30vh] sm:h-[40vh] w-full overflow-hidden">
                 <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${selectedCategory.image}')` }}
                />
                <div className="absolute inset-0 bg-black/70 z-10" />
                
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center mt-8">
                  <div className="text-[#D4AF37] mb-4 bg-black/40 p-4 rounded-full backdrop-blur-sm">
                    {selectedCategory.icon && iconMap[selectedCategory.icon]}
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-2">
                    {selectedCategory.title}
                  </h1>
                </div>
              </div>

              {/* Items List */}
              <main className="max-w-3xl mx-auto p-4 sm:p-6 mt-6">
                <div className="grid gap-4">
                  {selectedCategory.items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex justify-between items-start p-4 md:p-5 rounded-2xl bg-[#1a1a1a] border border-[#222] hover:border-[#D4AF37]/40 transition-colors group"
                    >
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-100 group-hover:text-[#D4AF37] transition-colors flex items-center gap-2 flex-wrap">
                            {item.name}
                            {item.isPopular && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-[#D4AF37]/20 text-[#D4AF37] font-medium border border-[#D4AF37]/30 whitespace-nowrap">
                                <Sparkles size={12} fill="currentColor" className="text-[#D4AF37]" />
                                مميز
                              </span>
                            )}
                          </h3>
                          <div className="flex items-center gap-1.5 bg-[#222] px-4 py-1.5 rounded-full text-[#D4AF37] font-bold w-fit">
                            <span className="text-lg">{item.price}</span>
                            <span className="text-sm font-normal text-gray-400">₪</span>
                          </div>
                        </div>
                        {item.description && (
                          <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </main>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/30 hover:bg-[#AA8B2C] transition-colors"
            >
              <ChevronUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="mt-20 py-8 border-t border-[#222] text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} جوليا رستوران وكافيه. جميع الحقوق محفوظة.</p>
        </footer>
      </div>
    </>
  );
}
