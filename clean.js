const fs = require("fs");
const path = require("path");

const directoriesToDelete = ["node_modules", "build", "dist"];

function deleteDirectoryRecursively(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const curPath = path.join(dirPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteDirectoryRecursively(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dirPath);
  }
}

function findAndDeleteDirectories(rootDir) {
  fs.readdirSync(rootDir).forEach((file) => {
    const curPath = path.join(rootDir, file);
    if (fs.lstatSync(curPath).isDirectory()) {
      if (directoriesToDelete.includes(file)) {
        deleteDirectoryRecursively(curPath);
      } else {
        findAndDeleteDirectories(curPath);
      }
    }
  });
}

const rootDirectory = process.argv[2] || __dirname;

if (!fs.existsSync(rootDirectory)) {
  console.error(`Directory does not exist: ${rootDirectory}`);
  process.exit(1);
}

console.log(`Cleaning directories in: ${rootDirectory}`);
findAndDeleteDirectories(rootDirectory);
console.log("Cleanup complete!");
