import { pageTree } from "../source"
import { type DocsLayoutProps } from "fumadocs-ui/layout"
import { BriefkastenLogoSvg } from "@/components/ui/icons"

export const layoutOptions: Omit<DocsLayoutProps, "children"> = {
  tree: pageTree,
  nav: {
    transparentMode: "always",
    title: (
      <>
        <BriefkastenLogoSvg
          className="text-black dark:text-white size-5"
          fill="currentColor"
        />
        <span className="ml-3 font-semibold max-md:hidden">Briefkasten</span>
      </>
    ),
    githubUrl: "https://github.com/ndom91/briefkasten",
  },
  links: [
    {
      text: "Documentation",
      url: "/docs",
    },
    {
      text: "Try App",
      url: "https://briefkastenhq.com",
      external: true,
    },
  ],
}
