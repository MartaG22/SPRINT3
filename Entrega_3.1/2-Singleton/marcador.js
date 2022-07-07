// youtube.com/watch?v=Z7Z-PJEIEs  singletton




const {
    readdir,
    readFile,
    writeFile
} = require("fs");
const {
    join
} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
    str
        .split("")
        .reverse()
        .join("");

// Read and reverse contents of text files in a directory

readdir(inbox) // (error, files) => {
    .then((files) => files.forEach(file => {
    readFile(join(inbox, file), "utf8")  //, (error, data) => {
        .catch(() => console.log("Error: File error"))
        .then(data => writeFile(join(outbox, file), reverseText(data)))
        .catch(() => console.log("Error: File could not be saved!"))
        .then(() => console.log(`${file} was successfully saved in the outbox!`))
    // if (error) return console.log("Error: Folder inaccessible");
}).catch (() => console.log("Error: Folder inaccessible"));



// files.forEach(file => {
// });



// readFile(join(inbox, file), "utf8", (error, data) => {
//     if (error) return console.log("Error: File error");
// });


// writeFile(join(outbox, file), reverseText(data), error => {
//     if (error) return console.log("Error: File could not be saved!");
//     console.log(`${file} was successfully saved in the outbox!`);
// });
