import { $ } from "bun";

Bun.serve({
  fetch(req: Request) {
    console.log(req);
    const targout = req.json();
    $`echo ${targout} >> /tmp/DEVTERM_PRINTER_IN`;
    return new Response("ok");
  },
  port: 8005,
});
