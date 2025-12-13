import "./globals.css";
import { Inter } from "next/font/google";

// 👇 this line creates the "inter" font object
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tam Shi Ying | Portfolio",
  description: "Portfolio of Tam Shi Ying, IT student at Ngee Ann Polytechnic.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 👇 make sure this matches the const name above */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
