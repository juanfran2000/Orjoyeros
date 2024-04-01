import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Orjoyeros",
  description: "Fabrica & Joyeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header></header>
        <main>
          {children}
          <footer></footer>
        </main>
      </body>
    </html>
  );
}
