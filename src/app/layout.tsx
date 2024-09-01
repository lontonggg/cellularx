import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cellular X",
  description: "Cellular X has all the cell phone accessories you need! They have everything from cases to covers in all styles and colours! They also specialize in smart phone repairs! From cracks in your screen to helping to unlock new devices, Cellular X is your place for everything phone related!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
