import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Growth = ({ chapter, title, subtitle, description, images }) => {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0.6, 0.9], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0.6, 0.9], [0, 100]);

    return (
        <section className="py-24 max-w-7xl mx-auto px-6 overflow-hidden bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-10"
                    >
                        <span className="text-secondary font-accent font-bold uppercase tracking-[0.4em] text-xs block">
                            {chapter}
                        </span>
                        <h2 className="text-6xl md:text-8xl font-accent font-black text-gray-900 leading-none tracking-tighter">
                            {title}
                        </h2>
                        <div className="w-24 h-2 bg-primary/20"></div>
                        <p className="text-2xl text-gray-400 font-light italic">
                            "{subtitle}"
                        </p>
                        <p className="text-gray-600 text-xl font-light leading-relaxed">
                            {description}
                        </p>
                        <div className="pt-6 flex flex-wrap gap-4">
                            {['Java', 'Consistency', 'Discipline'].map(tag => (
                                <span key={tag} className="bg-gray-50 border border-gray-100 px-8 py-3 rounded-full text-gray-500 text-sm font-bold uppercase tracking-widest shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-2 gap-10 relative">
                    <motion.div
                        style={{ y: y1 }}
                        className="mt-20 rounded-[4rem] overflow-hidden shadow-2xl border border-gray-100"
                    >
                        <img src={images[0]} alt="Growth Phase" className="w-full h-[600px] object-cover" />
                    </motion.div>
                    <motion.div
                        style={{ y: y2 }}
                        className="rounded-[4rem] overflow-hidden shadow-2xl border border-gray-100"
                    >
                        <img src="/assets/new_event2.jpg" alt="Project Building" className="w-full h-[600px] object-cover" />
                    </motion.div>

                    {/* Decorative subtle element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[100px] rounded-full z-[-1]"></div>
                </div>
            </div>
        </section>
    );
};

export default Growth;
