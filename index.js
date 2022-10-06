// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// const questions = [
inquirer
    .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your application?'
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install your application?'
    },
    {
        type: 'input',
        name: 'use',
        message: 'How do you use your application?'
    }, {
        type: 'input',
        name: 'contributers',
        message: 'Who contributed to this application?'
    }, {
        type: 'input',
        name: 'test',
        message: 'How do you test your application?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you want to use for your application?',
        choices: ['MIT', 'Apache', 'ISC', 'GNUPLv3', 'BSD'],
        filter(val) {
            returnval.toLowerCase
        }
    },
])

// TODO: Create a function to write README file
.then((answers) => {
    const fileName = `${answers.title.toLowerCase().split(' ').join('')}.JSON`;

    fs.writeFile(fileName, JSON.stringify(answers, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
    );
});

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(
        questions
    )
        .then((answers) => {
            console.log(answers)
            return answers
        })
        .catch((error) => {
            console.log(error)
        })
};

// Function call to initialize app
init();

// writeToFile
