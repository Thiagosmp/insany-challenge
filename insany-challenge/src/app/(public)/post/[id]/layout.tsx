import type { Metadata } from "next";
import { Providers } from "../../../providers";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "SmartMoney",
  description: "Seu banco!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <Header />
      {children}
    </Providers>
  );
}