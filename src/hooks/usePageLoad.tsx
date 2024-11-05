import handleTxError from "@/lib/handleTxError"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import useLiveTime from "./useLiveTime"

const usePageLoad = () => {
  const [entered, setEntered] = useState(false)
  const { liveTime } = useLiveTime()
  const [granted, setGranted] = useState(false)
  const [stream, setStream] = useState(null) as any
  const videoRef = useRef(null) as any
  const pathname = usePathname()
  const isEmployeePage = pathname.includes("/employee")
  const audioRef = useRef(null) as any

  const playAudio = () => audioRef.current.play()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const grantCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      setStream(mediaStream)
      setGranted(true)
    } catch (error) {
      handleTxError(error)
    }
  }

  useEffect(() => {
    if (stream) {
      videoRef.current.srcObject = stream
      videoRef.current.muted = true
      videoRef.current.play()
    }
  }, [stream])

  useEffect(() => {
    if (isEmployeePage) setEntered(true)
  }, [isEmployeePage])

  useEffect(() => {
    audioRef.current = new Audio(
      "/INSTRUMENTAL 4 Heno_MadKeys Lemons Made Better GS INSTRUMENTAL 24 bit 48khz 082324 01 (1).wav",
    )
    const audio = audioRef.current

    const handleLoadedMetadata = () => {
      audio.volume = 0.5
    }

    audio.addEventListener("loadedmetadata", handleLoadedMetadata)
  }, [])

  return {
    entered,
    setEntered,
    liveTime,
    setGranted,
    granted,
    stream,
    setStream,
    grantCamera,
    videoRef,
    playAudio,
  }
}

export default usePageLoad
