const fs= require("fs");
const path = require ("path");
const filePath = path.resolve("welcome.txt")
fs.writeFile(filePath, "Hello Node", (err)=> {
    if (err) throw err;
    console.log("file has been created successfuly")
});

fs.readFile(filePath,{encoding:"utf-8"},(err,data) =>
{
    if (err) throw err;
    console.log(data)
});