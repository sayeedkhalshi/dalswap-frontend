import AmountForm from "@/components/forms/AmountForm";
import { useWaitForTransactionReceipt } from "wagmi";
import PoolExistenceCheck from "./PoolExistenceCheck";

type PoolCreationCheckProps = {
    hash: `0x${string}`;
    tokenA: `0x${string}`;
    tokenB: `0x${string}`;
};

const PoolCreationCheck = ({
    hash,
    tokenA,
    tokenB,
}: PoolCreationCheckProps) => {
    const { data, isError, isPending, isSuccess, error } =
        useWaitForTransactionReceipt({
            hash,
        });

    if (isError) {
        console.log("error", error);
        return <p>Error</p>;
    }

    if (isPending) {
        return (
            <div className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition">
                <p>Pool address - fetching...</p>
                <p>TokenA: {tokenA}</p>
                <p>TokenB: {tokenB}</p>
            </div>
        );
    }

    if (isSuccess) {
        console.log("pool create success", data);

        return <PoolExistenceCheck tokenA={tokenA} tokenB={tokenB} />;
    }
};

export default PoolCreationCheck;
