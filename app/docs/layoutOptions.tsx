import { pageTree } from "../source"
import { type DocsLayoutProps } from "fumadocs-ui/layout"
import { create } from "@/components/ui/icon"
import { BriefkastenLogoSvg } from "@/components/ui/logos"
import { HouseSimple } from "@phosphor-icons/react/dist/ssr"

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
      icon: create({ icon: HouseSimple }),
    },
    {
      text: "Login",
      url: "https://briefkastenhq.com",
      icon: create({ icon: HouseSimple }),
    },
  ],
}
