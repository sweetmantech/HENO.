import React from "react"
import WebCam from "@/components/WebCam"
import Navbar from "@/components/Navbar"
import CameraFeed from "@/components/CameraFeed"
import CameraFeedProvider from "@/providers/CameraFeedProvider"
import SocialLinks from "@/components/SocialLinks"
import { usePageLoadProvider } from "@/providers/PageLoadProvider"
import { ILayout } from "../types"

const BaseLayout = ({ children }: ILayout) => {
  const { entered } = usePageLoadProvider()

  return (
    <div className="w-screen h-screen py-[30px] px-[50px]">
      <div className="flex flex-col h-[calc(100vh-105px)] gap-y-[5px]">
        {entered && (
          <div className="flex justify-between">
            <Navbar />
            <SocialLinks className="!w-auto !gap-x-[5px]" />
          </div>
        )}
        <div className="flex flex-grow h-full gap-x-[20px]">
          <div className="flex-grow w-[calc(100vw-490px)]">{children}</div>
          {entered && (
            <div className="w-[370px] flex flex-col gap-y-[20px]">
              <div className="h-[calc(50%-10px)] border border-white">
                <WebCam />
              </div>
              <div className="h-[calc(50%-10px)] flex flex-col gap-4">
                <div className="border-gray_1 border-[2px] py-[10px] overflow-y-auto">
                  <CameraFeedProvider>
                    <CameraFeed />
                  </CameraFeedProvider>
                </div>
                <div className="border-gray_1 border-[2px]">
                  <a href="https://play.mynameisheno.xyz/" target="_blank" rel="noreferrer">
                    {/* eslint-disable-next-line  @next/next/no-img-element */}
                    <img src="/images/Landing/play_relief.png" alt="not found relief" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BaseLayout
