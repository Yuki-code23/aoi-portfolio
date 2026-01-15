import fs from 'fs';
import path from 'path';

// 手動で .env.local をロード (最優先)
try {
    const envPath = path.resolve(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf8');
        envContent.split('\n').forEach(line => {
            const [key, value] = line.split('=');
            if (key && value) {
                process.env[key.trim()] = value.trim();
            }
        });
        console.log('.env.local loaded successfully');
    }
} catch (e) {
    console.error('Error loading .env.local:', e);
}

async function runIntegratedTest() {
    // モジュールを動的にインポートして、初期化時のエラを回避
    const { submitContact } = await import('./src/app/actions/contact');

    const mockFormData = {
        get: (key: string) => {
            const data: Record<string, string> = {
                name: 'System Tester (Dynamic)',
                email: 'aoi.tsukisaki@gmail.com',
                subject: '統合テスト / Final Dynamic Verification',
                message: 'これは動的インポートを使用した最終統合テストです。DB保存とメール送信を一気通貫で確認します。'
            };
            return data[key];
        }
    } as any;

    console.log('--- 統合テスト開始 (Dynamic Import) ---');
    try {
        const result = await submitContact(mockFormData);
        console.log('テスト結果:', result);
        if (result.success) {
            console.log('✅ 成功: すべての機能（DB保存・管理者通知・自動返信）が正常に動作しました。');
        } else {
            console.log('❌ 失敗:', result.error);
        }
    } catch (error) {
        console.error('💥 予期せぬエラー:', error);
    }
    console.log('--- 統合テスト終了 ---');
}

runIntegratedTest();
