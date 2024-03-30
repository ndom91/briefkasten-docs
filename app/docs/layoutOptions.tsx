import { pageTree } from "../source"
import { type DocsLayoutProps } from "fumadocs-ui/layout"
import { Logo } from "@/components/ui/icons"

export const layoutOptions: Omit<DocsLayoutProps, "children"> = {
  tree: pageTree,
  nav: {
    transparentMode: "top",
    title: (
      <>
        <Logo
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
      text: "Docs v1",
      url: "https://v1.docs.briefkastenhq.com",
      external: true,
    },
    {
      text: "Login",
      url: "https://dev.briefkastenhq.com",
      external: true,
    },
  ],
}
