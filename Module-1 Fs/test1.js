// You are given path of a directory It contains n number of text files and n number 
// of directories.Write code in nodejs to read all all the files and create a new 
// file in that directory named summary.txt
//  and dump all the content from these files.

let path = require("path");
let fs = require("fs");
let inputArr = process.argv.slice(2);
let mainDir = inputArr[0];
let readFiles = fs.readFileSync("f1.txt");

// for(let i = 0 ; i < readFiles.length;i++){
//     let content = fs.readFileSync(readFiles[i]);
//     console.log(content);
// }
console.log(readFiles);
// let pathJoin = path.join(mainDir, "summer.txt");
// console.log(pathJoin, "file created");
// for (let i = 0; i < readFiles.length; i++) {
//     let data = fs.writeFileSync(pathJoin,""+readFiles[i]);
//     console.log(data);
// }
// console.log(data);
