import { pageTree } from "../source";
import { type DocsLayoutProps } from "fumadocs-ui/layout";
import { Logo } from "@/components/ui/icons";

export const layoutOptions: Omit<DocsLayoutProps, "children"> = {
  tree: pageTree,
  sidebar: {
    collapsible: false,
  },
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
      text: "Login",
      url: "https://briefkastenhq.com",
      external: true,
    },
  ],
};
