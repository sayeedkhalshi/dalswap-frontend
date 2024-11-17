"use client";

import { useState } from "react";
import { useReadContracts } from "wagmi";
import { BigNumberish } from "ethers";
import { FactoryAbi } from "@/abi/factory.abi";
import { PairAbi } from "@/abi/pair.abi";
import { TokenSymbol } from "./TokenSymbol";
import Link from "next/link";
import AmountForm from "../forms/AmountForm";

// Type definition for reserves
type Reserves = [
    reserve0: BigNumberish,
    reserve1: BigNumberish,
    blockTimestampLast: number
];

// Main component
export const SinglePairDetails = ({ address }: { address: `0x${string}` }) => {
    console.log("pair addr", address);

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
        return <div className="text-center py-4">Loading...</div>;
    }

    if (isError) {
        return <div className="text-red-500">Error loading data...</div>;
    }

    if (isSuccess) {
        const reserve = pairDetails[0].result;
        console.log("single pairDetails", pairDetails);

        return (
            <div className="bg-gray-900 text-white p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">
                    <TokenSymbol address={pairDetails[1].result} />/
                    <TokenSymbol address={pairDetails[2].result} />
                </h2>
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                    <div>
                        <strong>Reserve A</strong>
                        <p>{reserve[0].toString()}</p>
                    </div>
                    <div>
                        <strong>Reserve B</strong>
                        <p>{reserve[1].toString()}</p>
                    </div>
                    <div>
                        <strong>Last Updated</strong>
                        <p>{reserve[2]}</p>
                    </div>
                </div>
                {/* Add and Remove Liquidity Components */}
                <div className="flex justify-around mt-4">
                    <div className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition">
                        <AmountForm
                            submitBtn="Add"
                            pairAddress={address}
                            tokenA={pairDetails[1].result}
                            tokenB={pairDetails[2].result}
                        />
                    </div>{" "}
                    <div className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition">
                        <AmountForm
                            submitBtn="Remove"
                            pairAddress={address}
                            tokenA={pairDetails[1].result}
                            tokenB={pairDetails[2].result}
                        />
                    </div>
                </div>
            </div>
        );
    }
};
