import { factory } from "typescript";

// config/chainAddresses.ts
export const chainAddresses = {
    1100000: {
        // Tabi Testnet V2
        factory: "0x31ac565d0f3128fe1ef4800c0c482b2bf94c360d" as `0x${string}`,
        weth: "0x999aecc38f42fcb8907097150bb3e6308adf4ac7" as `0x${string}`,
        router: "0x5141521338d4e2335e664baD21a97671081Fd73d" as `0x${string}`,
        tokens: [
            {
                address:
                    "0xf3DA4A60FE4A47fd75E215d3d222644635fEEa8e" as `0x${string}`,
                name: "Bitcoin",
                symbol: "BTC",
                decimals: 18,
            },
            {
                address:
                    "0xd1892EfCA918ec1d449817ca722eC390Da38Ce7b" as `0x${string}`,
                name: "Ethereum",
                symbol: "ETH",
                decimals: 18,
            },
            {
                address:
                    "0xB93015148960A13a2902e58c25DE5f1814D9fe1f" as `0x${string}`,
                name: "Polkadot",
                symbol: "DOT",
                decimals: 18,
            },
            {
                address:
                    "0x2af5CcBA38Bd9B096580a18dA4Ba91A1e2582490" as `0x${string}`,
                name: "Dogecoin",
                symbol: "DOGE",
                decimals: 18,
            },
            {
                address:
                    "0x19A7353B058254F66725077c13Eb3B5ca56f93c9" as `0x${string}`,
                name: "Ripple",
                symbol: "XRP",
                decimals: 18,
            },
            {
                address:
                    "0xEAcA764b7a4Fc21aB17B63104C87F88e0460A95B" as `0x${string}`,
                name: "Solana",
                symbol: "SOL",
                decimals: 18,
            },
            {
                address:
                    "0x5CCfd76CeC578CDfbDC02dfccFf7c1f054666eA0" as `0x${string}`,
                name: "Cardano",
                symbol: "ADA",
                decimals: 18,
            },

            {
                address:
                    "0x1447Ef977d6c50d07307a3D6b002d8Da5AC4849C" as `0x${string}`,
                name: "Tether",
                symbol: "USDT",
                decimals: 18,
            },
            {
                address:
                    "0x5a7e71985B040B6Ed0CF8bE73297Fc7c5fF2265B" as `0x${string}`,
                name: "Binance Coin",
                symbol: "BNB",
                decimals: 18,
            },
        ],
    },

    63758: {
        // ZKScam
        factory: "0xZKScamContractAddress",
        router: "0xAnotherZKScamContractAddress",
    },
    9788: {
        // Tabi Testnet V2
        factory: "0x31ac565d0f3128fe1ef4800c0c482b2bf94c360d" as `0x${string}`,
        weth: "0x999aecc38f42fcb8907097150bb3e6308adf4ac7" as `0x${string}`,
        router: "0x5141521338d4e2335e664baD21a97671081Fd73d" as `0x${string}`,
        tokens: [
            {
                address:
                    "0xf3DA4A60FE4A47fd75E215d3d222644635fEEa8e" as `0x${string}`,
                name: "Bitcoin",
                symbol: "BTC",
                decimals: 18,
            },
            {
                address:
                    "0xd1892EfCA918ec1d449817ca722eC390Da38Ce7b" as `0x${string}`,
                name: "Ethereum",
                symbol: "ETH",
                decimals: 18,
            },
            {
                address:
                    "0xB93015148960A13a2902e58c25DE5f1814D9fe1f" as `0x${string}`,
                name: "Polkadot",
                symbol: "DOT",
                decimals: 18,
            },
            {
                address:
                    "0x2af5CcBA38Bd9B096580a18dA4Ba91A1e2582490" as `0x${string}`,
                name: "Dogecoin",
                symbol: "DOGE",
                decimals: 18,
            },
            {
                address:
                    "0x19A7353B058254F66725077c13Eb3B5ca56f93c9" as `0x${string}`,
                name: "Ripple",
                symbol: "XRP",
                decimals: 18,
            },
            {
                address:
                    "0xEAcA764b7a4Fc21aB17B63104C87F88e0460A95B" as `0x${string}`,
                name: "Solana",
                symbol: "SOL",
                decimals: 18,
            },
            {
                address:
                    "0x5CCfd76CeC578CDfbDC02dfccFf7c1f054666eA0" as `0x${string}`,
                name: "Cardano",
                symbol: "ADA",
                decimals: 18,
            },

            {
                address:
                    "0x1447Ef977d6c50d07307a3D6b002d8Da5AC4849C" as `0x${string}`,
                name: "Tether",
                symbol: "USDT",
                decimals: 18,
            },
            {
                address:
                    "0x5a7e71985B040B6Ed0CF8bE73297Fc7c5fF2265B" as `0x${string}`,
                name: "Binance Coin",
                symbol: "BNB",
                decimals: 18,
            },
        ],
    },
    11155111: {
        // Sepolia
        myContract: "0xSepoliaContractAddress",
        anotherContract: "0xAnotherSepoliaContractAddress",
    },
    // Add other chain mappings as needed
};
