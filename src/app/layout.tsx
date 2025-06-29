import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "@/styles/globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Filmes e Series Prime Flix",
  description: "Site de filmes e series",
  icons: {
    icon: "/LogoPrimeFlix.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  )
}
