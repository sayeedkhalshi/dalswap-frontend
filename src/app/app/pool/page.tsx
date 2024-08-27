"use client";

// app/pool/page.tsx
import TokenPool from "@/components/forms/PoolForm";

export default function PoolPage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
            <div className="w-full max-w-md p-6">
                <TokenPool />
            </div>
        </div>
    );
}
