const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>hello node</h1>");
  }
});

server.listen(3000, (err) => {
  if (err) throw err;
  console.log("sercer is up and running correctly on 3000...");
});
