import type { Metadata } from "next";
import { archivoSans } from "../fonts";

export const metadata: Metadata = {
  title: "SmartMoney",
  description: "Seu banco!'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${archivoSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
