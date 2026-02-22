import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
            {/* Video Background with light overlay */}
            <div className="absolute inset-0 z-0 opacity-40">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover grayscale-[30%]"
                >
                    <source src="/assets/hero-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-white/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-4"
                >
                    <span className="text-secondary font-accent font-bold tracking-[0.4em] uppercase text-xs">A Journey At Vignan Institute</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-7xl md:text-9xl font-accent font-black tracking-tighter text-gray-900 mb-4"
                >
                    SOHEL'S <br className="md:hidden" /> STORY
                </motion.h1>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="h-[6px] w-24 bg-primary mx-auto mb-8 origin-center"
                ></motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="text-lg md:text-2xl font-light tracking-[0.2em] text-gray-500 uppercase"
                >
                    From Fresher to Second Year Clarity
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-1 h-10 border border-gray-200 rounded-full flex justify-center p-1 bg-white/50 backdrop-blur-sm">
                    <div className="w-1 h-3 bg-primary rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
