"use client";

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative h-[95vh] flex items-center bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-24 w-full">
                <div className="md:ml-[10%] max-w-4xl">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="font-serif-en text-[10px] tracking-[0.5em] text-charcoal/40 uppercase mb-8"
                    >
                        AI Artist & Designer
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="text-6xl md:text-9xl font-serif-en text-charcoal leading-[1.1] mb-12"
                    >
                        Tsukisaki <br />
                        <span className="font-bold underline decoration-[1px] underline-offset-[12px] decoration-gray-200">Aoi</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="md:pl-32"
                    >
                        <p className="max-w-md text-charcoal/70 text-sm md:text-base leading-relaxed tracking-wider font-serif-jp font-extralight">
                            AIと人間の感性が交差する領域で、<br />
                            静寂と透明感を纏った新しい美のカタチを追求しています。<br />
                            緻密な計算と、偶然が生む揺らぎ。
                        </p>
                        <div className="mt-12 w-12 h-[1px] bg-charcoal/30" />
                    </motion.div>
                </div>
            </div>

            {/* Subtle background element */}
            <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-gray-50 rounded-full blur-[80px] -z-10" />
        </section>
    );
};

export default Hero;
