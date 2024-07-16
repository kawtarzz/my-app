import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "animate.css/animate.compat.css"

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kawtar Azzouzi",
  description: "Web Development Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        
        {children}
        </body>
    </html>
  );
}
