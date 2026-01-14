"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-32">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <div className="flex flex-col md:flex-row gap-20 mb-32 items-center md:items-start">
                    <div className="w-full md:w-5/12 aspect-[3/4] relative overflow-hidden bg-gray-50 md:mt-24 group cursor-crosshair">
                        <Image
                            src="/images/profile.jpg"
                            alt="Profile"
                            fill
                            priority
                            className="object-cover"
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                            className="absolute inset-0 z-10"
                        >
                            <Image
                                src="/images/profile_hover.jpg"
                                alt="Profile Hover"
                                fill
                                priority
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                    <div className="w-full md:w-7/12 space-y-12">
                        <h1 className="font-serif-en text-[10px] tracking-[0.5em] text-charcoal/40 uppercase">Profile</h1>
                        <div className="space-y-4">
                            <h2 className="font-serif-jp text-4xl text-charcoal font-extralight tracking-widest">月咲 葵</h2>
                            <p className="font-serif-en text-sm tracking-[0.2em] text-charcoal/30 uppercase">Tsukisaki Aoi</p>
                        </div>
                        <div className="space-y-8 font-serif-jp text-charcoal/70 leading-relaxed tracking-wider font-extralight">
                            <p>
                                AIアーティスト / コンセプトワーカー。<br />
                                最新の画像生成AIを駆使し、現実とデジタルの境界線を曖昧にするような、
                                緻密で透明感のある世界観を追求しています。
                            </p>
                            <p>
                                単なる生成に留まらず、丁寧なレタッチとコンポジットを通じて、
                                一枚一枚の作品にストーリーを宿らせることを信条としています。
                            </p>
                        </div>

                        <div className="pt-12">
                            <h3 className="font-serif-en text-[10px] tracking-[0.4em] text-charcoal/40 uppercase mb-8">Philosophy</h3>
                            <p className="font-serif-jp text-lg text-charcoal/80 font-extralight italic leading-loose border-l-2 border-gray-100 pl-8">
                                「AIは筆であり、プロンプトは呼吸である。<br />
                                まだ誰も見たことのない、心の深淵に眠る光景を<br />
                                アルゴリズムと共に手繰り寄せることが、私の制作のすべてです。」
                            </p>
                        </div>
                    </div>
                </div>

                <section className="max-w-3xl ml-auto border-t border-gray-50 pt-24">
                    <h2 className="font-serif-en text-[10px] tracking-[0.5em] text-charcoal/40 uppercase mb-12 text-right">Story / Achievements</h2>
                    <ul className="space-y-8 text-charcoal/60">
                        {[
                            //ここに出来事を追記していく。
                            { year: "2025", event: "AIアーティストとしての本格的な活動を開始" },
                        ].map((item) => (
                            <li key={item.year} className="flex justify-between items-baseline group">
                                <span className="font-serif-en text-sm tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity">{item.year}</span>
                                <span className="font-serif-jp text-sm tracking-wider font-extralight">{item.event}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </motion.div>
        </div>
    );
};

export default AboutPage;
