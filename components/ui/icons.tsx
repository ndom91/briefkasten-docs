// import type { SVGProps } from "react"

export interface Props extends React.HTMLProps<HTMLElement> {
  className?: string
  fill?: string
}

export const BriefkastenLogoSvg: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      fill="none"
      aria-hidden="true"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
  )
}
