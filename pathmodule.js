const path = require('path');

const a1 = path.basename('C:\\temp\\myfile.html');
// Returns: myfile.html
const a2 = path.dirname('C:\\temp\\myfile.html');
// Returns: C:\temp
const a3 = path.extname('readme.md');
// Returns: .md

console.log(a1);
console.log(a2);
console.log(a3);



