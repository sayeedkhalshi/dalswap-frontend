import { useState } from "react";
import { useForm } from "react-hook-form";
import { TokenModal } from "@/components/modals/TokenModal";
import { useWriteContract } from "wagmi";

type FormValues = {
    tokenASymbol: string;
    tokenA: string;
    amountA: string;
    tokenBSymbol: string;
    tokenB: string;
    amountB: string;
};

export default function SwapForm() {
    const { register, handleSubmit, setValue } = useForm<FormValues>();
    const [isTokenAModalOpen, setTokenAModalOpen] = useState(false);
    const [isTokenBModalOpen, setTokenBModalOpen] = useState(false);
    const { data: hash, error, isPending, writeContract } = useWriteContract();

    const onSubmit = async (data: FormValues) => {
        console.log(data);
        // Handle swap logic here
    };

    const handleTokenSelect = (
        field: "tokenA" | "tokenB",
        token: { symbol: string; address: string }
    ) => {
        setValue(field, token.address);
        setValue(`${field}Symbol`, token.symbol);
        if (field === "tokenA") setTokenAModalOpen(false);
        if (field === "tokenB") setTokenBModalOpen(false);
    };

    return (
        <div className="p-6 bg-gray-800 text-white rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* From Section */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                        From
                    </label>
                    <div className="relative mb-2">
                        <input
                            {...register("tokenASymbol")}
                            type="text"
                            placeholder="Select a token"
                            className="w-full p-3 bg-gray-900 rounded-md"
                            readOnly
                            onClick={() => setTokenAModalOpen(true)}
                        />
                    </div>
                    <input {...register("tokenA")} type="hidden" />
                    <div className="relative">
                        <input
                            {...register("amountA")}
                            type="number"
                            placeholder="Amount"
                            className="w-full p-3 bg-gray-900 rounded-md"
                        />
                    </div>
                </div>

                {/* To Section */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">To</label>
                    <div className="relative mb-2">
                        <input
                            {...register("tokenBSymbol")}
                            type="text"
                            placeholder="Select a token"
                            className="w-full p-3 bg-gray-900 rounded-md"
                            readOnly
                            onClick={() => setTokenBModalOpen(true)}
                        />
                    </div>
                    <input {...register("tokenB")} type="hidden" />
                    <div className="relative">
                        <input
                            {...register("amountB")}
                            type="number"
                            placeholder="Amount"
                            className="w-full p-3 bg-gray-900 rounded-md"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full p-3 bg-green-600 rounded-md hover:bg-green-700"
                >
                    Swap
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
