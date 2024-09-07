import { SinglePairDetails } from "@/components/dex/SinglePairDetails";

const PairByAddress = ({ params }: { params: { pair: `0x${string}` } }) => {
    const { pair } = params;

    return <SinglePairDetails address={pair} />;
};

export default PairByAddress;
