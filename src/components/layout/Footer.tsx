import Link from "next/link";

const Footer = () => {
    return (
        <footer className="glass border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="font-display text-lg font-bold text-gradient mb-4">
                    TSUKISAKI AOI
                </p>
                <div className="flex justify-center space-x-6 mb-8">
                    <Link href="#" className="text-gray-400 hover:text-neon-blue">X (Twitter)</Link>
                    <Link href="#" className="text-gray-400 hover:text-neon-blue">Instagram</Link>
                    <Link href="#" className="text-gray-400 hover:text-neon-blue">pixiv</Link>
                </div>
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Tsukisaki Aoi. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
