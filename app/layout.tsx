import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: {
        default: "Kaushal Darji Portfolio",
        template: "%s | Kaushal Darji Portfolio"
    },
    description: "DevOps Engineer Portfolio - Kubernetes, AWS, CI/CD",
    openGraph: {
        title: "Kaushal Darji Portfolio",
        description: "DevOps Engineer Portfolio - Kubernetes, AWS, CI/CD",
        type: "website",
        locale: "en_US",
        siteName: "Kaushal Darji Portfolio"
    }
};

import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${jetbrainsMono.variable} ${inter.variable} font-mono bg-black text-white min-h-screen antialiased`}>
                <div className="relative min-h-screen flex flex-col">
                    {children}
                </div>
                {/* 
                  TODO: Add your Google Analytics Measurement ID below or in .env.local 
                  Example: gaId="G-XXXXXXXXXX" or gaId={process.env.NEXT_PUBLIC_GA_ID}
                */}
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
            </body>
        </html>
    );
}
