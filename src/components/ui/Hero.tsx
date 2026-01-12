"use client";

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-black" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/20 rounded-full blur-[100px] animate-pulse" />
            </div>

            <div className="relative z-10 text-center px-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-display tracking-[0.3em] text-neon-blue mb-4"
                >
                    AI ARTIST
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-display font-bold mb-6"
                >
                    TSUKISAKI <span className="text-gradient">AOI</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed"
                >
                    AIと創造性の融合。緻密なディテールと透明感が織りなす、
                    まだ見ぬ世界の断片をここへ。
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;
