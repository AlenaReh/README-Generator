// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require ('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'What is your LinkedIn username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?"
        //validation
        // validate: (value) => {if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide the description for your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does user need to know about using this project?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?',
        default: ('npm i')
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: ('npm test')
    },
    {
        type: 'input',
        name: 'credit',
        message: 'What does the user need to know about credits of the repo?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("Success! Your README file has been generated");
    })
}

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to the Readme generator");
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile('README.md', generateMarkdown(data));
            // console.log(data)
        })
}

// Function call to initialize app
init();
