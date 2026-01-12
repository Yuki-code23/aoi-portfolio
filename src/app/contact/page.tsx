"use client";

import { motion } from "framer-motion";

const ContactPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-display font-bold mb-12 text-gradient">CONTACT</h1>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <section className="mb-12">
                            <h2 className="text-2xl font-display font-bold mb-6">GUIDELINE</h2>
                            <div className="space-y-4 text-sm text-gray-400">
                                <p>・商用利用、個人依頼ともに受け付けております。</p>
                                <p>・生成物の加工は、依頼内容に準ずる範囲でのみ許可されます。</p>
                                <p>・著作権の譲渡については別途ご相談ください。</p>
                                <p>・クレジット表記は必須ではありませんが、歓迎いたします。</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold mb-6">OTHER WAYS</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>Email: contact@aoi-tsukisaki.com</p>
                                <p>SKIMA / pixivリクエスト対応</p>
                            </div>
                        </section>
                    </div>

                    <div className="glass p-8 rounded-2xl border border-white/10">
                        <form className="space-y-6 text-white">
                            <div>
                                <label className="block text-xs font-display text-gray-500 mb-2 uppercase tracking-widest">Name</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:border-neon-blue outline-none transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs font-display text-gray-500 mb-2 uppercase tracking-widest">Email</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:border-neon-blue outline-none transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs font-display text-gray-500 mb-2 uppercase tracking-widest">Subject</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:border-neon-blue outline-none transition-colors">
                                    <option className="bg-cyber-black">個人依頼 / Commission</option>
                                    <option className="bg-cyber-black">商用利用 / Commercial</option>
                                    <option className="bg-cyber-black">その他 / Others</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-display text-gray-500 mb-2 uppercase tracking-widest">Message</label>
                                <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:border-neon-blue outline-none transition-colors"></textarea>
                            </div>
                            <button className="w-full py-4 bg-neon-blue text-cyber-black font-display font-bold rounded-lg hover:shadow-[0_0_20px_#00f2ff] transition-all uppercase tracking-widest">
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactPage;
