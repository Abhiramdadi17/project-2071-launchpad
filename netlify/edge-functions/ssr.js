import server from "../../dist/server/bundled.js";

export default async (request) => {
  return server.fetch(request, {}, {});
};

export const config = {
  path: "/*",
  excludedPath: [
    "/assets/*",
    "/*.png",
    "/*.jpg",
    "/*.jpeg",
    "/*.webp",
    "/*.svg",
    "/*.ico",
    "/*.gif",
    "/*.woff",
    "/*.woff2",
    "/*.ttf",
    "/*.eot",
    "/*.txt",
    "/*.xml",
    "/*.json",
    "/*.pdf",
  ],
};
