"use client";

// app/pool/page.tsx
import TokenPool from "@/components/forms/PairCreateForm";

export default function CreatePool() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
            <div className="w-full max-w-md p-6">
                <TokenPool />
            </div>
        </div>
    );
}
