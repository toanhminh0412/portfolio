import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Archie To",
    description: "Hi! My name is Archie To. I'm a professional web developer working full-time for the University of Victoria. I offer my service to help business owners build a beautiful website for their business. With 5 years of experience, I can make your vision on the web come true.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Font Awesome icon */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                {/* <!-- Google tag (gtag.js) --> */}
                <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}></Script>
                <Script id="google-analytics">
                    {`window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');`}
                </Script>
            </head>
            <body className={inter.className}>
                <Navbar/>
                {children}
            </body>
        </html>
    );
}
