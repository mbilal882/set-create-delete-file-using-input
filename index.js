const fs = require("fs");
const path = require("path");
const dirName = path.join(__dirname, "files");

console.log(dirName);
//  This will make files
// for (i = 0; i < 5; i++) {
//   fs.writeFileSync(`${dirName}/${i}.txt`, `This is file ${i}`);
// }

//* Now i want to list all files in files folder
fs.readdir(dirName, (err, files) => {
  //   console.log(files); //for all files list in an array
  // for a file separately
  files.forEach((file) => {
    console.log(file);
  });
});

// const input = process.argv;

// fs.writeFileSync(input[2], input[3]);

// console.log(process.argv[2]); //cmd node index.js something //*It will print something

// if (input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("Invalid Data");
// }
