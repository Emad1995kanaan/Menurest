import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Coffee, CupSoda, CakeSlice, Utensils, ChevronUp, ChevronRight, ChevronLeft, Volume2, VolumeX, Sparkles, IceCream } from "lucide-react";
import { menuData, MenuCategory } from "./data";

const iconMap: Record<string, React.ReactNode> = {
  Coffee: <Coffee size={20} />,
  CupSoda: <CupSoda size={20} />,
  CakeSlice: <CakeSlice size={20} />,
  Utensils: <Utensils size={20} />,
  IceCream: <IceCream size={20} />,
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
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FFFBF5] text-center overflow-hidden px-4"
          >
            {/* Elegant Background Image with Ken Burns */}
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 15, ease: "linear" }}
              className="absolute inset-0 z-0 bg-cover bg-center opacity-15"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=2070')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFFBF5] via-[#FFFBF5]/90 to-[#FFFBF5]/40 z-10" />

            {/* Glowing Backdrop for Logo */}
            <motion.div
              animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 rounded-full blur-[80px] z-10 pointer-events-none"
            />
            
            {/* Floating Gold Particles */}
            <div className="absolute inset-0 z-20 pointer-events-none">
               {Array.from({ length: 15 }).map((_, i) => (
                 <motion.div
                    key={i}
                    className="absolute bg-[#5E2D14] rounded-full opacity-20 shadow-[0_0_10px_#5E2D14]"
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
              <div className="relative mx-auto mb-4 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Gelato Lab Logo" 
                  className="w-48 sm:w-56 lg:w-64 h-auto drop-shadow-md object-contain mb-8"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && parent.nextElementSibling) {
                       parent.nextElementSibling.classList.remove('hidden');
                    }
                  }}
                />
              </div>
              <h1 className="hidden text-6xl sm:text-7xl font-bold tracking-tight text-[#5E2D14] font-['Cairo'] mb-4">
                Gelato Lab
              </h1>
              <p className="text-xl sm:text-2xl text-[#8B4B27] font-medium font-['Cairo'] mb-12 italic">
                أطعم جيلاتو وألذ حلويات...
              </p>
            </motion.div>
            
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(94, 45, 20, 0.2)" }}
              transition={{ delay: 1, duration: 0.8 }}
              onClick={handleEnterMenu}
              className="relative z-30 px-10 py-4 bg-[#5E2D14] hover:bg-[#4A2410] text-[#FFFBF5] font-bold rounded-full text-xl shadow-lg transition-all overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                عرض المنيو
              </span>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`min-h-screen bg-[#FFFBF5] text-[#4A2410] font-['Cairo'] pb-24 ${showSplash ? "h-screen overflow-hidden" : ""}`}>
        
        {/* Floating Music Toggle */}
        {!showSplash && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={toggleMusic}
            className="fixed top-4 left-4 z-50 p-3 rounded-full bg-white/80 backdrop-blur border border-[#EFE6DD] text-[#5E2D14] shadow-md hover:bg-white transition-colors"
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
                    backgroundImage: "url('https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=80&w=2070')",
                  }}
                />
                <div className="absolute inset-0 bg-[#5E2D14]/10 mix-blend-multiply z-10 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#FFFBF5]" />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                  <motion.img 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                    src="/logo-menu.png" 
                    alt="Gelato Lab" 
                    className="h-32 sm:h-44 w-auto mb-6 object-contain drop-shadow-2xl bg-white/20 p-4 sm:p-6 rounded-[2rem] backdrop-blur-md border border-white/20 shadow-xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src.includes('logo-menu.png')) {
                        target.src = '/logo.png';
                        return;
                      }
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const h1 = document.createElement('h1');
                        h1.className = "text-4xl sm:text-7xl font-bold tracking-tight mb-2 text-white drop-shadow-lg bg-white/20 p-4 rounded-3xl backdrop-blur-md border border-white/20";
                        h1.textContent = "Gelato Lab";
                        parent.insertBefore(h1, target.nextSibling);
                      }
                    }}
                  />
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg sm:text-2xl text-[#FFFBF5] font-bold drop-shadow-md bg-white/20 px-6 py-2 rounded-full backdrop-blur-md border border-white/20"
                  >
                    اختر طلبك من القائمة
                  </motion.p>
                </div>
              </div>

              {/* Categories Grid */}
              <main className="max-w-4xl mx-auto p-4 sm:p-6 mt-8 relative z-30 pb-20 -mt-16 sm:-mt-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {menuData.map((category, index) => (
                    <motion.button
                      key={category.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setSelectedCategory(category);
                      }}
                      className="relative h-48 sm:h-64 rounded-[2rem] overflow-hidden group w-full text-right shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#EFE6DD]"
                    >
                      <motion.div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${category.image}')` }}
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2A1207]/90 via-[#2A1207]/30 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80" />
                      
                      <div className="absolute bottom-6 right-6 left-6 flex items-end justify-between z-20">
                        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                          <div className="text-[#5E2D14] mb-3 bg-[#FFFBF5] w-fit p-3 rounded-2xl shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            {category.icon && iconMap[category.icon]}
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-bold text-white transition-colors drop-shadow-lg">
                            {category.title}
                          </h2>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-[#FFFBF5] text-[#5E2D14] flex items-center justify-center opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 shadow-xl mb-1">
                           <ChevronLeft size={24} className="transform transition-transform duration-300 group-hover:-translate-x-1" />
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
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                onClick={() => setSelectedCategory(null)}
                className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-[#FFFBF5]/95 text-[#5E2D14] backdrop-blur-md px-6 py-3 rounded-full hover:bg-white transition-colors shadow-lg border border-[#EFE6DD] group"
              >
                <ChevronRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                <span className="font-bold text-lg">العودة للقائمة</span>
              </motion.button>

              <div className="relative h-[35vh] sm:h-[45vh] w-full overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${selectedCategory.image}')` }}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-[#3A1A0A]/40 z-10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFFBF5] via-transparent to-transparent z-15" />
                
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center mt-12">
                  <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="text-[#5E2D14] mb-4 bg-[#FFFBF5]/95 p-5 rounded-3xl backdrop-blur-sm shadow-xl transform rotate-3"
                  >
                    {selectedCategory.icon && iconMap[selectedCategory.icon]}
                  </motion.div>
                  <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="text-4xl sm:text-6xl font-bold tracking-tight text-[#5E2D14] drop-shadow-md mb-2"
                  >
                    {selectedCategory.title}
                  </motion.h1>
                </div>
              </div>

              {/* Items List */}
              <main className="max-w-3xl mx-auto px-4 -mt-10 sm:-mt-16 pb-20 relative z-30">
                <div className="grid gap-4">
                  {selectedCategory.items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                      whileHover={{ y: -5, scale: 1.01 }}
                      className="flex justify-between items-start p-5 md:p-6 rounded-[2rem] bg-white border border-[#EFE6DD] hover:border-[#8B4B27]/40 shadow-sm hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2 gap-3">
                          <h3 className="text-lg sm:text-xl font-bold text-[#5E2D14] transition-colors flex items-center gap-2 flex-wrap">
                            {item.name}
                            {item.isPopular && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-[#5E2D14]/10 text-[#5E2D14] font-medium border border-[#5E2D14]/20 whitespace-nowrap">
                                <Sparkles size={12} fill="currentColor" />
                                مميز
                              </span>
                            )}
                          </h3>
                          {item.price !== undefined && (
                            <div className="flex items-center gap-1.5 bg-[#FFFBF5] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[#5E2D14] font-bold w-fit shrink-0 border border-[#EFE6DD]">
                              <span className="text-base sm:text-lg">{item.price}</span>
                              <span className="text-xs sm:text-sm font-medium text-[#8B4B27]">₪</span>
                            </div>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-sm sm:text-base text-[#8B4B27] font-medium leading-relaxed opacity-80">
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
              className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#5E2D14] text-[#FFFBF5] shadow-lg shadow-[#5E2D14]/20 hover:bg-[#8B4B27] transition-colors"
            >
              <ChevronUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="mt-20 py-8 border-t border-[#EFE6DD] text-center text-[#8B4B27]/70 text-sm font-medium">
          <p>© {new Date().getFullYear()} Gelato Lab. جميع الحقوق محفوظة.</p>
        </footer>
      </div>
    </>
  );
}
