"use client"

import * as Swetrix from 'swetrix'
import { Suspense } from 'react'
import { usePathname, useSearchParams } from "next/navigation"

function SwetrixComponent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  if (typeof document !== "undefined") {
    Swetrix.init("Av7QEUN6nZXA", {
      apiURL: "https://api.stats.ndo.dev/log",
    })
    let url = pathname
    if (searchParams.toString() !== "") {
      url += `?${searchParams.toString()}`
    }
    Swetrix.trackPageview(url)
  }
  return (
    <div></div>
  )
}

export default function Analytics() {
  return (
    <Suspense>
      <SwetrixComponent />
    </Suspense>
  )
}
