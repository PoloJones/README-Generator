const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./generateREADME/generateMarkdown")

const init = () => {
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the Title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: "Describe your project:",
            name: 'description',
        },
        {
            type: 'input',
            message: 'What is the installation process for this project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'How would you use this project?',
            name: 'use',
        },
        {
            type: "list",
            message: "Choose a license",
            name: "license",
            choices: [
               {
                name: "Apache 2.0 License",
                value: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
            },
            {
                name: "BSD 3-Clause License",
                value: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
            },
            {
                name: "GNU GPL v3",
                value: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
            },
            {
                name: "ISC License (ISC)",
                value: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
            },
            {
                name: "The MIT License",
                value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
            },
            {
                name: "The Unilicense",
                value: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
            },
            ],
        },
    ])

    .then((answers) => {
        const readMeContent = generateMarkdown(answers);

        fs.writeFile('README.md', readMeContent, (err) =>
        err ? console.log(err) : console.log("It worked!")
        );
    });
}
init();
