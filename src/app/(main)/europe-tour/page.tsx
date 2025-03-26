import type { Metadata } from "next"
import EuropeTourPage from "@/components/Pages/EuropeTourPage"

export const metadata: Metadata = {
  title: "HENO. Europe Tour",
  description: "WELCOME",
  icons: [{ url: "/images/Landing/web3.jpeg" }],
  keywords: [],
  openGraph: {
    type: "website",
    url: "https://heno-website.vercel.app/",
    title: "HENO. Europe Tour",
    description: "WELCOME",
    siteName: "@HENO",
    images: [{ url: "/images/Landing/web3.jpeg" }],
  },
}

const Web3 = () => <EuropeTourPage />

export default Web3
