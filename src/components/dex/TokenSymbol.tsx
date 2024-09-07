"use client";

import { ERC20Abi } from "@/abi/erc20.abi";
import { useState } from "react";
import { useReadContract } from "wagmi";
export const TokenSymbol = ({ address }: { address: `0x${string}` }) => {
    // Fetching token symbol using useReadContract
    const {
        data: tokenSymbol,
        isLoading,
        isError,
        error,
        isSuccess,
    } = useReadContract({
        abi: ERC20Abi,
        address: address as `0x${string}`,
        functionName: "symbol",
        args: [],
    }) as any;
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        console.log(error);

        return "";
    }
    if (isSuccess) {
        return <strong>{tokenSymbol.toString()}</strong>;
    }
};
