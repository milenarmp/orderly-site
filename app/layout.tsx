import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orderly | CRM para delivery no WhatsApp",
  icons: {
    icon: "/favicon.png",
  },
  description:
    "Organize pedidos, tenha insights com IA e fidelize clientes no WhatsApp com o Orderly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}