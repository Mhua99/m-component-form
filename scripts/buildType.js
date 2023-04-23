import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";
const __filenameNew = fileURLToPath(import.meta.url);
const __dirnameNew = path.dirname(__filenameNew);

const indexPath = path.resolve(__dirnameNew, "../dist/index.d.ts");

const main = () => {
  const template = `export * from "../dist/packages/types"`;
  fs.appendFile(indexPath, template, "utf8");
};

main();
