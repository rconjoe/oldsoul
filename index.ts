import { $ } from "bun";

const server = Bun.serve({
  port: 4250,
  async fetch(req) {
    const here = new URL(req.url);
    if (here.pathname === "/") {
	    const now = Date.now()
	    await $`figlet -f small -w 48 -Wk -c ${req.headers.get("title")
	      } | tee /tmp/DEVTERM_PRINTER_IN`;
	    await $`figlet -f mini -w 48 -c ${req.headers.get("subtitle")} | tee /tmp/DEVTERM_PRINTER_IN`;
	    await $`figlet -f term -w 48 -c "~" | tee /tmp/DEVTERM_PRINTER_IN`;
	    await $`figlet -f term -w 48 -c ${new Intl.DateTimeFormat("en-US", {
		    dateStyle: "full",
		    timeStyle: "long",
		    timeZone: "America/Los_Angeles"
	    }).format(new Date(now))} | tee /tmp/DEVTERM_PRINTER_IN`;
	    await $`figlet -f term -w 48 -c "~" | tee /tmp/DEVTERM_PRINTER_IN`;
	    await $`figlet -f term -w 48 -l ${req.headers.get("message")} | tee /tmp/DEVTERM_PRINTER_IN`;
	    await $`figlet -f term -w 48 -c "~" | tee /tmp/DEVTERM_PRINTER_IN`;
	    await $`figlet -f term -w 48 -c ${req.url} | tee /tmp/DEVTERM_PRINTER_IN`;
    }
    if (here.pathname === "/json") {
	    const now = Date.now()
	    await $`figlet -f small -w 48 -Wk -c "json" | tee /tmp/DEVTERM_PRINTER_IN`;
	    await $`figlet -f mini -w 48 -c "generic"} | tee /tmp/DEVTERM_PRINTER_IN`;
	    await $`figlet -f term -w 48 -c "~" | tee /tmp/DEVTERM_PRINTER_IN`;
	    await $`figlet -f term -w 48 -c ${new Intl.DateTimeFormat("en-US", {
		    dateStyle: "full",
		    timeStyle: "long",
		    timeZone: "America/Los_Angeles"
	    }).format(new Date(now))} | tee /tmp/DEVTERM_PRINTER_IN`;
	    await $`figlet -f term -w 48 -c "~" | tee /tmp/DEVTERM_PRINTER_IN`;
	    await $`figlet -f term -w 48 -l ${JSON.stringify(req.body)} | tee /tmp/DEVTERM_PRINTER_IN`;
	    await $`figlet -f term -w 48 -c "~" | tee /tmp/DEVTERM_PRINTER_IN`;
	    await $`figlet -f term -w 48 -c ${req.url} | tee /tmp/DEVTERM_PRINTER_IN`;
    }
    return new Response("ok");
  },
});

console.log(`Listening on ${server.url}`);

// console.log("Enter text:");

// for await (const chunk of Bun.stdin.stream()) {
//   // chunk is Uint8Array
//   // this converts it to text (assumes ASCII encoding)
//   const chunkText = Buffer.from(chunk).toString();
//   console.log(`Chunk: ${chunkText}`);
//   // Bun.write("/tmp/DEVTERM_PRINTER_IN", chunkText);
//   await $`figlet -f small -w 48 ${chunkText} | tee /tmp/DEVTERM_PRINTER_IN`;
// }
