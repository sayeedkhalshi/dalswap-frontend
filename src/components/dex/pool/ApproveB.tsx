import { ERC20Abi } from "@/abi/erc20.abi";
import { useWriteContract } from "wagmi";
import AddLiquidity from "./AddLiquidity";
import { ethers } from "ethers";
import { useGetAddresses } from "@/hooks/useGetAddresses";

const ApproveB = ({
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
    const {
        data: hash,
        error,
        isSuccess,
        isError,
        isPending,
        writeContract,
    } = useWriteContract();

    if (isError) {
        console.log("approveB error", error);
        return (
            <div className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition">
                <p>ApproveB error</p>
            </div>
        );
    }

    if (isPending) {
        return (
            <div className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition">
                <p>ApproveB happening</p>
            </div>
        );
    }
    if (isSuccess && pairAddress) {
        console.log("approveB success", hash, "pair", pairAddress);
        //add liquidity
        return (
            <AddLiquidity
                pairAddress={pairAddress}
                amountA={amountA}
                amountB={amountB}
                tokenA={tokenA}
                tokenB={tokenB}
            />
        );
    }

    const approveB = () => {
        writeContract({
            //approve to router
            address: tokenB,
            abi: ERC20Abi, // Replace with the ERC20 ABI
            functionName: "approve",
            args: [
                ROUTER_ADDRESS, //"0x98f8da3e782b257a3484d88d24620cb687c9588b",
                ethers.utils.parseUnits(amountB.toString(), 18),
            ],
        });
    };

    return (
        <div className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition">
            <button onClick={approveB}>Approve B</button>
        </div>
    );
};

export default ApproveB;
