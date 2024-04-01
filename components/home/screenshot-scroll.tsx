"use client"

import { useLayoutEffect } from "react"

import { useParams } from "next/navigation"
import Image from "next/image"
import * as React from "react"
import app0 from "../../public/screenshots/app0-dark.png"
import app1 from "../../public/screenshots/app1-dark.png"
import app1Light from "../../public/screenshots/app1-light.png"
import app2 from "../../public/screenshots/app2-dark.png"
import app2Light from "../../public/screenshots/app2-light.png"
import app3 from "../../public/screenshots/app3-dark.png"
import app3Light from "../../public/screenshots/app3-light.png"
import app4 from "../../public/screenshots/app4-dark.png"
import app5 from "../../public/screenshots/app5-dark.png"

export const ScreenshotScroll = () => {
  function replaceState(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault()
    // @ts-expect-error - Shh, its fine. Anchor elements have hrefs.
    history.replaceState({}, "", e.target?.href)
  }

  const params = useParams()

  useLayoutEffect(() => {
    const currentHash = window.location.hash.replace("#", "")

    if (currentHash) {
      const track = document.querySelector(".track ul")!
      const initialOffset = document.getElementById("one")?.offsetLeft ?? 0
      const element = document.getElementById(currentHash)

      if (element) {
        track.scrollTo({
          left: element.offsetLeft - initialOffset,
          behavior: "smooth",
        })
      }
    }
  }, [params])

  return (
    <section className="relative mt-48 mb-12 w-screen homepage-scroll">
      <div className="relative mx-auto h-2 max-w-[1400px]">
        <div className="absolute left-0 -top-40 font-extrabold min-w-[911px] opacity-[0.05] font-heading text-[12rem]">
          Screenshots
        </div>
      </div>
      <div className="track">
        <ul>
          <li id="one">
            <article>
              <Image
                src={app1Light}
                className="opacity-100 transition dark:opacity-0 size-fit dark:size-0"
                sizes="(max-width: 640px) 400px, (max-width: 960px) 500px, 1000px"
                quality={100}
                alt="Bookmarks List"
                priority
                placeholder="blur"
              />
              <Image
                src={app1}
                className="opacity-0 transition dark:opacity-100 size-0 dark:size-fit"
                sizes="(max-width: 640px) 400px, (max-width: 960px) 500px, 1000px"
                quality={100}
                alt="Bookmarks List"
                priority
                placeholder="blur"
              />
            </article>
          </li>
          <li id="two">
            <article>
              <Image
                src={app0}
                alt="Empty State"
                className=""
                sizes="(max-width: 640px) 400px, (max-width: 960px) 500px, 1000px"
                quality={100}
                placeholder="blur"
              />
            </article>
          </li>
          <li id="three">
            <article>
              <Image
                src={app2}
                alt="Command Palette"
                className="opacity-0 transition dark:opacity-100 size-0 dark:size-fit"
                sizes="(max-width: 640px) 400px, (max-width: 960px) 500px, 1000px"
                quality={100}
                placeholder="blur"
              />
              <Image
                src={app2Light}
                alt="Command Palette"
                className="object-cover opacity-100 transition dark:opacity-0 size-fit dark:size-0"
                sizes="(max-width: 640px) 400px, (max-width: 960px) 500px, 1000px"
                quality={100}
                placeholder="blur"
              />
            </article>
          </li>
          <li id="four">
            <article>
              <Image
                src={app3}
                alt="Settings Page"
                className="opacity-0 transition dark:opacity-100 size-0 dark:size-fit"
                sizes="(max-width: 640px) 400px, (max-width: 960px) 500px, 1000px"
                quality={100}
                placeholder="blur"
              />
              <Image
                src={app3Light}
                alt="Settings Page"
                className="opacity-100 transition dark:opacity-0 size-fit dark:size-0"
                sizes="(max-width: 640px) 400px, (max-width: 960px) 500px, 1000px"
                quality={100}
                placeholder="blur"
              />
            </article>
          </li>
          <li id="five">
            <article>
              <Image
                src={app4}
                alt="Empty Bookmark State - Light Mode"
                className=""
                sizes="(max-width: 640px) 400px, (max-width: 960px) 500px, 1000px"
                quality={100}
                placeholder="blur"
              />
            </article>
          </li>
          <li id="six">
            <article>
              <Image
                src={app5}
                alt="Feeds Audio Example"
                className=""
                sizes="(max-width: 640px) 400px, (max-width: 960px) 500px, 1000px"
                quality={100}
                placeholder="blur"
              />
            </article>
          </li>
        </ul>
        <div
          className="track__indicators focus:*:ring focus:*:ring-neutral-100/20 *:outline-none dark:focus:*:ring-neutral-600 *:transition"
          aria-hidden="true"
        >
          <a href="#one" onClick={replaceState} className="indicator"></a>
          <a href="#two" onClick={replaceState} className="indicator"></a>
          <a href="#three" onClick={replaceState} className="indicator"></a>
          <a href="#four" onClick={replaceState} className="indicator"></a>
          <a href="#five" onClick={replaceState} className="indicator"></a>
          <a href="#six" onClick={replaceState} className="indicator"></a>
        </div>
      </div>
    </section>
  )
}
