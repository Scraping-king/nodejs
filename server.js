// const ht = require("node:http");
// const server = ht.createserver((req, res) => {
//   res.writehead(200);
//   res.end("HELLO GIRMA");
// });
// server.listen(3000, () => {
//   console.log("server is running");
// });

//to restrict the data type
const ht = require("node:http");

const server = ht.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" }); // Correct header casing
  res.end("HELLO GIRMA");
});

server.listen(3000, () => {
  console.log("server is running...");
});
