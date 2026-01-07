import type { Metadata } from "next";
import { Poppins, Sorts_Mill_Goudy } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/lenis";
import { NextIntlClientProvider,hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";


const poppins = Poppins({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const sortsMillGoudy = Sorts_Mill_Goudy({
    variable: "--font-mono",
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata: Metadata = {
    title: "Sudip Sharma | Software Engineer",
    description: "I’m Sudip Sharma, a full-stack developer who believes technology is more than code — it’s a bridge between ideas and impact. From an early curiosity about how things work to a professional pursuit of building scalable, user-focused solutions, I’ve always been driven by a desire to learn, create, and grow.\n\nMy mission is simple: to be happy and spread happiness through my work and interactions. Whether it’s solving complex technical challenges or exploring new technologies, I approach every project with creativity, curiosity, and a commitment to excellence.\n\nI see every line of code as an opportunity to craft something meaningful — to make systems smarter, users happier, and life a little better through innovation and thoughtful design",
};

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string}>;
}>) {
    const { locale} =await params;
    if(!hasLocale(routing.locales,locale)){
        notFound();

    }
    return (
        <html lang="en">
            <body>
                <LenisScroll />
                <NextIntlClientProvider>
                    <div className={`${poppins.variable} ${sortsMillGoudy.variable} font-sans`}>
                        {children}
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
