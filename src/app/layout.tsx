import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const dmReg = localFont({
  src: "./fonts/DMMono-Regular.ttf",
  variable: "--font-dm-mono-req",
});

const dmMed = localFont({
  src: "./fonts/DMMono-Medium.ttf",
  variable: "--font-dm-mono-med",
});

export const metadata: Metadata = {
  title: "Taja - Chat. Shop. Sell.",
  description: "Shop & sell through WhatsApp conversations with Taja. No apps, no websites — just chat, browse products, and complete secure payments.",
  icons: {
    icon: "/images/os-image.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmMed.variable} ${dmReg.variable} antialiased bg-background`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
