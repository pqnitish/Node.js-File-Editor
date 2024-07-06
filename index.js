const path = require("path");
const fs = require("fs");
const { log } = require("console");
const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];
function readFile(filePath) {
  fs.readFile(filePath, "utf8", (error, data) => {
    if (error) {
      console.log(`error in reading file ${filePath}:${error.message}`);
    }
    console.log(data);
  });
}
function deleteFile(filePath){
    fs.unlink(filePath,(err)=>{
        console.log(err);
    })
   return  console.log(`${filePath} is deleted`);
}
function createFile(filePath){
    fs.writeFile(filePath,'',(err)=>{
        if(err){
            return console.log(`error in creating ${filePath}`,err.message);
        }
        console.log(`file ${filePath} created`);
    })
}
function appendFile(filePath){
    fs.appendFile(filePath,`\n${content}`,(err)=>{
        if(err){
            console.log(`error in appending ${filePath}`,err.message);
        }
        console.log(`content appended to file ${filePath}`);
    })
}
function renameFile(oldPath,newPath){
    fs.rename(oldPath,newPath,(err)=>{
        if(err){
            console.log(`error in renaming ${oldPath} to ${newPath}`);
        }
        console.log(`file ${oldPath}  renamed to ${newPath}` );
    })
}
function listDirectory(dirPath) {
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        return console.log(`Error listing directory '${dirPath}':`, err.message);
      }
      files.forEach(file => {
        console.log(file);
      });
    });
  }
  switch (operation) {
    case 'read':
      readFile(file);
      break;
    case 'delete':
      deleteFile(file);
      break;
    case 'create':
      createFile(file);
      break;
    case 'append':
      appendFile(file, content);
      break;
    case 'rename':
      renameFile(file, content);
      break;
    case 'list':
      listDirectory(file);
      break;
    default:
      console.log(`Invalid operation '${operation}'`);
  }
  