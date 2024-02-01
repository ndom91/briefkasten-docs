import "fumadocs-ui/twoslash.css"
import { pageTree } from "../source"
import { type DocsLayoutProps } from "fumadocs-ui/layout"
import { DocsLayout } from "fumadocs-ui/layout"
import { create } from "@/components/ui/icon"
import { BriefkastenLogoSvg } from "@/components/ui/logos"
import { RollButton } from "fumadocs-ui/components/roll-button"
import { HomeIcon } from "lucide-react"
import type { ReactNode } from "react"

export const layoutOptions: Omit<DocsLayoutProps, "children"> = {
  tree: pageTree,
  nav: {
    transparentMode: "none",
    title: (
      <>
        <BriefkastenLogoSvg
          className="text-black dark:text-white size-5"
          fill="currentColor"
        />
        <span className="ml-3 font-semibold max-md:hidden">Briefkasten</span>
      </>
    ),
    // children: <NavChildren />,
    githubUrl: "https://github.com/ndom91/briefkasten",
  },
  // sidebar: {
  //   defaultOpenLevel: 0,
  //   banner: <SidebarBanner />,
  // },
  links: [
    {
      text: "Documentation",
      url: "/docs",
      icon: create({ icon: HomeIcon }),
    },
    {
      text: "Login",
      url: "https://briefkastenhq.com",
      icon: create({ icon: HomeIcon }),
    },
  ],
}

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...layoutOptions}>
      {children}
      <RollButton />
    </DocsLayout>
  )
}
