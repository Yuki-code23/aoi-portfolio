"use client";

import React, { ReactNode } from "react";

interface ImageProtectionProps {
    children: ReactNode;
    className?: string;
}

/**
 * 著作権保護のための画像ガードコンポーネント
 * 右クリック禁止、ドラッグ禁止、および透明なオーバーレイを提供します。
 */
const ImageProtection = ({ children, className = "" }: ImageProtectionProps) => {
    return (
        <div
            className={`relative w-full h-full ${className}`}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
        >
            {/* 実際の子要素（Imageなど） */}
            {children}

            {/* ガード用の透明オーバーレイ */}
            <div
                className="absolute inset-0 z-10 bg-transparent select-none cursor-default"
                aria-hidden="true"
            />
        </div>
    );
};

export default ImageProtection;
