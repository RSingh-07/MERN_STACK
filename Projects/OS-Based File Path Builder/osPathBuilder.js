const os = require('os');
const path = require('path');

//STEP:1 Detect current platform
// process.platform gives the OS platform:
// 'win32' for Windows
// 'linux' for Linux
// 'darwin' for macOS
const curr_Platform = process.platform;

console.log("Current OS Platform: ", curr_Platform);

//STEP:2 Choose path module accordingly
let platformPath;
if(curr_Platform == 'win32'){
    //Windows path style (\)
    platformPath = path.win32;
    console.log("Using Windows-style paths");
}else{
     platformPath = path.posix;
    console.log("Using POSIX (Linus/macOS) style paths"); //(/)
}

//STEP:3 Create platform-specific path
// These are sample folder and file names to demonstrate how paths are built:
const folderName = 'projects';
const subFolder = 'chatApp';
const fileName = 'server.js';

const relativePath = platformPath.join(folderName, subFolder, fileName);  //join() joins paths using the correct slash:
console.log("Relative Path:", relativePath);

//STEP:4 Make it absolute using path.resolve
const absolutePath = path.resolve(relativePath);  //path.resolve() makes an absolute path from the relative one, based on the current working directory.
console.log("Absolute Path:", absolutePath);