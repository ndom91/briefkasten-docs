import { generateFiles } from "fumadocs-openapi"

/**
 * @type {import("fumadocs-openapi").Config}
 * @todo Add OpenAPI Plugin to API Server
 */
void generateFiles({
  input: ["./briefkasten.openapi.yaml"],
  output: "./content/docs",
  per: "file",
  name: () => "api-reference",
})
