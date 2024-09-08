"use client";

import { useState, useEffect } from "react";
import { useReadContracts } from "wagmi";
import { ethers } from "ethers";
import { PairAbi } from "@/abi/pair.abi";
import { FactoryAbi } from "@/abi/factory.abi";
import { SinglePair } from "./SinglePair";
import Link from "next/link";
import { FACTORY_ADDRESS } from "@/lib/constants";

export const PairList = () => {
    const {
        data: pairAddresses,
        isPending,
        isSuccess,
        isError,
        error,
    } = useReadContracts({
        contracts: [
            {
                abi: FactoryAbi,
                address: FACTORY_ADDRESS,
                functionName: "allPairs",
                args: [1],
            },
            {
                abi: FactoryAbi,
                address: FACTORY_ADDRESS,
                functionName: "allPairs",
                args: [2],
            },
            {
                abi: FactoryAbi,
                address: FACTORY_ADDRESS,
                functionName: "allPairs",
                args: [3],
            },
            {
                abi: FactoryAbi,
                address: FACTORY_ADDRESS,
                functionName: "allPairs",
                args: [4],
            },
            {
                abi: FactoryAbi,
                address: FACTORY_ADDRESS,
                functionName: "allPairs",
                args: [5],
            },
            {
                abi: FactoryAbi,
                address: FACTORY_ADDRESS,
                functionName: "allPairs",
                args: [6],
            },
            {
                abi: FactoryAbi,
                address: FACTORY_ADDRESS,
                functionName: "allPairs",
                args: [7],
            },
            {
                abi: FactoryAbi,
                address: FACTORY_ADDRESS,
                functionName: "allPairs",
                args: [8],
            },
        ],
    });

    if (isPending) {
        return <div>Loading...</div>;
    }

    if (isError) {
        console.log("error", error);
        return <div>Error</div>;
    }

    if (isSuccess) {
        console.log("pair address", pairAddresses);
    }

    return (
        <div className="p-6 bg-gray-800 text-white rounded-lg">
            <h2 className="text-xl font-medium mb-4">Liquidity Pool List</h2>

            <div className="grid grid-cols-4 gap-4">
                <div>Pair</div>
                <div>
                    <strong>Reserve A</strong>
                </div>
                <div>
                    <strong>Reserve B</strong>
                </div>
                <div>
                    <strong>Date </strong>
                </div>
            </div>
            {pairAddresses?.map((pairAddress: any, index: number) => (
                <Link
                    passHref
                    key={index}
                    href={`/app/pool/address/${pairAddress.result}`}
                >
                    <SinglePair address={pairAddress.result} />
                </Link>
            ))}
        </div>
    );
};
