Bun.serve({
  fetch(req: Request) {
    Bun.$`echo ${req.body} > /tmp/DEVTERM_PRINTER_IN`;
    return new Response("ok");
  },
  port: 8005,
});
