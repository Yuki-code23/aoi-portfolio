import Hero from "@/components/ui/Hero";
import WorkCard from "@/components/ui/WorkCard";

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
    <div className="pb-32">
      <Hero />

      <section id="works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-display font-bold mb-2">GALLERY</h2>
            <div className="w-20 h-1 bg-neon-blue" />
          </div>
          <div className="hidden md:flex space-x-4 text-sm font-medium text-gray-400">
            <button className="hover:text-neon-blue transition-colors">ALL</button>
            <button className="hover:text-neon-blue transition-colors">CHARACTER</button>
            <button className="hover:text-neon-blue transition-colors">BACKGROUND</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockWorks.map((work) => (
            <WorkCard key={work.id} work={work as any} />
          ))}
        </div>
      </section>
    </div>
  );
}
