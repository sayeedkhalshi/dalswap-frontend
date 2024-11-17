import { chainAddresses } from "@/lib/addresses";
import { useChainId } from "wagmi";

export function useGetAddresses() {
    const chainId = useChainId();
    return chainId == 9788 ? chainAddresses[9788] : chainAddresses[59141];
}
