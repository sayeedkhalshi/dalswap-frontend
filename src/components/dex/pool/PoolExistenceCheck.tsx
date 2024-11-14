import { FactoryAbi } from "@/abi/factory.abi";
import AmountForm from "@/components/forms/AmountForm";
import { useGetAddresses } from "@/hooks/useGetAddresses";
import { useReadContract } from "wagmi";

type PoolExistenceCheckProps = {
    tokenA: `0x${string}`;
    tokenB: `0x${string}`;
};

const PoolExistenceCheck = ({ tokenA, tokenB }: PoolExistenceCheckProps) => {
    const addresses = useGetAddresses();
    const FACTORY_ADDRESS = addresses.factory;
    const {
        data: pairAddress,
        isError,
        isPending,
        isSuccess,
        error,
    } = useReadContract({
        abi: FactoryAbi,
        address: FACTORY_ADDRESS,
        functionName: "getPair",
        args: [tokenA, tokenB],
    });

    if (isPending) {
        return <p>Pending...</p>;
    }

    if (isError) {
        console.log("pool create error", error);
        return <p>Error</p>;
    }

    if (isSuccess) {
        return (
            <div className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition">
                <p>Pool address - {pairAddress as `0x${string}`}</p>
                <p>TokenA: {tokenA}</p>
                <p>TokenB: {tokenB}</p>
                <AmountForm
                    submitBtn="Approve"
                    tokenA={tokenA}
                    tokenB={tokenB}
                    pairAddress={pairAddress as `0x${string}`}
                />
            </div>
        );
    }
};

export default PoolExistenceCheck;
