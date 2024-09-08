import { ERC20Abi } from "@/abi/erc20.abi";
import { useWriteContract } from "wagmi";

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
    const {
        data: hash,
        error,
        isSuccess,
        isError,
        isPending,
        writeContract,
    } = useWriteContract();
    console.log("approveA loaded", hash);

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
    writeContract({
        //weth
        address: tokenB,
        abi: ERC20Abi, // Replace with the ERC20 ABI
        functionName: "approve",
        args: [pairAddress, amountB],
    });
    if (isSuccess) {
        //add liquidity
    }

    return (
        <div className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition">
            <p>ApproveB</p>
        </div>
    );
};

export default ApproveB;
