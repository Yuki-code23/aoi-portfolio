import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-white py-24 border-t border-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                <p className="font-serif-en text-xl tracking-[0.4em] text-charcoal mb-8">
                    TSUKISAKI AOI
                </p>
                <div className="flex justify-center space-x-12 mb-12">
                    <Link href="https://x.com/tsukisaki_aoi" target="_blank" rel="noopener noreferrer" className="font-serif-en text-[10px] uppercase tracking-[0.2em] text-charcoal/40 hover:text-charcoal transition-colors">X / Twitter</Link>
                </div>
                <p className="font-serif-jp text-[9px] tracking-[0.15em] text-charcoal/30 uppercase">
                    &copy; {new Date().getFullYear()} Tsukisaki Aoi. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
