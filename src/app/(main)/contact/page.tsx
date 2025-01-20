import type { Metadata } from "next"
import ContactPage from "@/components/Pages/ContactPage"

export const metadata: Metadata = {
  title: "HENO. Contact",
  description: "WELCOME",
  icons: [{ url: "/images/Landing/web3.JPEG" }],
  keywords: [],
  openGraph: {
    type: "website",
    url: "https://heno-website.vercel.app/",
    title: "HENO. Contact",
    description: "WELCOME",
    siteName: "@HENO",
    images: [{ url: "/images/Landing/web3.JPEG" }],
  },
}

const Contact = () => <ContactPage />

export default Contact
