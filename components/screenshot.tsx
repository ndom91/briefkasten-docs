import { cn } from "@/utils/cn"
import Image from "next/image"

type ScreenshotProps = {
  src: string
  alt: string
  full: boolean
  className: string
}

export function Screenshot({
  src,
  alt,
  full = false,
  className,
}: ScreenshotProps) {
  return (
    <div
      className={cn(
        "mt-6 flex justify-center overflow-hidden rounded-lg border dark:border-neutral-800 border-zinc-200 shadow-lg",
        full
          ? "dark:bg-neutral-950 bg-white"
          : "dark:bg-neutral-900 bg-zinc-100",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        className={cn(
          "w-auto select-none bg-white rounded-md",
          full ? "" : "ring-1 ring-gray-200",
        )}
      />
    </div>
  )
}
