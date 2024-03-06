import { $ } from "bun";

for await (const chunk of Bun.stdin.stream()) {
  // chunk is Uint8Array
  // this converts it to text (assumes ASCII encoding)
  const chunkText = Buffer.from(chunk).toString();
  console.log(`Chunk: ${chunkText}`);
  Bun.write("/tmp/DEVTERM_PRINTER_IN", chunkText);
  Bun.spawn(
    `figlet -f script -w 48 -Wk ${chunkText} | tee /tmp/DEVTERM_PRINTER_IN`,
  );
}
