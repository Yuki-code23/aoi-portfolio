const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local
const envPath = path.resolve(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length > 0) {
        env[key.trim()] = valueParts.join('=').trim().replace(/^["']|["']$/g, '');
    }
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: env.GMAIL_USER,
        pass: env.GMAIL_APP_PASSWORD,
    },
});

async function testFix() {
    const name = "Test User";
    const subject = "Test Subject";
    const message = "This is a test message to verify the URL fix in the auto-reply email.";
    const adminEmail = env.ADMIN_EMAIL || env.GMAIL_USER;
    const userEmail = env.GMAIL_USER; // Send to self for testing

    console.log('Sending test email to:', userEmail);

    try {
        // Send auto-reply (the one with the fix)
        const info = await transporter.sendMail({
            from: `"月咲 葵 Portfolio" <${env.GMAIL_USER}>`,
            to: userEmail,
            subject: "【送信テスト】お問い合わせありがとうございます",
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
        console.log('Email sent successfully:', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

testFix();
