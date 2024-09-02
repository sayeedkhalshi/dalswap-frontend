"use client";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "@rainbow-me/rainbowkit/styles.css";
import { ReduxProvider } from "@/redux/provider";
import "./globals.css";
import Menu from "@/components/navbar/Menu";
import { RainbowProviders } from "@/lib/RainbowProvider";
import Footer from "@/components/footer/Footer";
//import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <RainbowProviders>
                    <ReduxProvider>
                        <Menu />
                        {children}

                        <Footer />
                    </ReduxProvider>
                </RainbowProviders>
                <GoogleAnalytics gaId="G-GNR66WGS35" />
            </body>
        </html>
    );
}
