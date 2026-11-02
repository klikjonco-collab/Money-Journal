// Local preview: serves the app the way the artifact platform does, wrapping the HTML fragment in a document shell.
const http = require("http"), fs = require("fs"), path = require("path");
const root = path.resolve(process.argv[2] || path.join(__dirname, ".."));
const port = Number(process.env.PORT) || 4173;
const TYPES = { ".html": "text/html; charset=utf-8", ".woff2": "font/woff2", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg" };

http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split("?")[0]);
  const p = path.join(root, url === "/" ? "money-journal.html" : url);
  if (!p.startsWith(root)) { res.writeHead(403); return res.end("forbidden"); }
  fs.readFile(p, (err, data) => {
    if (err) { res.writeHead(404); return res.end("not found"); }
    const ext = path.extname(p);
    res.writeHead(200, { "Content-Type": TYPES[ext] || "application/octet-stream" });
    res.end(ext === ".html" ? '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' + data : data);
  });
}).listen(port, () => console.log("Money Journal: http://localhost:" + port));
