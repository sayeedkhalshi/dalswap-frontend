"use client";
import Image from "next/image";
import Link from "next/link";
import LogoText from "./LogoText";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Menu = () => {
    return (
        <nav className="bg-gray-900 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <LogoText />
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        <Link
                            href="/app"
                            className="nav-link hover:text-green-400"
                        >
                            App
                        </Link>
                        <Link
                            href="/app/pool"
                            className="nav-link hover:text-green-400"
                        >
                            Pool
                        </Link>
                    </div>

                    {/* Connect Button */}
                    <div className="flex items-center space-x-4">
                        <ConnectButton label="Login" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
