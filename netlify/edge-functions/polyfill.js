// Polyfill browser globals that Deno lacks.
// Deno has window === globalThis but no window.history or window.location.
// TanStack Router calls createBrowserHistory() on init which accesses these.
// The SSR code replaces it with createMemoryHistory() per request after init.

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
