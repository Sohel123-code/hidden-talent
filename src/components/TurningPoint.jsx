import React from 'react';
import { motion } from 'framer-motion';

const TurningPoint = ({ chapter, title, subtitle, description, images }) => {
    return (
        <section className="py-16 md:py-32 bg-gray-50/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-12 md:mb-24">
                    <span className="text-secondary font-accent font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4">
                        {chapter}
                    </span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-9xl font-accent font-black mb-6 md:mb-8 text-gray-900 tracking-tighter leading-[1.1]"
                    >
                        {title}
                    </motion.h2>
                    <p className="max-w-3xl text-gray-400 text-lg md:text-2xl font-light italic leading-relaxed">
                        "{subtitle}"
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[400px] md:h-[700px] rounded-3xl md:rounded-[4rem] overflow-hidden shadow-2xl shadow-gray-300 border border-white"
                        >
                            <img src={images[0]} alt="Skill Growth" className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                            <div className="absolute bottom-8 md:bottom-16 left-8 md:left-16 right-8 md:right-16">
                                <p className="text-white text-2xl md:text-4xl font-accent font-black mb-2 md:mb-4">Mastering the Foundation</p>
                                <p className="text-white/90 font-light text-base md:text-xl">The shift from textbooks to real-world skill building.</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col gap-8 md:gap-12 pt-4 md:pt-12">
                        <div className="bg-white p-8 md:p-16 rounded-3xl md:rounded-[3rem] shadow-xl shadow-gray-100 border border-gray-100">
                            <h3 className="text-2xl md:text-3xl font-accent font-black mb-6 md:mb-8 text-gray-900 tracking-tight">Focus & Growth</h3>
                            <ul className="space-y-6 md:space-y-8">
                                <li className="flex items-start gap-4 md:gap-6">
                                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary mt-2.5 md:mt-3 flex-shrink-0"></div>
                                    <p className="text-gray-500 text-base md:text-xl leading-relaxed">
                                        Explored AI-related ideas and real-world tools.
                                    </p>
                                </li>
                                <li className="flex items-start gap-4 md:gap-6">
                                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary mt-2.5 md:mt-3 flex-shrink-0"></div>
                                    <p className="text-gray-500 text-base md:text-xl leading-relaxed">
                                        Understanding programming logic beyond exams.
                                    </p>
                                </li>
                                <li className="flex items-start gap-4 md:gap-6">
                                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary mt-2.5 md:mt-3 flex-shrink-0"></div>
                                    <p className="text-gray-500 text-base md:text-xl leading-relaxed">
                                        Building the base for advanced engineering.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="text-gray-600 text-base md:text-xl font-light leading-relaxed pl-4 border-l-4 border-primary/20">
                            {description}
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="rounded-3xl overflow-hidden shadow-2xl border-4 md:border-8 border-white"
                        >
                            <img src="/assets/new_event1.jpg" alt="Learning phase" className="w-full h-48 md:h-64 object-cover" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default TurningPoint;
