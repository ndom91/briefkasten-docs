import { ImageResponse } from "next/og"
import { type NextRequest } from "next/server"

export const runtime = "edge"

const foreground = "hsl(0 0% 98%)"
const mutedForeground = "hsl(0 0% 63.9%)"
const background = "rgba(10, 10, 10)"

export async function GET(request: NextRequest): Promise<ImageResponse> {
  const { searchParams } = request.nextUrl
  const title = searchParams.get("title"),
    description = searchParams.get("description")

  return new ImageResponse(
    OG({
      title: title ?? "Briefkasten",
      description: description ?? "Read-it-later Bookmarks and RSS Reader",
    }),
  )
}

function OG({
  title,
  description,
}: {
  title: string
  description: string
}): JSX.Element {
  return (
    <div
      style={{
        color: foreground,
        background,
      }}
      className="flex flex-col p-12 w-full h-full"
    >
      <div
        style={{
          background:
            "linear-gradient(to right bottom, rgb(150, 200, 255), rgb(200, 100, 255))",
        }}
        className="flex flex-col justify-center p-4 rounded-2xl shadow-2xl shadow-purple-600"
      >
        <div
          className="flex flex-col p-12 rounded-2xl"
          style={{
            border: "1px rgba(156,163,175,0.3)",
            background,
          }}
        >
          <p className="text-6xl font-bold">{title}</p>
          <p
            className="text-4xl"
            style={{
              color: mutedForeground,
            }}
          >
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center p-4 mt-auto">
        <svg
          fill="currentColor"
          height="60"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="60"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          <path d="M5 3v4" />
          <path d="M19 17v4" />
          <path d="M3 5h4" />
          <path d="M17 19h4" />
        </svg>
        <p className="ml-4 text-4xl font-bold">ndom91</p>
      </div>
    </div>
  )
}
