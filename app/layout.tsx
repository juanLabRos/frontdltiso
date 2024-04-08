import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "./context/useUser";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Login DLTCode ISO",
  description: "Create Login DLTCode ISO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <UserProvider>
        <body className={inter.className}>{children}</body>
      </UserProvider>
    </html>
  );
}
