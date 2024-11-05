import Image from "next/image"
import { usePageLoadProvider } from "@/providers/PageLoadProvider"
import useIsMobile from "../../hooks/useIsMobile"

const LoadingPage = () => {
  const isMobile = useIsMobile()
  const { setEntered, playAudio } = usePageLoadProvider() as any

  const handleEnter = () => {
    setEntered(true)
    playAudio()
  }

  return (
    <button className="fixed top-0 left-0 w-full h-full z-50" type="button" onClick={handleEnter}>
      <Image
        blurDataURL={isMobile ? "/images/Loading/m_loading.png" : "/images/Loading/loading.png"}
        alt="SYSTEM"
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
        src={isMobile ? "/images/Loading/m_loading.png" : "/images/Loading/loading.png"}
      />
    </button>
  )
}

export default LoadingPage
