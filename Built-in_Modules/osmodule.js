const os = require('os');  //No use of ./ because os is a built in module whereas second.js was in file system

console.log("============== MEMORY INFO ================\n");
console.log("Total Memory: ", (os.totalmem() / (1024**3)).toFixed(2), "GB");
console.log(`Free Memory: ${(os.freemem() / (1024**3)).toFixed(2)} GB`); //returns available free memory in bytes
console.log("============== SYSTEM INFO ================\n");
console.log("Hostname: ",os.hostname());//returns host name of os as a string 
console.log("Architecture: ",os.arch());
console.log("Platform: ",os.platform());
console.log("OS Type: ",os.type());
console.log("Release: ",os.release());
console.log("Uptime (minutes): ",(os.uptime()/60).toFixed(2));

console.log("============== FILE SYSTEM PATHS ================\n");
console.log("Home directory: ",os.homedir());  //returns string path of current users's home dir
console.log("Temp Directory: ",os.tmpdir());
console.log("============== USER INFO ================\n");
console.log("",os.userInfo());
console.log("============== CPU INFO ================\n");
console.log("CPU Cores:",os.cpus().length);
console.log(os.cpus());
console.log("============== NETWORK INFO ================\n");
console.log(os.networkInterfaces());
console.log("============== BYTE ORDER ================\n");
// console.log("Endianness",os.endianness());
// console.log("============== CONSTANTS ================");
// console.log("Constants: ",os.constants);



// In JavaScript, template literals (used to insert variables in strings) must use backticks
// ${...} only works inside backticks (` `)


