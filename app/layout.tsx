import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "..//styles/globals.css";
import Image from "next/image";


const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: [ "100","300","400","700","900"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "RideSmart",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable}  antialiased max-w-7xl 2xl:mx-auto `}
      >
        {children}
      </body>
    </html>
  );
}
