"use client";
import { useState } from "react";

type TokenModalProps = {
    onClose: () => void;
    onSelect: (token: { symbol: string; address: string }) => void;
};

const tokens = [
    { symbol: "BTC", address: "0x813a68fa74AcAb3051Be6DB0552c05f622DB7842" }, // Bitcoin
    { symbol: "ETH", address: "0x54c15A037c0F161Edda514f2f8c452ba8514b2C6" }, // Ethereum
    { symbol: "BNB", address: "0x3DED066d8D0558F036022Dda952Ed3E20e0EAf06" }, // Binance Coin
    { symbol: "USDT", address: "0x00b029684600F4ce32b7d5A10613a1BE8065007b" }, // Tether
    { symbol: "ADA", address: "0x638e647644C84692cb95fd93349cca94739c3347" }, // Cardano
    { symbol: "SOL", address: "0x07C66Fc3567Ed52B2c901A39D1f88b325d4648bC" }, // Solana
    { symbol: "XRP", address: "0x1009EbB7dECD61F2926b19388cEe335142b505b7" }, // XRP
    { symbol: "DOT", address: "0x8141caF51e5cF5821d7293c355B34b35A567d096" }, // Polkadot
    { symbol: "DOGE", address: "0x518Ab1D8C52E412B4B3e07C84aF4e52F537D764f" }, // Dogecoin
    { symbol: "SHIB", address: "0x0125bb79eD55eB35C8e1866160072eFa60Ed01a0" }, // Shiba Inu
    { symbol: "AVAX", address: "0xBC3E064839597AD5461Eb424687793C794eC53B9" }, // Avalanche
    { symbol: "LUNA", address: "0x869b88BAF47607bcAbD318b1502F352859a6cF23" }, // Terra
    { symbol: "LINK", address: "0x190e46Dcf437090E3d817A09D8B61F4d0abB54d4" }, // Chainlink
    { symbol: "LTC", address: "0x4d268BF144212DaAff33618b5F12716726B2294F" }, // Litecoin
    { symbol: "UNI", address: "0x4b44f7a452282Bd62E1C76F829E9ac2717dBd0b9" }, // Uniswap
    { symbol: "MATIC", address: "0x92B5ae91c9A1A94FE800293185bfAF303d995f45" }, // Polygon
    { symbol: "XLM", address: "0x95c13c250188Fd0A22c00f92c8A38B1CF68B002c" }, // Stellar
    { symbol: "VET", address: "0x3C10192B409B80A74Cfdb4D2887FEc42711d68A7" }, // VeChain
    { symbol: "TRX", address: "0xBDae26070b02BdBa89C8a0968E7388dD19BB6108" }, // TRON
    { symbol: "ATOM", address: "0xF26672cE731da9D37daE4dB32F7Bec8D851D8393" }, // Cosmos
    { symbol: "ALGO", address: "0x9e9BCFfD82D3E6fDa6f6Ce95c4c20B7Ca0aF712c" }, // Algorand
    { symbol: "EGLD", address: "0x9f3F7c39F2B60613822Bd1b5738Ea43973C57a7C" }, // Elrond
    { symbol: "AAVE", address: "0xDdE158746343d35f2208a6e388bbE1972d2c2Da1" }, // Aave
    { symbol: "FIL", address: "0x3e3CD3C7785Ec1b0F807cD28Ac45326966ef079A" }, // Filecoin
    { symbol: "XTZ", address: "0xdEe2f034565Ba9BBA60396cB8e1e82e239De3Dd3" }, // Tezos
    { symbol: "THETA", address: "0x3F1C0C463e829F094D46F8aD9B971a91533f0474" }, // Theta
    { symbol: "AXS", address: "0x2BBE76afBA43649085f825CD9254b1602B321a34" }, // Axie Infinity
    { symbol: "EOS", address: "0xcA585Ae50eBB7441baf2a301DDb57a05923dD9cf" }, // EOS
    { symbol: "ZEC", address: "0xafca2CCFf7b2dd982CC8E6856aD1770FD3733089" }, // Zcash
    { symbol: "MKR", address: "0xf43ece737be5fA5b865981050b8A1CFdFbc1a944" }, // Maker
];

export const TokenModal = ({ onClose, onSelect }: TokenModalProps) => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredTokens = tokens.filter((token) =>
        token.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-medium">Select a Token</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white"
                    >
                        Close
                    </button>
                </div>
                <input
                    type="text"
                    placeholder="Search token"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-3 bg-gray-900 rounded-md mb-4"
                />
                <ul className="max-h-48 overflow-y-auto">
                    {filteredTokens.map((token) => (
                        <li
                            key={token.address}
                            onClick={() => onSelect(token)}
                            className="p-2 hover:bg-gray-700 rounded cursor-pointer"
                        >
                            {token.symbol}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
