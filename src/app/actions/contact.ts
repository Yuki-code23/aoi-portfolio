"use server";

import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Nodemailerの設定 (Gmail用)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

export async function submitContact(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !subject || !message) {
        return { error: "全ての項目を入力してください。" };
    }

    try {
        // 1. Supabaseのinquiriesテーブルに保存
        const { error: dbError } = await supabaseAdmin
            .from("inquiries")
            .insert([{ name, email, subject, message }]);

        if (dbError) throw dbError;

        // 2. メール送信の準備が整っているか確認
        if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
            console.warn("Gmail credentials are not set. Emails will not be sent.");
            return { success: true, warning: "送信設定が未完了ですが、内容は保存されました。" };
        }

        // 3. 管理者（月咲様）への通知メール
        await transporter.sendMail({
            from: `"Portfolio System" <${process.env.GMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
            subject: `【お問い合わせ】${subject}`,
            html: `
                <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
                    <h2 style="border-bottom: 2px solid #eee; padding-bottom: 10px;">新しいお問い合わせがありました</h2>
                    <p><strong>名前:</strong> ${name} 様</p>
                    <p><strong>メールアドレス:</strong> ${email}</p>
                    <p><strong>件名:</strong> ${subject}</p>
                    <p><strong>メッセージ:</strong></p>
                    <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
                </div>
            `,
        });

        // 4. 送信者への自動返信（サンクスメール）
        await transporter.sendMail({
            from: `"月咲 葵 Portfolio" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: "お問い合わせありがとうございます",
            html: `
                <div style="font-family: 'Noto Serif JP', serif; line-height: 1.8; color: #333; max-width: 600px; margin: 0 auto;">
                    <header style="padding: 20px 0; border-bottom: 1px solid #eee; margin-bottom: 30px;">
                        <h1 style="font-size: 18px; font-weight: normal; letter-spacing: 0.1em;">Aoi Tsukisaki Portfolio</h1>
                    </header>
                    <main>
                        <p>${name} 様</p>
                        <p>この度は、月咲 葵のポートフォリオサイトよりお問い合わせいただき、誠にありがとうございます。</p>
                        <p>内容を確認次第、改めてご連絡させていただきます。返信まで数日お時間をいただく場合がございますが、何卒ご了承ください。</p>
                        
                        <div style="background: #fafafa; padding: 20px; border-radius: 4px; margin: 30px 0;">
                            <h2 style="font-size: 14px; margin-top: 0;">お問い合わせ内容</h2>
                            <p style="font-size: 13px; margin-bottom: 5px;"><strong>件名：</strong> ${subject}</p>
                            <p style="font-size: 13px; white-space: pre-wrap;"><strong>本文：</strong><br />${message}</p>
                        </div>
                    </main>
                    <footer style="padding: 20px 0; border-top: 1px solid #eee; margin-top: 50px; font-size: 12px; color: #999;">
                        <p>© 2026 Aoi Tsukisaki. All Rights Reserved.</p>
                        <p>URL: <a href="https://aoi-portfolio.vercel.app" style="color: #999; text-decoration: none;">aoi-portfolio.vercel.app</a></p>
                    </footer>
                </div>
            `,
        });

        return { success: true };
    } catch (error: unknown) {
        console.error("Submission Error:", error);
        return { error: "送信中にエラーが発生しました。時間をおいて再度お試しください。" };
    }
}
