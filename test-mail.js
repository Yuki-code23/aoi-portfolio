const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// .env.localから環境変数を簡易的に読み込む
const envPath = path.resolve(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
        env[key.trim()] = value.trim();
    }
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: env.GMAIL_USER,
        pass: env.GMAIL_APP_PASSWORD,
    },
});

async function testMail() {
    console.log('Testing mail sending for:', env.GMAIL_USER);
    try {
        const info = await transporter.sendMail({
            from: env.GMAIL_USER,
            to: env.GMAIL_USER,
            subject: 'Portfolio Mail Test',
            text: 'This is a test email to verify the Gmail App Password configuration.',
        });
        console.log('Email sent successfully:', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

testMail();
