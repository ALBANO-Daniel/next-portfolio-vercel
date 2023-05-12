import TopBar from "@/assets/components/TopBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/assets/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
