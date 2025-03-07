import { Address } from "viem"
import getMintPoints from "@/lib/stack/getMintPoints"
import getTotalPoints from "@/lib/getTotalPoints"
import getStackClient from "@/lib/stack/getStackClient"
import { toast } from "react-toastify"

const useMintPoints = () => {
  const updateMintPoints = async (address: Address) => {
    if (!address) return

    const points = await getTotalPoints(address)
    const mintPoints = await getMintPoints(address)

    if (points === 0) {
      toast.error("no tokens owned. please collect a token from Heno. to start earning points.")
      return
    }

    const newPoints = points - mintPoints
    const stackClient = getStackClient()

    if (newPoints > 0) {
      await stackClient.track("heno_mints_500", {
        points: newPoints,
        account: address as Address,
        uniqueId: `${Date.now()}`,
      })
      toast.success(`${newPoints} awarded!!!`)
      return
    }

    toast.success("you've already claimed all points. mint another token from Heno. to earn more.")
  }

  return {
    updateMintPoints,
  }
}

export default useMintPoints
