import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ chapter, title, subtitle, description, images }) => {
    return (
        <section className="py-16 md:py-32 px-6 md:px-24 max-w-7xl mx-auto overflow-hidden bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-secondary font-accent font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">
                        {chapter}
                    </span>
                    <h2 className="text-4xl md:text-8xl font-accent font-black mb-6 md:mb-8 text-gray-900 leading-[1.1] md:leading-none tracking-tighter">
                        {title}
                    </h2>
                    <p className="text-lg md:text-2xl text-gray-400 mb-6 md:mb-10 font-light italic leading-relaxed">
                        "{subtitle}"
                    </p>
                    <div className="w-12 h-1 bg-primary mb-6 md:mb-8"></div>
                    <p className="text-gray-600 leading-relaxed text-base md:text-xl font-light">
                        {description}
                    </p>
                </motion.div>

                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100"
                    >
                        <img
                            src={images[0]}
                            alt={title}
                            className="w-full h-80 md:h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
                        />
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="absolute -bottom-10 -right-6 w-3/5 rounded-3xl overflow-hidden shadow-2xl border-8 border-white hidden lg:block"
                    >
                        <img src={images[1]} alt="Side moment" className="w-full h-64 object-cover" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Section;
