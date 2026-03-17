import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p: string) => path.resolve(__dirname, "..", p);

async function prerender() {
  const distPath = toAbsolute("dist");
  const template = fs.readFileSync(path.join(distPath, "index.html"), "utf-8");

  // Import the server entry
  const serverEntryPath = path.join(distPath, "server", "entry-server.js");
  const { render, routes } = await import(pathToFileURL(serverEntryPath).href);

  for (const url of routes) {
    const { html: appHtml } = render(url);

    // Inject rendered HTML into template
    const finalHtml = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // Determine output path
    const filePath =
      url === "/" ? "index.html" : `${url.slice(1)}.html`;
    const outputPath = path.join(distPath, filePath);

    // Ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, finalHtml);
    console.log(`Pre-rendered: ${url} -> ${filePath}`);
  }

  console.log("\nPre-rendering complete!");
}

prerender().catch(console.error);
