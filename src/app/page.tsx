import Hero from "@/components/ui/Hero";
import WorkCard from "@/components/ui/WorkCard";
import { Work } from "@/types/microcms";

const mockWorks = [
  {
    id: "1",
    title: "Neon Genesis",
    category: ["Character", "Concept Art"],
    image: { url: "https://images.unsplash.com/photo-1635332829471-aa393169fc0a?q=80&w=1000&auto=format&fit=crop" },
  },
  {
    id: "2",
    title: "Crystal Forest",
    category: ["Background"],
    image: { url: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop" },
  },
  {
    id: "3",
    title: "Void Wanderer",
    category: ["Character"],
    image: { url: "https://images.unsplash.com/photo-1634128221889-82ed6efdfac3?q=80&w=1000&auto=format&fit=crop" },
  },
  {
    id: "4",
    title: "Cyber Citadel",
    category: ["Background", "Concept Art"],
    image: { url: "https://images.unsplash.com/photo-1614728263952-84ea256f96ec?q=80&w=1000&auto=format&fit=crop" },
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />

      <section id="works" className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
          <div className="space-y-4">
            <h2 className="font-serif-en text-[10px] tracking-[0.5em] text-charcoal/40 uppercase">
              Selected Works
            </h2>
            <p className="font-serif-jp text-3xl md:text-4xl text-charcoal font-extralight tracking-widest">
              作品集
            </p>
          </div>
          <div className="flex flex-wrap gap-8 text-[10px] uppercase tracking-[0.25em] font-medium text-charcoal/40">
            {["All", "Character", "Background"].map((cat) => (
              <button key={cat} className="hover:text-charcoal transition-colors underline-offset-8 hover:underline decoration-gray-200">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-32 lg:gap-x-24">
          {mockWorks.map((work, index) => (
            <div
              key={work.id}
              className={`${index % 2 !== 0 ? "lg:mt-32" : ""} max-w-lg mx-auto w-full`}
            >
              <WorkCard work={work as Partial<Work>} />
            </div>
          ))}
        </div>

        <div className="mt-48 text-center">
          <div className="inline-block w-px h-24 bg-gray-200 mx-auto" />
        </div>
      </section>
    </div>
  );
}
