import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FreeServer | 免費伺服 v3",
  description: "歡迎來到 FreeServer，我們提供免費的 Minecraft 、Discord機器人...等酷酷的台灣伺服器，歡迎加入 Discord 社群一起玩! useRouter( use",
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
