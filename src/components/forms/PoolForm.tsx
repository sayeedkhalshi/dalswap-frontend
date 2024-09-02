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

export default function PoolForm() {
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

    const {
        data: hash,
        error,
        isPending,
        isSuccess,
        writeContract,
    } = useWriteContract();

    const onSubmit = async (data: CreatePoolFormValues) => {
        try {
            await createPoolSchema.parseAsync(data);
            console.log(data);
            const { tokenA, tokenB } = data;
            writeContract({
                abi: FactoryAbi,
                address: "0x9bd8088aa26283a6bdfbb3cffe1a6745bbceca89",
                functionName: "createPair",
                args: [tokenA, tokenB],
            });

            if (error) {
                console.error("Error creating pool:", error);
            } else if (isSuccess && !isPending) {
                console.log("Pair created:", hash);
                // Additional logic can be added here, like handling approvals and adding liquidity

                // // 2. Get the pair address
                // const pairAddress = await useReadContract({
                //     abi: FactoryAbi,
                //     address: "0x9bd8088aa26283a6bdfbb3cffe1a6745bbceca89",
                //     functionName: "getPair",
                //     args: [tokenA, tokenB],
                // });

                // console.log("Pair address:", pairAddress);

                //2. Approve TokenA and TokenB for transfer to the pair contract
                // writeContract({
                //     //weth
                //     address:
                //         "0x4CC14e64ff9487aD33751952fe2635b7Da21Fd25" as `0x${string}`,
                //     abi: ERC20Abi, // Replace with the ERC20 ABI
                //     functionName: "approve",
                //     args: [pairAddress, amountA],
                // });
            }

            // writeContract({
            //     //social token
            //     address:
            //         "0xBC7585a64ff438289Eb7F9a77Fb23a91C9c747Ae" as `0x${string}`,
            //     abi: ERC20Abi,
            //     functionName: "approve",
            //     args: [pairAddress, amountB],
            // });

            console.log("Tokens approved for transfer");

            // // 3. Add Liquidity
            // await writeContract({
            //     address: pairAddress,
            //     abi: PairAbi, // Replace with the ABI of the pair contract (UniswapV2Pair)
            //     functionName: "addLiquidity",
            //     args: [amountA, amountB],
            // });
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
                            value={tokenASymbol}
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
                            value={tokenBSymbol}
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
