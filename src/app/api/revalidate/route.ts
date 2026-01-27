import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
    const secret = request.nextUrl.searchParams.get('secret');

    // セキュリティ向上のため、必要に応じて環境変数と照合する処理を追加してください
    // if (secret !== process.env.REVALIDATE_SECRET) {
    //   return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    // }

    try {
        // サイト全体のキャッシュを再検証（必要最小限に絞ることも可能）
        revalidatePath('/', 'layout');

        return NextResponse.json({
            revalidated: true,
            now: Date.now(),
            message: 'Revalidation triggered successfully'
        });
    } catch (err) {
        console.error('Revalidation error:', err);
        return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
    }
}

// GETリクエスト（動作確認用）
export async function GET() {
    return NextResponse.json({ message: 'Revalidate endpoint is active. Use POST to trigger.' });
}
