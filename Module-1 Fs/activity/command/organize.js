let fs = require("fs");
let path = require("path");
let types = {
    media: ["mp4", "mkv", "mp3","jpg","gif","mkv","jpeg","png"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

function copyToDest(srcPath, destFolderPath) {
    let orginalName = path.basename(srcPath);
    let destFilePath = path.join(destFolderPath, orginalName)
    fs.copyFileSync(srcPath, destFilePath);
}
function isFileorNot(srcPath) {
    // check extension
    return fs.lstatSync(srcPath).isFile();
}
function getContent(srcPath) {
    // content
    return fs.readdirSync(srcPath);
}
function getFolderName(srcPath) {
    // let ext = path.extname(srcPath);
    let strArr = srcPath.split(".");
    let ext = strArr.pop();
    for (key in types) {
        for (let i = 0; i < types[key].length; i++) {
            if (types[key][i] == ext) {
                return key;
            }
        }
    }
    return "others";
}
function pathCreater(srcPath) {
    if (fs.existsSync(srcPath) == false) {
        fs.mkdirSync(srcPath);
    }
}
function organizeFiles(srcPath, organizedFilesPath) {
    let isFile = isFileorNot(srcPath);
    if (isFile == true) {
        let destFolderName = (getFolderName(srcPath));
        console.log(srcPath, "-->", destFolderName);
        let destFolderPath = path.join(organizedFilesPath, destFolderName);
        copyToDest(srcPath, destFolderPath);
    } else {
        let content = getContent(srcPath);
        for (let index = 0; index < content.length; index++) {
            let childPath = path.join(srcPath, content[index]);
            organizeFiles(childPath, organizedFilesPath);
        }
    }
}
function organizeFn(toOrganizeDirPath) {
    let organizedFilesPath = path.join(toOrganizeDirPath, "organize Files")
    pathCreater(organizedFilesPath);
    for (let key in types) {
        let innerDirPath = path.join(organizedFilesPath, key);
        pathCreater(innerDirPath);
    }
    let otherPath = path.join(organizedFilesPath, "others");
    pathCreater(otherPath);
    organizeFiles(toOrganizeDirPath, organizedFilesPath);

}
module.exports = {
    organizeFun: organizeFn
}