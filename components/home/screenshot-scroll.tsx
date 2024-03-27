"use client"

import { useLayoutEffect } from "react"

import { useParams } from "next/navigation"
import Image from "next/image"
import * as React from "react"
import app0 from "../../public/screenshots/app0.png"
import app1 from "../../public/screenshots/app1.png"
import app2 from "../../public/screenshots/app2.png"
import app3 from "../../public/screenshots/app3.png"
import app4 from "../../public/screenshots/app4.png"
import app5 from "../../public/screenshots/app5.png"
import app6 from "../../public/screenshots/app6.png"

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
    <div className="relative my-48 w-screen homepage-scroll">
      <div className="track">
        <ul>
          <li id="one">
            <article>
              <Image src={app4} alt="Bookmarks List" className="rounded-2xl" />
            </article>
          </li>
          <li id="two">
            <article>
              <Image src={app1} alt="Settings" className="rounded-2xl" />
            </article>
          </li>
          <li id="three">
            <article>
              <Image
                src={app2}
                alt="RSS Feed Reading"
                className="rounded-2xl"
              />
            </article>
          </li>
          <li id="four">
            <article>
              <Image src={app3} alt="Home Dashboard" className="rounded-2xl" />
            </article>
          </li>
          <li id="five">
            <article>
              <Image
                src={app0}
                alt="Bookmarks List with Edit Sidebar"
                className="rounded-2xl"
              />
            </article>
          </li>
          <li id="six">
            <article>
              <Image src={app5} alt="Light Mode" className="rounded-2xl" />
            </article>
          </li>
          <li id="seven">
            <article>
              <Image src={app6} alt="Command Palette" className="rounded-2xl" />
            </article>
          </li>
        </ul>
        <div className="track__indicators" aria-hidden="true">
          <a href="#one" onClick={replaceState} className="indicator"></a>
          <a href="#two" onClick={replaceState} className="indicator"></a>
          <a href="#three" onClick={replaceState} className="indicator"></a>
          <a href="#four" onClick={replaceState} className="indicator"></a>
          <a href="#five" onClick={replaceState} className="indicator"></a>
          <a href="#six" onClick={replaceState} className="indicator"></a>
          <a href="#seven" onClick={replaceState} className="indicator"></a>
        </div>
      </div>
    </div>
  )
}
