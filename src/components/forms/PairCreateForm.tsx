// components/TokenPool.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TokenModal } from "@/components/modals/TokenModal";
import { FactoryAbi } from "@/abi/factory.abi";
import { useWriteContract } from "wagmi";
import {
    CreatePoolFormValues,
    createPoolSchema,
} from "@/schema/create-pool.schema";
import { z } from "zod";
import PoolCreationCheck from "../dex/pool/PoolCreationCheck";
import { useGetAddresses } from "@/hooks/useGetAddresses";

export default function PoolForm() {
    const addresses = useGetAddresses();
    const FACTORY_ADDRESS = addresses.factory;
    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors },
        setValue,
    } = useForm<CreatePoolFormValues>();
    const [isTokenAModalOpen, setTokenAModalOpen] = useState(false);
    const [isTokenBModalOpen, setTokenBModalOpen] = useState(false);
    const [tokenASymbol, setTokenASymbol] = useState<string>("");
    const [tokenBSymbol, setTokenBSymbol] = useState<string>("");

    const { data: hash, error, isSuccess, writeContract } = useWriteContract();

    if (isSuccess) {
        console.log("success", hash);
        return (
            <PoolCreationCheck
                hash={hash}
                tokenA={watch("tokenA") as `0x${string}`}
                tokenB={watch("tokenB") as `0x${string}`}
            />
        );
    }

    const onSubmit = async (data: CreatePoolFormValues) => {
        try {
            await createPoolSchema.parseAsync(data);

            //check if pair already exists
            // then redirect to add liquidity page. Otherwise create pair
            console.log(data);
            const { tokenA, tokenB } = data;
            writeContract({
                abi: FactoryAbi,
                address: FACTORY_ADDRESS,
                functionName: "createPair",
                args: [tokenA, tokenB],
            });

            if (error) {
                return console.error("Error creating pool:", error);
            }

            console.log("Tokens approved for transfer");
        } catch (error: any) {
            if (error instanceof z.ZodError) {
                error.errors.forEach((err: any) => {
                    setError(err.path[0] as keyof CreatePoolFormValues, {
                        type: "manual",
                        message: err.message,
                    });
                });
            }
        }
    };

    const handleTokenSelect = (
        field: "tokenA" | "tokenB",
        token: { symbol: string; address: string }
    ) => {
        setValue(field, token.address);
        if (field === "tokenA") {
            setTokenASymbol(token.symbol);
            setTokenAModalOpen(false);
        }
        if (field === "tokenB") {
            setTokenBSymbol(token.symbol);
            setTokenBModalOpen(false);
        }
    };

    const setOppositeValueToEmpty = (tokenSymbol: string) => {
        if (watch("tokenA") != watch("tokenB")) {
            return tokenSymbol;
        } else {
            // setValue("tokenA", "");
            //setValue("tokenB", "");

            return "";
        }
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
                            value={setOppositeValueToEmpty(tokenASymbol)}
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
                            value={setOppositeValueToEmpty(tokenBSymbol)}
                            className="w-full p-3 bg-gray-900 rounded-md"
                            readOnly
                            onClick={() => setTokenBModalOpen(true)}
                        />
                    </div>
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
