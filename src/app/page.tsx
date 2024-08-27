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
                            {/* Secure Icon */}
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
                                    d="M12 2a9.956 9.956 0 00-4.717 1.268l-.489.285a9.957 9.957 0 00-3.75 3.75l-.285.489A9.956 9.956 0 002 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16zm0-10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 6.5a1 1 0 110 2 1 1 0 010-2z"
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
                            {/* Fast Icon */}
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
                                    d="M13 16h-1v-4h-1m0-4h2a2 2 0 110 4h-2v-4zm0 8h-1v2h1v-2z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 7h16M4 11h16M4 15h16M4 19h16"
                                />
                            </svg>
                            <h3 className="mt-4 text-xl font-semibold">Fast</h3>
                            <p className="mt-2 text-gray-400">
                                Experience lightning-fast transaction speeds and
                                minimal fees.
                            </p>
                        </div>

                        <div className="text-center">
                            {/* Decentralized Icon */}
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
                                    d="M12 4.5l6 4.5-6 4.5-6-4.5 6-4.5zm0 0v9m0-9l-6 4.5M12 13.5l6-4.5"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 16.5V21m0 0l-6-4.5m6 4.5l6-4.5"
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
