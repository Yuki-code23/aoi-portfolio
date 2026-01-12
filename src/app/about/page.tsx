"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-display font-bold mb-12 text-gradient">ABOUT</h1>

                <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
                    <div className="relative aspect-square rounded-2xl overflow-hidden glass neon-border">
                        <Image
                            src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop"
                            alt="Profile"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-display font-bold mb-4">月咲 葵 (Tsukisaki Aoi)</h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            AIアーティスト / コンセプトワーカー。
                            最新の画像生成AIを駆使し、現実とデジタルの境界線を曖昧にするような、
                            緻密で透明感のある世界観を追求しています。
                        </p>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            単なる生成に留まらず、丁寧なレタッチとコンポジットを通じて、
                            一枚一枚の作品にストーリーを宿らせることを信条としています。
                        </p>
                    </div>
                </div>

                <section className="mb-20">
                    <h2 className="text-2xl font-display font-bold mb-6">PHILOSOPHY</h2>
                    <div className="glass p-8 rounded-2xl border border-white/10">
                        <p className="text-gray-300 leading-relaxed italic">
                            「AIは筆であり、プロンプトは呼吸である。
                            まだ誰も見たことのない、心の深淵に眠る光景を
                            アルゴリズムと共に手繰り寄せることが、私の制作のすべてです。」
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold mb-6">STORY / ACHIEVEMENTS</h2>
                    <ul className="space-y-4 text-gray-400">
                        <li className="flex gap-4">
                            <span className="text-neon-blue font-display">2024</span>
                            <span>AI Art Excellence Award 受賞</span>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-neon-blue font-display">2023</span>
                            <span>個展「鏡の中のデジタル」開催</span>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-neon-blue font-display">2022</span>
                            <span>AIアーティストとしての活動を開始</span>
                        </li>
                    </ul>
                </section>
            </motion.div>
        </div>
    );
};

export default AboutPage;
