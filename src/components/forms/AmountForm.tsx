// components/TokenPool.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
    useReadContract,
    useWaitForTransactionReceipt,
    useWriteContract,
} from "wagmi";
import {
    AddAmountFormValues,
    addAmountSchema,
} from "@/schema/add-amount.schema";
import { z } from "zod";
import { ERC20Abi } from "@/abi/erc20.abi";

type AmountFormProps = {
    tokenA: `0x${string}`;
    tokenB: `0x${string}`;
    submitBtn: string;
    pairAddress: `0x${string}`;
};

export default function AmountForm({
    submitBtn,
    tokenA,
    tokenB,
    pairAddress,
}: AmountFormProps) {
    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors },
        setValue,
    } = useForm<AddAmountFormValues>();

    const [tokenASymbol, setTokenASymbol] = useState<string>("");
    const [tokenBSymbol, setTokenBSymbol] = useState<string>("");

    const {
        data: hash,
        error,
        isPending,
        isSuccess,
        writeContract,
    } = useWriteContract();

    console.log("amountform loaded", pairAddress);

    const onSubmit = async (data: AddAmountFormValues) => {
        try {
            await addAmountSchema.parseAsync(data);

            // 2. Approve TokenA and TokenB for transfer to the pair contract
            writeContract({
                //weth
                address: tokenA,
                abi: ERC20Abi, // Replace with the ERC20 ABI
                functionName: "approve",
                args: [pairAddress, watch("amountA")],
            });

            //3. Approve TokenA and TokenB for transfer to the pair contract
            writeContract({
                //weth
                address: tokenB,
                abi: ERC20Abi, // Replace with the ERC20 ABI
                functionName: "approve",
                args: [pairAddress, watch("amountB")],
            });

            //check if pair already exists
            // then redirect to add liquidity page. Otherwise create pair
            console.log(data);
            const { amountA, amountB } = data;
        } catch (error: any) {
            if (error instanceof z.ZodError) {
                error.errors.forEach((err: any) => {
                    setError(err.path[0] as keyof AddAmountFormValues, {
                        type: "manual",
                        message: err.message,
                    });
                });
            }
        }
    };

    return (
        <div className="p-6 bg-gray-800 text-white rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                        Amount {tokenASymbol}
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
                        Amount {tokenBSymbol}
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
                    {submitBtn}
                </button>
            </form>
        </div>
    );
}
