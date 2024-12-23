import { PairAbi } from "@/abi/pair.abi";
import { RouterV2Abi } from "@/abi/routerV2.abi";
import { useWriteContract, useAccount } from "wagmi";
import { ethers } from "ethers";
import { useGetAddresses } from "@/hooks/useGetAddresses";

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
    const addresses = useGetAddresses();

    const ROUTER_ADDRESS = addresses?.router;

    console.log("router address", ROUTER_ADDRESS);

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
        const SLIPPAGE = 0.0035; // 0.35% slippage
        const deadline = Math.floor(Date.now() / 1000) + 60 * 5; // 5-minute deadline buffer

        writeContract({
            address: ROUTER_ADDRESS, // router address
            abi: RouterV2Abi,
            functionName: "addLiquidity",
            args: [
                tokenA, // Address of token A
                tokenB, // Address of token B
                ethers.utils.parseUnits(amountA.toString(), 18), // Desired amount of token A
                ethers.utils.parseUnits(amountB.toString(), 18), // Desired amount of token B
                ethers.utils
                    .parseUnits(amountA.toString(), 18)
                    .mul(ethers.BigNumber.from(10000 - SLIPPAGE * 10000))
                    .div(10000), // Minimum amount of token A
                ethers.utils
                    .parseUnits(amountB.toString(), 18)
                    .mul(ethers.BigNumber.from(10000 - SLIPPAGE * 10000))
                    .div(10000), // Minimum amount of token B
                account.address, // Recipient of liquidity tokens
                deadline, // Deadline
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
