let treeObj = require("./command/tree");
let organizeObj = require("./command/organize");
let helpObj = require("./command/help");
let inputArr = process.argv.slice(2);
let cmd = inputArr[0];
switch (cmd) {
    case 'help':
        helpObj.helperFun();
        break;
    case 'tree':
        treeObj.treeFun(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeFun(inputArr[1]);
        break;
        default:
            console.log("Wrong command Entered");

}