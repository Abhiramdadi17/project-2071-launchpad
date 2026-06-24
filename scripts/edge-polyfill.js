// Prepended to dist/server/bundled.js at build time.
// Deno has window === globalThis but no window.history or window.location.
// TanStack Router calls createBrowserHistory() on init which needs both.
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
