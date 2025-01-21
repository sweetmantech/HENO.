import type { Metadata } from "next"
import AboutPage from "@/components/Pages/AboutPage"

export const metadata: Metadata = {
  title: "HENO. ABOUT",
  description: "WELCOME",
  icons: [{ url: "/images/Landing/about.png" }],
  keywords: [],
  openGraph: {
    type: "website",
    url: "https://heno-website.vercel.app/",
    title: "HENO. ABOUT",
    description: "WELCOME",
    siteName: "@HENO",
    images: [{ url: "/images/Landing/about.png" }],
  },
}

const About = () => <AboutPage />

export default About
