import type { Metadata } from "next"
import PressPage from "@/components/Pages/PressPage"

export const metadata: Metadata = {
  title: "HENO. PRESS",
  description: "WELCOME",
  icons: [{ url: "/images/Landing/press.png" }],
  keywords: [],
  openGraph: {
    type: "website",
    url: "https://heno-website.vercel.app/",
    title: "HENO. PRESS",
    description: "WELCOME",
    siteName: "@HENO",
    images: [{ url: "/images/Landing/press.png" }],
  },
}

const Press = () => <PressPage />

export default Press
