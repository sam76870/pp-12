// // for working with files we have to install require model by npm i require
let fs = require("fs");
// // readFileSync for reading the content of files
// let content = fs.readFileSync("f1.txt");
// // , ->in buffer there will be value of any kind like video audio etc.  
// console.log("Content: ",content);
// // + -> concatinate string to text
// console.log("contnent :"+content);

// // fs.writeFileSync create files if it will not exist if it will it override
// fs.writeFileSync("abc.txt","This is the file which create auto");
// // fs.appendFileSync for update exisiting files
// fs.appendFileSync("abc.txt","this is tthe updated content");
// fs.unlinkSync("abc.txt")
// console.log("file removed");

// * ****************************** directory **************
// create
// fs.mkdirSync("myDir");
// delete
// fs.rmdirSync("myDir");
// path -> check does ot exist or not
let doesExist= fs.existsSync("fs1.js");
// path -> belongs to directory or a file
console.log("Path exist ? :",doesExist);
let stateOfPath = fs.lstatSync("dir1");
console.log("states : ", stateOfPath);
console.log("isFile : ", stateOfPath.isFile());
console.log("isFile : ", stateOfPath.isDirectory());

