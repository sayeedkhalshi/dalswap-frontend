"use client";

import CreatePoolButton from "@/components/button/CreatePool";
import { PairList } from "@/components/dex/PairList";
// app/pool/page.tsx
import Link from "next/link";

export default function PoolPage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
            <div className="w-full max-w-md p-6">
                <CreatePoolButton />

                <PairList />
            </div>
        </div>
    );
}
