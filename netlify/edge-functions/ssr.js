import server from "../../dist/server/bundled.js";

export default async (request) => {
  return server.fetch(request, {}, {});
};

export const config = {
  path: "/*",
  excludedPath: ["/assets/*"],
};
