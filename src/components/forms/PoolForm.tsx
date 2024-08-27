// components/TokenPool.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TokenModal } from "@/components/modals/TokenModal";

type FormValues = {
    tokenA: string;
    tokenB: string;
    amountA: string;
    amountB: string;
};

export default function PoolForm() {
    const { register, handleSubmit, setValue } = useForm<FormValues>();
    const [isTokenAModalOpen, setTokenAModalOpen] = useState(false);
    const [isTokenBModalOpen, setTokenBModalOpen] = useState(false);

    const onSubmit = (data: FormValues) => {
        console.log(data);
        // Handle pool creation logic here
    };

    const handleTokenSelect = (field: "tokenA" | "tokenB", token: string) => {
        setValue(field, token);
        if (field === "tokenA") setTokenAModalOpen(false);
        if (field === "tokenB") setTokenBModalOpen(false);
    };

    return (
        <div className="p-6 bg-gray-800 text-white rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                        Token A
                    </label>
                    <div className="relative">
                        <input
                            {...register("tokenA")}
                            type="text"
                            placeholder="Select a token"
                            className="w-full p-3 bg-gray-900 rounded-md"
                            readOnly
                            onClick={() => setTokenAModalOpen(true)}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                        Token B
                    </label>
                    <div className="relative">
                        <input
                            {...register("tokenB")}
                            type="text"
                            placeholder="Select a token"
                            className="w-full p-3 bg-gray-900 rounded-md"
                            readOnly
                            onClick={() => setTokenBModalOpen(true)}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                        Amount A
                    </label>
                    <input
                        {...register("amountA")}
                        type="text"
                        placeholder="Enter amount"
                        className="w-full p-3 bg-gray-900 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                        Amount B
                    </label>
                    <input
                        {...register("amountB")}
                        type="text"
                        placeholder="Enter amount"
                        className="w-full p-3 bg-gray-900 rounded-md"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full p-3 bg-green-600 rounded-md hover:bg-green-700"
                >
                    Create Pool
                </button>
            </form>

            {/* Modals */}
            {isTokenAModalOpen && (
                <TokenModal
                    onClose={() => setTokenAModalOpen(false)}
                    onSelect={(token) => handleTokenSelect("tokenA", token)}
                />
            )}
            {isTokenBModalOpen && (
                <TokenModal
                    onClose={() => setTokenBModalOpen(false)}
                    onSelect={(token) => handleTokenSelect("tokenB", token)}
                />
            )}
        </div>
    );
}
