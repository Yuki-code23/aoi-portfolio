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
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 bg-white">
            <Link href="/#works" className="inline-flex items-center font-serif-en text-[10px] tracking-[0.3em] text-charcoal/40 hover:text-charcoal mb-16 transition-colors group">
                <ArrowLeft size={14} className="mr-2 transition-transform group-hover:-translate-x-1" />
                BACK TO GALLERY
            </Link>

            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="lg:col-span-8 relative aspect-[3/4] md:aspect-auto md:h-[80vh] bg-gray-50 overflow-hidden"
                >
                    <Image
                        src={work.image.url}
                        alt={work.title}
                        fill
                        className="object-contain"
                    />
                    <div className="absolute top-6 right-6 lg:opacity-0 hover:opacity-100 transition-opacity">
                        <button className="p-4 bg-white/80 text-charcoal backdrop-blur-sm rounded-full">
                            <Maximize2 size={18} strokeWidth={1} />
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="lg:col-span-4 space-y-16"
                >
                    <header className="space-y-4">
                        <p className="font-serif-en text-[10px] tracking-[0.4em] text-charcoal/40 uppercase">
                            {work.category.join(" / ")}
                        </p>
                        <h1 className="font-serif-en text-4xl md:text-5xl text-charcoal font-medium tracking-widest leading-tight">
                            {work.title}
                        </h1>
                    </header>

                    <div className="space-y-12">
                        <div className="space-y-8 font-serif-jp text-sm tracking-widest text-charcoal/70 font-extralight leading-relaxed">
                            <div>
                                <h3 className="font-serif-en text-[9px] text-charcoal/30 tracking-[0.3em] mb-3 uppercase">Description</h3>
                                <p>{work.description}</p>
                            </div>
                        </div>

                        <div className="space-y-6 pt-12 border-t border-gray-50">
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-serif-en text-[9px] text-charcoal/30 tracking-[0.3em] uppercase">Theme</h3>
                                <p className="font-serif-jp text-xs text-charcoal/60">{work.theme}</p>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-serif-en text-[9px] text-charcoal/30 tracking-[0.3em] uppercase">Tools</h3>
                                <p className="font-serif-en text-[10px] text-charcoal/60 underline decoration-gray-100">{work.tools}</p>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-serif-en text-[9px] text-charcoal/30 tracking-[0.3em] uppercase">Retouched</h3>
                                <p className="font-serif-en text-[10px] text-charcoal/60">{work.retouched ? "YES" : "NO"}</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12">
                        <Link
                            href="/contact"
                            className="block w-full py-5 border border-charcoal/10 text-center font-serif-en text-[10px] tracking-[0.4em] text-charcoal hover:bg-charcoal hover:text-white transition-all uppercase"
                        >
                            Contact about this work
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default WorkDetailPage;
