import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("Hello World\n", { status: 200 });
    } else if (url.pathname === "/login") {
      return new Response("This is login a page\n", { status: 200 });
    } else {
      return new Response("Page not found\n", { status: 404 });
    }
  },
  port: 3000,
  hostname: "127.0.0.1",
});
