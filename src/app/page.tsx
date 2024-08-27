// components/LandingPage.tsx
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-gray-800 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-8 md:mb-0 md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                            Welcome to Dalswap
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-gray-400">
                            Decentralized, fast, and secure crypto trading. Swap
                            tokens with ease and explore the future of
                            decentralized finance.
                        </p>
                        <div className="mt-8 flex space-x-4">
                            <Link
                                href="/app"
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold"
                            >
                                Launch App
                            </Link>
                            <Link
                                href="/learn-more"
                                className="bg-transparent border border-gray-500 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-semibold"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <Image
                            src="/images/hero-image.jpg" // Replace with your image path
                            alt="Dalswap Hero Image"
                            width={500}
                            height={500}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            {/* Features Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-center">
                        Why Dalswap?
                    </h2>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-16 h-16 mx-auto"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3.75l3.25 1.94M19.5 12A7.5 7.5 0 1112 4.5a7.5 7.5 0 017.5 7.5z"
                                />
                            </svg>
                            <h3 className="mt-4 text-xl font-semibold">
                                Secure
                            </h3>
                            <p className="mt-2 text-gray-400">
                                Your assets are safe with us. We prioritize
                                security to protect your investments.
                            </p>
                        </div>
                        <div className="text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-16 h-16 mx-auto"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.75 4.75l-8.5 14.5m0 0L9.75 12.25m-4.5 7L17 8.5m0 0L14.5 4.75M17 8.5L21 11"
                                />
                            </svg>
                            <h3 className="mt-4 text-xl font-semibold">Fast</h3>
                            <p className="mt-2 text-gray-400">
                                Experience lightning-fast transaction speeds and
                                minimal fees.
                            </p>
                        </div>
                        <div className="text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-16 h-16 mx-auto"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 10h1v7H3v-7zm4 0h1v4H7v-4zm4 0h1v10h-1V10zm4 0h1v7h-1v-7zm4 0h1v4h-1v-4z"
                                />
                            </svg>
                            <h3 className="mt-4 text-xl font-semibold">
                                Decentralized
                            </h3>
                            <p className="mt-2 text-gray-400">
                                Trade directly from your wallet without any
                                intermediaries.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call to Action Section */}
            <section className="bg-green-600 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-white">
                        Start Trading on Dalswap Today
                    </h2>
                    <p className="mt-4 text-lg text-gray-200">
                        Join thousands of users who are taking advantage of the
                        decentralized finance revolution.
                    </p>
                    <div className="mt-8">
                        <Link
                            href="/app"
                            className="bg-white text-green-600 px-6 py-3 rounded-md font-semibold"
                        >
                            Launch App
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
