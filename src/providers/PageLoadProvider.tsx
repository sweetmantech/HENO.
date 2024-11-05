"use client"

import usePageLoad from "@/hooks/usePageLoad"
import { createContext, useContext, useMemo } from "react"

const PageLoadContext = createContext(null)

const PageLoadProvider = ({ children }) => {
  const pageLoad = usePageLoad()

  const value: any = useMemo(
    () => ({
      ...pageLoad,
    }),
    [pageLoad],
  )

  return <PageLoadContext.Provider value={value}>{children}</PageLoadContext.Provider>
}

export const usePageLoadProvider = () => {
  const context = useContext(PageLoadContext)
  if (!context) {
    throw new Error("usePageLoadProvider must be used within a PageLoadProvider")
  }
  return context
}

export default PageLoadProvider
