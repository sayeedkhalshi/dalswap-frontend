import { PairAbi } from "@/abi/pair.abi";
import { RouterV2Abi } from "@/abi/routerV2.abi";
import { useWriteContract, useAccount } from "wagmi";
import { ethers } from "ethers";
import { ROUTER_ADDRESS } from "@/lib/constants";

const AddLiquidity = ({
    tokenA,
    amountA,
    tokenB,
    amountB,
    pairAddress,
}: {
    tokenA: `0x${string}`;
    tokenB: `0x${string}`;
    amountA: string;
    amountB: string;
    pairAddress: `0x${string}`;
}) => {
    const account = useAccount();
    const {
        data: hash,
        error,
        isSuccess,
        isError,
        isPending,
        writeContract,
    } = useWriteContract();
    const addLiquidity = () => {
        // 3. Add Liquidity
        writeContract({
            address: ROUTER_ADDRESS, //router address
            abi: RouterV2Abi, // Replace with the ABI of the pair contract (UniswapV2Pair)
            functionName: "addLiquidity",
            args: [
                tokenA, // Address of token A
                tokenB, // Address of token B
                ethers.parseUnits(amountA.toString(), 18), // Amount of token A
                ethers.parseUnits(amountB.toString(), 18), // Amount of token B
                ethers.parseUnits("0.05", 18), // Minimum amount of Token A (adjust slippage tolerance)
                ethers.parseUnits("0.05", 18), // Minimum amount of Token A (adjust slippage tolerance)
                account.address, // The address that will receive the liquidity tokens
                Math.floor(Date.now() / 1000) + 60 * 10, // Deadline (10 minutes from now)
            ],
        });
    };
    if (isError) {
        console.log("Add liquidity error", error);
        return (
            <div className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition">
                <p>Add liquidity error</p>
                <button onClick={addLiquidity}>add liquidty</button>
            </div>
        );
    }

    if (isPending) {
        return (
            <div className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition">
                <p>Liquidity adding</p>
            </div>
        );
    }

    if (isSuccess) {
        //add liquidity
        console.log("add liquidity success");
        return <p>added liquidty</p>;
    }

    return (
        <div className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition">
            <button onClick={addLiquidity}>add liquidty</button>
        </div>
    );
};

export default AddLiquidity;
