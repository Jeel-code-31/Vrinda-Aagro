'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const sliderImages = [
  "/Slider/S1.png",
  "/Slider/S2.png",
  "/Slider/S3.png",
  "/Slider/S4.png",
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const values = ['Trust', 'Quality', 'Precision', 'Integrity', 'Excellence', 'Innovation'];

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Values animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === values.length - 1 ? 0 : prev + 1
      );
    }, 1200);
    return () => clearInterval(interval);
  }, [values.length]);

  const goToNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % sliderImages.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  // Touch support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    setTouchStart(0);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? -800 : 800,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir > 0 ? 800 : -800,
      opacity: 0,
    }),
  };

  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left Side: Content */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl md:text-8xl font-black text-red-900 mb-4">
                  WE WORK TO BUILD:
                </h1>

                {/* 🔥 FIXED VALUES SECTION */}
                <div className="flex flex-wrap mt-14 gap-x-6 gap-y-3">
                  {values.map((value, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <motion.span
                        key={value}
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0.3,
                          y: isActive ? -6 : 0,
                          scale: isActive ? 1.15 : 1,
                          backgroundPosition: isActive
                            ? ["0% 50%", "100% 50%", "0% 50%"]
                            : "0% 50%",
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                          backgroundPosition: isActive
                            ? {
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }
                            : {},
                        }}
                        className="font-black text-2xl md:text-3xl uppercase tracking-tighter bg-clip-text text-transparent"
                        style={{
                          backgroundImage: "linear-gradient(90deg, #facc15, #dc2626)",
                          backgroundSize: "200% auto",
                          WebkitBackgroundClip: "text",
                        }}
                      >
                        {value}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Right Side: Pop-out Slider */}
            <div className="w-full lg:w-1/2">
              <motion.div
                className="relative aspect-[5/5] rounded-3xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.6, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={sliderImages[current]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-contain"
                    alt="Vrinda Aagro Infrastructure"
                  />
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <motion.div
        className="h-1 bg-red-600 mt-5 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: "auto" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Sub-Section */}
      <section className="relative bg-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/BackGround.png"
            alt="Background texture"
            className="w-full h-full object-top object-center"
          />
        </div>

        <div className="relative z-10 mb-20 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">

            <h2 className="text-yellow-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug sm:leading-relaxed md:leading-relaxed tracking-tight max-w-[95vw] md:max-w-4xl lg:max-w-5xl mx-auto font-normal drop-shadow-md">
              ' Vrinda Aagro blends <span className="font-black">innovation with traditional</span>
              to craft high-quality food
              products through advanced automation and
              a passionate team—creating <span className="font-black">consistent culinary </span> experiences in every bite. '
            </h2>

          </div>
        </div>
      </section>
    </main>
  );
}