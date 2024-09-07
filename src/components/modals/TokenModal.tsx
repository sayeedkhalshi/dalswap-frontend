"use client";
import { useState } from "react";

type TokenModalProps = {
    onClose: () => void;
    onSelect: (token: { symbol: string; address: string }) => void;
};

const tokens = [
    { symbol: "BTC", address: "0x0b8b1A60E321F2aE8DBC7EDBdFeB5d69f72532e9" },
    { symbol: "ETH", address: "0x9820A37c1A5FA25776FE4b2746e4A56d53F0Be9A" },
    { symbol: "BNB", address: "0xDa814459B15E2D1C794a718727BbB736D654329C" },
    { symbol: "USDT", address: "0x0B4D97C968D0a6aC58245FCfB46EC0Dead7A79C1" },
    { symbol: "ADA", address: "0xF431C515500D1Cf1927c58314d6dc513E9AD6755" },
    { symbol: "SOL", address: "0xCdCdad81a8413dc6aAC48841F2953c89c0EF7255" },
    { symbol: "XRP", address: "0xe03b49F6112ec3c56eBDAd99CEDF6b2F0a9cD7CA" },
    { symbol: "DOT", address: "0x37419B8386044f08FA33220ec16F650126Df94b4" },
    { symbol: "DOGE", address: "0xF24a58509B68cBb4742102535d052ee4E92Bb3aC" },
    { symbol: "SHIB", address: "0x720c5b89C3283B599A186822F3639E8740567a68" },
    { symbol: "AVAX", address: "0x8Fc105D5dBa65c6a53c80eF5FfDF864d4Fe38838" },
    { symbol: "LUNA", address: "0xA6f66D28c6B1544e4DC880a03F4D0fbf43067b84" },
    { symbol: "LINK", address: "0xbaCe30C6c1F0b709773f3CBf2f7639c1aB6f0d37" },
    { symbol: "LTC", address: "0xed2Caf8d81f6Fb5ec463f98e3986cA4CFfB0C25a" },
    { symbol: "UNI", address: "0x982994D2e20BE29A3978DA7D9fa35Dd8F35c8789" },
    { symbol: "MATIC", address: "0xe0e5554AeD7f2854291E36036a4B6C9751498686" },
    { symbol: "XLM", address: "0x8D94617217700B6835C3D9e38f2071732738058a" },
    { symbol: "VET", address: "0xa3570D9c94F4fe2229191DA2325545393d7E7c3f" },
    { symbol: "TRX", address: "0x604998f2535ae78346834c7260198B3641056b0B" },
    { symbol: "ATOM", address: "0x4C5b3dF81a0870C7D1F7F1bebEAE28d990789Ac9" },
    { symbol: "ALGO", address: "0x69fe439B013450827752855B13d174fDC46e8556" },
    { symbol: "EGLD", address: "0x058dA481b924367feE847357F2a8924Cd4085737" },
    { symbol: "AAVE", address: "0x7C41dc823DAC0A97735CF20B580F4fFb17c2C180" },
    { symbol: "FIL", address: "0x3392B1f180a972d7E61787594d19b6c54c714C9f" },
    { symbol: "XTZ", address: "0x0c3B7e16dCC4cf86713E8eEA0d31d716A4Cc42e7" },
    { symbol: "THETA", address: "0x8308c677c73F193bF1d2967047CFadBf1DAA7d35" },
    { symbol: "AXS", address: "0x20590D8C5f288f57Fe3E6dDb7BE65620A3f0C9CE" },
    { symbol: "EOS", address: "0x12C229B1e66Eb293a98f3f8028C321447Dc4B797" },
    { symbol: "ZEC", address: "0x8DAcBf55B5dA9B9bAda9fB8d9f80db3723B02a35" },
    { symbol: "MKR", address: "0x314e8Cac9235D06b46056873109983c0BB188848" },
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
