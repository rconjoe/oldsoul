import { $ } from "bun";

console.log("Enter text:");

for await (const chunk of Bun.stdin.stream()) {
  // chunk is Uint8Array
  // this converts it to text (assumes ASCII encoding)
  const chunkText = Buffer.from(chunk).toString();
  console.log(`Chunk: ${chunkText}`);
  // Bun.write("/tmp/DEVTERM_PRINTER_IN", chunkText);
  await $`figlet -f small -w 48 ${chunkText} | tee /tmp/DEVTERM_PRINTER_IN`;
}
