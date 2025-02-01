import { Archivo } from "next/font/google";

export const archivoSans = Archivo({
  weight: ["400","600", "700"],
  variable: "--font-archivo-sans",
  subsets: ["latin"],
});