import Image from "next/image";
import Link from "next/link";
import { Work } from "../../types/microcms";
import ImageProtection from "./ImageProtection";

interface WorkCardProps {
    work: Partial<Work>;
}

const WorkCard = ({ work }: WorkCardProps) => {
    return (
        <Link href={`/works/${work.id}`} className="group block">
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 mb-6 transition-transform duration-500 ease-out group-hover:-translate-y-2">
                <ImageProtection>
                    <Image
                        src={work.image?.url || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"}
                        alt={work.title || "Work"}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                </ImageProtection>
            </div>
            <div className="space-y-2 px-1 text-center md:text-left">
                <h3 className="font-serif-en text-lg tracking-widest text-charcoal font-medium">
                    {work.title}
                </h3>
                <div className="flex justify-center md:justify-start gap-4">
                    <span className="font-serif-jp text-[10px] tracking-[0.2em] text-charcoal/30 uppercase">
                        {work.category?.join(" / ")}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default WorkCard;
