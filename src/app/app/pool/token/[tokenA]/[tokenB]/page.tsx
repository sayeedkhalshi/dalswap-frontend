//token details

const PairPoolPage = ({
    params,
}: {
    params: { tokenA: `0x${string}`; tokenB: `0x${string}` };
}) => {
    const { tokenA, tokenB } = params;

    return <p>Pool page</p>;
};

export default PairPoolPage;
