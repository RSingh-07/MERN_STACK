//Module wrapper function

// simple object that holds user info
riya = {
    name: "Riya",
    favNum: 7,
    developer: true
}

//Exporting the object so other files can use it
module.exports = riya;


// Module wrapper function - gives every file its own private scope
// (function (exports, require, module, __filename, __dirname) {
//   // Your code lives here
// });   -> automatcally done by nodejs

console.log(__filename); //full path of file
console.log(__dirname); //folder where file is located
