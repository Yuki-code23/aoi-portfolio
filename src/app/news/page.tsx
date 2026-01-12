"use client";

import { motion } from "framer-motion";

const mockNews = [
    {
        id: "1",
        title: "ポートフォリオサイトを公開しました。",
        date: "2026.01.11",
        category: "INFO",
    },
    {
        id: "2",
        title: "新シリーズ「Neon Genesis」をGalleryに追加しました。",
        date: "2026.01.05",
        category: "UPDATE",
    },
    {
        id: "3",
        title: "1月の個人依頼受付を開始しました。",
        date: "2026.01.01",
        category: "INFO",
    },
];

const NewsPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-display font-bold mb-12 text-gradient">NEWS</h1>

                <div className="space-y-4">
                    {mockNews.map((item) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ x: 10 }}
                            className="glass p-6 rounded-xl border border-white/10 flex flex-col md:flex-row md:items-center justify-between group cursor-pointer"
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                                <span className="text-sm font-display text-gray-500">{item.date}</span>
                                <span className="text-xs px-2 py-1 border border-neon-blue/30 text-neon-blue rounded w-fit">
                                    {item.category}
                                </span>
                                <h3 className="text-lg font-medium group-hover:text-neon-blue transition-colors">
                                    {item.title}
                                </h3>
                            </div>
                            <div className="hidden md:block text-gray-600 group-hover:text-neon-blue transition-colors">
                                →
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default NewsPage;
