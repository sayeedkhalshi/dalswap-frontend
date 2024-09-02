"use client";
import { useState } from "react";

type TokenModalProps = {
    onClose: () => void;
    onSelect: (token: { symbol: string; address: string }) => void;
};

const tokens = [
    { symbol: "ETH", address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
    { symbol: "DAI", address: "0x6B175474E89094C44Da98b954EedeAC495271d0F" },
    { symbol: "USDC", address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" },
    { symbol: "WBTC", address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599" },
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
