// Command-line tool to generate Markov test.

const fs = require("fs");
const markov = require("./markov")
const axios = require("axios");
const process = require("process");

// Make Markov machine from text and generate text from it

function generateText(text) {
    let mm = new markov.MarkovMachine(text);
    console.log(mm.makeText());
}

// read file and generate text from it
function makeText(path) {
    fs.readFile(path, "utf8", function cb(err, data) {
        if (err) {
            console.error(`Cannot read file: ${path}: ${err}`);
            process.exit(1);
        } else {
            generateText(data);
        }
    });
}

// read url and make text from it
async function makeText(url) {
    let resp;

    try {
        resp = await axios.get(url);
    } catch (er) {
        console.error(`Cannot read URL: ${url}: ${err}`);
        process.exit(1);
    }
    generateText(resp.data)
}

// interpret cmdline to decide what to do.
let [method, path] = process.argv.slice(2);

if (method === "file") {
    makeText(path);
}

else if (method === "url") {
    makeText(path);
}

else {
    console.error(`Unknown method: ${method}`);
    process.exit(1);
}