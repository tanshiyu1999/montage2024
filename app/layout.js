import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Montage 2024",
  description: "Montage 2024 is NUSPS's annual flagship event.",
  image: "/montage-black.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
