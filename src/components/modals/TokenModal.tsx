"use client";
import { useState } from "react";
import { useGetAddresses } from "@/hooks/useGetAddresses";

type TokenModalProps = {
    onClose: () => void;
    onSelect: (token: { symbol: string; address: string }) => void;
};

export const TokenModal = ({ onClose, onSelect }: TokenModalProps) => {
    const tokens = useGetAddresses().tokens;

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
