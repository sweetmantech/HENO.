import type { Metadata } from "next"
import IntelPage from "@/components/Pages/IntelPage"

export const metadata: Metadata = {
  title: "HENO. Employee",
  description: "WELCOME",
  icons: [{ url: "/images/Landing/web3.JPEG" }],
  keywords: [],
  openGraph: {
    type: "website",
    url: "https://heno-website.vercel.app/",
    title: "HENO. Employee",
    description: "WELCOME",
    siteName: "@HENO",
    images: [{ url: "/images/Landing/web3.JPEG" }],
  },
}

const Intel = () => <IntelPage />

export default Intel
