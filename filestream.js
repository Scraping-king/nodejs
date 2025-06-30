const fs = require("node:fs");
// const readablestream = fs.createReadStream("./Girmsh.txt", {
//   encoding: "utf-8",
// });
// const writablestream = fs.createWriteStream("./text.txt");

// readablestream.on("data", (chunks) => {
//   console.log(chunks);
//   writablestream.write(chunks);
// });

//if the data is huge
const readablestream = fs.createReadStream("./Girmsh.txt", {
  encoding: "utf-8",
  highWaterMark: 1,
});
const writablestream = fs.createWriteStream("./text.txt");

readablestream.on("data", (chunks) => {
  console.log(chunks);
  writablestream.write(chunks);
});
