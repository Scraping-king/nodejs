const path = require("node:path");
// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));
// console.log(path.extname(__dirname));

// console.log(path.format(path.parse(__dirname)));
// console.log(path.isAbsolute(__filename));

// console.log(path.join("Projects", "nodejs", "index.js"));
// console.log(path.resolve("Projects", "nodejs", "index.js"));

console.log(path.join("Projects", "nodejs", "../index.js"));
console.log(path.resolve("Projects", "nodejs", "../index.js"));

// console.log(path.join(path.join(__dirname, "./data.json")));
// console.log(path.resolve(path.join(__dirname, "./data.json")));
