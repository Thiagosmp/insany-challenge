import type { Metadata } from "next";
import { archivoSans } from "../../styles/fonts";
import { Providers } from "../providers"; 

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
    <html lang="pt-br">
      <body className={archivoSans.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}