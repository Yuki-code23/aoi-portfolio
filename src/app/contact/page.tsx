"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const ContactForm = () => {
    const searchParams = useSearchParams();
    const workTitle = searchParams.get("work");

    const defaultSubject = workTitle ? "その他 / Others" : "個人依頼 / Commission";
    const defaultMessage = workTitle ? `作品『${workTitle}』について` : "";

    return (
        <form className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="border-b border-gray-100 pb-2">
                    <label className="block font-serif-en text-[9px] text-charcoal/30 uppercase tracking-[0.3em] mb-2">Name</label>
                    <input type="text" className="w-full bg-transparent font-serif-jp text-sm text-charcoal outline-none transition-colors focus:border-charcoal border-none p-0" placeholder="お名前" />
                </div>
                <div className="border-b border-gray-100 pb-2">
                    <label className="block font-serif-en text-[9px] text-charcoal/30 uppercase tracking-[0.3em] mb-2">Email</label>
                    <input type="email" className="w-full bg-transparent font-serif-jp text-sm text-charcoal outline-none transition-colors focus:border-charcoal border-none p-0" placeholder="メールアドレス" />
                </div>
            </div>
            <div className="border-b border-gray-100 pb-2">
                <label className="block font-serif-en text-[9px] text-charcoal/30 uppercase tracking-[0.3em] mb-2">Subject</label>
                <select
                    className="w-full bg-transparent font-serif-jp text-sm text-charcoal outline-none transition-colors focus:border-charcoal border-none p-0 appearance-none"
                    defaultValue={defaultSubject}
                >
                    <option>個人依頼 / Commission</option>
                    <option>商用利用 / Commercial</option>
                    <option>その他 / Others</option>
                </select>
            </div>
            <div className="border-b border-gray-100 pb-2">
                <label className="block font-serif-en text-[9px] text-charcoal/30 uppercase tracking-[0.3em] mb-2">Message</label>
                <textarea
                    rows={4}
                    className="w-full bg-transparent font-serif-jp text-sm text-charcoal outline-none transition-colors focus:border-charcoal border-none p-0 resize-none"
                    placeholder="メッセージ内容"
                    defaultValue={defaultMessage}
                ></textarea>
            </div>
            <button className="px-12 py-4 bg-charcoal text-white font-serif-en text-[10px] tracking-[0.4em] hover:bg-black transition-all uppercase">
                Send Message
            </button>
        </form>
    );
};

const ContactPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-32">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <div className="flex flex-col md:flex-row gap-24">
                    <div className="w-full md:w-5/12 space-y-24">
                        <header className="space-y-4">
                            <h1 className="font-serif-en text-[10px] tracking-[0.5em] text-charcoal/40 uppercase">Contact</h1>
                            <p className="font-serif-jp text-4xl text-charcoal font-extralight tracking-widest">お問い合わせ</p>
                        </header>

                        <section className="space-y-12">
                            <div className="space-y-4">
                                <h2 className="font-serif-en text-[10px] tracking-[0.4em] text-charcoal/40 uppercase">Guideline</h2>
                                <div className="space-y-4 font-serif-jp text-xs text-charcoal/50 leading-loose tracking-widest">
                                    <p>・商用利用、個人依頼ともに受け付けております。</p>
                                    <p>・生成物の加工は、依頼内容に準ずる範囲でのみ許可されます。</p>
                                    <p>・著作権の譲渡については別途ご相談ください。</p>
                                    <p>・クレジット表記は必須ではありませんが、歓迎いたします。</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h2 className="font-serif-en text-[10px] tracking-[0.4em] text-charcoal/40 uppercase">Other Ways</h2>
                                <div className="space-y-2 font-serif-jp text-sm text-charcoal/70 tracking-widest">
                                    <p className="font-serif-en">Email: contact@aoi-tsukisaki.com</p>
                                    <p>SKIMA / Pixiv リクエスト対応</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="w-full md:w-7/12 md:mt-48">
                        <Suspense fallback={<div className="font-serif-jp text-sm text-charcoal/20">Loading form...</div>}>
                            <ContactForm />
                        </Suspense>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactPage;
