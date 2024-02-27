Bun.serve({
  fetch(req: Request) {
    Bun.write("/tmp/DEVTERM_PRINTER_IN", JSON.stringify(req.body));
    return new Response("ok");
  },
  port: 8005,
});
