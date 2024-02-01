import type { Icon } from "@phosphor-icons/react"
import { Terminal } from "@phosphor-icons/react/dist/ssr"

export function create({ icon: Icon }: { icon?: Icon }): JSX.Element {
  return (
    <div className="p-1 bg-gradient-to-b rounded-md border shadow-sm from-secondary">
      {Icon ? <Icon /> : <Terminal />}
    </div>
  )
}
