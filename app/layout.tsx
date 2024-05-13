import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

const Agrandir = localFont({
  src: [
    {
      path: '../public/fonts/Agrandir Regular 400.otf',
      weight: "400",
    },{
      path: '../public/fonts/Agrandir Text Bold 700.otf',
      weight: "700",
    },
    {
      path: '../public/fonts/Agrandir Wide Light 300.otf',
      weight: "300",
    },
    {
      path: '../public/fonts/Agrandir Grand Heavy 800.otf',
      weight: "800",
    }
  ],
  variable: '--font-agrandir'
})


const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "Eventlly",
  description: "Eventlly is a platform for event management.",
  icons: {
    icon: "/assets/icons/logo-grey.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={Agrandir.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
