import type { Metadata } from "next";
import { archivo } from "../../styles/fonts";
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
      <body className={archivo.variable}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}