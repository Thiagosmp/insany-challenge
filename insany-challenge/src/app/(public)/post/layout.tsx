import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import { Providers } from "@/app/providers";

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