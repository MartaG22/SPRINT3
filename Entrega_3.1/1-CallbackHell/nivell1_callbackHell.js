// https://www.freecodecamp.org/espanol/news/tutorial-async-await-de-javascript-aprende-callbacks-promesas-y-async-await-en-js-haciendo-helados/
// https://www.youtube.com/watch?v=WYVOvwTZ7Bo
//! resolver callback hell escribir texto al reves
// https://www.youtube.com/watch?v=IJNaoJokDco  BIEN EXPLICADO - CALLBACKS y ASYNAWAIT
// https://www.youtube.com/watch?v=EVQR8TjjAWA  BIEN EXPLICADO - PROMESAS

// https://www.youtube.com/watch?v=rKK1q7nFt7M  ASYNCAWAIT
// https://lenguajejs.com/javascript/asincronia/promesas/
// https://www.freecodecamp.org/espanol/news/promesas-en-javascript-es6/ ***********************************

// https://www.tabnine.com/code/javascript/functions/fs/promises

const {
  readdir,
  readFile,
  writeFile
} = require("fs").promises;

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


//mi código: ***********************************


readdir(inbox)
  .then(files => files.forEach(file => {
    readFile(join(inbox, file), "utf8")
      .catch(() => console.log("Error: File error"))
      .then(data => writeFile(join(outbox, file), reverseText(data)))
      .catch(() => console.log("Error: File could not be saved!"))
      .then(() => console.log(`${file} was successfully saved in the outbox!`));

    // if (error) return console.log("Error: Folder inaccessible");

  })).catch(() => console.log("Error: Folder inaccessible"));

