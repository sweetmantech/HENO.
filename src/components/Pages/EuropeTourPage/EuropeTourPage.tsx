"use client"

import useIsMobile from "@/hooks/useIsMobile"
import Layout from "../../Layout"
import EuropeTourContent from "./EuropeTourContent"

const EuropeTourPage = () => {
  const isMobile = useIsMobile()

  return (
    <Layout type={isMobile ? "mobile" : "base"}>
      <EuropeTourContent />
    </Layout>
  )
}

export default EuropeTourPage
