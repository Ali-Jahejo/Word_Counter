#! /usr/bin/env node

import inquirer from "inquirer"

const answers : {
    Sentances : string
} = await inquirer.prompt([
    {
        name: "Sentances",
        type: "input",
        message: "Enter your paraghraph to count the total words in it: ",

    }
]);

const words = answers.Sentances.trim().split(" ");

console.log("\n", words, "\n" );

console.log(`The word count in your paraghraph is "${words.length}" words`);