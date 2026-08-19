const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'frontend');
const port = 5173;

const mime = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
};

http.createServer((req, res) => {
  let filePath = path.join(root, req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': mime[ext] || 'text/plain' });
    res.end(data);
  });
}).listen(port, () => {
  console.log(`Serving ${root} at http://localhost:${port}`);
});
