import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Coffee, CupSoda, CakeSlice, Utensils, ChevronUp, ChevronRight, ChevronLeft, Volume2, VolumeX, Sparkles, IceCream, Instagram, Facebook, MessageCircle, MapPin } from "lucide-react";
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

  // Auto-hide splash after 5 seconds
  useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  // Handle auto-playing music when splash disappears
  useEffect(() => {
    if (!showSplash && audioRef.current && !isMusicPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          audioRef.current!.muted = false;
          setIsMusicPlaying(true);
        }).catch((e) => {
          console.log("Auto-play blocked by browser, waiting for user interaction:", e);
          const playOnInteract = () => {
             if (audioRef.current) {
                audioRef.current.muted = false;
                audioRef.current.play().then(() => setIsMusicPlaying(true)).catch(() => {});
             }
             document.removeEventListener('click', playOnInteract);
             document.removeEventListener('scroll', playOnInteract);
             document.removeEventListener('touchstart', playOnInteract);
          };
          document.addEventListener('click', playOnInteract);
          document.addEventListener('scroll', playOnInteract);
          document.addEventListener('touchstart', playOnInteract);
        });
      }
    }
  }, [showSplash]);

  // Initialize audio
  useEffect(() => {
    // Jazz/Lofi relaxing background music
    audioRef.current = new Audio("https://cdn.pixabay.com/audio/2022/11/22/audio_febc508520.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 1;
    
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
      audioRef.current.muted = false;
      audioRef.current.play()
        .then(() => setIsMusicPlaying(true))
        .catch(e => console.log("Auto-play blocked:", e));
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
              className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFFBF5] via-[#FFFBF5]/80 to-[#FFFBF5]/60 z-10" />

            {/* Glowing Backdrop for Logo */}
            <motion.div
              animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#5E2D14]/10 rounded-full blur-[80px] z-10 pointer-events-none"
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
              <div 
                className="relative mx-auto mb-4 flex items-center justify-center"
                style={{ perspective: "1000px" }}
              >
                <motion.img 
                  animate={{ 
                    y: [0, -15, 0],
                    rotateX: [5, 15, 5], 
                    rotateY: [-10, 10, -10]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  src="/logo-menu.png" 
                  alt="Gelato Lab Logo" 
                  className="h-40 sm:h-56 lg:h-64 w-auto object-contain mb-8 p-4 sm:p-6 rounded-[3rem] backdrop-blur-xl bg-gradient-to-tr from-white/20 to-white/5 border border-white/50 border-t-white/80 border-l-white/80 shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_4px_15px_rgba(255,255,255,0.5),inset_0_-4px_15px_rgba(0,0,0,0.3)] filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('logo-menu.png')) {
                      target.src = '/logo.png';
                      return;
                    }
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
            
            <div className="relative z-30 mb-8 flex flex-col items-center">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <motion.svg
                  className="absolute inset-0 w-full h-full text-[#5E2D14]/20"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                  />
                </motion.svg>
                <motion.svg
                  className="absolute inset-0 w-full h-full text-[#D4AF37]"
                  viewBox="0 0 100 100"
                  initial={{ strokeDasharray: "0 289" }}
                  animate={{ strokeDasharray: "289 289" }}
                  transition={{ duration: 5, ease: "linear" }}
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </motion.svg>
                <motion.div
                    animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 bg-white/50 backdrop-blur-sm p-4 rounded-full shadow-inner border border-white/40"
                >
                  <IceCream className="w-10 h-10 text-[#5E2D14]" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`min-h-screen relative bg-[#1A0B05] text-white font-['Cairo'] pb-24 ${showSplash ? "h-screen overflow-hidden" : ""}`}>
        {/* Decorative Background Texture */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#1A0B05]" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542840410-3092f99611a3?auto=format&fit=crop&q=80&w=2000')] opacity-5 bg-cover bg-center mix-blend-screen" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute top-[40%] left-0 w-[600px] h-[600px] bg-[#8B4B27]/10 rounded-full blur-[120px] -ml-40" />
          <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-[#5E2D14]/10 rounded-full blur-[150px] mb-[-400px]" />
        </div>
        
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
                <div className="absolute inset-0 bg-[#1A0B05]/30 mix-blend-multiply z-10 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#1A0B05]" />
                <div 
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center"
                  style={{ perspective: "1000px" }}
                >
                  <motion.img 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ 
                      y: [0, -10, 0], 
                      opacity: 1,
                      rotateX: [5, 12, 5],
                      rotateY: [-8, 8, -8]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    src="/logo-menu.png" 
                    alt="Gelato Lab" 
                    className="h-32 sm:h-44 w-auto mb-6 object-contain bg-gradient-to-tr from-white/20 to-white/5 p-4 sm:p-6 rounded-[2rem] backdrop-blur-xl border border-white/50 border-t-white/80 border-l-white/80 shadow-[0_25px_50px_rgba(0,0,0,0.6),inset_0_4px_15px_rgba(255,255,255,0.5),inset_0_-4px_15px_rgba(0,0,0,0.3)] filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]"
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

              <main className="max-w-4xl mx-auto p-4 sm:p-6 relative z-30 pb-20 -mt-8 sm:-mt-16">
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
                      className="relative h-56 sm:h-72 rounded-[2.5rem] overflow-hidden group w-full text-right shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 border-[3px] border-white/40"
                    >
                      <motion.div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${category.image}')` }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B05]/95 via-[#1A0B05]/40 to-transparent z-10 transition-opacity duration-500 opacity-90 group-hover:opacity-100" />
                      
                      <div className="absolute top-6 left-6 z-20">
                        <div className="w-12 h-12 rounded-full backdrop-blur-md bg-white/20 border border-white/30 text-white flex items-center justify-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                           <ChevronLeft size={24} className="transform transition-transform duration-300 group-hover:-translate-x-1" />
                        </div>
                      </div>

                      <div className="absolute bottom-0 right-0 left-0 p-6 sm:p-8 z-20">
                        <div className="transform transition-transform duration-500 group-hover:-translate-y-2 relative">
                          <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-[#D4AF37]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="text-[#5E2D14] mb-4 bg-gradient-to-br from-[#FFFBF5] to-[#f0e6d5] w-fit p-3.5 rounded-2xl shadow-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 border border-white">
                            {category.icon && iconMap[category.icon]}
                          </div>
                          <div className="inline-flex items-center gap-2">
                             <h2 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-l from-white to-white/70 drop-shadow-lg break-words">
                               {category.title}
                             </h2>
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </main>

              {/* Footer */}
              <footer className="mt-16 bg-[#1A0B05] rounded-t-[3rem] p-8 sm:p-12 pb-24 text-center shadow-[0_-10px_40px_rgba(0,0,0,0.1)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542840410-3092f99611a3?auto=format&fit=crop&q=80&w=800')] opacity-5 bg-center bg-cover mix-blend-overlay" />
                
                <div className="relative z-10 max-w-4xl mx-auto">
                  <p className="text-[#D4AF37] text-sm sm:text-base font-bold mb-2 tracking-wider">
                    تواصل معنا واعرف فروعنا
                  </p>
                  <h2 className="text-3xl sm:text-5xl font-black text-white mb-8 drop-shadow-md">
                    معلومات التواصل
                    <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
                  </h2>

                  <div className="flex justify-center mb-10">
                    <ChevronUp className="text-white/30" size={32} />
                  </div>

                  <h3 className="text-[#D4AF37] text-xl sm:text-2xl font-bold mb-6">
                    تابعنا على مواقع التواصل
                  </h3>

                  <div className="flex justify-center items-center gap-4 sm:gap-6 mb-4" dir="ltr">
                    <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-[#1A0B05] hover:scale-110 transition-all duration-300 flex items-center justify-center text-white backdrop-blur-sm border border-white/10">
                      <Instagram size={22} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-[#1A0B05] hover:scale-110 transition-all duration-300 flex items-center justify-center text-white backdrop-blur-sm border border-white/10">
                      <Facebook size={22} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-[#1A0B05] hover:scale-110 transition-all duration-300 flex items-center justify-center text-white backdrop-blur-sm border border-white/10">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    </a>
                    <a href="https://wa.me/970599000000" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-[#1A0B05] hover:scale-110 transition-all duration-300 flex items-center justify-center text-white backdrop-blur-sm border border-white/10">
                      <MessageCircle size={22} />
                    </a>
                  </div>
                  
                  <p className="text-white/50 text-sm mb-12">
                    أو تواصل عبر واتساب ويب
                  </p>

                  <h3 className="text-[#D4AF37] text-xl sm:text-2xl font-bold mb-6">
                    مواقع فروعنا
                  </h3>

                  <div className="flex justify-center mb-12">
                    <a href="#" className="bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-colors p-6 rounded-[2rem] flex items-center justify-between w-full max-w-sm group text-right">
                      <div className="flex-1 text-right ml-4">
                        <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">جيلاتو لاب</h4>
                        <p className="text-white/60 text-sm leading-relaxed">
                          دورا - استاد دورا الدولي - <br />
                          قرب دوار الأسرى
                        </p>
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#1A0B05] transition-colors shrink-0">
                        <MapPin size={28} />
                      </div>
                    </a>
                  </div>

                  <p className="text-white/30 mb-8 font-medium">نحن بانتظار زيارتكم</p>
                  
                  <div className="border-t border-white/10 pt-10 pb-2 flex flex-col items-center">
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">جيلاتو لاب - دورا</h4>
                    <p className="text-white/50 mb-10 text-sm">تجربة طعام لا تُنسى</p>
                    <p className="text-white/40 text-xs">
                      © 2026 جميع الحقوق محفوظة - جيلاتو لاب
                    </p>
                  </div>
                </div>
              </footer>
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
                <div className="absolute inset-0 bg-[#3A1A0A]/60 z-10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B05] via-[rgba(26,11,5,0.7)] to-transparent z-15" />
                
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center mt-12">
                  <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="text-[#D4AF37] mb-4 bg-white/10 p-5 rounded-3xl backdrop-blur-md border border-white/20 shadow-xl transform -rotate-3"
                  >
                    {selectedCategory.icon && iconMap[selectedCategory.icon]}
                  </motion.div>
                  <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="text-4xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] mb-2"
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
                      className="flex justify-between items-start p-5 md:p-6 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/40 shadow-lg hover:shadow-[0_8px_30px_rgb(212,175,55,0.15)] transition-all duration-300 group"
                    >
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2 gap-3">
                          <h3 className="text-lg sm:text-xl font-bold text-white transition-colors flex items-center gap-2 flex-wrap">
                            {item.name}
                            {item.isPopular && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-[#D4AF37]/20 text-[#D4AF37] font-medium border border-[#D4AF37]/30 whitespace-nowrap">
                                <Sparkles size={12} fill="currentColor" />
                                مميز
                              </span>
                            )}
                          </h3>
                          {item.price !== undefined && (
                            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[#D4AF37] font-bold w-fit shrink-0 border border-white/10 shadow-inner">
                              <span className="text-base sm:text-lg">{item.price}</span>
                              <span className="text-xs sm:text-sm font-medium text-white/70">₪</span>
                            </div>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-sm sm:text-base text-white/60 font-medium leading-relaxed">
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
      </div>
    </>
  );
}
