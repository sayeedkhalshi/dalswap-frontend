// components/TokenPool.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAccount, useWriteContract } from "wagmi";
import {
    AddAmountFormValues,
    addAmountSchema,
} from "@/schema/add-amount.schema";
import { z } from "zod";
import { ERC20Abi } from "@/abi/erc20.abi";
import ApproveB from "../dex/pool/ApproveB";
import { ethers } from "ethers";
import { ROUTER_ADDRESS } from "@/lib/constants";

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
    const account = useAccount();
    const {
        data: hash,
        error,
        isError,
        isPending,
        isSuccess,
        writeContract,
    } = useWriteContract();
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

    if (isError) {
        return (
            <div className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition">
                <p>ApproveA error</p>
            </div>
        );
    }

    if (isPending) {
        return (
            <div className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition">
                <p>ApproveA happening</p>
            </div>
        );
    }

    if (isSuccess) {
        console.log("approveA success", hash, "pair", pairAddress);
        return (
            <ApproveB
                tokenA={tokenA}
                tokenB={tokenB}
                amountA={watch("amountA")}
                amountB={watch("amountB")}
                pairAddress={pairAddress}
            />
        );
    }

    const onSubmit = async (data: AddAmountFormValues) => {
        try {
            await addAmountSchema.parseAsync(data);

            writeContract({
                //weth
                address: tokenA,
                abi: ERC20Abi, // Replace with the ERC20 ABI
                functionName: "approve",
                args: [
                    ROUTER_ADDRESS, //"0x98f8da3e782b257a3484d88d24620cb687c9588b",
                    ethers.parseUnits(watch("amountA"), 18), //
                ],
            });
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
