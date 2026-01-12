"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Work } from "../../types/microcms";

interface WorkCardProps {
    work: Partial<Work>;
}

const WorkCard = ({ work }: WorkCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="relative group overflow-hidden rounded-lg aspect-[3/4] bg-cyber-gray"
        >
            <Link href={`/works/${work.id}`}>
                <Image
                    src={work.image?.url || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"}
                    alt={work.title || "Work"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-display font-bold">{work.title}</h3>
                    <p className="text-sm text-neon-blue">{work.category?.join(" / ")}</p>
                </div>
            </Link>
        </motion.div>
    );
};

export default WorkCard;
