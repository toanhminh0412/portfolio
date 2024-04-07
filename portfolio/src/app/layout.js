import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Archie To",
    description: "Archie To is a professional website designer and software engineer. Archie is estatic to help business owners to build a strong digital presence for their businesses.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Font Awesome icon */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </head>
            <body className={inter.className}>
                <Navbar/>
                {children}
            </body>
        </html>
    );
}
