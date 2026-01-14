"use server";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const resendApiKey = process.env.RESEND_API_KEY!;

// サーバーサイド専用のSupabaseクライアント（RLSをバイパスして保存するため）
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);
const resend = new Resend(resendApiKey);

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

        // 2. Resendを使用してメール送信
        // 本来は送信先メールアドレスを環境変数で管理するのが望ましい
        const { error: mailError } = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>", // 独自ドメインを持っていない場合の初期設定
            to: ["delivered@resend.dev"], // テスト用の送信先。実際には月咲様のメールアドレスを設定
            subject: `【お問い合わせ】${subject}`,
            html: `
                <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
                    <h2 style="border-bottom: 2px solid #eee; padding-bottom: 10px;">新しいお問い合わせがありました</h2>
                    <p><strong>名前:</strong> ${name}</p>
                    <p><strong>メールアドレス:</strong> ${email}</p>
                    <p><strong>件名:</strong> ${subject}</p>
                    <p><strong>メッセージ:</strong></p>
                    <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
                </div>
            `,
        });

        if (mailError) {
            console.error("Mail Error:", mailError);
            // メール送信に失敗してもDBには残っているので、ここでは一応成功とみなしてログを出す
        }

        return { success: true };
    } catch (error: unknown) {
        console.error("Submission Error:", error);
        return { error: "送信中にエラーが発生しました。時間をおいて再度お試しください。" };
    }
}
