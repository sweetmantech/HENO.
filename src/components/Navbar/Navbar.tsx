import Link from "next/link"
import { usePathname } from "next/navigation"
import { usePopupWidget } from "../../providers/PopupWidgetProvider"
import PopUpWindows from "../PopUpWindows/PopUpWindows"
import { SCREENS } from "../../lib/screens"
import useIsMobile from "@/hooks/useIsMobile"

const Navbar = () => {
  const pathname = usePathname()
  // const { push } = useRouter()

  const { openPopUp } = usePopupWidget() as any
  const isMobile = useIsMobile()

  const navClasses = `w-fit md:min-w-[80px] px-0 md:px-[10px] md:h-[40px]
  text-[7.5px] md:text-[16px] md:py-[5px] py-[2px] h-fit uppercase
  md:border-none bg-darkgray flex items-center justify-center text-gray_1 font-dresden cursor-pointer`

  const isHomePage = pathname === "/"
  const isAboutPage = pathname.includes("/about")
  const isMusicPage = pathname.includes("/music")
  const isPressPage = pathname.includes("/press")
  const isContactPage = pathname.includes("/contact")
  const isEuropeTour = pathname.includes("/europe-tour")
  const isWeb3Page = pathname.includes("/web3")
  // const isEmployeePage = pathname.includes("/employee")

  return (
    <>
      <div className="w-full px-3 md:px-0 bg-darkgray md:bg-[#00000000] flex justify-between items-center md:justify-start gap-x-[2px] md:gap-x-[10px]">
        <Link href="/">
          <div
            className={`${navClasses}
          ${isHomePage ? "border-b-[2px] border-b-[#347fdb] md:!bg-[#347fdb]" : ""}`}
          >
            Home
          </div>
        </Link>
        <button
          className={`${navClasses}
        ${isAboutPage ? "border-b-[2px] border-b-[#347fdb] md:!bg-[#347fdb]" : ""}`}
          type="button"
          onClick={() => openPopUp(SCREENS.ABOUT_SCREEN.screenName)}
        >
          About
        </button>
        <button
          onClick={() => openPopUp(SCREENS.MUSIC_SCREEN.screenName)}
          type="button"
          className={`${navClasses}
        ${isMusicPage ? "border-b-[2px] border-b-[#347fdb] md:!bg-[#347fdb]" : ""}`}
        >
          Music
        </button>
        {!isMobile && (
          <button
            type="button"
            className={`${navClasses}
        ${isWeb3Page ? "border-b-[2px] border-b-[#347fdb] md:!bg-[#347fdb]" : ""}`}
            onClick={() => openPopUp(SCREENS.WEB3_SCREEN.screenName)}
          >
            Web3
          </button>
        )}
        <button
          type="button"
          onClick={() => openPopUp(SCREENS.PRESS_SCREEN.screenName)}
          className={`${navClasses}
        ${isPressPage ? "border-b-[2px] border-b-[#347fdb] md:!bg-[#347fdb]" : ""}`}
        >
          Press
        </button>
        <button
          type="button"
          onClick={() => openPopUp(SCREENS.CONTACT_SCREEN.screenName)}
          className={`${navClasses}
        ${isContactPage ? "border-b-[2px] border-b-[#347fdb] md:!bg-[#347fdb]" : ""}`}
        >
          Contact
        </button>
        <button
          type="button"
          onClick={() => openPopUp(SCREENS.EUROPE_TOUR_SCREEN.screenName)}
          className={`${navClasses}
        ${isEuropeTour ? "border-b-[2px] border-b-[#347fdb] md:!bg-[#347fdb]" : ""}`}
        >
          Europe Tour
        </button>
        {/* <button
          type="button"
          onClick={() => push("/employee")}
          className={`${navClasses}
        ${isEmployeePage ? "border-b-[2px] border-b-[#347fdb] md:!bg-[#347fdb]" : ""}`}
        >
          Employee
        </button> */}
      </div>
      <PopUpWindows />
    </>
  )
}

export default Navbar
