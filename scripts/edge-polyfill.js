// Prepended to dist/server/bundled.js at build time.
// Deno 2.x removed window global (set to undefined). Restore it so that
// code referencing window.history / window.location doesn't throw.
if (typeof globalThis.window === "undefined") {
  globalThis.window = globalThis;
}
if (typeof globalThis.history === "undefined") {
  globalThis.history = {
    state: null,
    length: 1,
    scrollRestoration: "auto",
    pushState() {},
    replaceState() {},
    go() {},
    back() {},
    forward() {},
  };
}
if (typeof globalThis.location === "undefined") {
  globalThis.location = {
    href: "http://localhost/",
    origin: "http://localhost",
    protocol: "http:",
    host: "localhost",
    hostname: "localhost",
    port: "",
    pathname: "/",
    search: "",
    hash: "",
  };
}
