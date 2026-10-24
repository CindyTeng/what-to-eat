import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "今日食堂｜今天，想吃點什麼？", description: "挑選今天想吃的口味，轉出一頓剛剛好的飯。" };
export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="zh-Hant"><body>{children}</body></html>; }