"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Maximize2 } from "lucide-react";
import { useParams } from "next/navigation";

const mockWorks = [
    {
        id: "1",
        title: "Neon Genesis",
        category: ["Character", "Concept Art"],
        image: { url: "https://images.unsplash.com/photo-1635332829471-aa393169fc0a?q=80&w=1000&auto=format&fit=crop" },
        tools: "Stable Diffusion, Photoshop",
        theme: "Futuristic / Cyberpunk",
        description: "デジタルと有機体の融合をテーマにした連作の一枚。",
        retouched: true,
    },
    // 他のモックデータも同様に取得可能
];

const WorkDetailPage = () => {
    const { id } = useParams();
    const work = mockWorks.find((w) => w.id === id) || mockWorks[0];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <Link href="/#works" className="inline-flex items-center text-gray-400 hover:text-neon-blue mb-8 transition-colors">
                <ArrowLeft size={20} className="mr-2" />
                BACK TO GALLERY
            </Link>

            <div className="grid lg:grid-cols-3 gap-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="lg:col-span-2 relative aspect-[3/4] rounded-2xl overflow-hidden glass neon-border group"
                >
                    <Image
                        src={work.image.url}
                        alt={work.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-3 bg-black/50 text-white rounded-full backdrop-blur-md">
                            <Maximize2 size={24} />
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                >
                    <div>
                        <h1 className="text-4xl font-display font-bold text-gradient mb-2">{work.title}</h1>
                        <p className="text-neon-blue">{work.category.join(" / ")}</p>
                    </div>

                    <div className="space-y-4">
                        <div className="glass p-6 rounded-xl border border-white/10 space-y-4">
                            <div>
                                <h3 className="text-xs font-display text-gray-500 tracking-widest mb-1 uppercase">Theme</h3>
                                <p className="text-gray-200">{work.theme}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-display text-gray-500 tracking-widest mb-1 uppercase">Generation Tools</h3>
                                <p className="text-gray-200">{work.tools}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-display text-gray-500 tracking-widest mb-1 uppercase">Retouched</h3>
                                <p className="text-gray-200">{work.retouched ? "YES" : "NO"}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xs font-display text-gray-500 tracking-widest mb-2 uppercase">Description</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {work.description}
                            </p>
                        </div>
                    </div>

                    <div className="pt-8">
                        <button className="w-full py-4 glass border border-neon-blue/30 text-neon-blue font-display font-bold hover:bg-neon-blue/10 transition-colors uppercase tracking-widest">
                            CONTACT ABOUT THIS WORK
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default WorkDetailPage;
