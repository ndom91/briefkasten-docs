/**
 * @type {import("fumadocs-openapi").Config}
 * @todo Add OpenAPI Plugin to API Server
 */
module.exports = {
  input: ["./briefkasten.openapi.yaml"],
  output: "./content/docs",
  per: "file",
  name: () => "api-reference",
}
