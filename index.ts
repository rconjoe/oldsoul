import { $ } from "bun";

// console.log("Enter text:");

// for await (const chunk of Bun.stdin.stream()) {
//   // chunk is Uint8Array
//   // this converts it to text (assumes ASCII encoding)
//   const chunkText = Buffer.from(chunk).toString();
//   console.log(`Chunk: ${chunkText}`);
//   // Bun.write("/tmp/DEVTERM_PRINTER_IN", chunkText);
//   await $`figlet -f small -w 48 ${chunkText} | tee /tmp/DEVTERM_PRINTER_IN`;
// }

Bun.serve({
  port: 4250,
  fetch(req) {
    console.log(req);
    // await $`figlet -f banner -w 48 -Wk -c ${category} | tee /tmp/DEVTERM_PRINTER_IN`;
    Bun.write("/tmp/DEVTERM_PRINTER_IN", req.url);
    return new Response("ok");
  },
});
