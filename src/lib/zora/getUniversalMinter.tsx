import { zoraUniversalMinterAddress } from "@/lib/consts"

const getUniversalMinter = (chainId) =>
  zoraUniversalMinterAddress[chainId as keyof typeof zoraUniversalMinterAddress]

export default getUniversalMinter
