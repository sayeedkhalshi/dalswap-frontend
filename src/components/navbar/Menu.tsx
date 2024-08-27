"use client";
import Image from "next/image";
import Link from "next/link";
// import LogoImage from "./LogoImage";
import LogoText from "./LogoText";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Menu = () => {
    return (
        <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
                <div className="flex items-center px-2 lg:px-0 mx-auto">
                    {/* <LogoImage /> */}
                    <LogoText />
                    <div className=" lg:block lg:ml-6">
                        <div className="flex space-x-4">
                            <Link href="/app" className="nav-link">
                                App
                            </Link>
                            <Link
                                href="https://github.com/sayeedkhalshi/learnea-frontend"
                                className="nav-link"
                                target="_blank"
                            >
                                Code
                            </Link>
                            <Link
                                href="https://github.com/sayeedkhalshi/learnea-dev-docs/blob/main/initial-philosophy-of-app.md"
                                className="nav-link"
                                target="_blank"
                            >
                                Whitepaper
                            </Link>
                            <Link
                                href="https://docs.google.com/document/d/1CZJZGOgpnhuC0wVHnj1gvs3N3kLhJ7qmOSfRMLAWNlc/edit?usp=sharing"
                                className="nav-link"
                                target="_blank"
                            >
                                DevDoc
                            </Link>
                            <Link
                                href="https://twitter.com/sayeedkhalshi"
                                className="nav-link"
                                target="_blank"
                            >
                                Contact
                            </Link>

                            <div className="ff-monospace">
                                <ConnectButton label="Login" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
