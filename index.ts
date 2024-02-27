import { $ } from "bun";

Bun.serve({
  fetch(req: Request) {
    const output = JSON.stringify(req);
    console.log(output);
    $`echo ${output} >> /tmp/DEVTERM_PRINTER_IN`;
    return new Response("ok");
  },
  port: 8005,
});
