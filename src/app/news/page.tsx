import { getNews } from "@/lib/microcms";
import Link from "next/link";

const NewsPage = async () => {
    const { contents: news } = await getNews();

    return (
        <div className="max-w-4xl mx-auto px-6 py-32">
            <header className="mb-24 space-y-4">
                <h1 className="font-serif-en text-[10px] tracking-[0.5em] text-charcoal/40 uppercase">News</h1>
                <p className="font-serif-jp text-4xl text-charcoal font-extralight tracking-widest">お知らせ</p>
            </header>

            <div className="space-y-0">
                {news.map((item) => (
                    <div
                        key={item.id}
                        className="group border-b border-gray-50 py-12 flex flex-col md:flex-row md:items-baseline justify-between gap-8 hover:bg-gray-50/50 transition-colors px-4 -mx-4"
                    >
                        <div className="flex flex-col md:flex-row md:items-baseline gap-8 lg:gap-16">
                            <span className="font-serif-en text-[11px] tracking-widest text-charcoal/30 tabular-nums">
                                {new Date(item.publishedAt || item.createdAt).toLocaleDateString('ja-JP', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit'
                                }).replace(/\//g, '.')}
                            </span>
                            <div className="space-y-4">
                                <h3 className="font-serif-jp text-lg text-charcoal/80 group-hover:text-charcoal transition-colors leading-relaxed">
                                    {item.title}
                                </h3>
                                <div className="prose prose-sm prose-gray font-serif-jp text-charcoal/50 line-clamp-2">
                                    {item.content.replace(/<[^>]*>?/gm, '')}
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block font-serif-en text-[10px] tracking-widest text-charcoal/20 group-hover:text-charcoal/40 transition-colors">
                            READ MORE
                        </div>
                    </div>
                ))}
            </div>

            {news.length === 0 && (
                <p className="font-serif-jp text-sm text-charcoal/40 text-center py-20">現在、お知らせはありません。</p>
            )}

            <div className="mt-32 text-center">
                <Link
                    href="/"
                    className="font-serif-en text-[10px] tracking-[0.4em] text-charcoal/40 hover:text-charcoal transition-colors uppercase"
                >
                    Back to Top
                </Link>
            </div>
        </div>
    );
};

export default NewsPage;
