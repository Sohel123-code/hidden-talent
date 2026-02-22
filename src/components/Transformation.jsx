import React from 'react';
import { motion } from 'framer-motion';

const Transformation = ({ chapter, title, subtitle, description, images }) => {
    return (
        <section className="py-40 relative bg-gray-50/80 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <span className="text-secondary font-accent font-bold uppercase tracking-[0.4em] text-xs mb-4 block">
                        {chapter}
                    </span>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-7xl md:text-9xl font-accent font-black text-gray-900 mb-8 tracking-tighter"
                    >
                        {title}
                    </motion.h2>
                    <p className="text-2xl text-secondary font-light tracking-[0.3em] uppercase">
                        {subtitle}
                    </p>
                </div>

                <div className="relative group max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="rounded-[4rem] overflow-hidden shadow-2xl shadow-gray-300 border-[12px] border-white"
                    >
                        <img src={images[0]} alt="Current Status" className="w-full h-[750px] object-cover grayscale-[10%]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white/90 backdrop-blur-2xl p-16 md:p-20 rounded-[4rem] border border-gray-100 text-center shadow-[0_40px_100px_rgba(0,0,0,0.08)]"
                    >
                        <p className="text-4xl md:text-5xl text-gray-900 font-accent font-black italic mb-10 leading-[1.1] tracking-tight">
                            “From confusion to clarity, <br /> I found my path.”
                        </p>
                        <div className="text-gray-500 text-xl mb-12 font-light max-w-md mx-auto">
                            {description}
                        </div>
                        <motion.a
                            href="https://portfolio-3-sage-ten.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(0, 210, 255, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block bg-gray-900 text-white px-16 py-6 rounded-full font-bold text-xl transition-all tracking-wider uppercase"
                        >
                            Let's Connect
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            <div className="h-64"></div>
        </section>
    );
};

export default Transformation;
