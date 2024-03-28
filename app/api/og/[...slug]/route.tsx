import { ImageResponse } from "next/og"
import { type NextRequest } from "next/server"

export const runtime = "edge"

const foreground = "hsl(0 0% 98%)"
const mutedForeground = "hsl(0 0% 63.9%)"
const background = "rgba(10, 10, 10)"

export async function GET(request: NextRequest): Promise<ImageResponse> {
  const { searchParams, origin } = request.nextUrl
  // console.log("req", request)
  // const origin = request.origin
  const title = searchParams.get("title"),
    description = searchParams.get("description")

  return new ImageResponse(
    OG({
      title: title ?? "Briefkasten",
      description: description ?? "Read-it-later Bookmarks and RSS Reader",
      origin,
    }),
    {
      // debug: true,
      // width: 1000,
      // height: 600,
    },
  )
}

function OG({
  title,
  description,
  origin,
}: {
  title: string
  description: string
  origin: string
}): JSX.Element {
  return (
    <div
      style={{
        color: foreground,
        background,
        flexDirection: "column",
        padding: "4rem",
        height: "100%",
        width: "100%",
        display: "flex",
      }}
    >
      <img
        alt="Screenshot"
        src={`${origin}/screenshots/app4.png`}
        style={{
          opacity: 0.05,
          height: "100vh",
          width: "100vw",
          position: "absolute",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: "2rem",
          }}
        >
          Briefkasten
        </p>
        <p
          style={{
            fontSize: "8rem",
          }}
        >
          {title}
        </p>
        <p
          style={{
            color: mutedForeground,
            fontSize: "2.5rem",
          }}
        >
          {description}
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>ndom91</p>
        <p>docs.briefkastenhq.com</p>
      </div>
    </div>
  )
}
