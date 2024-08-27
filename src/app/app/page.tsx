"use client";

// app/page.tsx
import SwapForm from "@/components/forms/SwapForm";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
            <div className="w-full max-w-md p-6">
                <SwapForm />
            </div>
        </div>
    );
}
