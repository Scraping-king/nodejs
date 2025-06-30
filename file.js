const fs = require("node:fs");
// //read a file
// const tex = fs.readFileSync("./text.txt");
// console.log(tex);

//but nodejs is asyncroneous
// const { error } = require("node:console");
// const tex = fs.readFile("./text.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });
// console.log(tex);

//creating file by using write
// fs.writeFile("./text1.txt", "subscribe", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("file is created");
//   }
// });

//creating file by using append
// fs.appendFile("./text2.txt", "subscribe now!", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("file is created");
//   }
// });

//updating file
// fs.appendFile("./text.txt", "Ethiopia!", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("file is updated");
//   }
// });

// fs.writeFile("./text.txt", "Ethiopia!", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("file is updated");
//   }
// });

//deleting a file
// fs.unlink("./text.txt", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("file is deleted");
//   }
// });

//renaming a file
fs.rename("./text1.txt", "./Girmsh.txt", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("file is renamed");
  }
});
