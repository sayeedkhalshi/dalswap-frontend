"use client";

import { useState, useEffect } from "react";
import { useReadContract, useReadContracts } from "wagmi";
import { ethers } from "ethers";
import { PairAbi } from "@/abi/pair.abi";
import { FactoryAbi } from "@/abi/factory.abi";

import { BigNumberish } from "ethers";
import { TokenSymbol } from "./TokenSymbol";
import Link from "next/link";

type Reserves = [
    reserve0: BigNumberish,
    reserve1: BigNumberish,
    blockTimestampLast: number
];
export const SinglePair = ({ address }: { address: `0x${string}` }) => {
    const {
        data: pairDetails,
        isPending,
        isSuccess,
        isError,
        error,
    } = useReadContracts({
        contracts: [
            {
                abi: PairAbi,
                address: address,
                functionName: "getReserves",
                args: [],
            },
            {
                abi: PairAbi,
                address: address,
                functionName: "token0",
                args: [],
            },
            {
                abi: PairAbi,
                address: address,
                functionName: "token1",
                args: [],
            },
        ],
    }) as any;

    if (isPending) {
        return <div>Loading...</div>;
    }

    if (isError) {
        console.log("error", error);
        return <div>Error</div>;
    }
    if (isSuccess) {
        console.log("single page short excerpt", pairDetails);
        const reserve = pairDetails[0].result;

        return (
            <div className="grid grid-cols-4 gap-4">
                <div>
                    <TokenSymbol address={pairDetails[1].result} />/
                    <TokenSymbol address={pairDetails[2].result} />
                </div>
                <div>{reserve[0].toString()}</div>
                <div>{reserve[1].toString()}</div>
                <div>{reserve[2]}</div>
            </div>
        );
    }
};
