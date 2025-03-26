"use client"

import { usePageLoadProvider } from "@/providers/PageLoadProvider"
import DraggableModal from "@/components/Core/DraggableModal"
import { useState } from "react"
import useIsMobile from "@/hooks/useIsMobile"
import { SCREENS } from "@/lib/screens"
import { usePopupWidget } from "@/providers/PopupWidgetProvider"
import LandingCard from "../../LandingCard"
import Layout from "../../Layout"
import CTAContent from "../CTAContent"

const LandingPage = () => {
  const { openPopUp } = usePopupWidget() as any
  const { entered } = usePageLoadProvider()
  const isMobile = useIsMobile()
  const [isBonsaiOpen, setIsBonsaiOpen] = useState<any>(true)

  return (
    <Layout type={isMobile ? "mobile" : "base"}>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-y-[10px] md:gap-[20px] 
        h-[calc(100%-40px)] md:h-full ${!entered ? "hidden" : ""}`}
      >
        <LandingCard
          title="ABOUT"
          img="/images/Landing/about.png"
          onClick={() => openPopUp(SCREENS.ABOUT_SCREEN.screenName)}
          cctvNumber={1}
        />
        <LandingCard
          title="MUSIC"
          img="/images/Landing/music.JPG"
          onClick={() => openPopUp(SCREENS.MUSIC_SCREEN.screenName)}
          cctvNumber={2}
        />
        <LandingCard
          title="Europe Tour"
          img="/images/Landing/web3.jpeg"
          onClick={() => openPopUp(SCREENS.EUROPE_TOUR_SCREEN.screenName)}
          cctvNumber={3}
        />
        <LandingCard
          title="PRESS"
          img="/images/Landing/press.png"
          onClick={() => openPopUp(SCREENS.PRESS_SCREEN.screenName)}
          cctvNumber={4}
        />
      </div>
      {isMobile && (
        <a
          type="button"
          className="w-full bg-gray_1 font-dresden h-[35px] mt-[5px]
        flex justify-center items-center"
          href="https://play.mynameisheno.com/"
          target="_blank"
          rel="noreferrer"
        >
          Play Relief
        </a>
      )}
      {isBonsaiOpen && (
        <DraggableModal
          href="/"
          handleClose={() => setIsBonsaiOpen(!isBonsaiOpen)}
          isVisible={isBonsaiOpen}
        >
          <CTAContent />
        </DraggableModal>
      )}
    </Layout>
  )
}

export default LandingPage
