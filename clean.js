/**
 * This script just cleans the heavy files from the react projects in this folder
 *
 * It will go to each folder and delete the node_modules and build folders & the lock files
 */

const fs = require("fs");
const path = require("path");

const folders = fs.readdirSync(__dirname);

folders.forEach((folder) => {
  const folderPath = path.join(__dirname, folder);
  if (fs.lstatSync(folderPath).isDirectory()) {
    console.log(`Cleaning ${folder}`);
    const nodeModulesPath = path.join(folderPath, "node_modules");
    if (fs.existsSync(nodeModulesPath)) {
      fs.rm(nodeModulesPath, { recursive: true });
    }
    const buildPath = path.join(folderPath, "build");
    if (fs.existsSync(buildPath)) {
      fs.rm(buildPath, { recursive: true });
    }
    const lockFiles = fs.readdirSync(folderPath).filter((file) => file.endsWith(".lock"));
    lockFiles.forEach((lockFile) => {
      fs.unlinkSync(path.join(folderPath, lockFile));
    });
  }
});

console.log("Cleaned all the folders");
