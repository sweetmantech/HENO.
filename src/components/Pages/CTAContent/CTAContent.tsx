import RecBar from "../../RecBar"
import useIsMobile from "../../../hooks/useIsMobile"

const CTAContent = () => {
  const isMobile = useIsMobile()
  const healingActive = Date.now() > new Date("2025-03-14").getTime()

  return (
    <div className="p-[5px] md:p-[10px] border-[2px] border-gray_1 h-full">
      <div
        className="border-[1px] border-darkgray text-gray_1 font-dresden 
            py-[25px] text-center
            flex items-center justify-center text-[16px] relative h-full
            text-[12px] md:text-[16px] relative"
      >
        <div
          className="h-fit max-h-full overflow-y-auto text-[12px] md:text-[16px]
            px-[15px] md:px-[20px] flex flex-col items-center gap-y-[5px] md:gap-y-[20px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/cta.png"
            width={isMobile ? 180 : 200}
            height={isMobile ? 125 : 230}
            alt="not found presave album."
          />
          <div className="space-y-2 flex flex-col">
            <button
              type="button"
              className="text-xs border px-2 py-1"
              onClick={() => window.open("https://nfan.link/healingoutloud", "_blank")}
            >
              {healingActive
                ? `"Healing Out Loud" (Album) Out Now`
                : `Presave "Healing Out Loud" Album`}
            </button>
            <button
              type="button"
              className="text-xs border px-2 py-1"
              onClick={() => window.open("https://www.patreon.com/mynameisheno", "_blank")}
            >
              Join Heno. Community
            </button>
          </div>
        </div>
        <RecBar />
      </div>
    </div>
  )
}

export default CTAContent
